# Copilot Instructions for electron-vite-starter

## Project Overview

This is an Electron desktop application starter built with Vite, TypeScript, and Vue 3. The codebase is organized for maintainability and fast iteration, with clear separation between main, preload, and renderer processes.

## Architecture & Key Directories

- `src/main/`: Electron main process code (window management, tray, updater, menu, IPC handlers)
- `src/preload/`: Preload scripts for secure context bridging
- `src/renderer/`: Vue 3 SPA, with routing, stores, i18n, and UI components
- `src/shared/`: Shared types between main and renderer
- `build/`, `resources/`: App assets (icons, fonts, etc.)

## Build & Run Workflows

- **Install dependencies:** `pnpm install`
- **Development:** `pnpm dev` (starts Electron with Vite HMR)
- **Build for production:** `pnpm build`
- **Package app:** `pnpm electron:build` (uses electron-builder)
- **Lint:** `pnpm lint`
- **Format:** `pnpm format`

## Conventions & Patterns

- **TypeScript everywhere**; strict types in both main and renderer
- **IPC communication:** Use `src/main/renderer-handlers.ts` for main-to-renderer events
- **Vue Router:** File-based routing in `src/renderer/src/pages/`
- **Pinia stores:** State management in `src/renderer/src/stores/`
- **i18n:** Locales in `src/renderer/src/i18n/locales/`
- **Global styles:** `src/renderer/src/styles/`
- **Utilities:** Shared helpers in `src/main/utils/` and `src/renderer/src/utils/`

## External Integrations

- **electron-builder:** Config in `electron-builder.yml` and `build/`
- **Vite:** Config in `electron.vite.config.ts`
- **UnoCSS:** Config in `uno.config.ts`
- **ESLint/Prettier:** Config in root

## Examples

- Add a new window: Edit `src/main/window.ts`
- Add a tray menu: Edit `src/main/tray.ts`
- Add a Vue page: Create a `.vue` file in `src/renderer/src/pages/`
- Add a store: Create a file in `src/renderer/src/stores/`

## Tips for AI Agents

- Always use project scripts (`pnpm ...`) for builds and tasks
- Respect process boundaries (main/preload/renderer)
- Reference shared types from `src/shared/types.ts` for cross-process data
- Follow existing file structure and naming conventions

---

If any section is unclear or missing, please ask for clarification or provide feedback to improve these instructions.
