import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Entries live in src/content/lieux/<locale>/<slug>.md — the id therefore
// naturally reads as "<locale>/<slug>" (e.g. "en/pont-napoleon"), which is
// how pages filter by locale and quartier.
// NB: the frontmatter field below is named "code", not "slug" — Astro's glob
// loader special-cases a frontmatter field literally named `slug` and uses
// it as the entry id instead of the file path, which would break the
// locale/quartier parsing pages rely on.
// Semantic accent moods (see CLAUDE.md / mood-board reference): mystère/profondeur,
// mystique/magie, nature/croissance, fait/vérité. Used to tint fiche content blocks
// and, eventually, other quartiers' base ambiance.
const mood = z.enum(['sarcelle', 'violet', 'vert', 'beige']);

const lieux = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/lieux' }),
  schema: z.object({
    quartier: z.string(),
    // Reserved for a future QR-only/hidden copy of the site — not used for routing today.
    code: z.string(),
    pin: z.object({
      top: z.number(),
      left: z.number(),
    }),
    title: z.string(),
    kicker: z.string(),
    // Short 1-2 sentence blurb for the "all places" list and the teaser dialog.
    teaser: z.string(),
    photo: z.string(),
    caption: z.string(),
    // Falls back to the quartier's own accent when omitted.
    mood: mood.optional(),
  }),
});

const quartiers = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/quartiers' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    mapImage: z.string(),
    // Outer background gradient + accent for this quartier's page.
    themeFrom: z.string(),
    themeTo: z.string(),
    accent: mood,
  }),
});

// Singleton editorial pages (e.g. "how it works") — one markdown file per locale.
const pages = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { lieux, quartiers, pages };
