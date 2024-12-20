<template>

  <section id="Blog" class="pt-50 pb-50">
    <div class="container">

      <div class="col-md-12 our-blog-header text-center mb-5">
        <h2 >Our Recent Blog</h2>
        <div class="our-blog-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
        </div>
      </div>


      <div class="col-md-12">
        <div class="row">

          <div class="col-md-4">
            <div class="custom-card">

              <div class="card-image">
                <img src="@/assets/images/our-blog-image1.png" alt="Card Image" class="img-fluid" />
              </div>
              <h3 class="card-title">The Snap Pixel: How It Works and How to Install </h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
              <a href="#" class="read-more">READ MORE</a>
            </div>
          </div>


          <div class="col-md-4">
            <div class="custom-card">
              <div class="card-image">
                <img src="@/assets/images/our-blog-image2.png" alt="Card Image" class="img-fluid" />
              </div>
              <h3 class="card-title">Global Partner Solutions: A Partnership of Innovation</h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
              <a href="#" class="read-more">READ MORE</a>
            </div>
          </div>


          <div class="col-md-4">
            <div class="custom-card">
              <div class="card-image">
                <img src="@/assets/images/our-blog-image3.png" alt="Card Image" class="img-fluid" />
              </div>
              <h3 class="card-title">2021: An opportunity for Snapchatters to start fresh</h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
              <a href="#" class="read-more">READ MORE</a>
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
  name: 'OurRecentBlog',
  props: {
    msg: String
  },
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    initScrollAnimations() {

      gsap.from(".our-blog-header", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".our-blog-header",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
        }
      });


      gsap.utils.toArray(".custom-card").forEach((card, index) => {
        gsap.from(card, {
          x: -200,
          opacity: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none",
          }
        });
      });
    }
  }
};
</script>



<style scoped>

</style>
