# Sign-up flow for a fictional product, Sp/itify

- A sign up form that POSTs a JSON body to the endpoint with the following shape:

  ```js
  {
      email: string,
      first_name: string,
      last_name: string
  }
  ```

- A mock server endpoint for the form at the path `/submit`. This mocked endpoint returns an error if the provided email is already in use, in this case, `existing@splitify.com`.

---

## Folder structure

### Design system

A mini design system to support scalability and consistency.

- **Components** — the following reusable components have been build `Input`, `Button`, `Spinner`, `Container`. These are available to use via the import alias `@design-system`.
- **Foundation** — theme.css contains global tokens for `color`, `border-radius`, `spacing`, `font-size`, `font-family`. global.css houses any global / reset styling rules.
- **Assets** - this contains any assets related to the design language such as font files.

### Modules

- **Carousel** created using `swiper` which has a rich and easy to use API.
- **Masonry** built using CSS grid to easily control the items' sizing via the parent.

### Context

An `AuthContext` provider is wrapped around the app so we can share a user's data across the app.

### Templates

A `<Layout />` component that includes the responsive Carousel / Masonry, Header and Footer components used throughout the sign up flow.

---

## Architecture Decision Record

### Styling — CSS Modules

#### Pros

- Quick and minimal setup.
- Fast learning curve for any contributor. Freedom to easily target any element(s) using vanilla CSS selectors etc.
- Solves global namespacing issue
- Allows us to use CSS variables.
- Separation of concerns. CSS can be kept in a separate file from the markup.

#### Cons

- No type hints so need to frequently refer to the theme spec to check token names and values.
- No type errors so you won't be warned if you are using an invalid token or break away from the design system.
- Cannot be easily redirected to the styling for a particular element.
- Responsiveness is cumbersome to define via media queries.
- If you want to change the values of CSS properties depending on a prop / variable in JSX, you either have to use inline styling (not good practice) or add / remove a class.

### Unit test framework

I should have used Vitest instead of Jest as my unit test framework (faster and minimal setup). Because Jest depends on Babel, I needed to configure a separate pipeline for testing that was different to what my Vite app used for dev and build time.

---

## Instructions

### How to run this PR

- Install dependencies with `yarn`.
- Run `yarn dev` to start a web server which will automatically serve and rebuild your code. The application will be available at [http://127.0.0.1:5173](http://127.0.0.1:5173).

### How to run unit tests

Run all tests from the root with `yarn test`

### How to run end-to-end tests

Run the server `yarn dev` and in another session run `yarn cypress open`

---

## Github workflow

`test.yml` runs all unit and e2e tests when a PR is opened / edited.
