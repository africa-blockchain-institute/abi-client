<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">You're now on the ABI Platform</h1>
            <p class="header__sub">Your account has been created successfully. Please check your email to verify your account and then proceed to login.</p>
        </div>

        <div class="proceed">
            <div class="row">
                <div class="col text-center">
                    <nuxt-link to="/login" class="btn proceed__btn">Login</nuxt-link>
                </div>
            </div>
        </div>
        
        <div class="alt">
            <div class="col-12">
                <p>Remembered your password? <nuxt-link to="/login">Login</nuxt-link> </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "email-verification",
        layout: "auth",

        head(){
            return{
                title: 'Email Verification -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Email Verification',
                        content: 'Email Verification'
                    }
                ],
            }
        },

        data(){
            return{
            }
        },

        methods:{
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .header{
            margin-bottom: 1.5rem;

            &__title{
                font-size: $font-hd;
                font-weight: bold;
            }

            &__sub{
                font-size: .9rem;
            }
        }

        .proceed{
            .btn{
                @include button();
                margin-top: 1rem;
                width: 100%;
            }
        }

        .alt{
            margin-top: .5rem;
            p{
                font-size: .8rem;

                a{
                    color: $secondary;
                    text-decoration: none;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            .header{
                margin-bottom: 2rem;

                &__sub{
                    font-size: .8rem;
                }
            }

            .proceed{
                .btn{
                    margin-top: 1rem;
                }
            }

            .alt{
                margin-top: 2rem;
                p{
                    font-size: .9rem;
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .wrapper{
            .header{
                margin-bottom: 3rem;

                &__title{
                    font-size: $font-md;
                }

                &__sub{
                    font-size: .9rem;
                }
            }
            
            .proceed{
                .btn{
                    margin-top: 2rem;
                }
            }

            .alt{
                p{
                    font-size: .9rem;
                }
            }
        }
    }
</style>