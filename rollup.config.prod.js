// rollup.config.js
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/counter.min.js',
      format: 'iife',
      name: 'Counter',
      plugins: [terser()]
    }
  ],
  plugins: [ json() ]
};