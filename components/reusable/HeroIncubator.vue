<template>
    <div class="hero">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-10 col-lg-8 hero__banner">
                    <h1 class="hero__banner--title">Africa Blockchain <br> Incubation Program </h1>
                    <p class="hero__banner--sub">Please fill out as much details as possible.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .hero{
        background: url("@/assets/images/incubator/images/hero_banner-1.jpg") center /cover;

        &__banner{
            padding: 4rem 1rem;

            &--title{
                font-size: $font-md;
                font-weight: bold;
                margin-bottom: 1rem;
                color: #fff;
            }

            &--sub{
                font-size: $font-rg;
                color: #fff;
                margin-bottom: 2rem;
            }

            &--btn{
                @include button();
            }
        }
    }
    

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .hero{
            &__banner{
                padding: 6rem 1rem;

                &--title{
                    font-size: $font-md;
                }
            }
        }
        
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .hero{
            &__banner{
                padding: 7rem 1rem;

                &--title{
                    font-size: $font-xl;
                    margin-bottom: 1rem;
                }

                &--sub{
                    font-size: $font-hd;
                    margin-bottom: 3rem;
                }
            }
        }
        
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .hero{
            &__banner{
                padding: 9rem 1rem;

                &--title{
                    font-size: 4rem;
                }
            }
        }
        
    }
</style>