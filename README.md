
# Invincible Design System

## Overview

The Invincible Design System is a framework-agnostic design system built using [Lit](https://lit.dev/). It follows atomic design principles as outlined by Brad Frost, providing a scalable and maintainable approach to building user interfaces.

This project was scaffolded using [Open Web Components (open-wc)](https://open-wc.org/), and utilizes Jest for testing and Storybook for component documentation and showcasing.

This webcomponents in this library follow the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Features

- Framework-agnostic components built with Lit
- Atomic Design methodology
- Jest for unit and integration testing
- Storybook for component documentation and visual testing
- TypeScript support
- Linting and formatting with ESLint and Prettier

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later)

## Installation

```bash
npm i invincible-design-system
```

## Usage

```html
<script type="module">
  import 'invincible-design-system/invincible-design-system.js';
</script>

<invincible-design-system></invincible-design-system>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
