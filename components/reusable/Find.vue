<template>
    <div class="wrapper">
        <div class="talent">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-xl-8 talent__body" :style="{ backgroundImage: 'url('+ require('~/assets/images/'+image)}">
                        <div class="row">
                            <div class="col-md-10 col-xxl-7">
                                <h2 class="talent__body--text">{{ title }}</h2>
                                <p class="talent__body--sub">{{ text }}</p>
                                <nuxt-link :to="link" class="talent__body--btn btn">{{ buttonText }}</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'text', 'image', 'buttonText', 'link'],

        head(){
            return{
                title: 'Home -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Home',
                        content: 'Home'
                    }
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .talent {
        padding: 2rem 1rem;
        background-color: $secondary-2;

        &__body {
            background: url('~/assets/images/home/find_talent.jpg') no-repeat center center;
            background-size: cover;
            text-align: left;
            border-radius: 1rem;
            padding: 7rem 1rem 1rem;

            &--text {
                font-size: $font-hd;
                color: $white;
                font-weight: bold;
            }
            
            &--sub {
                font-size: 1rem;
                color: $white;
            }

            &--btn {
                @include button();
                margin-top: 1rem;
            }
        }
    }

    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  
        .talent {
            padding: 3rem 1rem;

            &__body {
                padding: 9rem 2rem 2rem;
                
                &--text {
                    font-size: $font-hd;
                }
                
                &--sub {
                    font-size: 1rem;
                }
            }
        }
    }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  
        .talent {
            padding: 4rem 1rem;

            &__body {
                padding: 10rem 2rem 2rem;
                
                &--text {
                    font-size: $font-lg;
                }
                
                &--sub {
                    font-size: 1.2rem;
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .talent {
            &__body {
                padding: 10rem 3rem 3rem;
            }
        }
    }
</style>