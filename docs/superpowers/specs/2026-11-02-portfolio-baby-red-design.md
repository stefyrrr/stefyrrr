# Portfolio React + Vite — Design

## Intent

Create a polished, personal portfolio website in Indonesian. The user wants a baby-red color direction, engaging animation, and a finish that feels considered and human-made. The repository is currently empty. The requested reference URL could not be opened, so this design uses the user's stated preferences rather than details inferred from that site.

## Goals

- Build a responsive one-page portfolio that introduces the person, presents selected work and skills, and makes contact easy.
- Use a soft baby-red/blush base, balanced with warm light surfaces and deep red-brown text for comfortable reading.
- Give the page a distinctive editorial feel through typography, spacing, and project presentation.
- Add restrained motion for the hero, section entrances, and project hover states.
- Use clearly identifiable editable placeholders for personal facts and projects; do not imply unprovided credentials, metrics, or work history are real.
- Keep the page usable on mobile and honor reduced-motion preferences.

## Non-goals

- CMS, account system, backend, blog, or multi-page navigation.
- A working contact form or deployment to GitHub Pages.
- Real personal biography, project details, photographs, or social links before the user supplies them.

## Anti-goals

- Generic template-like copy, fabricated claims, or fake project outcomes.
- Constant motion, heavy parallax, cursor-following effects, or animation that delays reading.
- A page dominated by gradients, glass effects, or decorative cards without useful content.

## Constraints and assumptions

- Use React with Vite in the empty project directory.
- Keep the content in Indonesian and use replaceable placeholder content.
- Start from a pale blush/baby-red surface, with muted red accents and dark warm text; the red should be visible without reducing contrast.
- Prefer CSS animations and small browser APIs over adding an animation dependency. Use system font fallbacks and self-contained visual treatments so the page does not depend on remote assets.
- The exact reference page was not accessible during discovery.

## Approaches considered

1. **Editorial single-page portfolio — selected.** Large typographic hero, clear content sections, curated project cards, and subtle scroll/hover motion. This best balances the requested visual impact with readability, mobile behavior, and a personal feel.
2. **Fixed profile sidebar.** Identity and contact details remain beside the work. It suits a traditional résumé portfolio but gives project content less room on mobile.
3. **Highly interactive narrative.** More transitions and parallax create spectacle, but add distraction and make the page easier to mistake for a generic effects demo.

## Design and behavior

- A compact navigation bar links to About, Work, and Contact sections.
- The hero introduces `[Nama Kamu]` with an editable role line, short Indonesian introduction, primary “Lihat Karya” link, and secondary contact link. Pair the typography with a custom CSS-built visual accent rather than a stock image.
- The About section provides a short editable profile and a small set of skill labels.
- The Work section shows three editable project cards. Each card has a project name, category, short description, stack labels, and a link placeholder; all copy must be obviously replaceable and must not assert real user achievements.
- A concise contact section provides placeholder email and social links.
- Use soft blush/pink for the main canvas, warm cream for selected surfaces, dusty red for highlights, and deep burgundy/brown for text. Keep body text contrast strong.
- Animate hero details on load, reveal sections once as they enter view, and lift project cards slightly on hover/focus. Disable or reduce nonessential motion when `prefers-reduced-motion` is enabled.
- Provide keyboard-visible focus states, semantic landmarks, descriptive link labels, and responsive layouts.

## Decisions left to the builder

- Exact color values, type scale, and CSS layout details within the palette and editorial direction above.
- Whether to use a small `IntersectionObserver` hook or CSS-only entrance treatment, provided reduced-motion behavior is respected and content remains visible if JavaScript animation is unavailable.
- Component boundaries appropriate for a compact one-page portfolio; avoid unnecessary dependencies.
