import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      extensions: ['.css'],
      minimize: true,
      extract: 'styles.css'
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      exclude: ['**/__tests__/**']
    })
  ],
  external: ['react', 'react-dom', '@nextui-org/react']
};