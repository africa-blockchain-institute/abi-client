<template>
    <div class="hero" :style="{ backgroundImage: 'url('+ require('~/assets/images/'+image+'/banner.jpg')}">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                    <h1 class="hero__header">{{ title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['title', 'image'],

        data(){
            return{
                
            }
        },

        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
    .hero{
        padding: 4rem 1rem;
        background-size: cover;
        background-position: center;

        &__header{
            font-weight: bold;
            color: $white;
            font-size: $font-md;
        }
    }

    @media (min-width: 768px) { 
        .hero{
            padding: 7rem 1rem;

            &__header{
                font-size: $font-xl;
            }
        }
    }

    @media (min-width: 992px) { 
        .hero{
            padding: 9rem 1rem;

            &__header{
                font-size: $font-xl;
            }
        }
    }
</style>