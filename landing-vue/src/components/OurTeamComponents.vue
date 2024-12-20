<template>

  <section id="team" class="pb-100">
    <div class="container">
      <div class="row">

        <div class="col-md-12 OurTeam-Title text-center mb-5">
          <h2>Our reative team</h2>
          <div class="OurTeam-Description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
          </div>
        </div>
      </div>



        <div class="col-md-12">
          <div class="row">

            <div class="col-md-4">
              <div class="card">
                <div class="card-body text-center">

                  <div class="image-container mb-3">
                    <img :src="require('@/assets/images/OurTeamİmage1.png')" alt="Image" class="rounded-circle" />
                  </div>

                  <h1 class="card-title">Carla Press</h1>
                  <h5 class="card-subtitle mb-2 text-muted">App Developer</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>


                  <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-4">
              <div class="card">
                <div class="card-body text-center">
                  <div class="image-container mb-3">
                    <img :src="require('@/assets/images/OurTeamİmage2.png')" alt="Image" class="rounded-circle" />
                  </div>
                  <h1 class="card-title">Craig Gouse</h1>
                  <h5 class="card-subtitle mb-2 text-muted">UI/UX Designer</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                  <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-4">
              <div class="card">
                <div class="card-body text-center">
                  <div class="image-container mb-3">
                    <img :src="require('@/assets/images/OurTeamİmage3.png')" alt="Image" class="rounded-circle" />
                  </div>
                  <h1 class="card-title">Jocelyn Septimus</h1>
                  <h5 class="card-subtitle mb-2 text-muted">Website developer</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                  <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <hr />
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </div>
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
  name: "OurTeamComponents",
  mounted() {

    gsap.from(".OurTeam-Title", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".OurTeam-Title",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    gsap.utils.toArray(".card").forEach((card, index) => {
      gsap.from(card, {
        x: -200,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
          delay: index * 0.5,
        },
      });
    });
  },
};
</script>


<style scoped>

</style>
