'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Music, Minimize2, Maximize2 } from 'lucide-react';


export default function FloatingAppleMusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

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

  const togglePlayer = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    } else {
      setIsOpen(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
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
          <div className="p-4 flex items-center gap-3 min-w-[280px]">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Vibe Coding Paris</span>
            </div>
            <div className="flex gap-1">
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
          <div className="relative">
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-sm">Vibe Coding Paris</h3>
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
            <div className="relative">
              <iframe
                title="Vibe Coding Paris – Apple Music"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/fr/playlist/vibe-coding-paris/pl.u-b3b8aYNIylP0pZ?autoplay=1"
                className="w-full h-[175px] md:w-[350px] border-0"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}