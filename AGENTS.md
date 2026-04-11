# Repository Guidelines

## Project Structure & Module Organization
This repository is a single Angular application. Main source files live in `src/`, with app code in `src/app/`, global styles in `src/styles.scss`, static assets in `src/assets/`, and the HTML entry point in `src/index.html`. Unit tests sit beside source files as `*.spec.ts` files, for example `src/app/app.component.spec.ts`. Build output goes to `dist/angular-bootstrap-playground/`. Docker-related files are kept at the repo root: `Dockerfile`, `docker-compose.yml`, and `nginx.conf`.

## Build, Test, and Development Commands
Use Node `18.19.0` from `.nvmrc`. Prefer the Devbox entrypoints so the repo runs against the intended runtime consistently.

- `devbox run install` installs dependencies using the repo's Node baseline.
- `devbox run start` runs the Angular dev server on `http://localhost:4200/`.
- `devbox run build` creates a production build in `dist/`.
- `devbox run test` runs unit tests with Karma and Jasmine.
- `npm start` runs the Angular dev server directly when you are intentionally not using Devbox.
- `npm run build` creates a production build in `dist/` without Devbox.
- `npm run watch` rebuilds continuously using the development configuration.
- `npm test` runs unit tests with Karma and Jasmine without Devbox.
- `npm run lint` runs both TypeScript/Angular linting and SCSS linting.
- `npm run lint-ts-fix` and `npm run lint-scss-fix` apply safe auto-fixes.
- `docker build -t abp-image .` builds the container image.
- `docker-compose up` serves the built app through Nginx.

## Coding Style & Naming Conventions
Use 2-space indentation, UTF-8, and single quotes in TypeScript. Prettier is configured in `.prettierrc.json` with a `printWidth` of 120 and no trailing commas. ESLint enforces Angular selector rules: components use `app-` kebab-case selectors, and directives use `app` camelCase attribute selectors. Keep Angular files grouped by feature under `src/app/`. Prefer names like `user-card.component.ts`, `auth.service.ts`, and `dashboard-routing.module.ts`.

Keep changes compatible with Angular 16.1. Do not introduce Angular 17+ template control flow such as `@if` or `@for`, or other newer-only APIs, unless the repository is intentionally upgraded in a later phase.

Reuse the existing Bootstrap 5 and `@ng-bootstrap/ng-bootstrap` stack before adding another UI library or custom JavaScript behavior. Keep templates semantic and accessible, preserving keyboard navigation, labels, focus visibility, and usable contrast.

## Testing Guidelines
Tests use Jasmine with Karma via `ng test`. Add or update a colocated `*.spec.ts` file for any component, service, or logic you change. There is no explicit coverage threshold in the workspace config, so contributors should treat meaningful test coverage as required for changed behavior. Focus on creation, rendering, and interaction paths.

## Commit & Pull Request Guidelines
Recent commits use short, lower-case, imperative summaries such as `add bootstrap` and `docker support`. Follow that pattern and keep commits focused. Pull requests should include a brief problem/solution summary, linked issue if applicable, and screenshots for UI changes. Run `npm run lint` and `npm test` before opening a PR.
