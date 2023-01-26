<template>
    <div class="w-full bg-[#161616]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 h-screen md:h-[50vh] flex flex-col justify-center items-center md:items-start">
            <h1 class="font-bold text-xl lg:text-7xl text-white ">Your business</h1>
            <h2 class="font-bold text-xl lg:text-7xl text-white ">enhanced through AI.</h2>
            <h4 class="mt-28 md:mt-12 text-base lg:text-md text-white">We partner with some of the most well known companies in the world to provide AI solutions, technology alliances, value adding and consulting.</h4>

            <div class="-mt-0 w-full slider">
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
