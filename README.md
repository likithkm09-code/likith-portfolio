# Likith K M — Developer Portfolio

React + Vite portfolio with plain CSS design tokens (no UI library).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Edit your content

Everything lives in `src/data/portfolio.js`:

- `profile.github` — replace `[your-github-username]`.
- Each project's `github` and `demo` links. When `demo` is `null`, the Live Demo button shows as disabled.
- To use a real screenshot, put an image in `public/` and add `image: "/my-shot.webp"` to the project.
- `certifications` / `onlineLearning` — add `link` URLs and replace the `[bracketed]` placeholders.

## Resume

`public/Likith_KM_Resume.pdf` is what the Download Resume button serves. Replace the file to update it.

## Contact form

1. Create a form at https://formspree.io (free) and copy its endpoint.
2. Create a `.env` file in the project root:

   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
   ```

Without the variable, submitting the form opens the visitor's email app addressed to you.

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, ProjectCard, ProjectArt,
                Journey, Education, Contact, Footer, Section, Reveal, Icons
  hooks/        useReveal (scroll animations), useActiveSection (nav scroll-spy)
  data/         portfolio.js (all content)
  styles/       global.css (tokens + layout)
```

## Deploy

Works on Vercel, Netlify or GitHub Pages. Build command `npm run build`, output directory `dist`.
