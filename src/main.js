import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Vue from 'vue'
// Vue.filter('check', function(val) {
//     if (val == false) {
//         return "Undone"
//     }
//     if (val == true) {
//         return "Done"
//     }
// })
const app = createApp(App)

app.use(VueAxios,axios)

createApp(App).use(router).mount('#app')