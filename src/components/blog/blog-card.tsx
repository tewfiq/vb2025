'use client';

import { BlogPost } from '@/lib/blog/types';
import { formatDate } from '@/lib/blog/utils';
import { useTranslation } from '@/hooks/use-translation';
import { useLanguage } from '@/components/language-provider';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const t = useTranslation();
  const { language } = useLanguage();

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title[language]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date, language)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min</span>
            </div>
          </div>

          <h3 className="font-headline text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {post.title[language]}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt[language]}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
