import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostComponent from '@/components/blog/blog-post';
import { getAllPosts, getPostBySlug } from '@/lib/blog/utils';
import { BlogPostingSchema, BreadcrumbSchema } from '@/components/seo/structured-data';

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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vb.tfq.one';
  const articleUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = `${siteUrl}${post.image}`;

  return {
    title: `${post.title.fr} - Blog Vibe Coding Paris 🚀`,
    description: post.excerpt.fr,
    keywords: [...post.tags, 'vibe coding', 'vibe coding paris', 'claude code', 'product builder', 'context engineering', 'Vibe Coding Paris', 'blog', 'développement', 'code', 'claude ai', 'agents ia'],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title.fr,
      description: post.excerpt.fr,
      url: articleUrl,
      siteName: 'Vibe Coding Paris',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title.fr,
        },
      ],
      locale: 'fr_FR',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.fr,
      description: post.excerpt.fr,
      images: [imageUrl],
      creator: '@vibecoding',
      site: '@vibecoding',
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vb.tfq.one';
  const articleUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = `${siteUrl}${post.image}`;

  const breadcrumbItems = [
    { name: 'Accueil', url: siteUrl },
    { name: 'Blog', url: `${siteUrl}/blog` },
    { name: post.title.fr, url: articleUrl },
  ];

  return (
    <>
      <BlogPostingSchema post={post} url={articleUrl} imageUrl={imageUrl} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <main>
        <BlogPostComponent post={post} />
      </main>
    </>
  );
}
