'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Music, Minimize2, Maximize2, Play, Pause, SkipBack, SkipForward, Shuffle, Cast, Share, MoreHorizontal } from 'lucide-react';


export default function FloatingAppleMusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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
      {isMinimized ? (
        <Card className="backdrop-blur-xl bg-white/20 border-0 shadow-2xl overflow-hidden w-[380px] rounded-3xl">
          {/* Now Playing Badge */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="bg-white/30 backdrop-blur-sm rounded-full px-3 py-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-medium">Now Playing</span>
              </div>
            </div>
          </div>

          <div className="px-4 pb-4">
            {/* Main Content */}
            <div className="flex gap-3 mb-3">
              {/* Album Art */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Music className="w-8 h-8 text-white" />
              </div>
              
              {/* Song Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm truncate">Vibe Coding</h4>
                <p className="text-white/70 text-xs truncate">Playlist Mix</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-white/70 hover:text-white">
                    <Share className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-white/70 hover:text-white">
                    <MoreHorizontal className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-white/70 mb-1">
                <span>1:23</span>
                <span>3:45</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1">
                <div className="bg-white h-1 rounded-full w-1/3"></div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/70 hover:text-white">
                <Shuffle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/70 hover:text-white">
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={togglePlayPause}
                className="h-10 w-10 p-0 bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/70 hover:text-white">
                <SkipForward className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/70 hover:text-white">
                <Cast className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Expand/Close buttons */}
          <div className="absolute top-2 right-2 flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMinimize}
              className="h-6 w-6 p-0 text-white/50 hover:text-white"
            >
              <Maximize2 className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-white/50 hover:text-white"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="backdrop-blur-md bg-background/80 border border-border/50 shadow-2xl overflow-hidden">
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
        </Card>
      )}
    </div>
  );
}