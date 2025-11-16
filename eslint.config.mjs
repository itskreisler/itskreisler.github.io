import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

// Parsers
const tsParser = tseslint.parser;
const astroParser = eslintPluginAstro.parser;

export default [
  // Configuración global
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Configs base recomendadas
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Configuración de Prettier
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      // Desactivar warnings de prettier (formatea al guardar)
      'prettier/prettier': 'off',
    },
  },

  // Configuración de Astro con accesibilidad
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    rules: {
      // Desactivar "not defined" para tipos globales de Astro (ImageMetadata)
      'no-undef': 'off',
      // Permitir uso de 'any' (puede ser molesto en desarrollo)
      '@typescript-eslint/no-explicit-any': 'off',
      // Reglas personalizadas adicionales
      'astro/no-set-html-directive': 'warn',
      'astro/no-unused-css-selector': 'warn',
    },
  },

  // Patrones a ignorar
  {
    ignores: [
      'dist/**',
      '**/*.d.ts',
      '.astro/**',
      'node_modules/**',
      '.vscode/**',
      '.git/**',
      'pnpm-lock.yaml',
      'package-lock.json',
    ],
  },
];
