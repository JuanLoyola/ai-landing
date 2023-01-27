<template>
    <div class="w-full max-w-2xl md:w-[823.5px] md:h-[765px] bg-black bg-opacity-50 py-12 px-5 rounded-md shadow flex flex-col justify-between items-start text-left">
        <img :src="img" alt="logo">
        <h1 class="text-center font-bold text-xl lg:text-4xl text-indigo-300">Lorem, ipsum. ™</h1>
        <h2 class="mb-7 text-lg text-gray-400 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae exercitationem cumque nam.</h2>
        <div class="flex flex-col gap-y-3">
            <div class="flex justify-start items-center">
                <span class="text-white font-bold text-sm flex justify-center items-center w-[123px] h-[38px] bg-[#32D989] mr-3">
                    {{ square1 }}
                </span>
                <p class="text-gray-500">
                    {{ text1 }}
                </p>
            </div>

            <div class="flex justify-start items-center">
                <span class="text-white font-bold text-sm flex justify-center items-center w-[123px] h-[38px] bg-[#32D989] mr-3">
                    {{ square2 }}
                </span>
                <p class="text-gray-500">
                    {{ text2 }}
                </p>
            </div>

            <div class="flex justify-start items-center">
                <span class="text-white font-bold text-sm flex justify-center items-center w-[123px] h-[38px] bg-[#32D989] mr-3">
                    {{ square3 }}
                </span>
                <p class="text-gray-500">
                   {{ text3 }}
                </p>
            </div>

            <div class="flex justify-start items-center">
                <span class="text-white font-bold text-sm flex justify-center items-center w-[123px] h-[38px] bg-[#A2A7B5] mr-3">
                    90 days
                </span>
                <p class="text-gray-500">
                    ROI
                </p>
            </div>
        </div>

        <div class="mt-4 w-full flex flex-col md:flex-row justify-start items-center">
            <span class="mb-3 md:mb-0 md:mr-5 bg-[#424242] hover:underline transition-all text-white font-medium px-3 md:px-12 py-3 rounded-md cursor-pointer">
                Speak with an expert
            </span>
            <span class="bg-none border border-gray-600 border-1 text-gray-400 hover:text-white hover:bg-gray-500 transition-all font-medium px-12 py-3 rounded-md cursor-pointer">
                Learn more
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            img: String,
            square1: String,
            text1: String,
            square2: String,
            text2: String,
            square3: String,
            text3: String,
        }
    }
</script>
