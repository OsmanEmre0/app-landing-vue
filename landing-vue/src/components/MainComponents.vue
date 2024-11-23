<template>
  <section class="pt-50 pb-50">
    <div class="container">
      <div class="row">
        <!-- Left Main -->
        <div class="col-md-6 left-main d-flex justify-content-center align-items-center">
          <div class="border-box">
            <div class="content-box">
              <h1>A GREAT APP<br> MAKES YOUR LIFE BETTER</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h5>DOWNLOAD APP NOW</h5>
              <div class="download-buttons">
                <a href="#" class="google-play">
                  <img src="@/assets/images/Google-store.png" alt="Download on Google Play">
                </a>
                <a href="#" class="app-store">
                  <img src="@/assets/images/App-store.png" alt="Download on App Store">
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Main -->
        <div class="col-md-6 right-main">
          <img src="@/assets/images/phone.png" alt="Main Image">
        </div>
      </div>
    </div>
  </section>



</template>

<script>
export default {
  name: 'MainComponents',
  props: {
    msg: String
  }
}
</script>


<style scoped>



</style>
