<template>
    <div>
        <SliderMsg />
        <Header />
        <Nuxt />
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