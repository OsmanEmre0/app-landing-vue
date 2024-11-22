<template>
  <section class="main-component">
    <div class="container">
      <div class="row">
        <!-- Left Main -->
        <div class="col-md-6 left-main d-flex justify-content-center align-items-center">
          <div class="border-box">
            <div class="content-box">
              <h1>A GREAT APP<br> MAKES YOUR LIFE BETTER</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h5>DOWNLOAD APP NOW</h5>
              <div class="download-buttons">
                <a href="#" class="google-play">
                  <img src="@/assets/images/Google-store.png" alt="Download on Google Play">
                </a>
                <a href="#" class="app-store">
                  <img src="@/assets/images/App-store.png" alt="Download on App Store">
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Main -->
        <div class="col-md-6 right-main">
          <img src="@/assets/images/phone.png" alt="Main Image">
        </div>
      </div>
    </div>
  </section>



</template>

<script>
export default {
  name: 'MainComponents',
  props: {
    msg: String
  }
}
</script>


<style scoped>
/* Background for the section */
.main-component {
  padding: 110px 0;
  background-image: url('@/assets/images/Background.png'); /* Arka plan resminizin yolu */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: -110px 0;
}

/* Left Main */
.left-main {
  display: flex;
  justify-content: center;
  align-items: center;
}


.left-main .border-box {
  width: 570px;
  height: 535px;
  padding: 18px;
  border: 18px solid #7572FF;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-main .content-box {
  height: auto;
  background-color: #fff;
  text-align: left;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  margin-left: -15%;
}

.left-main h1,
.left-main p,
.left-main h5 {
  text-align: left;
}


.left-main h1 {
  padding: 0 0 18px 0;
  color:  #5956E9;
  font-family: "Josefin Sans";
  font-size: 48.83px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
}

.left-main p {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.left-main h5 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.download-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.download-buttons img {
  width: 150px;
  height: auto;
}

/* Right Main */
.right-main img {
  height: auto;
  object-fit: contain;
  display: block;
  margin: 30px auto;
}



</style>
