# Auntie Olu School — Vite to Next.js upgrade

This project upgrades the supplied React + Vite school website to Next.js using the App Router. The school copy, badge, photos, and video from the original project have been carried over, with a refreshed responsive design in the school’s navy, gold, and cream colors.

**Live website:** [auntieoluschools.sch.ng](https://auntieoluschools.sch.ng/)

## Run the Next.js app

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other available commands:

```bash
npm run build
npm run start
```

## Route migration

The React Router routes in `src/App.jsx` are now Next.js App Router folders:

| Previous Vite route                         | Next.js route                       |
| ------------------------------------------- | ----------------------------------- |
| `/` — `src/pages/Home.jsx`                  | `/` — `app/page.jsx`                |
| `/about` — `src/pages/About.jsx`            | `/about` — `app/about/page.jsx`     |
| `/gallery` — `src/pages/Gallery.jsx`        | `/gallery` — `app/gallery/page.jsx` |
| `/contact` — `src/pages/Contact.jsx`        | `/contact` — `app/contact/page.jsx` |
| Unmatched routes — `src/pages/NotFound.jsx` | `app/not-found.jsx`                 |

Shared layout, navigation, and footer are in `app/layout.jsx` and `components/`. The image and video URLs remain rooted at `/images/` and `/videos/`, served from `public/`.

## Notes

- The gallery includes all 36 school photos, with category filters and a full-size viewer.
- The home page includes the school video at `public/videos/video-001.mp4`.
- The contact form opens a prefilled email draft in the visitor’s email app. It does not send or store submissions on a server.
