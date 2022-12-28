<template>
    <div class='wrapper'>
        <div class="banner">
            <Hero />
            <Outline />
        </div>

        <Timeline />
        <Benefit />
        <Eligibility />
        <Partners />
        <Footer />
    </div>
</template>

<script>
    import Hero from '~/components/incubator/Hero.vue';
    import Outline from '~/components/incubator/Outline.vue';
    import Timeline from '~/components/incubator/Timeline.vue';
    import Benefit from '~/components/incubator/Benefit.vue';
    import Eligibility from '~/components/incubator/Eligibility.vue';
    import Partners from '~/components/incubator/Partners.vue';
    import Footer from '~/components/incubator/Footer.vue';

    export default {
        name: "Incubator-Program",
        layout: 'incubator',

        head(){
            return{
                title: 'Incubator Program -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Incubator Program',
                        content: 'Incubator Program'
                    }
                ],
            }
        },

        components:{
            Hero, Outline, Timeline, Benefit, Eligibility, Partners, Footer
        },

        data(){
            return{
                partners: [],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .banner {
            background-image: url("@/assets/images/incubator/images/hero_bg.jpg") ;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(20, 27, 86, 0.9) 27.29%, rgba(20, 27, 86, 0.9) 51.62%);
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  

    }
</style>