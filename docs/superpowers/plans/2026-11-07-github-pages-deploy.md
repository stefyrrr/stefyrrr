# GitHub Pages Project-Site Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Automatically build and publish the portfolio at `https://stefyrrr.github.io/stefyrrr/` while keeping the existing repository name.

**Architecture:** The Pages configuration action supplies the site base path before Vite builds. The workflow passes that path to Vite, and React builds public asset URLs from `import.meta.env.BASE_URL`; the workflow then uploads `dist/` and deploys it in a separate least-privilege job.

**Tech Stack:** GitHub Actions, Node.js 24, npm, Vite, GitHub Pages artifact actions.

**Spec:** `docs/superpowers/specs/2026-11-07-github-pages-deploy-design.md`

## Global Constraints

- Keep the repository name `stefyrrr` and publish at `https://stefyrrr.github.io/stefyrrr/`.
- Trigger on pushes to `main` and `workflow_dispatch`.
- Install with `npm ci`, build with `npm run build`, and publish only `dist/`.
- Pass `steps.pages.outputs.base_path` plus a trailing slash to Vite's `--base` option.
- Build public image and CV URLs in React from `import.meta.env.BASE_URL`.
- Pages source is already set to GitHub Actions; avoid personal access tokens and repository secrets.
- Use `actions/checkout@v6`, `actions/setup-node@v7`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v4`, and `actions/deploy-pages@v4`.
- Grant the deploy job only `pages: write` and `id-token: write`; the build job needs `contents: read`.

## Review Focus

- Node below the Vite engine floor makes `npm ci` or the build fail; pin Node 24 and verify the production build.
- An out-of-date lockfile makes `npm ci` fail; verify the workflow build completes from the committed lockfile.
- Missing or wrong artifact path publishes no entry page; require `dist/index.html` and upload `dist/`.
- A root-based asset URL breaks the project site; use `import.meta.env.BASE_URL` for every public React asset and verify the generated bundle paths.
- An empty or changed Pages base path can add a double slash or wrong repository prefix; build locally with `/stefyrrr/` and check the exact deployed URL and assets.

---

### Task 1: Fix project-site asset paths and the Pages build

**Files:**
- Modify: `src/App.jsx`
- Modify: `.github/workflows/deploy.yml`
- Reference: `package.json`, `package-lock.json`, `vite.config.js`
- Reference: `docs/superpowers/specs/2026-11-07-github-pages-deploy-design.md`

**Interfaces:**
- Consumes: GitHub Pages `base_path` from `actions/configure-pages@v5`, npm script `build`, and the committed lockfile.
- Produces: a Pages artifact from `dist/` with every HTML, CSS, JavaScript, image, and CV URL under the project-site base path.

- [x] **Step 1: Confirm the existing Vite build**

Run: `npm.cmd run build`
Expected: exit code 0 and `dist/index.html` exists.

- [x] **Step 2: Make public React assets base-aware**

In `src/App.jsx`, define one helper using the exact expression `import.meta.env.BASE_URL + path`. Use it for every public project image, PKKMB image, portrait source/srcSet, and the CV link. Keep external embed, report, and contact URLs unchanged.

- [x] **Step 3: Build with GitHub Pages' base path**

In `.github/workflows/deploy.yml`, move `actions/configure-pages@v5` before the Vite build and give it `id: pages`. Build with `npm run build -- --base="${{ steps.pages.outputs.base_path }}/"`; keep uploading `./dist` and deploying the artifact with the existing permissions.

- [x] **Step 4: Verify the nested production build**

Run: `npm.cmd run build -- --base=/stefyrrr/`
Expected: exit code 0; `dist/index.html` points at `/stefyrrr/assets/...`, the Vite-generated HTML uses `/stefyrrr/` for favicon and preload assets, and the generated JavaScript contains `/stefyrrr/` for every public image and CV URL.

- [x] **Step 5: Commit and push the corrected deployment**

Run: `git add src/App.jsx .github/workflows/deploy.yml docs/superpowers/specs/2026-11-07-github-pages-deploy-design.md docs/superpowers/plans/2026-11-07-github-pages-deploy.md`
Run: `git commit -m "Fix GitHub Pages project base paths"`
Run: `git push origin main`
Expected: the correction is pushed and triggers a new Actions run.

- [x] **Step 6: Verify the public project site**

Confirm the new build and deploy jobs succeed. Request `https://stefyrrr.github.io/stefyrrr/`, its generated JS/CSS, favicon, portrait, project images, and CV; expect HTTP 200 for each.
