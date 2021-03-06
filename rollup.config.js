import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';

export default {
  input: './src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  external: ['react', 'prop-types'],
  plugins: [
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    copy({
      targets: [
        'src/index.css'
      ]
    }),
  ],
};
