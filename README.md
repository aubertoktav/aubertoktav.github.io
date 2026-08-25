# aubertoktav.github.io

Personal site / portfolio for Aubert Oktaviantono, built with [Astro](https://astro.build).

This is a rebuild in progress on the `astro-rebuild` branch. The live site on
`main` (an HTML5 UP "Aerial" template) stays untouched until this is ready to
ship.

## Structure

- `src/pages/` — routes (`/`, `/resume/`, `/projects/`)
- `src/content/projects/` — markdown content collection: every project,
  learning note, or personal post is one `.md` file with frontmatter
  (`title`, `date`, `tags`, `cover`, `summary`). Tags differentiate work vs.
  learning vs. personal posts instead of separate collections/pages.
- `src/content.config.ts` — schema for the `projects` collection
- `src/layouts/` — shared page shell
- `src/components/` — nav, footer, and other shared UI

## Commands

| Command           | Action                                    |
| ------------------ | ------------------------------------------ |
| `npm install`      | Install dependencies                       |
| `npm run dev`      | Start local dev server at `localhost:4321` |
| `npm run build`    | Build production site to `./dist/`         |
| `npm run preview`  | Preview the production build locally       |
