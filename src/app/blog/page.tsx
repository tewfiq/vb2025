import { Metadata } from 'next';
import BlogHero from '@/components/blog/blog-hero';
import BlogCard from '@/components/blog/blog-card';
import { getAllPosts } from '@/lib/blog/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vb.tfq.one';

export const metadata: Metadata = {
  title: 'Blog - Vibe Coding Paris 🚀 | Claude Code, Product Builder & Context Engineering',
  description: 'Maîtrisez le Vibe Coding avec Claude Code ! Découvrez nos guides sur le product building, le context engineering, les agents IA et l\'entrepreneuriat tech. Apprenez à coder avec l\'IA comme copilote.',
  keywords: ['vibe coding', 'vibe coding paris', 'vb.tfq.one', 'vb tfq one', 'claude code', 'product builder', 'context engineering', 'blog', 'développement web', 'programmation', 'code', 'IA', 'claude ai', 'agents ia', 'entrepreneuriat', 'Vibe Coding Paris'],
  openGraph: {
    title: 'Blog - Vibe Coding Paris 🚀 | Claude Code & Product Builder',
    description: 'Maîtrisez le Vibe Coding avec Claude Code ! Guides sur le product building, context engineering et agents IA.',
    url: `${siteUrl}/blog`,
    siteName: 'Vibe Coding Paris',
    images: [
      {
        url: `${siteUrl}/backgrounds/paris-hero.gif`,
        width: 1200,
        height: 630,
        alt: 'Blog Vibe Coding Paris',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Vibe Coding Paris 🚀 | Claude Code & Product Builder',
    description: 'Maîtrisez le Vibe Coding avec Claude Code ! Guides sur le product building, context engineering et agents IA.',
    images: [`${siteUrl}/backgrounds/paris-hero.gif`],
    creator: '@vibecoding',
    site: '@vibecoding',
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <BlogHero />

      <section className="py-16">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucun article disponible pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
