# CLAUDE.md

## Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v56.0.0/ before writing any code.

## Commands

- `npm install` — install dependencies
- `npx expo start` — start the dev server (press `a`/`i`/`w` to open Android/iOS/web, or use `npm run android` / `npm run ios` / `npm run web` directly)
- `npm run lint` — lint (runs `expo lint`)
- `npm run reset-project` — moves the starter `app` code to `app-example` and creates a blank `app` directory (one-way reset script, not for regular use)

There is no test suite configured in this repo currently.

## Architecture

This is an Expo (SDK 56) + Expo Router app using the new architecture defaults (React 19, React Native 0.85). Routing is file-based, but all routable screens live under `src/app/` rather than the repo root — `expo-router/entry` resolves routes against `src/app` via the `main` field plus path config.

- `src/app/` — Expo Router route files (`_layout.tsx`, `index.tsx`, etc.). Routes are thin: they just import and render a screen component from `src/screens/`.
- `src/screens/` — One component per route, containing the actual screen logic/layout.
- `src/Components/` — Shared, reusable UI primitives (`Screen`, `AppText`, `AppButton`, `AppTextInput`, `AppPicker`, `Card`, `ListItem`, `Icon`, etc.). Screens compose these rather than using raw RN primitives directly.
- `src/config/colors.ts` — the single source of truth for the color palette; components reference `colors.<name>` instead of hardcoding hex values.

Path aliases (`tsconfig.json`): `@/*` → `src/*`, `@/assets/*` → `assets/*`. Always import via these aliases rather than relative paths across top-level directories.

`Screen` is the standard top-level wrapper for a screen's content — it applies `SafeAreaView` plus Android status-bar padding, and accepts a `screenStyles` prop for per-screen layout overrides.

List rows that support swipe-to-delete go through `ListItem` (wraps `react-native-gesture-handler`'s `ReanimatedSwipeable`, with `DeleteSwipeAction` as the right-swipe action) rather than building swipeable rows from scratch.

`react-native-reanimated` and `react-native-gesture-handler` are wired at the root: `_layout.tsx` wraps the route `Stack` in `GestureHandlerRootView`, which any new gesture/animation-based component must remain inside.
