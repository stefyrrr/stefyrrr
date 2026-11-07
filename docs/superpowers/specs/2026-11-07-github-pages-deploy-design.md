# GitHub Pages deployment design

## Intent

Publish the Vite portfolio at `https://stefyrrr.github.io/` and update it automatically when `main` changes.

## Goals and non-goals

- Build the site with `npm ci` and `npm run build`, then publish the generated `dist/` directory.
- Allow a manual run from GitHub Actions for redeploys.
- Keep workflow permissions limited and avoid repository secrets.
- Do not add pull request previews, a custom domain, or a generated `gh-pages` branch.

## Approaches

- **GitHub Pages artifact workflow (chosen):** GitHub Actions builds the Vite app and deploys the artifact with GitHub's Pages actions. It fits the existing Vite build and avoids storing generated files in a branch.
- **Publish the source branch directly:** unsuitable because the repository contains Vite source that must be built before it can be served.
- **Commit `dist/` to a `gh-pages` branch:** works, but duplicates generated output in Git history and adds branch maintenance.

## Design

Add one workflow under `.github/workflows/` that runs on pushes to `main` and `workflow_dispatch`. The build job checks out the repository, sets up Node 24, runs `npm ci`, builds with Vite, configures Pages, and uploads `dist/`. A deploy job publishes that artifact to the `github-pages` environment with only the required Pages and OIDC permissions. Use the current stable major versions of GitHub's checkout, setup-node, configure-pages, upload-pages-artifact, and deploy-pages actions.

The repository name matches the account name, so it is a user site at the domain root; Vite's default `/` base path is appropriate. The workflow should expose the Pages URL as the deployment environment URL. Before the first run, the repository's Pages source must be set to GitHub Actions in **Settings → Pages**. `configure-pages` can enable Pages only with a token other than `GITHUB_TOKEN`; this design avoids a personal token or repository secret.

## Verification

Set the Pages publishing source in repository settings, validate the workflow syntax, run the production build, push the workflow, and confirm the first GitHub Actions deployment succeeds and publishes the site URL.
