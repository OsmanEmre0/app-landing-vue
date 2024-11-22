<template>
  <div class="main">
    <GlobalHeader />
    <MainComponents />
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/global/GlobalHeader.vue'
import MainComponents from '@/components/MainComponents.vue'

export default {
  name: 'HomeView',
  components: {
    GlobalHeader,
    MainComponents
  }
}
</script>
