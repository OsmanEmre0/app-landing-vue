<template>
  <header>
    <section>
      <div class="container">

        <div class="top-bar">
          <div class="contact-info">
            <a href="mailto:osariahnetoglu@gmail.com">
              <i class="fas fa-envelope"></i> <span>osariahnetoglu@gmail.com</span>
            </a>
            <a href="#"><i class="fas fa-phone-alt"></i> <span>+90 555 123 4567</span></a>
          </div>
          <div class="social-media-icons">
            <a href="https://www.instagram.com/osmansariahmetoglu/"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/OsmanEmre0"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/osman-emre-sarıahmetoğlu/"><i class="fab fa-linkedin"></i></a>
            <a href="https://gitlab.com/OsmanEmre0"><i class="fab fa-gitlab"></i></a>
          </div>
        </div>


        <nav class="navbar">

          <button class="navbar-toggle" @click="toggleMenu">
            <i class="fas fa-bars"></i>
          </button>


          <div class="navbar-left" :class="{ 'active': isMenuOpen }">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#team" class="toggle-only">Team</a>
            <a href="#Blog" class="toggle-only">Blog</a>
          </div>


          <div class="navbar-center">
            <img :src="require('@/assets/images/logo.png')" alt="Logo">
          </div>


          <div class="navbar-right">
            <a href="#team" class="desktop-only">Team</a>
            <a href="#Blog" class="desktop-only">Blog</a>
            <a href="#" class="download-btn">Download</a>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: 'GlobalHeader',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenuOnOutsideClick(event) {
      const navbar = this.$el.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target)) {
        this.isMenuOpen = false;
      }
    },
    initAnimations() {
      // Animate the contact-info <a> tags from left to right
      gsap.from(".contact-info a", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3, // stagger the animations for each element
      });

      // Animate the social-media-icons <a> tags from right to left
      gsap.from(".social-media-icons a", {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3, // stagger the animations for each element
      });
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenuOnOutsideClick);
    this.initAnimations(); // Trigger animations when the component is mounted
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeMenuOnOutsideClick);
  }
};
</script>



<style scoped>


</style>
