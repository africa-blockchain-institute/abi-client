<template>
    <div class="hero" :style="{ backgroundImage: 'url('+ require('~/assets/images/'+image+'/banner.jpg')}">
        <div class="container">
            <Header />
            <div class="row">
                <div class="col-md-9 col-xl-7 col-xxl-6 hero__content">
                    <h1 class="hero__content--title">{{ title }}</h1>
                    <p class="hero__content--desc">{{ desc }}</p>
                    <button class="btn hero__content--btn" v-if="buttonText">{{ buttonText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/nav/Header';

    export default {
        props: ['title', 'desc', 'image', 'buttonText'],

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
        height: 40vh;
        background-size: cover;
        background-position: center;
        position: relative;
        
        &__content{
            position: absolute;
            padding-left: 2rem;
            bottom: 0;
        

            &--title{
                font-weight: bold;
                color: $white;
                font-size: $font-hd;
            }
            
            &--desc{
                color: $white;
                font-size: .9rem;
            }
            
            &--btn{
                @include button;
                margin-top: 1rem;
            }
        }
    }

    @media (min-width: 768px) { 
        .hero{
            height: 50vh;

            &__content{
                bottom: 7%;
            
                &--title{
                    font-size: $font-lg;
                }
            }
        }
    }

    @media (min-width: 992px) { 
        .hero{
            height: 70vh;

            &__content{
                &--title {
                    font-size: $font-lg;
                }
                
                &--desc{
                    font-size: 1.2rem;
                }
            }
        }
    }

    @media (min-width: 1439px) { 
        .hero{
            height: 55vh;

            &__content{
                // padding-left: 0rem;
                bottom: 10%;

                &--title {
                    font-size: $font-xl;
                }
            }
        }
    }
</style>