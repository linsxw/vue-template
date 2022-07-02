import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import router from '@/router/index'
import store from '@/store/index'
import './permission'

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
