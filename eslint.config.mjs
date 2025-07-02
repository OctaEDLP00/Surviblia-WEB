// @ts-check
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import parserTs from '@typescript-eslint/parser'

export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    plugins: {
      parserTs,
    },
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  }
)
