# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# instructions
The List component manages the main app with tasks stored in state.

It shows an input field to add new tasks with an "Add" button.

When you type and click "Add", it creates a new task (if not empty).

Each task is displayed using the Item component in a list.

Tasks can be marked done/undone with a toggle button (shows ✓ when done).

Tasks can be deleted with a delete button.

The Item component receives text, status, and action functions as props.

Done tasks appear visually different with CSS styling.

All changes update the state, making the UI react instantly.

The app has basic styling through CSS classes for layout and appearance.