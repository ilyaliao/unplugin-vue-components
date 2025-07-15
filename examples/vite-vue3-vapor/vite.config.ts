import type { UserConfig } from 'vite'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'

const config: UserConfig = {
  resolve: {
    alias: {
      '/~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    Inspect(),
    Components({
      directoryAsNamespace: true,
      dumpComponentsInfo: true,
    }),
  ],
  build: {
    sourcemap: true,
  },
}

export default config
