"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedTilesProps {
  imageUrl: string
  tileSize?: number
  backgroundColor?: string
  className?: string
}

export function AnimatedTiles({
  imageUrl,
  tileSize = 60,
  backgroundColor = "transparent",
  className = "",
}: AnimatedTilesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const tilesRef = useRef<HTMLDivElement>(null)
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null)

  // Load image to get natural dimensions
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.src = imageUrl
  }, [imageUrl])

  // Generate dynamic opacity matrix based on grid size
  const generateOpacityMatrix = (rows: number, cols: number): number[][] => {
    const matrix: number[][] = []
    const centerRow = rows / 2
    const centerCol = cols / 2

    for (let row = 0; row < rows; row++) {
      matrix[row] = []
      for (let col = 0; col < cols; col++) {
        // Calculate distance from center (normalized)
        const distRow = Math.abs(row - centerRow) / centerRow
        const distCol = Math.abs(col - centerCol) / centerCol
        const distance = Math.sqrt(distRow * distRow + distCol * distCol)

        // Create a spotlight effect: center is bright, edges are dim
        // Using an inverse quadratic falloff for smooth transition
        const opacity = Math.max(0, Math.min(1, 1 - (distance * 0.7)))
        matrix[row][col] = opacity
      }
    }

    return matrix
  }

  useEffect(() => {
    if (!tilesRef.current || !containerRef.current || !imageDimensions) return

    const containerWidth = containerRef.current.offsetWidth
    if (containerWidth === 0) return

    // Calculate grid dimensions based on container width and image aspect ratio
    const aspectRatio = imageDimensions.height / imageDimensions.width
    const cols = Math.ceil(containerWidth / tileSize)
    const rows = Math.ceil(cols * aspectRatio)

    const totalWidth = cols * tileSize
    const totalHeight = rows * tileSize

    // Generate dynamic opacity matrix for this grid size
    const maxOpacities = generateOpacityMatrix(rows, cols)

    const tiles: HTMLDivElement[] = []
    tilesRef.current.innerHTML = ""

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const tile = document.createElement("div")
        tile.className = "tile"
        tile.style.width = `${tileSize}px`
        tile.style.height = `${tileSize}px`
        tile.style.backgroundImage = `url(${imageUrl})`
        tile.style.backgroundPosition = `${-col * tileSize}px ${-row * tileSize}px`
        tile.style.backgroundSize = `${totalWidth}px ${totalHeight}px`
        tile.style.float = "left"
        tile.style.boxSizing = "border-box"
        tiles.push(tile)
        tilesRef.current.appendChild(tile)
      }
    }

    const animationFrames: number[] = []
    const startTimes: number[] = []

    tiles.forEach((tile, i) => {
      const row = Math.floor(i / cols)
      const col = i % cols
      const variance = 0.3
      const maxOpacity = maxOpacities[row]?.[col] ?? 0.5
      const minOpacity = Math.max(0.1, maxOpacity - variance)
      const duration = Math.random() * 0.3 + 0.7 // 0.7 to 1 second

      startTimes[i] = Math.random() * duration
      let startTime: number | null = null

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const elapsed = (currentTime - startTime) / 1000
        const progress = (elapsed + startTimes[i]) % (duration * 2)
        const normalizedProgress = progress < duration ? progress / duration : (duration * 2 - progress) / duration

        const opacity = minOpacity + (maxOpacity - minOpacity) * normalizedProgress
        tile.style.opacity = Math.max(minOpacity, Math.min(maxOpacity, opacity)).toString()

        animationFrames[i] = requestAnimationFrame(animate)
      }

      animationFrames[i] = requestAnimationFrame(animate)
    })

    return () => {
      animationFrames.forEach((frameId) => cancelAnimationFrame(frameId))
    }
  }, [imageDimensions, imageUrl, tileSize])

  if (!imageDimensions) {
    // Show loading placeholder with same aspect ratio
    return (
      <div
        ref={containerRef}
        className={className}
        style={{
          backgroundColor,
          width: "100%",
          aspectRatio: "16/9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="animate-pulse bg-muted/20 w-full h-full" />
      </div>
    )
  }

  const aspectRatio = imageDimensions.height / imageDimensions.width

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        backgroundColor,
        width: "100%",
        aspectRatio: `${imageDimensions.width}/${imageDimensions.height}`,
        position: "relative",
      }}
    >
      <div
        ref={tilesRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          lineHeight: 0,
        }}
      />
    </div>
  )
}
