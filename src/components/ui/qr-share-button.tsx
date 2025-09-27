"use client"

import * as React from "react"
import QRCode from "react-qr-code"
import { Share, Copy, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface QrShareButtonProps {
  className?: string
  url?: string
}

export function QrShareButton({ className, url }: QrShareButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentUrl, setCurrentUrl] = React.useState("")
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    setCurrentUrl(url || window.location.href)
  }, [url])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy URL:", err)
    }
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          className
        )}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Partager avec QR code"
        >
          <Share className="h-6 w-6" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <DialogTitle>Partager cette page</DialogTitle>
            <DialogDescription>
              Scannez ce QR code pour accéder à cette page depuis votre téléphone
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-inner">
              <QRCode
                value={currentUrl}
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
              />
            </div>

            <div className="flex w-full items-center space-x-2">
              <div className="flex-1 truncate text-sm text-muted-foreground bg-muted px-3 py-2 rounded">
                {currentUrl}
              </div>
              <Button
                onClick={copyToClipboard}
                size="sm"
                variant="outline"
                className="flex-shrink-0"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="flex items-center space-x-1"
                    >
                      <Check className="h-4 w-4" />
                      <span>Copié</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="flex items-center space-x-1"
                    >
                      <Copy className="h-4 w-4" />
                      <span>Copier</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}