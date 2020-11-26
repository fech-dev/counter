// rollup.config.js
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/counter.js',
      format: 'iife',
      name: 'Counter'
    }
  ],
  plugins: [ json() ]
};