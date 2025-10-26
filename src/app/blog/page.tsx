import { Metadata } from 'next';
import BlogHero from '@/components/blog/blog-hero';
import BlogCard from '@/components/blog/blog-card';
import { getAllPosts } from '@/lib/blog/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vb.tfq.one';

export const metadata: Metadata = {
  title: 'Blog - Vibe Coding Paris',
  description: 'Découvrez nos articles sur le développement web, les langages de programmation, et les conseils pour devenir développeur.',
  keywords: ['blog', 'développement web', 'programmation', 'code', 'IA', 'entrepreneuriat', 'Vibe Coding Paris'],
  openGraph: {
    title: 'Blog - Vibe Coding Paris',
    description: 'Découvrez nos articles sur le développement web, les langages de programmation, et les conseils pour devenir développeur.',
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
    title: 'Blog - Vibe Coding Paris',
    description: 'Découvrez nos articles sur le développement web, les langages de programmation, et les conseils pour devenir développeur.',
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
