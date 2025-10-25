import { Metadata } from 'next';
import BlogHero from '@/components/blog/blog-hero';
import BlogCard from '@/components/blog/blog-card';
import { getAllPosts } from '@/lib/blog/utils';

export const metadata: Metadata = {
  title: 'Blog - Vibe Coding Paris',
  description: 'Découvrez nos articles sur le développement web, les langages de programmation, et les conseils pour devenir développeur.',
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
