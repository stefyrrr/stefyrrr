# Baby Red Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive Indonesian personal portfolio in React + Vite with a soft baby-red editorial visual style and restrained, accessible motion.

**Architecture:** A compact React app will render one page from small data arrays for skills and project cards. CSS will own the layout, palette, responsive behavior, hover states, and reduced-motion rules; a small IntersectionObserver effect will reveal sections without an animation dependency.

**Tech Stack:** React, Vite, JavaScript, CSS.

**Spec:** `docs/superpowers/specs/2026-11-02-portfolio-baby-red-design.md`

## Global Constraints

- Use React with Vite in the currently empty project directory.
- Keep all page copy in Indonesian and use clearly editable placeholder profile and project content.
- Use a pale blush/baby-red canvas, warm cream surfaces, dusty-red accents, and high-contrast dark warm text.
- Prefer CSS and browser APIs; do not add an animation library or remote asset dependency.
- Keep the page responsive and respect `prefers-reduced-motion`.
- Do not invent real credentials, metrics, work history, or project outcomes.

## Review Focus

- Narrow viewport navigation and project cards remain readable and usable — inspect at mobile width after the app is built.
- Reduced-motion preference does not hide content or preserve nonessential movement — inspect with the browser preference enabled.
- If IntersectionObserver is unavailable, all page content remains visible — check the fallback path.
- Placeholder project and contact links do not imply real user data — inspect all editable content before handoff.
- Anchor navigation, buttons, and links remain keyboard accessible with visible focus — tab through the page.

---

### Task 1: Create the React + Vite portfolio page

**Files:**
- Create: `.gitignore`
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles.css`

**Interfaces:**
- `src/main.jsx` imports `App` from `src/App.jsx`, imports `src/styles.css`, and mounts the React tree into `#root`.
- `vite.config.js` registers `@vitejs/plugin-react` with Vite for JSX and React Fast Refresh.
- `src/App.jsx` exports the default `App` component. The component owns the Indonesian placeholder content and renders semantic page sections with IDs `about`, `work`, and `contact`.
- The `projects` array in `src/App.jsx` contains three objects with `number`, `title`, `category`, `description`, `stack`, `linkLabel`, `palette`, `visual`, and `shape` fields. `skills` is an array of display strings. All values are editable placeholders; project URLs are not fabricated.
- `src/styles.css` provides global, component, responsive, focus, hover, reveal, and reduced-motion styles.

- [ ] **Step 1: Set up the Vite entry points**

Create `.gitignore` for `node_modules`, `dist`, and Vite's local cache. Create `package.json` with `dev`, `build`, and `preview` scripts; React 19.3.1, React DOM 19.3.1, Vite 8.3.5, and `@vitejs/plugin-react` 6.1.2 dependencies; and Node engine range `^20.19.0 || >=22.12.0`. Create `vite.config.js` to register the React plugin. Create `index.html` with Indonesian document language, responsive viewport metadata, a short portfolio page title, and the `#root` mount. Add `src/main.jsx` to mount `App` under `React.StrictMode`, import `src/styles.css`, and enable reveal styling only when `IntersectionObserver` is available and reduced motion is not requested.

- [ ] **Step 2: Implement the page structure and editable content in `src/App.jsx`**

Render a compact anchor navigation; hero with `[Nama Kamu]`, an editable creative/front-end role, short introductory copy, a work link, and a contact link; About section; skill labels; three data-driven project cards; and a contact footer. Keep every profile fact, project description, stack, email, and social destination visibly identifiable as a placeholder. Use CSS-built abstract decoration for the hero and project previews instead of stock images. Add semantic landmarks and descriptive link text.

- [ ] **Step 3: Implement the visual system in `src/styles.css`**

Set a pale blush canvas, cream surfaces, dusty red accents, and deep warm text. Establish a large expressive heading scale, generous section spacing, editorial project cards, decorative CSS details, responsive navigation/cards, visible `:focus-visible` styles, and subtle project hover/focus movement. Avoid large gradient fields, glass effects, and excessive decorative panels.

- [ ] **Step 4: Add restrained entrance motion and reduced-motion behavior**

Use an `IntersectionObserver` effect in `src/App.jsx` to add a reveal class when sections enter view. Initialize content visibly and retain a safe fallback if the API is unavailable. In CSS, animate only the hero entrance and one-time section reveal; disable transitions and reveal transforms under `prefers-reduced-motion: reduce`.

- [ ] **Step 5: Prepare the handoff**

Ensure `package.json` scripts match the Vite setup and leave profile, project, email, and social placeholders easy to locate and replace. Provide the user with the local command to start the page (`npm run dev`) and a concise list of the placeholder fields to personalize.
