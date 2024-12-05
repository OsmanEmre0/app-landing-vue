import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


// Global Styles
import '@/assets/style/main.css';


// Global Scripts


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Swiper
import "swiper/swiper-bundle.css";

// Create App
createApp(App).use(router).mount('#app');