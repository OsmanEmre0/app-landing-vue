<template>

  <section id="Blog" class="pt-50 pb-50">
    <div class="container">
      <!-- Başlık ve açıklama -->
      <div class="col-md-12 our-blog-header text-center mb-5">
        <h2 >Our Recent Blog</h2>
        <div class="our-blog-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
        </div>
      </div>

      <!-- Card Yapısı -->
      <div class="col-md-12">
        <div class="row">
          <!-- 1. Card -->
          <div class="col-md-4">
            <div class="custom-card">
              <!-- Üstteki resim -->
              <div class="card-image">
                <img src="@/assets/images/our-blog-image1.png" alt="Card Image" class="img-fluid" />
              </div>
              <h3 class="card-title">The Snap Pixel: How It Works and How to Install </h3>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
              <a href="#" class="read-more">READ MORE</a>
            </div>
          </div>

          <!-- 2. Card -->
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

          <!-- 3. Card -->
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
export default {
  name: 'OurRecentBlog',
  props: {
    msg: String
  }
}
</script>


<style scoped>

</style>
