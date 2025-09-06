'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Music, Minimize2, Maximize2, Play, Pause, SkipForward } from 'lucide-react';

const tracks = [
  {
    id: 1,
    title: "Coding Flow",
    artist: "LoFi Beats",
    audio: "/audio/coding-flow.mp3" // Placeholder - you'll need actual audio files
  },
  {
    id: 2,
    title: "Digital Dreams",
    artist: "Synth Wave",
    audio: "/audio/digital-dreams.mp3"
  },
  {
    id: 3,
    title: "Algorithm",
    artist: "Tech House",
    audio: "/audio/algorithm.mp3"
  }
];

export default function FloatingAppleMusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const saved = localStorage.getItem('apple-music-player-state');
    if (saved) {
      const state = JSON.parse(saved);
      setIsOpen(state.isOpen);
      setIsMinimized(state.isMinimized);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('apple-music-player-state', JSON.stringify({ isOpen, isMinimized }));
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', nextTrack);
      return () => audioRef.current?.removeEventListener('ended', nextTrack);
    }
  }, [currentTrackIndex]);

  const togglePlayer = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      // Auto-start music when opening
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    } else {
      setIsOpen(false);
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={togglePlayer}
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <Music className="w-6 h-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <Card className="backdrop-blur-md bg-background/80 border border-border/50 shadow-2xl overflow-hidden">
        {isMinimized ? (
          <div className="p-3 flex items-center gap-3 min-w-[280px]">
            <div className="flex items-center gap-2 flex-1">
              <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <div className="flex flex-col">
                <span className="text-sm font-medium truncate">{currentTrack.title}</span>
                <span className="text-xs text-muted-foreground truncate">{currentTrack.artist}</span>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={togglePlayPause}
                className="h-8 w-8 p-0"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMinimize}
                className="h-8 w-8 p-0"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative w-[320px]">
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <h3 className="font-semibold text-sm">Now Playing</h3>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMinimize}
                  className="h-8 w-8 p-0"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-lg mb-1">{currentTrack.title}</h4>
                <p className="text-muted-foreground text-sm">{currentTrack.artist}</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={togglePlayPause}
                  className="h-12 w-12 rounded-full"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={nextTrack}
                  className="h-12 w-12 rounded-full"
                >
                  <SkipForward className="w-6 h-6" />
                </Button>
              </div>
            </div>
            <audio
              ref={audioRef}
              src={currentTrack.audio}
              preload="metadata"
            />
          </div>
        )}
      </Card>
    </div>
  );
}