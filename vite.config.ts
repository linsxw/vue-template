import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// 自动导入API
import AutoImport from 'unplugin-auto-import/vite'
// 自动个导入组件
import Components from 'unplugin-vue-components/vite'
// setup支持name属性
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.json', '.ts', '.vue'],
    },
    plugins: [
      vue(),
      // 自动导入API配置
      AutoImport({
        imports: ['vue'],
        dts: 'types/auto-import.d.ts',
      }),
      Components({
        dts: 'types/components.d.ts',
      }),
      VueSetupExtend(),
    ],
    // eslint报错解决
  }
})
