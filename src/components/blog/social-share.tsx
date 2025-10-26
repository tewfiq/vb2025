'use client';

import { Share2, Twitter, Linkedin, Facebook, Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          Partager
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => openShareWindow(shareUrls.twitter)}
          className="gap-2 cursor-pointer"
        >
          <Twitter className="h-4 w-4" />
          Twitter / X
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => openShareWindow(shareUrls.linkedin)}
          className="gap-2 cursor-pointer"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => openShareWindow(shareUrls.facebook)}
          className="gap-2 cursor-pointer"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={copyToClipboard}
          className="gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copié !
            </>
          ) : (
            <>
              <Link2 className="h-4 w-4" />
              Copier le lien
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
