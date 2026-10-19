# Currency Converter

A simple currency conversion tool.

## Running the app

Clone the repo, then run the following commands to run the app:

```bash
npm install
npm run dev
```

## Architectural & Behavioural Choices

### Vite

I used Vite to bootstrap the app with the react-ts template. Vite is the best bundler for React apps, and the templates make it simple to scaffold a React app with TypeScript very quickly.

### TanStack Query

I used TanStack Query, namely the useQuery hook, for easy API state management. It makes managing API status, such as isPending and error, easier and more robust than using useEffect.
Note: The select component runs the currencies query, and this component is rendered twice. The query only runs once though due to the queryKey "Currencies" which doesn't change between each component or between renders.

### CSS Modules

I like using CSS Modules for simple separation of styles per component/page/etc. It is automatically enabled with Vite and it's a clean way to prevent styles leaking between components. I prefer it to CSS-in-JS which has performance concerns, and Tailwind which adds a lot of clutter to templates. I also like that it uses raw CSS, which will never go out of fashion, making a migration to other options easier in the future if necessary.

### API hooks

I made custom hooks for each API endpoint to separate the API integration from the components. Even though each hook is only used in one place currently, this helps to make the code cleaner by separating concerns.

## Immediate currency conversion

The app immediately converts the currency as the user types without needing to click a submit button. This is a good UX for a lightweight converter, but in a production version I would likely debounce the API call to reduce unnecessary requests while keeping the interaction responsive.

## What I would improve if time allowed

### Searchable currency list

Currently the currency selection is a standard html select element, so it is not searchable. This could be improved by using a combobox from a library like MaterialUI. This would allow the user to type in the currency code, or the name of the currency, to quickly find and select it.

### Historical conversions

I would add the ability to select the date which the conversion should apply to, defaulting to today. This would allow the user to see what a conversion would have looked like with a historical exchange rate.
I could also add a graph to show how the exchange rate has changed over time for a given pair of currencies.

### Better Styling

I kept the styling lightweight and custom rather than introducing a full UI component library like Material UI. PicoCSS, a simple stylesheet, was used for the baseline styles, with standard CSS on top for layout and other adjustments as needed.

If more time was available, I would improve the styles to be more animated and visually appealing. I would also make sure to check all elements for accessibility, and improve error states and other micro-interactions.

### Unit and E2E testing

I would add unit tests and e2e tests where appropriate. Although most of the business logic is on the API, some unit tests to check the form behaves as intended would be appropriate. In addition, if the app was scaled up, had additional features or more complex micro-interactions, unit tests would become increasingly necessary. I would cover isolated util functions for business logic, as well as testing some component rendering and behaviour using React Testing Library. I would also add playwright tests to check the full e2e experience with a mocked API for consistency. I would also integrate these into a CI/CD pipeline alongside linting and other automated scripts.

### Converting API props to camelCase

I would convert the API response object's parameters to use camelCase rather than slug_case for consistency.

### Better types

I would make the typing more strict in some places, for example typing the short_code to a three letter currency code in all caps.

## Licenses

This project includes Pico CSS, which is licensed under the MIT License.
See LICENSE for the full MIT license text.
