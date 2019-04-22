import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: './src/index.js',
  output: {
    file: 'build/index.umd.js',
    format: 'umd',
    name: 'ReactShortenText',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
