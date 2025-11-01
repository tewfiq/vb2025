"use client";

import { useTranslation } from "@/hooks/use-translation";
import { getLatestPosts } from "@/lib/blog/utils";
import BlogCard from "./blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogLatest() {
  const t = useTranslation();
  const latestPosts = getLatestPosts(3);

  console.log(
    "BlogLatest - latestPosts:",
    latestPosts.length,
    latestPosts.map((p) => p.slug),
  );

  if (latestPosts.length === 0) {
    console.warn("BlogLatest - No posts found, returning null");
    return null;
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            {t.blog.latestArticles}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.blog.latestArticlesDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" className="group">
              {t.blog.viewAllArticles}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
