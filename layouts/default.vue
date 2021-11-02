<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/nav/Header'
    import Footer from '@/components/nav/Footer'

    export default {
        name: "default",
        
        data(){
            return {

            }
        },
        
        components : { Header, Footer },
    }
</script>

<style lang="scss">
    
</style>