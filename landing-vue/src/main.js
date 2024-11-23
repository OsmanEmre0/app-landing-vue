import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/main.css';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//  FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';





createApp(App).use(router).mount('#app')
