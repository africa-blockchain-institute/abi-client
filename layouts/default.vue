<template>
    <div>
        <SliderMsg />
        <!-- <Header /> -->
        <Nuxt />

        <div class="gtranslate_wrapper"></div>
        <script>window.gtranslateSettings = {"default_language":"en","languages":["en","fr","es","ar","pt"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right"}</script>
        <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/nav/Header'
    import Footer from '@/components/nav/Footer'
    import SliderMsg from '~/components/nav/SliderMsg.vue';

    export default {
        name: "default",

        head(){
            
        },
        
        data(){
            return {

            }
        },
        
        components : { Header, Footer, SliderMsg },
    }
</script>

<style lang="scss">
    
</style>