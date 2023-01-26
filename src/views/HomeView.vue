<template>
  <div class="bg-[#161616] w-full"> 
    <Hero />
    <BannerInfo />
    <Cards />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue';
import BannerInfo from '@/components/home/BannerInfo.vue';
import Cards from '@/components/home/Cards.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    BannerInfo,
    Cards
  }
}
</script>
