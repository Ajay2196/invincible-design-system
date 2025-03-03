import { css, CSSResultGroup, LitElement } from 'lit';

export class BaseComponent extends LitElement {
  static styles: CSSResultGroup[] = [
    css`
  
   /* Design Tokens Stylesheet */

:host {
  /* Color Palette */
  --color-primary: #007BFF;
  --color-secondary: #6C757D;
  --color-success: #28A745;
  --color-danger: #DC3545;
  --color-warning: #FFC107;
  --color-info: #17A2B8;
  --color-light: #F8F9FA;
  --color-dark: #343A40;

  /* Typography */
  --font-family-base: 'Arial', sans-serif;
  --font-size-base: 16px;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --font-size-h1: 2rem;
  --font-size-h2: 1.75rem;
  --font-size-h3: 1.5rem;
  --font-size-h4: 1.25rem;
  --font-size-small: 0.875rem;

  --line-height-base: 1.5;
  --line-height-heading: 1.2;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-s: 0.5rem;
  --spacing-m: 1rem;
  --spacing-l: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-xxl: 3rem;

  /* Border Radius */
  --border-radius-small: 0.25rem;
  --border-radius-medium: 0.5rem;
  --border-radius-large: 1rem;

  /* Box Shadow */
  --box-shadow-small: 0 2px 4px rgba(0, 0, 0, 0.1);
  --box-shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1);
  --box-shadow-large: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Base Styles */
body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-dark);
  background-color: var(--color-light);
}

h1, h2, h3, h4 {
  line-height: var(--line-height-heading);
  font-weight: var(--font-weight-bold);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }
h4 { font-size: var(--font-size-h4); }

small { font-size: var(--font-size-small); }

/* Utility Classes */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-success { color: var(--color-success); }
.text-danger { color: var(--color-danger); }
.text-warning { color: var(--color-warning); }
.text-info { color: var(--color-info); }

.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-success { background-color: var(--color-success); }
.bg-danger { background-color: var(--color-danger); }
.bg-warning { background-color: var(--color-warning); }
.bg-info { background-color: var(--color-info); }

.m-xs { margin: var(--spacing-xs); }
.m-s { margin: var(--spacing-s); }
.m-m { margin: var(--spacing-m); }
.m-l { margin: var(--spacing-l); }
.m-xl { margin: var(--spacing-xl); }
.m-xxl { margin: var(--spacing-xxl); }

.p-xs { padding: var(--spacing-xs); }
.p-s { padding: var(--spacing-s); }
.p-m { padding: var(--spacing-m); }
.p-l { padding: var(--spacing-l); }
.p-xl { padding: var(--spacing-xl); }
.p-xxl { padding: var(--spacing-xxl); }

.rounded-small { border-radius: var(--border-radius-small); }
.rounded-medium { border-radius: var(--border-radius-medium); }
.rounded-large { border-radius: var(--border-radius-large); }

.shadow-small { box-shadow: var(--box-shadow-small); }
.shadow-medium { box-shadow: var(--box-shadow-medium); }
.shadow-large { box-shadow: var(--box-shadow-large); }

.transition-fast { transition: var(--transition-fast); }
.transition-medium { transition: var(--transition-medium); }
.transition-slow { transition: var(--transition-slow); }
];

}`,
  ];
}
