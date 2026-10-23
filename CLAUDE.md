# CLAUDE.md

Personal site for Tom Tran Jr at https://tomtranjr.github.io. Astro static site, started from the official Astro blog starter, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.

## Commands

```bash
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview   # serve dist/
```

## Structure

- `src/consts.ts`: site data (name, description, links, experience, education, GA4 ID, resume URL). Header, Footer, and Home read from it.
- `src/content/projects/*.md`: one file per project. Schema in `src/content.config.ts` (`title`, `description`, `date`, `period`, `heroImage`, `heroAlt`, `links.repo|demo|paper`).
- `src/layouts/Base.astro`: page shell. `src/layouts/Project.astro`: project page.
- `src/components/ProjectList.astro`: year + title + description rows, used on Home and `/projects/`.
- `src/content/blog/*.md`: one file per blog post, served at `/blog/<file-name>/`. Schema in `src/content.config.ts` (`title`, `description`, `pubDate`, `updatedDate`, `heroImage`, `heroAlt`, `draft`). Same layout as the Astro blog starter: `src/layouts/BlogPost.astro`, `src/pages/blog/`, `src/components/FormattedDate.astro`.
- `src/utils/posts.ts`: `getPosts()` returns posts newest first. Drafts (`draft: true`) show in dev only.
- `src/components/PostList.astro`: date + title + description rows, used on Home (3 newest, hidden when there are none) and `/blog/`.
- `src/styles/global.css`: design tokens and base styles.

## Conventions

- Design is deliberately minimal: Source Serif 4 (self-hosted via the Astro fonts API), off-white `#FAFAF7`, ink `#1A1A1A`, one muted accent. Light and dark follow the system setting until the header toggle overrides it (saved in `localStorage` as `theme`, applied before paint in `BaseHead.astro`). No gradients, emoji, icon rows, card grids, or stock images.
- Resume path is fixed at `/files/Resume_TomTranJr_display.pdf`. Update by overwriting `public/files/Resume_TomTranJr_display.pdf`.
- Writing tone matches the LinkedIn profile: plain, short sentences, no em dashes. Do not add security clearance details or Arango customer details.
- The blog is for notes, thoughts, and shared resources. Plain Markdown posts, no tags, no RSS.
- GA4 loads only in production builds (`BaseHead.astro`).
