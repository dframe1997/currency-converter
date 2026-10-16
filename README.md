# Currency Converter

A simple currency conversion tool.

## Running the app

Clone the repo, then run the following commands to run the app:

```bash
npm install
npm run dev
```

## Architectural Choices

### Vite

I used Vite to bootstrap the app with the react-ts template. Vite is the best bundler for React apps, and the templates make it simple to scaffold a React app with TypeScript very quickly.

### TanStack Query

I used TanStack Query, namely the useQuery hook, for easy API state management. It makes managing API status, such as isPending and error, easier and more robust than using useEffect.
Note: The select component runs the currencies query, and this component is rendered twice. The query only runs once though due to the queryKey "Currencies" which doesn't change between each component or beteen renders.

### CSS Modules

I like using CSS Modules for simple separation of styles per component/page/etc. It is automatically enabled with Vite and it's a clean way to prevent styles leaking between components. I prefer it to CSS-in-JS which has performance concerns, and Tailwind which adds a lot of clutter to templates. I also like that it uses raw CSS, which will never go out of fashion, making a migration to other options easier in the future if necessary.

### API hooks

I made custom hooks for each API endpoint to separate the API integration from the components. Even though each hook is only used in one place currently, this helps to make the code cleaner by separating concerns.

## What I would improve if time allowed

### Historical conversions

I would add the ability to select the date which the conversion should apply to, defaulting to today. This would allow the user to see what a conversion would have looked like with a historical exchange rate.
I could also add a graph to show how the exchange rate has changed over time for a given pair of currencies.

### Better Styling

I deliberatley avoided using a CSS component library as I wanted to demonstrate my CSS abilities, but typically for an app like this I would use a lirary like Material UI or DaisyUI.
If more time was available, I would improve the styles to be more animated and visually appealing. I would also make sure to check all elements for accessibility, for example contrast between colours.

### Converting API props to camelCase

I would convert the API response object's parameters to use camelCase rather than slug_case for consistency.

### Better types

I would make the typing more strict in some places, for example typing the short_code to a three letter currency code in all caps.
