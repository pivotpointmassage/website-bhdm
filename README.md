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

Photos in `public/images/` (from the original [MassageBook](https://www.massagebook.com/therapists/bronsonmassage) profile: main portrait + default theme background) are used for the book card, About headshot, and a subtle full-page background. You can replace those files to update them while keeping the same names.
