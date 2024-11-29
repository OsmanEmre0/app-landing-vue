<template>
  <section>
    <div class="footer-wrapper pt-100">

      <div class="contact-box">
        <div class="contact ">
          <div class="contact-item-left ">
        <span class="icon-circle">
          <i class="fas fa-envelope"></i>
        </span>
            <a href="mailto:osariahnetoglu@gmail.com" >osariahnetoglu@gmail.com</a>
          </div>
          <hr class="vertical-divider" />
          <div class="contact-item-right">
        <span class="icon-circle">
          <i class="fas fa-phone"></i>
        </span>
            <a href="tel:+8803216559985" >+880 321 655 9985</a>
          </div>
        </div>
      </div>


      <footer class="footer ">
        <div class="container pt-100">
          <div class="row">

            <div class="col-md-4 footer-left text-center text-md-start mb-4">
                <h1>LOGO</h1>
              <div class="footer-left-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
              </div>
              <div class="d-flex justify-content-center justify-content-md-start footer-social-icons">
                <a href="https://www.linkedin.com/in/osman-emre-sarıahmetoğlu/" ><i class="fab fa-linkedin"></i></a>
                <hr class="horizontal-divider"/>
                <a href="https://www.instagram.com/osmansariahmetoglu/" ><i class="fab fa-instagram"></i></a>
                <hr class="horizontal-divider"/>
                <a href="https://github.com/OsmanEmre0"><i class="fab fa-github"></i></a>
                <hr class="horizontal-divider"/>
                <a href="https://gitlab.com/OsmanEmre0"><i class="fab fa-gitlab"></i></a>
              </div>
            </div>


            <div class="col-md-4 footer-center">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li><a href="#about" class="text-light text-decoration-none">About</a></li>
                <li><a href="#features" class="text-light text-decoration-none">Features</a></li>
                <li><a href="#team" class="text-light text-decoration-none">Team</a></li>
                <li><a href="#Blog" class="text-light text-decoration-none">Blog</a></li>
              </ul>
            </div>


            <div class="col-md-4 footer-right ">
              <h5>news letter</h5>
              <div class="footer-right-description">
                <p>Subscribe our newsletter to get our latest update & news</p>
              </div>

              <form class="d-flex">
                <input
                    type="email"
                    class="form-control me-2"
                    placeholder="Your email address"
                    aria-label="Your email address"
                />
                <button class="btn footer-right-button" type="submit">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </form>

            </div>
          </div>
        </div>


        <div class="footer-bottom text-center mt-4">
          <p>&copy; Copyright 2024 Osman Emre Sarıahmetoğlu. All Rights Reserved.</p>
        </div>
      </footer>
    </div>


  </section>
</template>

<script>
export default {
  name: 'GlobalFooter',
  props: {
    msg: String
  }
}
</script>


<style scoped>

</style>
