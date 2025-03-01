# ZZTT Personal Website

Personal website built with Astro.

## 🚀 Project Structure

```
/
├── public/
│   ├── fonts/
│   ├── zztt.html    # Work-in-progress static HTML page
│   └── ...
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Deploy to GitHub Pages                           |

## 📝 Notes

- The site is configured for GitHub Pages deployment using GitHub Actions.
- A work-in-progress static HTML page is available at `/zztt.html` and will be included in the build.
- The site uses a dark theme by default.

## 🚧 Work-in-Progress Page

The `/zztt.html` page is a static HTML page that can be accessed directly, even while the main site is under development. This page is included in the build and will be available at `https://yourdomain.com/zztt.html`.

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. You can also manually trigger a deployment from the GitHub Actions tab.
