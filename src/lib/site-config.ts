export const siteConfig = {
  name: 'Vibe Coding Paris',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vibecoding.paris',
  description: 'Un atelier intensif et accessible. Tu explores, tu structures, tu repars avec un projet en ligne. Une compétence exploitable, en seulement 2h.',
  ogImage: '/backgrounds/paris-hero.gif',
  links: {
    twitter: 'https://twitter.com/vibecoding',
    linkedin: 'https://www.linkedin.com/company/vibe-coding-paris',
    github: 'https://github.com/tewfiq',
  },
  social: {
    twitter: '@vibecoding',
  },
};

export type SiteConfig = typeof siteConfig;
