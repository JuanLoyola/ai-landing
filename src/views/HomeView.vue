<template>
  <div class="bg-[#161616] w-full">
    <Hero />
    <BannerInfo />
    <Cards />
    <Core />
    <TripleCard />
    <InfoCard />
    <BannerFooter />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue';
import BannerInfo from '@/components/home/BannerInfo.vue';
import Cards from '@/components/home/Cards.vue';
import Core from '@/components/home/Core.vue';
import TripleCard from '@/components/home/TripleCard.vue';
import InfoCard from '@/components/home/InfoCard.vue';
import BannerFooter from '@/components/home/BannerFooter.vue';
import Footer from '@/components/home/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    BannerInfo,
    Cards,
    Core,
    TripleCard,
    InfoCard,
    BannerFooter,
    Footer
  }
}
</script>
