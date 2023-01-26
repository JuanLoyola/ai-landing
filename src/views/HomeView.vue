<template>
  <div class="bg-[#161616] w-full"> 
    <Hero />
    <BannerInfo />
    <Cards />
    <Core />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue';
import BannerInfo from '@/components/home/BannerInfo.vue';
import Cards from '@/components/home/Cards.vue';
import Core from '@/components/home/Core.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    BannerInfo,
    Cards,
    Core
  }
}
</script>
