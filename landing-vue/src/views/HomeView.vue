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
    <AppPerfectlyComponents />
    <OurTeamComponents />
    <OurRecentBlog />

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
    OurRecentBlog
  }
}
</script>


<style scoped>
.main-wrapper {
  background-image: url('@/assets/images/Background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
}

.feature-wrapper {
  background-image: url('@/assets/images/features-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
}

</style>
