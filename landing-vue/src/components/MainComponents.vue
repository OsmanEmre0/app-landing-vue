<template>
  <section class="pt-50 pb-50">
    <div class="container">
      <div class="row">

        <div class="col-md-6 left-main d-flex justify-content-center align-items-center">
          <div class="border-box">
            <div class="content-box">
              <h1>A GREAT APP MAKES<br> YOUR LIFE BETTER</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h5>DOWNLOAD APP NOW</h5>
              <div class="download-buttons">
                <a href="#" class="main-google-play">
                  <img src="@/assets/images/Google-store.png" alt="Download on Google Play">
                </a>
                <a href="#" class="main-app-store">
                  <img src="@/assets/images/App-store.png" alt="Download on App Store">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 right-main">
          <img src="@/assets/images/phone.png" alt="Main Image">
        </div>
      </div>
    </div>
  </section>



</template>

<script>

import { gsap } from "gsap";

export default {
  name: "MainComponents",
  mounted() {
    gsap.from(".left-main", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".right-main", {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  },
};

</script>


<style scoped>



</style>
