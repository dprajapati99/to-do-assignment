import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App)
app.use(VueAxios,axios)
createApp(App).use(router).mount('#app')