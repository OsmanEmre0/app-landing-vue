<template>
  <section class="pb-50 pt-100">
    <div class="container">
      <div class="row">
        <!-- About Content -->
        <div class="col-md-12 about-content">
          <h1>ABOUT OUR APP</h1>
          <div class="Explanation-about">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
          </div>
        </div>

        <!-- About Left -->
        <div class="col-md-6 about-left">
          <img src="@/assets/images/About-phone.png" alt="About App Image">
        </div>

        <!-- About Right -->
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
export default {
  name: 'AboutComponents',
  props: {
    msg: String
  }
}
</script>


<style scoped>

</style>
