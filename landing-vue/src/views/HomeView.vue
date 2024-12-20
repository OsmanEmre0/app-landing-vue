<template>
  <div class="main">

    <div class="main-wrapper">
      <GlobalHeader />
      <MainComponents />
    </div>

    <AboutComponents />

    <div class="feature-wrapper">
     <AppFeatures />
    </div>

    <DownloadComponent />

    <div class="app-perfectly-wrapper">
      <AppPerfectlyComponents />
    </div>
    <div class="video-wrapper">
      <video controls poster="@/assets/images/video%20background.png">
        <source src="" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>




    <OurTeamComponents />
    <div class="customers-wrapper">
      <OurHappyCustomers />
    </div>


    <OurRecentBlog />

    <GlobalFooter />


  </div>
</template>

<script>

import GlobalHeader from '@/components/global/GlobalHeader.vue'
import MainComponents from '@/components/MainComponents.vue'
import AboutComponents from '@/components/AboutComponents.vue'
import AppFeatures from '@/components/AppFeatures.vue'
import DownloadComponent from '@/components/DownloadComponent.vue'
import AppPerfectlyComponents from '@/components/AppPerfectlyComponents.vue'
import OurTeamComponents from '@/components/OurTeamComponents.vue'
import OurRecentBlog from '@/components/OurRecentBlog.vue'
import OurHappyCustomers from '@/components/OurHappyCustomers.vue'
import GlobalFooter from '@/components/global/GlobalFooter.vue'


export default {
  name: 'HomeView',
  components: {
    GlobalHeader,
    MainComponents,
    AboutComponents,
    AppFeatures,
    DownloadComponent,
    AppPerfectlyComponents,
    OurTeamComponents,
    OurRecentBlog,
    OurHappyCustomers,
    GlobalFooter,

  }
}
</script>


<style scoped>
.main {
  width: 100%;
  max-width: 100vw;
}

.main-wrapper {
  background-image: url('@/assets/images/Background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.feature-wrapper {
  background-image: url('@/assets/images/features-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.app-perfectly-wrapper {
  background-image: url('@/assets/images/AppPerfectly-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.customers-wrapper {
  background-image: url('@/assets/images/OurHappyCustomers-Background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

.video-wrapper video {
  width: 100%;
}
</style>
