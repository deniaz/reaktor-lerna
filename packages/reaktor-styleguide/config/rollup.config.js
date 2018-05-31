import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import path from 'path';
export default {
  input: path.join(__dirname, '../src/index.js'),
  moduleName: 'ReaktorStyleguide',
  sourcemap: true,

  targets: [
    {
      dest: path.join(__dirname, '../dist/components.js'),
      format: 'umd',
    },
    {
      dest: path.join(__dirname, '../dist/components.module.js'),
      format: 'es',
    },
  ],

  plugins: [
    postcss({
      modules: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],

  external: ['react', 'react-dom'],

  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
