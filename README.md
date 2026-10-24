# Mitz Zyrelle M. Victorio — Developer Portfolio

A single-page personal developer portfolio built with **Vue 3** (Composition API,
`<script setup lang="ts">`), **TypeScript** (strict mode), **Tailwind CSS**, and **Vite**.

It features a glitching hero name, a command palette (Ctrl/Cmd+K), a terminal
easter egg, a live GitHub activity strip, hand-coded pixel-art mascots
(Rimuru & Stitch), light/dark themes, and full keyboard + reduced-motion support.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Type-check only
npm run type-check

# 4. Production build (type-checks, then builds to /dist)
npm run build

# 5. Preview the production build locally
npm run preview
```

Requires Node.js 18+.

---

## Project structure

```
.
├─ index.html                 # SEO/OG meta, fonts, anti-flash theme script
├─ vite.config.ts             # Vite config (base URL, @ alias)
├─ tailwind.config.ts         # Theme colors, fonts, custom keyframes
├─ postcss.config.js
├─ tsconfig.json / tsconfig.node.json
├─ public/
│  ├─ favicon.svg             # Pixel-slime favicon
│  ├─ README-resume.md        # How to add your resume
│  ├─ _redirects              # SPA fallback for Netlify
│  └─ resume.pdf              # (you add this — see "Add your resume")
└─ src/
   ├─ main.ts                 # App bootstrap
   ├─ App.vue                 # Layout + command dispatcher + global shortcuts
   ├─ style.css               # Tailwind layers + small component utilities
   ├─ types/portfolio.ts      # All TypeScript interfaces
   ├─ data/                   # ← EDIT YOUR CONTENT HERE
   │  ├─ portfolio.ts         # Identity, social links, GitHub username, status
   │  ├─ projects.ts          # Projects array
   │  ├─ skills.ts            # Skill categories
   │  ├─ achievements.ts      # Achievements + education
   │  ├─ sprites.ts           # Pixel-art mascot grids
   │  └─ commands.ts          # Command palette entries
   ├─ composables/            # useTheme, useCommandPalette, useTypedText,
   │                          # useGithubActivity, useReducedMotion, useScrollSpy
   ├─ lib/resume.ts           # Runtime resume-file detection
   └─ components/
      ├─ layout/              # Header, footer, background, palette, back-to-top
      ├─ hero/                # Glitch name, greeting, status widget, hero
      ├─ mascots/             # Sprite renderer, Rimuru, Stitch, spinner
      ├─ projects/            # Illustrations + details modal
      └─ sections/            # About, Skills, Projects, Achievements,
                              # Education, GitHub activity, Terminal, Contact
```

Every user-editable spot is marked with a visible `// ✏️ EDIT ME` comment.

---

## Editing your content

All content lives in `src/data/`. You do **not** need to touch components.

### Identity, links & GitHub username

Open **`src/data/portfolio.ts`**. It's one typed object:

- `name`, `title`, `headline`, `intro`, `handle`, `tagline`
- `location` and `locationBadge`
- `githubUsername` — drives the live GitHub activity strip
- `social` — array of `{ id, label, href, display }` for email / GitHub / LinkedIn / location
- `status` — the "Currently building / learning" hero card

### Add or edit a project

Open **`src/data/projects.ts`** and append an object to the `projects` array:

```ts
{
  id: 'my-new-project',
  title: 'My New Project',
  category: 'Web',                 // 'AI & Research' | 'Embedded Systems' | 'Web'
  overview: 'One-sentence summary shown on the card.',
  objectives: ['Goal one', 'Goal two'],
  tech: ['Vue', 'TypeScript'],
  illustration: 'generic',         // navicane | esp32-led | traffic-light | servo-gate | generic
  github: 'https://github.com/you/repo',
  demo: '',                        // empty string hides the live-demo link
  prototype: false,                // optional — shows a "prototype" badge
}
```

The filter chips, project modal, and command-palette "Open project" entries
update automatically.

To add a brand-new illustration, add a case to
`src/components/projects/ProjectIllustration.vue` and a matching key to the
`illustration` union in `src/types/portfolio.ts`.

### Skills

Edit **`src/data/skills.ts`**. Levels are intentionally qualitative:
`'Learning' | 'Comfortable' | 'Used in projects'` — no fake percentage bars.

### Achievements & education

Edit **`src/data/achievements.ts`**. Placeholder entries (`kind: 'placeholder'`)
render as dashed empty slots — replace them as you earn real achievements.

---

## Add your resume

The **Download Resume** button stays disabled until a real PDF exists, so it
never links to a 404.

1. Export your resume/CV as a PDF.
2. Name it exactly **`resume.pdf`**.
3. Drop it into the **`public/`** folder (served at `/resume.pdf`).

On load, the app does a lightweight `HEAD` request to confirm the file exists
(and is a PDF) before enabling the button. See `src/lib/resume.ts`.

---

## Editing or adding pixel sprites

Mascots are 2D color grids in **`src/data/sprites.ts`** — no image files.

- `palette` maps a single character to a color (`'.'` = transparent).
- `grid` is an array of rows; each row is a string of palette characters.
- Every row must be exactly `width` characters long, with `height` rows total.

```ts
export const mySprite: Sprite = {
  name: 'Blob',
  width: 4,
  height: 4,
  palette: { '.': 'transparent', b: '#5ad1e6' },
  grid: ['.bb.', 'bbbb', 'bbbb', '.bb.'],
}
```

`SpriteRenderer.vue` draws one `<rect>` per non-transparent cell and scales
crisply. Secondary mascot palette: slime teal `#5ad1e6`, Stitch blue `#4a7fd4`,
soft pink `#f4a6c0`.

---

## Standout features

| Feature | Where |
| --- | --- |
| Command palette (Ctrl/Cmd+K) | `composables/useCommandPalette.ts`, `layout/CommandPalette.vue` |
| Terminal easter egg (`help`, `rimuru`, `stitch`, …) | `sections/TerminalSection.vue` |
| Live GitHub activity + language breakdown | `composables/useGithubActivity.ts`, `sections/GithubActivitySection.vue` |
| Status widget | `hero/StatusWidget.vue` |
| Typed time-of-day greeting | `composables/useTypedText.ts`, `hero/TypedGreeting.vue` |
| Glitch name `<GlitchText :primary :secondary />` | `hero/GlitchText.vue` |
| Light/dark theme (persisted, system default) | `composables/useTheme.ts` |
| Back-to-top (Stitch) + scroll progress | `layout/BackToTop.vue` |

All animations respect `prefers-reduced-motion`.

---

## Deployment

The app is a static SPA. Build with `npm run build`; deploy the `dist/` folder.

### GitHub Pages

1. In **`vite.config.ts`**, set `base` to your repo name:
   ```ts
   base: '/your-repo-name/',
   ```
2. Build: `npm run build`.
3. Publish `dist/` to the `gh-pages` branch (e.g. with the `gh-pages` package or
   a GitHub Action). Enable Pages → "Deploy from branch" → `gh-pages`.

### Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- `public/_redirects` is already included for SPA routing.
- Leave `base` in `vite.config.ts` as `'/'`.

### Vercel

- Framework preset: **Vite**
- **Build command:** `npm run build`
- **Output directory:** `dist`
- Leave `base` as `'/'`.

---

## Notes on honesty

This portfolio intentionally avoids inventing credentials. Unknown details
(school, graduation date, emails, links) are visible **placeholders**. The
NaviCane project is presented as a **research prototype** with no claimed test
results, and the contact form is clearly labeled a **demo** with no backend —
it never claims a message was sent.

---

## Tech

Vue 3 · TypeScript (strict) · Tailwind CSS · Vite · lucide-vue-next.
Fonts: Inter (body) + JetBrains Mono (headings/code).
