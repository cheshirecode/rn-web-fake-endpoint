import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// React Native for Web convention: .js files contain JSX. Tell Vite/esbuild
// to treat .js as JSX source. Affects both dev/build (rollup's esbuild
// transform) and dep optimization.
export default defineConfig({
  plugins: [
    react({
      // also rewrite .js → .jsx during parse
      include: /\.(jsx?|tsx?)$/,
    }),
  ],
  resolve: {
    alias: { 'react-native': 'react-native-web' },
    extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  define: { __DEV__: JSON.stringify(true) },
})
