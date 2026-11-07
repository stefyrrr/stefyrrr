# GitHub Pages Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Automatically build and publish the Vite portfolio to `https://stefyrrr.github.io/` from GitHub Actions.

**Architecture:** One workflow builds the Vite app on pushes to `main` and manual dispatches, uploads `dist/` as a Pages artifact, and deploys it in a separate least-privilege job. GitHub Pages must be configured to use GitHub Actions before the first deployment.

**Tech Stack:** GitHub Actions, Node.js 24, npm, Vite, GitHub Pages artifact actions.

**Spec:** `docs/superpowers/specs/2026-11-07-github-pages-deploy-design.md`

## Global Constraints

- Deploy to the root user site `https://stefyrrr.github.io/`; keep Vite's default `/` base path.
- Trigger on pushes to `main` and `workflow_dispatch`.
- Install with `npm ci`, build with `npm run build`, and publish only `dist/`.
- Avoid personal access tokens and repository secrets; set Pages source to GitHub Actions once in repository settings.
- Use `actions/checkout@v6`, `actions/setup-node@v7`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v4`, and `actions/deploy-pages@v4`.
- Grant the deploy job only `pages: write` and `id-token: write`; the build job needs `contents: read`.

## Review Focus

- Node below the Vite engine floor makes `npm ci` or the build fail; pin Node 24 and verify the production build.
- An out-of-date lockfile makes `npm ci` fail; verify the workflow build completes from the committed lockfile.
- Missing or wrong artifact path publishes no entry page; require `dist/index.html` and upload `dist/`.
- A subpath base breaks root-site asset URLs; confirm generated URLs keep the `/` base.
- Missing Pages source or deployment permissions blocks publishing; set the source to GitHub Actions and confirm the deployment job succeeds.

---

### Task 1: Add the GitHub Pages workflow

**Files:**
- Create: `.github/workflows/deploy.yml`
- Reference: `package.json`, `package-lock.json`, `vite.config.js`

**Interfaces:**
- Consumes: npm scripts `build` and the committed lockfile.
- Produces: a Pages artifact from `dist/` and a deployment URL from the `github-pages` environment.

- [x] **Step 1: Confirm the current production build**

Run: `npm.cmd run build`
Expected: exit code 0 and `dist/index.html` exists.

- [x] **Step 2: Create `.github/workflows/deploy.yml`**

Configure `push` for branch `main` and `workflow_dispatch`. The build job checks out the repository, sets up Node 24, runs `npm ci`, runs `npm run build`, configures Pages, and uploads the `dist/` directory. The deploy job depends on the build job, uses the `github-pages` environment with the deployment output URL, and runs `actions/deploy-pages@v4`. Give the build job `contents: read` and the deploy job only `pages: write` and `id-token: write`.

- [x] **Step 3: Review workflow structure and production output**

Run: `npm.cmd run build`
Expected: build succeeds; `dist/index.html` and root-relative asset paths exist. Review the workflow for the specified triggers, action versions, artifact path, job dependency, and permissions.

- [x] **Step 4: Set the GitHub Pages publishing source**

Open `https://github.com/stefyrrr/stefyrrr/settings/pages` and set **Build and deployment → Source** to **GitHub Actions**. Save the setting before the first workflow run.

- [ ] **Step 5: Commit and push the workflow**

Run: `git add .github/workflows/deploy.yml docs/superpowers/specs/2026-11-07-github-pages-deploy-design.md docs/superpowers/plans/2026-11-07-github-pages-deploy.md`
Run: `git commit -m "Add GitHub Pages deployment workflow"`
Run: `git push origin main`
Expected: workflow appears in the repository's Actions tab.

- [ ] **Step 6: Verify the first deployment**

Confirm the build and deploy jobs succeed and the environment output is `https://stefyrrr.github.io/`.
