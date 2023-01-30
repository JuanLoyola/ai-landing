<template>
    <div class="w-full bg-[#252F3E]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 h-screen md:h-[50vh] flex justify-center items-center">
            <section data-aos="fade-down" data-aos-duration="2000" class="card flex flex-col md:flex-row w-full h-full md:h-[430px]">
                <div
                    class="image md:h-full flex-grow flex flex-col justify-between bg-cover bg-[url('https://images.unsplash.com/photo-1601597110547-78516f198ce4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]"
                >
                    <h1 class="text-white font-bold text-sm pt-5" style="text-shadow: 1px 1px 2px black;">Banking</h1>
                    <button class="btn relative inline-flex items-center rounded-t-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">See more</button>
                </div>
                <div
                    class="image md:h-full flex-grow flex flex-col justify-between bg-cover bg-[url('https://images.unsplash.com/photo-1594665964721-d96c7e10981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]"
                >
                    <h1 class="text-white font-bold text-sm pt-5" style="text-shadow: 1px 1px 2px black;">Insurance</h1>
                    <button class="btn relative inline-flex items-center rounded-t-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">See more</button>
                </div>
                <div
                    class="image md:h-full flex-grow flex flex-col justify-between bg-cover bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]"
                >
                    <h1 class="text-white font-bold text-sm pt-5" style="text-shadow: 1px 1px 2px black;">Education</h1>
                    <button class="btn relative inline-flex items-center rounded-t-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">See more</button>
                </div>
                <div
                    class="image md:h-full flex-grow flex flex-col justify-between bg-cover bg-[url('https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmV0YWlsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60')]"
                >
                    <h1 class="text-white font-bold text-sm pt-5" style="text-shadow: 1px 1px 2px black;">Retail & FMCG</h1>
                    <button class="btn relative inline-flex items-center rounded-t-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">See more</button>
                </div>
                <div
                    class="image md:h-full flex-grow flex flex-col justify-between bg-cover bg-[url('https://images.unsplash.com/photo-1590098563176-07884b06d7f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]"
                >
                    <h1 class="text-white font-bold text-sm pt-5" style="text-shadow: 1px 1px 2px black;">Wealth <br class="hidden md:block"> Management</h1>
                    <p class="hidden hover:block">
                        Some of the world’s largest Wealth Management & Financial Advisory firms rely on Fligoo Sharp AI™ to understand their customers.
                    </p>
                    <button class="btn relative inline-flex items-center rounded-t-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">See more</button>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cards',
        data() {
            return {
                hoverCard: false
            }
        },
    }
</script>
