<template>
    <div class="hero" :style="{ backgroundImage: 'url('+ require('~/assets/images/'+image+'/banner.jpg')}">
        <div class="container">
            <Header />
            <div class="row">
                <div class="col-md-8 col-xl-6 col-xxl-6 hero__content">
                    <h1 class="hero__header">{{ title }}</h1>
                    <p class="hero__desc">{{ desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/nav/Header';

    export default {
        props: ['title', 'desc', 'image'],

        data(){
            return{
                
            }
        },

        components: {
            Header
        },

        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
    .hero{
        height: 30vh;
        background-size: cover;
        background-position: center;
        position: relative;
        
        &__content{
            position: absolute;
            padding-left: 2rem;
            bottom: 0;
        }

        &__header{
            font-weight: bold;
            color: $white;
            font-size: $font-hd;
        }
        
        &__desc{
            color: $white;
            font-size: .9rem;
        }
    }

    @media (min-width: 768px) { 
        .hero{
            height: 40vh;

            &__content{
                bottom: 7%;
            }

            &__header{
                font-size: $font-lg;
            }
        }
    }

    @media (min-width: 992px) { 
        .hero{
            height: 45vh;
            
            &__header{
                font-size: $font-lg;
            }
            
            &__desc{
                font-size: 1.2rem;
            }
        }
    }

    @media (min-width: 1439px) { 
        .hero{
            &__header{
                font-size: $font-xl;
            }
        }
    }
</style>