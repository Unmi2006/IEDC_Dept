# IEDC Website

React + Vite + Tailwind CSS website for IEDC.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. Vercel should detect **Vite** automatically.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Install command: `npm install`
7. No environment variables are required for the current demo frontend.

`vercel.json` is included so React Router routes such as `/about`, `/attendance`, and `/certificates` work correctly after a direct page refresh.

## Important

The current attendance, certificate, and login data are frontend demo/placeholder data. For real college deployment, connect these modules to a backend/database and move authentication to server-side or managed authentication.
