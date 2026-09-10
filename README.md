# Rongzhe (Rob) Zhao — Research & Technical Portfolio

Personal portfolio for Rongzhe (Rob) Zhao, built with React and Vite and configured for GitHub Pages at [rstationpro.github.io](https://rstationpro.github.io).

**Health Data Science PhD Student | Machine Learning & AI | Statistical Modeling**

## Local development

Requirements: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. The Vite `base` is `/` because this is the root user site `rstationpro.github.io`, not a site hosted under a repository subpath.

## Where content lives

Most editable portfolio content is centralized in [`src/data/portfolio.js`](src/data/portfolio.js):

- Profile information and social links
- About copy
- Research areas
- Publications
- Projects
- Experience
- Education
- Skills
- Navigation

Owner-confirmed content and optional future additions are tracked in [CONTENT_REVIEW.md](CONTENT_REVIEW.md). The site contains no unfinished content fields. Project links with a null URL and an unset Google Scholar profile are omitted from the page.

## Edit profile information and links

Open `src/data/portfolio.js` and edit the `profile` object. Update the email, GitHub, LinkedIn, Google Scholar, résumé path, or headshot path there. Navigation items are in the `navigation` array at the bottom of the same file.

## Add a project

Add an object to the `projects` array in `src/data/portfolio.js`. Each project supports:

- `title`, `status`, `description`, and `context`
- `methods` and `technologies`
- `contribution`
- GitHub, publication, or report links
- An optional technical visual selected with `visual`

Existing visual types are `video`, `glm`, `cloud`, and `statistics`. Their markup lives in `src/components/TechnicalDiagram.jsx`. Use an empty `links` array when no public resources are available. An empty `technologies` array omits that subsection when no tools have been confirmed.

## Add a research area

Add an object to the `researchAreas` array in `src/data/portfolio.js` with an index, title, concise description, and focus terms. The `ResearchArea` component will render the new entry automatically.

## Replace the résumé PDF

Replace:

```text
public/Rongzhe_Zhao_Resume.pdf
```

This is an identical copy of the canonical `Master_Resume/Resume_Rob_Zhao_Tech_Research.pdf` from the resume repository. Recompile that source, then replace this copy. Keep the same filename to preserve existing URLs.

The hero, view, and download links all use `profile.resume` in `src/data/portfolio.js`, which resolves to `/Rongzhe_Zhao_Resume.pdf`. The navbar's Resume item navigates to the section containing those links. Do not add a second public resume file or hard-code a different PDF in a component.

## Add a headshot

1. Add an optimized image such as `public/headshot.webp`.
2. Set `profile.headshot` to `'/headshot.webp'` in `src/data/portfolio.js`.
3. Keep the file reasonably small and crop it to work near a square aspect ratio.

Without a headshot, the hero shows a finished `RZ` monogram. A photograph is optional.

## Change presentation

- Global design tokens, typography, spacing, and responsive rules: `src/styles.css`
- Section composition: `src/App.jsx`
- Reusable section components: `src/components/`
- Page title and metadata: `index.html`

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`:

1. Install locked dependencies with `npm ci`
2. Build the Vite site
3. Upload the `dist/` directory as a Pages artifact
4. Deploy the artifact to GitHub Pages

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. You can also run the workflow manually from the Actions tab.

## Content integrity

Project and biography claims should remain evidence-backed. Add metrics, publications, links, dates, and contribution claims only when verified. Keep the confidential driving-behavior project limited to the owner's approved high-level summary: Phase 1 statistical analysis, data cleaning, GLMs, and associations between driving behaviors and violations. Do not request or add its underlying data, code, reports, or results.
