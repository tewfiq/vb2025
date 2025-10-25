import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostComponent from '@/components/blog/blog-post';
import { getAllPosts, getPostBySlug } from '@/lib/blog/utils';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article non trouvé - Vibe Coding Paris',
    };
  }

  return {
    title: `${post.title.fr} - Blog Vibe Coding Paris`,
    description: post.excerpt.fr,
    openGraph: {
      title: post.title.fr,
      description: post.excerpt.fr,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BlogPostComponent post={post} />
    </main>
  );
}
