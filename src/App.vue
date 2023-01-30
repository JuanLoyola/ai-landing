<template>
  <Loader v-if="showLoader" />
  <div v-else>
    <Navbar />
    <router-view/>
  </div>
  
</template>

<script>
import Loader from '@/components/utils/Loader.vue'
import Navbar from '@/components/Navbar.vue';
import AOS from "aos";

export default {
  name: 'App',
  data() {
    return {
      showLoader: true
    }
  },
  components: {
    Loader,
    Navbar
  },
  mounted() {
    AOS.init()
    this.turnLoaderOFF()
  },
  methods: {
    turnLoaderOFF () {
      // Simulate a new page load
      setTimeout(() => {
        this.showLoader = false
      }, 2000);
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #161616;
}
</style>
