<template>
  <section id="features" class="pt-100 pb-50 custom-section">
    <div class="container">

      <div class="row">
        <div class="col-md-12 main-content text-center">
          <h2>App features</h2>
          <div class="main-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
          </div>
          </div>
      </div>


      <div class="row">
        <div class="col-md-12 promotion-title text-center">
          <i class="fa-solid fa-comment-dots header-icon"></i>
          <h3>Full free chat</h3>
          <div class="promotion-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
      </div>



        <div class="pt-30 pb-30 col-md-12">

          <div class="row">
            <div class="left-right-features col-md-3">
              <div class="top-left-content pt-70 text-right">
                <i class="fa-solid fa-window-restore left-icon"></i>
                <h4>Unlimiter Features</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div class="bottom-left-content pb-60 text-right mt-50">
                <i class="fa-solid fa-bezier-curve bottom-left-icon"></i>
                <h4>Awsome Ui Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>


            <div class="center-features col-md-6 d-flex ">
              <img src="@/assets/images/Features-phone.png" alt="Image" class="custom-image">
            </div>


            <div class="left-right-features col-md-3">
              <div class="top-right-content pt-70 text-left">
                <i class="fa-solid fa-mobile-screen-button right-icon"></i>
                <h4>iso & androind version</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div class="bottom-right-content pb-60 text-left mt-50">
                <i class="fa-solid fa-eye bottom-right-icon"></i>
                <h4>retina ready greaphics</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>



      <div class="row pt-30">
        <div class="col-md-12  bottom-promotion-title text-center">
          <i class="fa-solid fa-headset bottom-icon"></i>
          <h3>24/7 support by real pepole</h3>
          <div class="bottom-promotion-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AppFeatures",
  mounted() {

    gsap.from(".main-content", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".main-content",
        start: "top 80%",
      },
    });


    gsap.from(".promotion-title", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".promotion-title",
        start: "top 80%",
      },
    });


    gsap.from(".top-left-content", {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".top-left-content",
        start: "top 80%",
      },
    });


    gsap.from(".bottom-left-content", {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bottom-left-content",
        start: "top 80%",
      },
    });


    gsap.from(".top-right-content", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".top-right-content",
        start: "top 80%",
      },
    });


    gsap.from(".bottom-right-content", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bottom-right-content",
        start: "top 80%",
      },
    });


    gsap.from(".bottom-promotion-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".bottom-promotion-title",
        start: "top 80%",
      },
    });
  },
};


</script>


<style scoped>



</style>
