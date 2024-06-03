/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// import eslint from '@eslint/js';
// import tseslint from 'typescript-eslint';

// export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended);

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { languageOptions: { globals: globals.browser } },
];
