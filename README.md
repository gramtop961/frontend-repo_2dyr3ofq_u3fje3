# Playful Paradox of Learning (MVP)

A play-based learning web app with animated landing, activities, reflections, and media uploads.

Tech stack: React + TypeScript + Tailwind CSS, Framer Motion, React Router v6, Firebase (Auth/Firestore/Storage), Cloudinary uploads.

## Folder structure

- src/
  - App.tsx — routes and layout
  - main.tsx — app bootstrap
  - index.css — Tailwind styles
  - components/
    - ActivityCard.tsx
    - UploadWidget.tsx
    - AuthForm.tsx
    - __tests__/ — example tests (Vitest + RTL)
  - pages/
    - Landing.tsx
    - Activities.tsx
    - ActivityPage.tsx
    - AuthPage.tsx
    - AdminStub.tsx
  - firebase/
    - firebase.ts — modular SDK init
  - utils/
    - firestoreHelpers.ts — typed helper for saving results
    - cloudinary.ts — secure unsigned upload helper
  - mock/
    - activities.ts — mock activities fallback
  - types/
    - models.ts — shared interfaces

## Environment variables (.env.local)

Copy `.env.local.example` to `.env.local` and fill:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_USE_FIREBASE_EMULATORS=false
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UNSIGNED_PRESET=
```

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — type-check + production build
- `npm run preview` — preview production build
- `npm run lint` — lint TS/TSX
- `npm run test` — run vitest
- `npm run deploy` — reminder command (use Vercel/Firebase Hosting)

## Local development

1. `npm install`
2. Create `.env.local` (see above)
3. `npm run dev`

## Firebase setup

1. Create a Firebase project.
2. Enable Authentication (Email/Password and Anonymous) and Firestore + Storage.
3. Get web app config from Project Settings and paste into `.env.local` keys.
4. Optional: use local emulators by setting `VITE_USE_FIREBASE_EMULATORS=true` and running `firebase emulators:start`.

## Cloudinary setup

1. Create a Cloudinary account.
2. Settings → Upload → Add upload preset. Make it unsigned, restrict to `image/*`, and set a folder (e.g., `playful-paradox`).
3. Copy Cloud name and the unsigned preset to `.env.local`.

## One-click deploy tips

- Vercel: import repo, set the same env vars, build command `vite build`, output `dist`.
- Firebase Hosting: `npm run build` then `firebase init hosting` → deploy.

## Accessibility & testing

- Buttons and inputs include labels and roles.
- Keyboard focus styles via Tailwind ring utilities.
- Example tests included for ActivityCard and AuthForm.

## Developer checklist

- Replace env placeholders with real Firebase and Cloudinary values.
- In Firebase console: enable Email/Password + Anonymous auth.
- Create an unsigned preset in Cloudinary.
- Run locally with `npm run dev`.
