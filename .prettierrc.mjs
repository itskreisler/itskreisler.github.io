/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  useTabs: true,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};
