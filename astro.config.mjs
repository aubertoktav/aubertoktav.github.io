import { defineConfig } from 'astro/config';

// aubertoktav.github.io is a *user* Pages site, so it's served from the
// domain root — no `base` path needed (that's only for project pages like
// username.github.io/repo-name).
export default defineConfig({
  site: 'https://aubertoktav.github.io',
});
