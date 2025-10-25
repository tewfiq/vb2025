'use client';

import { BlogPost } from '@/lib/blog/types';
import { formatDate } from '@/lib/blog/utils';
import { useTranslation } from '@/hooks/use-translation';
import { useLanguage } from '@/components/language-provider';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <article className="py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.blog.backToBlog}
            </Button>
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              {post.title[language]}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date, language)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} {t.blog.minRead}</span>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title[language]}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none mb-12
              prose-headings:font-headline prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
              prose-p:mb-4 prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:font-semibold prose-strong:text-foreground
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:my-2
              prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic"
            dangerouslySetInnerHTML={{
              __html: post.content[language].replace(/\n/g, '<br />')
            }}
          />

          {/* Back to blog */}
          <div className="pt-8 border-t">
            <Link href="/blog">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.blog.backToBlog}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
