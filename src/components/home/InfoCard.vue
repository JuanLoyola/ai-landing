<template>
    <div class="w-full bg-[#252F3E] overflow-x-hidden">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 h-full flex  flex-col justify-around items-center md:items-center">

            <div class="flex flex-col md:flex-row gap-y-5 md:gap-y-0  md:gap-x-3 ">
                <Card
                    data-aos="fade-right" data-aos-duration="2000" 
                    :img="'https://fligoo.com/assets/images/sales-ico.png'"
                    :square1="'+48%'"
                    :text1="'Response rate for premium cards over bank baseline.'"
                    :square2="'+18%'"
                    :text2="'Credit card sales conversion rates over bank baseline.'"
                    :square3="'-50%'"
                    :text3="'Costs reduction in contact center activities.'"
                />
                <Card
                    data-aos="fade-left" data-aos-duration="2000" 
                    :img="'https://fligoo.com/assets/images/churn-ico.png'"
                    :square1="'+$3.8B'"
                    :text1="'In AUM at high risk of leaving the organization identified.'"
                    :square2="'+$15M'"
                    :text2="'Retained in tuition revenue.'"
                    :square3="'94%'"
                    :text3="'Accuracy in predicting account closure.'"
                />
            </div>

        </div>
    </div>
</template>

<script>
    import Card from '@/components/utils/Card.vue';

    export default {
        name: 'InfoCard',
        components: {
            Card
        }
    }
</script>
