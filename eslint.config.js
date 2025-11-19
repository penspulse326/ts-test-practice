import antfu from '@antfu/eslint-config';
import perfectionist from 'eslint-plugin-perfectionist';

export default antfu({
  plugins: {
    perfectionist,
  },

  formatters: true,
  typescript: true,

  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
});
