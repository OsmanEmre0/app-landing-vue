<template>

  <section class="pt-100 pb-100">
    <div class="container">
      <div class="row">


        <div class="col-md-12 app-perfectly-main text-center ">
          <h2>How to use the app perfectly</h2>
          <div class="section-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
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
  name: "AppPerfectlyComponents",
  mounted() {

    gsap.from(".app-perfectly-main", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".app-perfectly-main",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    gsap.from(".video-wrapper", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".video-wrapper",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  },
};


</script>


<style scoped>

</style>
