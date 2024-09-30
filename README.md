# Modelity - Test technique Joan Vandenbulcke

The application displays a JSON format data coming from a fake API. Requests are intercepted by Mock Service Worker (MSW).

This application uses : 
- Vue 3
- Vite
- Shadcn with Tailwind
- MSW
- Vitest for unit testing
- Playwright for end-to-end testing
- more coming soon...

To launch the application, clone the repository and run the following commands:

```bash
npm install
```

```bash
npm run dev
```

While the application is running, you can access it at the following address: http://localhost:5173/

## Mock

The application uses a fake API to simulate the behavior of a real API. The data is stored in the `src/mocks/handlers.ts` file.

## Tests

### Unit tests

In order not to duplicate test logic, we decided to only implement end-to-end tests.

Unit tests are of little use in our case. Indeed, we use components that come from an already tested library and our end-to-end scenario already covers the fetchItineraries() function.

In the near future where the application would have multiple pages with many renders and more functions, we would use Vitest and Testing Library.

The unit test launch script is already ready in the package.json.

### End-to-end tests

These tests are written with **Playwright**. The goal is to test the global behavior of the application with a predefined scenario : 
- The user opens the application
- The user clicks on the "Point de départ" input and type "Anthon"
- The user clicks on the "Point de départ" input and type "Lyon"
- The user clicks on the "Rechercher les itinéraires" button
- Because we know the result, we can check if the application displays the color #5394cf in the first itinerary
  

End-to-end tests are located in the `src/tests/e2e` directory.
You can run end-to-end tests with the following command:

```bash
npm run test-e2e
```

With UI mode : 

```bash
npx playwright test --ui
```

**⚠️​ WARNING : The application must be running to run the tests. ⚠️​**

## Changelog

You can find the changelog in the `CHANGELOG.md` file here : [CHANGELOG.md](./CHANGELOG.md).

Each commit is tagged with a version number and a type of change. You can find the list of types of changes in the `CHANGELOG.md` file.
I use the library **release-it** to automate the release of the application. The version number is incremented according to the type of change.