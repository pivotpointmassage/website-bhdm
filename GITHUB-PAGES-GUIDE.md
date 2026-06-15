# Complete Guide: Publishing Your Massage Therapy Website to GitHub Pages

This guide will walk you through publishing your website to the internet using GitHub Pages - a free hosting service from GitHub. No technical experience required!

---

## What You'll Need

- A free GitHub account (we'll create one if you don't have it)
- Your website files (already on your computer at `/Users/rdboucher/ux-ai projects/website-bhdm`)
- About 15-20 minutes

---

## Part 1: Create a GitHub Account (Skip if you already have one)

1. Go to [github.com](https://github.com)
2. Click the green **"Sign up"** button in the top right
3. Follow the steps to create your account:
  - Enter your email address
  - Create a password
  - Choose a username (this will be part of your website URL!)
  - Verify you're human
4. Check your email and verify your account

**Important**: Your username will appear in your website address as `https://YOUR-USERNAME.github.io/your-site-name/`

---

## Part 2: Install GitHub Desktop (Makes Everything Easier)

GitHub Desktop is a visual app that helps you manage your code without typing commands.

1. Go to [desktop.github.com](https://desktop.github.com)
2. Download GitHub Desktop for Mac
3. Open the downloaded file and drag GitHub Desktop to your Applications folder
4. Open GitHub Desktop
5. Click **"Sign in to GitHub.com"** and log in with your GitHub account
6. Follow the setup wizard (you can use the default settings)

---

## Part 3: Create Your Repository on GitHub

A "repository" (or "repo") is like a folder on GitHub that stores your website files.

### Step 3.1: Create the Repository

1. Go to [github.com](https://github.com) and make sure you're logged in
2. Click the **"+"** button in the top right corner
3. Click **"New repository"**

### Step 3.2: Configure Your Repository

Fill out the form:

- **Repository name**: Choose a name for your site (e.g., `massage-website`, `pivot-point-bodywork`, or `bronson-massage`)
  - Use lowercase letters and hyphens (no spaces)
  - This will be part of your URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- **Description** (optional): "Professional massage therapy website for Pivot Point Bodywork"
- **Public or Private**: Choose **Public** (required for free GitHub Pages)
- **DO NOT check** these boxes:
  - ❌ Add a README file
  - ❌ Add .gitignore
  - ❌ Choose a license
  (Your project already has these files)

1. Click the green **"Create repository"** button

### Step 3.3: Save Your Repository Information

You'll see a page with setup instructions. **Keep this page open** - we'll use it in the next step.

Look for a URL that looks like: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git`

---

## Part 4: Upload Your Website Files to GitHub

Now we'll connect your local website files to the GitHub repository you just created.

### Step 4.1: Add Your Project to GitHub Desktop

1. Open **GitHub Desktop**
2. Click **File** → **Add Local Repository**
3. Click **"Choose..."** and navigate to your website folder:
  - Go to `/Users/rdboucher/ux-ai projects/website-bhdm`
  - Click **"Add Repository"**

**If you see a message saying this isn't a Git repository:**

1. Click **"Create a repository"**
2. Make sure the path shows your website folder
3. Click **"Create Repository"**

### Step 4.2: Connect to Your GitHub Repository

1. In GitHub Desktop, click **"Publish repository"** at the top
  - OR go to **Repository** → **Repository Settings** → **Remote**
2. You'll see fields to fill in:
  - **Name**: Should already show your folder name
  - **Description**: Add a description like "Massage therapy website"
  - **Organization**: Leave as "None"
  - Make sure **"Keep this code private"** is UNCHECKED (must be public for free GitHub Pages)
3. Click **"Publish Repository"**

**Alternative Method** (if the above doesn't work):

1. In GitHub Desktop, go to **Repository** → **Repository Settings**
2. Click on the **"Remote"** tab
3. Click **"Add"** (if there's no remote yet)
4. Paste the repository URL from GitHub (ends with `.git`)
5. Click **"Save"**

### Step 4.3: Make Your First Commit and Push

A "commit" is like saving a snapshot of your files. A "push" uploads that snapshot to GitHub.

1. In GitHub Desktop, you should see all your files listed on the left
2. At the bottom left, you'll see:
  - **Summary**: Type "Initial website files"
  - **Description** (optional): "First version of Pivot Point Bodywork website"
3. Click the blue **"Commit to main"** button
4. Click **"Push origin"** at the top (this uploads your files to GitHub)

### Step 4.4: Verify Your Files Are on GitHub

1. Go back to your browser and refresh your GitHub repository page
2. You should now see all your website files listed (index.html, package.json, src folder, etc.)
3. If you see your files - success! Move to the next part.

---

## Part 5: Enable GitHub Pages

Now we'll tell GitHub to publish your website to the internet.

### Step 5.1: Open Repository Settings

1. On your GitHub repository page, click the **"Settings"** tab (top right area)
2. In the left sidebar, scroll down and click **"Pages"**

### Step 5.2: Configure GitHub Pages

You'll see a section called **"Build and deployment"**

1. Under **"Source"**, you'll see a dropdown menu
2. Click it and select **"GitHub Actions"** (NOT "Deploy from a branch")
3. That's it! No need to click "Save" - it saves automatically

---

## Part 6: Deploy Your Website

Your website will now deploy automatically!

### Step 6.1: Watch the Deployment

1. Go to the **"Actions"** tab at the top of your repository page
2. You should see a workflow called **"Deploy to GitHub Pages"** running
  - A yellow dot 🟡 means it's in progress
  - A green checkmark ✅ means it succeeded
  - A red X ❌ means there was an error
3. This usually takes 1-3 minutes

### Step 6.2: Find Your Live Website URL

Once the workflow shows a green checkmark:

1. Go back to **Settings** → **Pages**
2. At the top, you'll see a box that says: **"Your site is live at [https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/](https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/)"**
3. Click that link to see your live website!

**Bookmark this URL** - this is your live website that anyone can visit!

---

## Part 7: Making Updates to Your Website

Whenever you want to update your website:

### Easy Method (Using GitHub Desktop)

1. Make your changes to the files on your computer
2. Open **GitHub Desktop**
3. You'll see your changed files listed on the left
4. Add a commit message describing what you changed (e.g., "Updated contact phone number")
5. Click **"Commit to main"**
6. Click **"Push origin"**
7. Wait 1-3 minutes - your website will automatically update!

You can watch the deployment in the **Actions** tab on GitHub.

---

## Troubleshooting

### Problem: "Your site is having problems building"

**Solution**: 

1. Go to the **Actions** tab
2. Click on the failed workflow (red X)
3. Look for error messages
4. Common fixes:
  - Make sure all your files were uploaded
  - Check that `package.json` and `vite.config.ts` are in your repository

### Problem: Website shows a blank page

**Solution**:

1. Your `vite.config.ts` should have `base: './'` for a project repository
2. OR if you named your repository `YOUR-USERNAME.github.io`, change it to `base: '/'`
3. Commit and push the change

### Problem: Images or styles aren't loading

**Solution**:

1. Make sure all image files are in the `public/` folder
2. In your code, reference images as `/images/photo.jpg` (starting with `/`)
3. Check that the images were uploaded to GitHub

### Problem: I don't see my files in GitHub Desktop

**Solution**:

1. Make sure you opened the correct folder
2. The folder should be: `/Users/rdboucher/ux-ai projects/website-bhdm`

---

## Understanding the Process (Optional Reading)

### What happens when you push code to GitHub?

1. **You save your changes locally** and commit them in GitHub Desktop
2. **You push to GitHub** - this uploads your changes to GitHub's servers
3. **GitHub Actions detects the push** - your workflow file (`.github/workflows/deploy-github-pages.yml`) tells GitHub what to do
4. **GitHub Actions builds your site**:
  - Installs dependencies (like React, Vite, etc.)
  - Runs `npm run build` to create optimized website files
  - Packages everything into a deployable format
5. **GitHub Pages publishes your site** - the built files are made available at your GitHub Pages URL
6. **Your website is live** - anyone can visit it!

This all happens automatically - you just push your code and wait!

---

## Next Steps

### Custom Domain (Optional)

If you want to use your own domain name (like `www.pivotpointbodywork.com`):

1. Purchase a domain from a registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. In GitHub: **Settings** → **Pages** → **Custom domain**, enter your domain
3. In your domain registrar, add DNS records:
  - For `www.yourdomain.com`: Add a CNAME record pointing to `YOUR-USERNAME.github.io`
  - For `yourdomain.com` (without www): Add A records pointing to:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
4. Wait 24-48 hours for DNS to propagate
5. Enable "Enforce HTTPS" in GitHub Pages settings

### Viewing Your Website Statistics

GitHub doesn't provide built-in analytics, but you can add:

- **Google Analytics** (free) - tracks visitor numbers, popular pages, etc.
- **Microsoft Clarity** (free) - shows heatmaps and session recordings

---

## Quick Reference

### Your Important URLs

- GitHub Repository: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME`
- Live Website: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- Deployment Status: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/actions`

### To Update Your Website

1. Edit files on your computer
2. Open GitHub Desktop
3. Commit changes (add a message)
4. Push origin
5. Wait 1-3 minutes for deployment

### To Check if Deployment Worked

1. Go to GitHub repository
2. Click "Actions" tab
3. Look for green checkmark ✅

---

## Resources

- [GitHub Pages Official Documentation](https://docs.github.com/en/pages)
- [GitHub Desktop Documentation](https://docs.github.com/en/desktop)
- [Vite Deployment Guide](https://vite.dev/guide/static-deploy)

---

## Summary

Congratulations! You now have:

- ✅ A GitHub account
- ✅ A GitHub repository storing your website code
- ✅ A live website hosted on GitHub Pages
- ✅ Automatic deployments - every time you push changes, your website updates

Your website is now live on the internet and anyone can visit it. Share your GitHub Pages URL with clients, friends, and family!