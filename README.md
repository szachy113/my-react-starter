# my-react-starter

Vite + React + TypeScript + Redux Toolkit + ESLint (Airbnb Style Guide) + Prettier project starter.

No particular form of styling had been chosen.

## Code Structure

Recommended by [Redux Toolkit docs](https://redux.js.org/faq/code-structure/#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go).

- `/src`
  - `main.tsx`
  - `/app`: global app setup and configuration used by the entire app
  - `/assets`: static files (like images or icons)
  - `/common`: truly generic, reusable utilities (like hooks or helper functions) and components
  - `/components`: all the rest of the components with their styles
  - `/features`: feature-specific components with their styles, slices and APIs
  - `/styles`: _global_ styles and theme configurations

## VSCode Extension

If you want to see the ESLint errors inside your favorite VSCode editor, please install the official [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
