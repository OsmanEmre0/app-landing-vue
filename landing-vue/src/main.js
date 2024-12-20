import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Global Styles
import '@/assets/style/main.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Swiper
import "swiper/swiper-bundle.css";

// Splide
import '@splidejs/splide/dist/css/splide.min.css';

// GSAP
import { gsap } from 'gsap';

// Create App
const app = createApp(App);


app.config.globalProperties.$gsap = gsap;

app.use(router).mount('#app');
