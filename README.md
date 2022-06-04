# my-react-starter

Vite + React + TypeScript + Redux Toolkit + ESLint (Airbnb Style Guide) + Prettier project starter.

No particular form of styling was chosen.

## Code Structure

- Recommended by [Redux Toolkit docs](https://redux.js.org/faq/code-structure/#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go).

- `/src`

  - `main.tsx`
  - `/app`: global app setup and configuration used by the entire app
    - `store.ts`
    - `App.tsx`
  - `/assets`
  - `/common`: contains truly generic, reusable utilities and components
  - `/components`: all the other components with their styles, split into separate folders
  - `/features`: feature-specific components, slices, APIs and styles
    - `/counter`
      - `counterSlice.ts`
      - `Counter.tsx`
  - `/styles`: global styles, theme configurations
