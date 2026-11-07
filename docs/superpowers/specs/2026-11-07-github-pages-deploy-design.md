# GitHub Pages deployment design

## Intent

Publish the Vite portfolio at `https://stefyrrr.github.io/stefyrrr/` and update it automatically when `main` changes, while keeping the existing repository name.

## Goals and non-goals

- Build the site with `npm ci`, pass GitHub Pages' base path to Vite, and publish the generated `dist/` directory.
- Build public asset URLs in React from `import.meta.env.BASE_URL` so images and the CV work below `/stefyrrr/`.
- Allow a manual run from GitHub Actions for redeploys.
- Keep workflow permissions limited and avoid repository secrets.
- Keep the repository name `stefyrrr`; do not add pull request previews, a custom domain, or a generated `gh-pages` branch.

## Approaches

- **GitHub Pages artifact workflow (chosen):** GitHub Actions builds the Vite app and deploys the artifact with GitHub's Pages actions. It fits the existing Vite build and avoids storing generated files in a branch.
- **Publish the source branch directly:** unsuitable because the repository contains Vite source that must be built before it can be served.
- **Commit `dist/` to a `gh-pages` branch:** works, but duplicates generated output in Git history and adds branch maintenance.
- **Rename the repository to `stefyrrr.github.io`:** would produce a root user site, but changes the repository name; keep the current repo and use its project-site path instead.

## Design

Add one workflow under `.github/workflows/` that runs on pushes to `main` and `workflow_dispatch`. The build job checks out the repository, sets up Node 24, runs `npm ci`, configures Pages, passes the action's `base_path` output to Vite's `--base` option, and uploads `dist/`. In React, public image and CV paths use `import.meta.env.BASE_URL`; Vite rewrites the entry HTML paths for the same base. A deploy job publishes that artifact to the `github-pages` environment with only the required Pages and OIDC permissions. Use the current stable major versions of GitHub's checkout, setup-node, configure-pages, upload-pages-artifact, and deploy-pages actions.

The repository name is `stefyrrr`, not `stefyrrr.github.io`, so this is a project site at `/stefyrrr/`. The workflow should expose the Pages URL as the deployment environment URL. Before the first run, the repository's Pages source must be set to GitHub Actions in **Settings → Pages**. `configure-pages` can enable Pages only with a token other than `GITHUB_TOKEN`; this design avoids a personal token or repository secret.

## Verification

Set the Pages publishing source in repository settings, validate the workflow syntax, build with `/stefyrrr/` as the base path, push the workflow and asset-path updates, and confirm the GitHub Actions deployment and project-site URL both serve the portfolio and its assets.
