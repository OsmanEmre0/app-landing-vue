<template>

  <section class="pt-50 pb-100 download-app ">
    <div class="container">
      <div class="row align-items-center ">

        <div class="col-md-6 text-section">
          <div class="download-description">
            <h1>DOWNLOAD APP NOW</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
            <div class="store-buttons d-flex gap-3 ">
              <a href="#" class="download-google-play">
                <img src="@/assets/images/Google-store.png" alt="Download on Google Play">
              </a>
              <a href="#" class="download-app-store">
                <img src="@/assets/images/App-store.png" alt="Download on App Store">
              </a>
            </div>
          </div>


          <div class="row text-center mt-5 stats-section ">
            <div class="col-md-4 stat">
              <div class="icon">
                <i class="fa-solid fa-download"></i>
              </div>
              <h2>59865</h2>
              <p>DOWNLOAD</p>
            </div>
            <div class="col-md-4 stat">
              <div class="icon">
                <i class="fa-solid fa-thumbs-up"></i>
              </div>
              <h2>29852</h2>
              <p>LIKE</p>
            </div>
            <div class="col-md-4 stat">
              <div class="icon">
                <i class="fa-solid fa-star"></i>
              </div>
              <h2>1500</h2>
              <p>5 STAR RATING</p>
            </div>
          </div>

        </div>


        <div class="col-md-6 image-section text-center">
          <img src="@/assets/images/Download-App-phone.png" alt="Phone" class="img-fluid download-img">
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
  name: "DownloadComponent",
  mounted() {

    gsap.from(".download-description h1", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".download-description",
        start: "top 80%",
      },
    });


    gsap.from(".download-description p", {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".download-description",
        start: "top 80%",
      },
    });


    gsap.from(".store-buttons a", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".download-description",
        start: "top 80%",
      },
    });


    gsap.from(".stat", {
      x: -200,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
      },
    });


    gsap.from(".image-section img", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".image-section",
        start: "top 80%",
      },
    });
  },
};
</script>


<style scoped>



</style>
