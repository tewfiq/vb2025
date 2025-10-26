/**
 * Giscus Configuration
 * GitHub Discussions-powered comment system
 *
 * Parameters from: https://giscus.app
 */

export const giscusConfig = {
  // Repository information
  repo: "tewfiq/vb2025",
  repoId: "R_kgDOPqanNg",

  // Discussion category
  category: "Announcements",
  categoryId: "DIC_kwDOPqanNs4CxFah",

  // Mapping strategy - maps each page to a discussion based on pathname
  mapping: "pathname" as const,

  // Features
  reactionsEnabled: true,
  emitMetadata: true,

  // UI configuration
  inputPosition: "bottom" as const,
  theme: "preferred_color_scheme" as const,

  // Strict mode
  strict: false,

  // Loading lazy
  loading: "lazy" as const,
};
