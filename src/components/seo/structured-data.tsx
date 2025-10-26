import { BlogPost } from '@/lib/blog/types';

interface BlogPostingSchemaProps {
  post: BlogPost;
  url: string;
  imageUrl: string;
}

export function BlogPostingSchema({ post, url, imageUrl }: BlogPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.fr,
    alternativeHeadline: post.excerpt.fr,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://vb.tfq.one',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vibe Coding Paris',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vb.tfq.one/backgrounds/paris-hero.gif',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    description: post.excerpt.fr,
    keywords: [...post.tags, 'vibe coding', 'claude code', 'product builder', 'context engineering'].join(', '),
    articleSection: post.tags[0] || 'Tech',
    wordCount: post.content.fr.split(/\s+/).length,
    timeRequired: `PT${post.readTime}M`,
    inLanguage: 'fr-FR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vibe Coding Paris',
    alternateName: 'Vibe Coding',
    url: 'https://vb.tfq.one',
    logo: 'https://vb.tfq.one/backgrounds/paris-hero.gif',
    description: 'Un atelier intensif et accessible sur vb.tfq.one où l\'on apprend le Vibe Coding avec Claude Code. Product building, context engineering et développement assisté par IA.',
    sameAs: [
      'https://twitter.com/vibecoding',
      'https://www.linkedin.com/company/vibe-coding-paris',
      'https://github.com/tewfiq',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['French', 'English'],
    },
    areaServed: 'FR',
    founder: {
      '@type': 'Person',
      name: 'Tewfiq Ziouche',
    },
    keywords: 'vibe coding, vibe coding paris, vb.tfq.one, vb tfq one, claude code, product builder, context engineering, formation développement, IA',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vibe Coding Paris',
    url: 'https://vb.tfq.one',
    description: 'Maîtrisez le Vibe Coding avec Claude Code sur vb.tfq.one. Formation au product building, context engineering et développement assisté par IA.',
    publisher: {
      '@type': 'Organization',
      name: 'Vibe Coding Paris',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vb.tfq.one/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'fr-FR',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
