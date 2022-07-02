import { App } from 'vue'
import { createPinia } from 'pinia'
import { useCountStore } from './modules/count'
const store = createPinia()

export default store

export const setupStore = (app: App) => {
  app.use(store)
}

export { useCountStore }
