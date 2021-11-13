<template>
    <div class="wrapper">
        <div class="auth">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-5 auth__img" :style="{ backgroundImage: 'url('+ require('~/assets/images/auth/'+image+'.jpg')}">
                        <nuxt-link to="/"> <img src="/logo_1.png" alt="ABI logo" class="auth__img--logo"> </nuxt-link>
                        <p class="auth__img--sub">Africa Blockchain Institute, a Pan African Institute founded on the premise to promote the adoption, development, and use of Blockchain Technology across Africa</p>
                    </div>
                    <div class="col-md-7 auth__content">
                        <Nuxt />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aurh",
        
        data(){
            return {
                image: "login"
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .auth{
            &__img{
                padding: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;

                &--logo{
                    margin-bottom: 3rem;
                    width: 9rem;
                }

                &--sub{
                    color: white;
                    font-size: .9rem;
                }
            }

            &__content{
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 2rem;
            }
        }
    }

    @media (min-width: 768px) { 
        .wrapper{
            .auth{
                &__img{
                    padding: 2rem;
                    height: 100vh;

                    &--logo{
                        margin-bottom: 3rem;
                        width: 10rem;
                    }

                    &--sub{
                        font-size: .9rem;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) { 
        .wrapper{
            .auth{
                &__img{
                    padding: 2rem 5rem;
                    height: auto;

                    &--logo{
                        margin-bottom: 5rem;
                        width: 12rem;
                    }

                    &--sub{
                        font-size: 1rem;
                    }
                }

                &__content{
                    width: 35%;
                }
            }
        }
    }

    @media (min-width: 1280px) { 
        .wrapper{
            .auth{
                &__img{
                    height: 100vh;
                }
            }
        }
    }

    @media (min-width: 1400px) { 
        .wrapper{
            .auth{
                &__img{
                    padding: 2rem 7rem;
                    height: 100vh;

                    &--logo{
                        margin-bottom: 5rem;
                        width: 12rem;
                    }

                    &--sub{
                        font-size: 1.1rem;
                    }
                }

                &__content{
                    width: 30%;
                }
            }
        }
    }
</style>
