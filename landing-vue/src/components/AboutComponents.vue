<template>
  <section id="about" class="pb-50 pt-100">
    <div class="container">
      <div class="row">

        <div class="col-md-12 about-content">
          <h1>ABOUT OUR APP</h1>
          <div class="Explanation-about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
          </div>
        </div>


        <div class="col-md-6 about-left">
          <img src="@/assets/images/About-phone.png" alt="About App Image">
        </div>


        <div class="col-md-6 about-right">
          <div class="feature-box">
            <div class="icon-and-title">
              <div class="icon">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
              </div>
              <div class="text-group">
                <h5>Creative Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
              </div>
            </div>
          </div>
          <div class="feature-box">
            <div class="icon-and-title">
              <div class="icon">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
              </div>
              <div class="text-group">
                <h5>Easy To Use</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
              </div>
            </div>
          </div>
          <div class="feature-box">
            <div class="icon-and-title">
              <div class="icon">
                <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
              </div>
              <div class="text-group">
                <h5>Best User Experince</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
              </div>
            </div>
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
  name: "AboutComponents",
  mounted() {

    gsap.from(".about-content", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
    });


    gsap.from(".about-left", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-left",
        start: "top 80%",
      },
    });


    const featureBoxes = document.querySelectorAll(".feature-box");

    featureBoxes.forEach((box,) => {
      gsap.from(box, {
        x: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  },
};


</script>


<style scoped>

</style>
