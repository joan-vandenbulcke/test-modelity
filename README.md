# Modelity - Test technique Joan Vandenbulcke

The application displays a JSON format data coming from a fake API. Requests are intercepted by Mock Service Worker (MSW).

This application uses : 
- Vue 3
- Vite
- Shadcn with Tailwind
- MSW
- Vitest for unit testing
- Playwright for end-to-end testing ()
- more coming soon...

To launch the application, clone the repository and run the following commands:

```bash
npm install
```

```bash
npm run dev
```

While the application is running, you can access it at the following address: http://localhost:5173/

## Tests

### Unit tests

For unit tests and in order not to duplicate the logic of end-to-end tests, we decided to only test the rendering of elements on the page.

Indeed, the components come from an already tested library, so it would be of little relevance to invest time at this level.

Additionally, the route recovery functionality is covered by an end-to-end scenario.

You can run unit tests with the following command:

```bash
npm run test-unit
```

### End-to-end tests

These tests are written with **Playwright**. The goal is to test the global behavior of the application with a predefined scenario.

End-to-end tests are located in the `src/tests/e2e` directory.
You can run end-to-end tests with the following command:

```bash
npm run test-e2e
```

## Changelog

You can find the changelog in the `CHANGELOG.md` file here : [CHANGELOG.md](./CHANGELOG.md).

Each commit is tagged with a version number and a type of change. You can find the list of types of changes in the `CHANGELOG.md` file.
I use the library **release-it** to automate the release of the application. The version number is incremented according to the type of change.