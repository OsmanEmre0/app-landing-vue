<template>
  <section class="pt-50 pb-50">
    <div class="container">
      <div class="row">

        <div class="col-md-12 text-center">
          <div class="content-heading">
            <h1>Our Happy Customers</h1>
            <div class="content-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.</p>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <Swiper
              ref="swiperInstance"
              class="swiperCustomers"
              effect="coverflow"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="2"
              :loop="true"
              :spaceBetween="30"
              :coverflow-effect="{ rotate: 0, stretch: 0, depth: 150, modifier: 3, slideShadows: false }"
              :pagination="{
      clickable: true,
      el: '.custom-pagination',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active'
    }"
              :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }"
          >
            <SwiperSlide class="custom-slider" v-for="(slide, index) in slides" :key="index">
              <div class="slide-content">
                <img src="@/assets/images/OurHappyCustomers.png" alt="Customer Image" class="round-img" />
                <h1>{{ slide.name }}</h1>
                <h5>{{ slide.position }}</h5>
                <p>{{ slide.description }}</p>
              </div>
            </SwiperSlide>

            <div class="custom-pagination"></div>
          </Swiper>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

SwiperCore.use([EffectCoverflow, Pagination]);


gsap.registerPlugin(ScrollTrigger);

export default {
  name: "OurHappyCustomers",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          name: "Ann Lubin",
          position: "Co-Founder",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
        },
        {
          name: "John Doe",
          position: "CEO",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
        },
        {
          name: "Jane Smith",
          position: "App Developer",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
        },
        {
          name: "Jane Smith",
          position: "Website developer",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
        },
        {
          name: "Jane Smith",
          position: "UI/UX Designer",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
        },
      ],
    };
  },
  mounted() {

    gsap.from(".content-heading", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".content-heading",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  },
};
</script>

<style scoped>



</style>
