import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base for GitHub Pages; absolute "/" for Vercel and local dev
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  base: isGithubActions ? './' : '/',
  plugins: [react(), tailwindcss()],
})
