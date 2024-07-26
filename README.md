# Presentium - Landing Page

This is the landing page for Presentium, available at [presentium.ch](https://presentium.ch).
It is based on [Nuxt UI Pro](https://ui.nuxt.com/pro) and [Tailwind CSS](https://tailwindcss.com/).

## Stack

- [Typescript](https://www.typescriptlang.org/)
- [Nuxt 3](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt UI](https://ui.nuxt.com/)

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Continuous Delivery

The landing page is deployed to GitHub Pages using GitHub Actions.
The workflow is defined in `.github/workflows/deploy.yml`.

The `production` branch is the one that will be applied when modified.

The default branch therefore is `dev`, and the `production` branch is protected.
When a change is ready to be deployed, a pull request should be made from `dev` to `production`.

## Contributing

Please refer to the [Contributing Guide][contributing] before making a pull request.

[contributing]: https://github.com/presentium/meta/blob/main/CONTRIBUTING.md
