<template>
    <div class="w-full md:h-[180px] bg-[#161616]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center md:items-center">

            <div class="hidden md:flex md:flex-col md:gap-y-0  md:gap-x-3 ">
                <div class="flex  md:gap-x-8 justify-start items-center">
                    <a href="https://portfolio-loyola.netlify.app" target="_blank">
                        <img
                        class=" h-8 w-auto lg:block"
                        src="https://portfolio-loyola.netlify.app/images/logo.svg"
                        alt="Your Company"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/loyolajuan/" target="_blank">
                        <img
                        class=" h-8 w-auto lg:block"
                        src="https://fligoo.com/assets/images/logo-linkedin.png"
                        alt="linkedin"
                        />
                    </a>
                </div>
                <p class="mt-7 text-gray-500">Enhancing businesses with AI.</p>
            </div>

            <div class="w-full md:max-w-xl hidden md:flex flex-col gap-y-5 md:gap-y-0  md:gap-x-3 ">
                <div class="w-full flex flex-col md:flex-row md:gap-x-12 justify-end items-center">
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        Home
                    </span>
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        Industries
                    </span>
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        Products
                    </span>
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        About us
                    </span>
                </div>
                <p class="mt-7 text-gray-500 text-right">2023 copy</p>
            </div>


            <!-- mobile footer -->

            <div class="flex flex-col gap-y-3 mb-5 md:hidden">
                <div class="w-full flex flex-col md:gap-x-8 justify-around items-center">
                    <a href="https://portfolio-loyola.netlify.app" target="_blank">
                        <img
                        class=" h-8 w-auto lg:block"
                        src="https://portfolio-loyola.netlify.app/images/logo.svg"
                        alt="Your Company"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/loyolajuan/" target="_blank" class="my-3">
                        <img
                        class=" h-8 w-auto lg:block"
                        src="https://fligoo.com/assets/images/logo-linkedin.png"
                        alt="linkedin"
                        />
                    </a>
                </div>
                <p class="text-gray-500">Enhancing businesses with AI.</p>
            </div>

            <div class="w-full md:max-w-xl flex flex-col gap-y-5 md:gap-y-0 md:gap-x-3 md:hidden">
                <div class="w-full flex flex-col md:flex-row md:gap-x-12 justify-end items-center">
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        Home
                    </span>
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        Industries
                    </span>
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        Products
                    </span>
                    <span class="text-gray-300 hover:text-gray-400 cursor-pointer transition-all">
                        About us
                    </span>
                </div>
                <p class="text-gray-500 text-center">2023 copy</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>
