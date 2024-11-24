<template>

  <section class="pt-50 pb-50 download-app ">
    <div class="container">
      <div class="row align-items-center ">
        <!-- Sol Kısım -->
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

          <!-- İstatistik Kısmı -->
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

        <!-- Sağ Kısım -->
        <div class="col-md-6 image-section text-center">
          <img src="@/assets/images/Download-App-phone.png" alt="Phone" class="img-fluid">
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'DownloadComponent',
  props: {
    msg: String
  }
}
</script>


<style scoped>



</style>
