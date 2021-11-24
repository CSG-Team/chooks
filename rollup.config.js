import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: [{
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'cchooks'
    },
    {
      file: pkg.module,
      format: 'esm',
    }
  ],
  plugins: [
    typescript({
      exclude: ['./src/stories/**']
    }),
    commonjs(),
    resolve(),
  ],
}