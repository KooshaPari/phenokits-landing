/**
 * Site path utilities adapter for phenokits-landing
 *
 * Imports from shared @kilocode/landing-utils and creates a bound sitePath
 * function using this site's configuration.
 */

import { createSitePath, type SitePathFunction } from '@kilocode/landing-utils';
import { SITE_CONFIG } from './constants';

/** Bound sitePath function for phenokits-landing */
export const sitePath = createSitePath(SITE_CONFIG);

/** Type for the sitePath function */
export type { SitePathFunction };
