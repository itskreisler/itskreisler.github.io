import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  // const base = typeof process.env.npm_config_mode === 'undefined' ? '/lejaim-demo/' : './'
  return defineConfig({
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/js/[name].js',
          assetFileNames: 'assets/css/[name].css'
        }
      },
      // Prevent vendor.css being created
      cssCodeSplit: false,
      // prevent some warnings
      chunkSizeWarningLimit: 60000
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    define: {
      'process.env': {
        ...process.env
      }
    }
  })
}
