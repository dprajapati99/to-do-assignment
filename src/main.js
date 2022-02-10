
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes'

const app = createApp(App)
app.use(VueAxios, axios)


createApp(App).use(router).mount('#app')
