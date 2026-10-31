# Bronson Davidson — site

Static one-page site (Vite + React). The live site is published with **GitHub Pages** via the workflow in `.github/workflows/`.

## Host on GitHub

1. On GitHub, create a new **empty** repository (no README license required).
2. From this folder, push the code (use your own repo URL):

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. In the repo, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”).

5. The workflow “Deploy to GitHub Pages” runs on every push to `main` or `master` (or run it manually: **Actions →** that workflow **→ Run workflow**).

6. When it finishes, the site is at  
   `https://<username>.github.io/<repo-name>/`  
   (the **Actions** run shows the `github-pages` URL when the deploy job completes).

## Develop locally

```bash
npm install
npm run dev
```

`npm run build` outputs to `dist/`. The GitHub Action runs the same build with a relative asset base for Pages.

## Updating the site

- **Wording, prices, conditions and reviews:** edit `src/content.ts` (the page layout lives in `src/App.tsx`, the styling in `src/index.css`).
- **Intake form PDF:** replace `public/Intake_Form_-_Pivot_Point_Body_Work.pdf` with the new file, keeping the same file name. The "Intake Form (PDF)" button always points to it, so no code change is needed.
- **Images** (in `public/images/`):
  - `logo-mark.png` is the circular hands logo in the header (square, at least 800 × 800 px).
  - `bronson-headshot.jpg` is the About photo (square, about 900 × 900 px, face centered).
  - Replace a file and keep the same name to update it. Names are case-sensitive on GitHub Pages.
- `assets-source/` holds the full-size original logo and headshot. It is not published; it is only kept for future re-cropping.
- `public/favicon.png` and `public/apple-touch-icon.png` are the browser tab and phone home-screen icons.
