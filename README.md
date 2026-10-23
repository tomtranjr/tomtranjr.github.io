# tomtranjr.github.io

Personal site for Tom Tran Jr. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # build to dist/
npm run preview    # serve the build locally
```

## Content

- Projects live in `src/content/projects/` as Markdown. The schema is in `src/content.config.ts`.
- Name, links, experience, and education live in `src/consts.ts`.
- The resume is `public/files/Resume_TomTranJr_display.pdf`. Overwrite that file to update it.

A push to `main` deploys the site through `.github/workflows/deploy.yml`.
