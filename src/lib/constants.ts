/**
 * Site configuration for phenokits-landing
 */

export const SITE_CONFIG = {
  repo: 'KooshaPari/PhenoKits',
  name: 'phenokits',
  slug: 'PhenoKits',
  url: 'https://phenokits.kooshapari.com',
  title: 'PhenoKits - Reusable Phenotype kit catalog',
  description: 'PhenoKits collects reusable templates, libraries, governance assets, and integration kits for the Phenotype engineering system.',
  primaryColor: '#10B981',
  accentColor: '#3B82F6',
  baseUrl: import.meta.env.BASE_URL || '/',
} as const;

export type SiteConfig = typeof SITE_CONFIG;
