<template>
    <div class="h-screen flex justify-center items-center w-full bg-[#161616]">
        <div class="md:mx-auto md:max-w-5xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8 py-8  flex flex-col justify-center items-center md:items-start">
            <h1 data-aos="fade-right" data-aos-duration="1800" class="font-bold text-xl lg:text-7xl text-white">Your business</h1>
            <h2 data-aos="fade-right" data-aos-duration="2000" class="font-bold text-xl lg:text-7xl text-white">enhanced <span data-aos="fade-up" data-aos-duration="3000" class="text-[#194ABC]">through AI</span>.</h2>
            <h4 data-aos="fade-right" data-aos-duration="2600" class="hidden md:flex mt-28 md:mt-12 text-base lg:text-md text-white">We partner with some of the most well known companies in the world to provide AI solutions, technology alliances, value adding and consulting.</h4>

            <div data-aos="fade-left" data-aos-duration="2600" class="-mt-0 hidden lg:flex md:max-w-none slider">
                <div class="slide-track">
                    <div class="slide" v-for="img in imgSlider" :key="img">
                        <img class="h-8" :src="img.img" width="250" alt="support brands" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Hero',
        data() {
            return {
                imgSlider: [
                    {img: 'https://fligoo.com/assets/images/logos/practice-fusion-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/allscripts-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/coca-cola-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/walmart-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/mastercard-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/practice-fusion-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/allscripts-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/coca-cola-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/walmart-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/mastercard-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/practice-fusion-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/allscripts-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/coca-cola-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/walmart-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/mastercard-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/practice-fusion-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/allscripts-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/coca-cola-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/walmart-logo.svg' },
                    {img: 'https://fligoo.com/assets/images/logos/mastercard-logo.svg' },
                ]
            }
        },
    }
</script>
