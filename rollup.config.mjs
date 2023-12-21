import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'src/app.js',
  output: {
	file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;
