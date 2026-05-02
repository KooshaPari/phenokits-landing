# phenokits-landing/src/lib

Shared utilities for the PhenoKits landing page.

## Overview

This library provides utilities for:

- **Site configuration**: Centralized site settings
- **GitHub API integration**: Fetch repository metadata, releases, and content
- **Path utilities**: Consistent site path generation

## Usage

```typescript
import {
  SITE_CONFIG,
  sitePath,
  gh,
  fetchRepoMeta,
  fetchReleases,
  type SiteConfig,
  type GhRepoMeta,
  type GhRelease,
} from './lib';

// Access site configuration
console.log(SITE_CONFIG.name); // 'phenokits'
console.log(SITE_CONFIG.url);   // 'https://phenokits.kooshapari.com'

// Generate site paths
const link = sitePath('/docs/getting-started');

// Fetch GitHub data
const meta = await fetchRepoMeta();
const releases = await fetchReleases(10);

// Direct API access
const content = await gh<GhContentEntry[]>('/repos/KooshaPari/PhenoKits/contents');
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GITHUB_TOKEN` | Optional GitHub personal access token for higher rate limits |
| `BASE_URL` | Base URL path (defaults to `/`) |

## Site Configuration

```typescript
interface SiteConfig {
  repo: 'KooshaPari/PhenoKits';
  name: 'phenokits';
  slug: 'PhenoKits';
  url: string;
  title: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  baseUrl: string;
}
```

## GitHub API Functions

| Function | Description |
|----------|-------------|
| `gh<T>(path, accept?)` | Generic GitHub API fetch with token handling |
| `fetchRepoMeta()` | Fetch repository metadata |
| `fetchReleases(perPage?)` | Fetch recent releases |
| `ghJson<T>(path)` | Fetch JSON from GitHub API |
| `ghRaw(path)` | Fetch raw file content |
| `ghHtml(path)` | Fetch HTML content |

## TypeScript Interfaces

### GhRepoMeta

```typescript
interface GhRepoMeta {
  description: string;
  stargazers_count: number;
  pushed_at: string;
  language: string | null;
  homepage: string;
  full_name: string;
  html_url: string;
}
```

### GhRelease

```typescript
interface GhRelease {
  id: number;
  tag_name: string;
  name: string | null;
  html_url: string;
  published_at: string;
  body?: string;
}
```

## Files

- `index.ts` - Barrel export
- `constants.ts` - Site configuration
- `site.ts` - Path utilities
- `github.ts` - GitHub API functions
- `types.ts` - TypeScript interfaces
