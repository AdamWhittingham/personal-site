# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal site/blog for Adam Whittingham, built with plain Jekyll (no theme gem) and deployed to GitHub Pages at https://adam.whittingham.dev (see `CNAME`). There are no tests and no JS/CSS build step beyond Jekyll's own Sass compilation.

## Commands

```sh
make init          # asdf install (Ruby from .tool-versions) + bundle install
make dev           # serve at localhost:4000 with livereload and drafts, opens a browser
make build         # one-off build into _site/ — what CI runs
make lint-drafts   # vale over _drafts/ (prose linting)
```

Ruby is pinned to 3.4.10 in `.tool-versions`, matching `ruby-version: '3.4'` in the deploy workflow — keep the two in step. Jekyll 4.3 needs `base64`, `csv` and `logger` declared in the `Gemfile` because Ruby 3.4 unbundled them from the stdlib; dropping them breaks every command with `cannot load such file -- csv`.

Don't run `make build` while `make dev` is running — both write `_site/`, and the build (no `--drafts`) deletes the draft pages the server is serving until the next regeneration.

`make lint-drafts` uses `~/.adshell/vale/vale.ini` from the author's dotfiles (https://github.com/AdamWhittingham/adshell); it fails if that checkout isn't present.

Deployment is automatic: `.github/workflows/github-pages.yml` builds and publishes on every push to `main`. There is no staging environment, so verify locally with `make dev` before pushing.

## Content conventions

- Posts live in `_posts/YYYY-MM-DD-slug.md`, drafts in `_drafts/`. Published URLs are `/posts/<title>.html` (permalink set in `_config.yml`).
- `_config.yml` `defaults` assign layouts by path, so **don't put `layout:` in post front matter**. Post front matter is:
  ```yaml
  title: Post title
  description: "Longer text for meta description / SEO"
  home_summary: "One-line teaser shown in the index.md post list"
  ```
  `home_summary` is custom to this site and is the only thing rendered under the title on the home page — omitting it leaves a blank summary.
- `_layouts/post.html` renders only `{{ content }}` inside `<article>`; it does **not** emit a heading from `page.title`. Posts therefore open with their own `# H1` (and often an `## H2` subtitle) in the Markdown body, duplicating the front-matter title on purpose.
- The home page is `index.md` and is hand-written Liquid + inline SVG (project links, social icons), not generated.
- `_includes/anchor_headings.html` (allejo/jekyll-anchor-headings) is vendored but currently unused by any layout.

## Styling

- `assets/css/styles.scss` is an almost-empty entry point with front matter (required for Jekyll to process it) that `@use "main"`. `_sass/main.scss` is the manifest listing every partial — new partials must be added there to take effect.
- Theming is CSS custom properties in `_sass/_colors.scss`: dark values on `:root`, light overrides on `:root.light`. Every token must exist in both blocks or one theme inherits the other's value.
- The theme class lives on `<html>`, not `<body>`. `assets/js/main.js` is loaded synchronously in `<head>` so it can set that class before first paint (no flash); it reads `localStorage.preferredTheme`, falls back to `prefers-color-scheme`, follows OS changes until the user picks explicitly, and wires the `.theme-toggle` button in the header.
- Fonts (Space Grotesk for headings/UI, Newsreader for body) are loaded with `<link>` tags in `_layouts/default.html`, not `@import` in Sass, so they can preconnect. Add a new weight/axis there.
- Layout conventions: the `content` mixin in `_sass/_layout.scss` sets the single measure (`max-width`) shared by the header and the article body — change it in one place. `html { font-size }` in `_sass/typography.scss` is the root scale everything else sizes off in `rem`.
