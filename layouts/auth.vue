<template>
    <div class="wrapper">
        <div class="auth">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-5 auth__img" :style="{ backgroundImage: 'url('+ require('~/assets/images/auth/'+image+'.jpg')}">
                        <img src="/logo_1.png" alt="ABI logo" class="auth__img--logo">
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
                height: 100vh;
                padding: 2rem 5rem;
                display: flex;
                flex-direction: column;
                // align-items: center;
                justify-content: center;

                &--logo{
                    margin-bottom: 3rem;
                }

                &--sub{
                    color: white;
                    font-size: 1rem;
                }
            }
        }
    }

    @media (min-width: 768px) { 
        .wrapper{
        
        }
    }

    @media (min-width: 992px) { 
        .wrapper{

        }
    }
</style>
