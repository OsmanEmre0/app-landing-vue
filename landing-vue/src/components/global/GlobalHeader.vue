<template>
  <header>
    <section>
      <div class="container">
        <div class="top-bar">
          <div class="contact-info">
            <a href="mailto:osariahnetoglu@gmail.com"><i class="fas fa-envelope"></i> <span>osariahnetoglu@gmail.com</span></a>
            <a href=""><i class="fas fa-phone-alt"></i> <span>+90 555 123 4567</span></a>
          </div>
          <div class="social-media-icons">
            <a href="https://www.instagram.com/osmansariahmetoglu/"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/OsmanEmre0"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/osman-emre-sarıahmetoğlu/"> <i class="fab fa-linkedin"></i></a>
          </div>
        </div>

        <nav class="navbar">
          <div class="navbar-left">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
          </div>
          <div class="navbar-center">
            <img :src="require('@/assets/images/logo.png')" alt="Logo">
          </div>
          <div class="navbar-right">
            <a href="#team">Team</a>
            <a href="#Blog">Blog</a>
            <a href="#" class="download-btn">Download</a>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {
    msg: String
  }
}
</script>


<style scoped>


</style>
