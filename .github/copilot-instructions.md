# Copilot Instructions for control-gastos-apicontext

This repository is essentially a **minimal React + TypeScript application built with Vite**. It was created from the Vite template and enhanced with Tailwind CSS. The goal is to eventually implement an expense control UI using React context and (later) API calls, but at the moment the app contains only a header.

Below are the important bits an AI agent needs to know to start contributing effectively.

---

## 🏗️ Architecture & File Layout

- `src/` is the only source directory. Components live here in `.tsx` files.
  - `App.tsx` is the root component. Everything you write will be imported/used from here.
  - `main.tsx` bootstraps React using `createRoot` into the `<div id="root">` element of `index.html` and wraps `App` in `StrictMode`.
  - `index.css` is the global stylesheet and currently just imports Tailwind: `@import "tailwindcss";`.

- Configuration files:
  - `vite.config.ts` enables the React SWC plugin and Tailwind plugin.
  - `tsconfig.app.json` contains strict TypeScript settings (noUnusedLocals, strict, etc.) and targets ES2022.
  - `tsconfig.json`/`tsconfig.node.json` are part of the Vite template and usually left alone.
  - `eslint.config.js` is present and uses the default Vite/React rules; run `npm run lint` to lint the entire workspace.

- `public/index.html` holds the root `#root` element and includes `src/main.tsx` as the entry point.

> There are no tests yet. When adding them, place them alongside the code or in a `__tests__` folder and use Jest/Vite tooling if chosen.

---

## ⚙️ Common Developer Workflows

The project uses the standard `npm` scripts defined in `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

- **Start development server:** `npm install` (or `pnpm install`/`yarn`) then `npm run dev`. Vite serves at `http://localhost:5173` by default with HMR.
- **Build for production:** `npm run build` (TypeScript project build followed by `vite build`). Artifacts go into `dist/`.
- **Preview production build locally:** `npm run preview`.
- **Linting:** `npm run lint` runs ESLint over the whole repository. The config is permissive but enforces React hooks rules, etc.

> No test command is defined; add one once test tooling is introduced.

---

## 🌀 Coding Conventions & Patterns

- All React components are **functional** and written in `.tsx`. Hooks are preferred over classes.
- TypeScript is enabled with `strict` mode; annotate props and use `React.FC`/`JSX.Element` return types where helpful.
- Import extensions (`.tsx`, `.ts`) are allowed thanks to `