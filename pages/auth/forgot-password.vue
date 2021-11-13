<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">Forgot Password</h1>
            <p class="header__sub">Please enter your email and we will send you a reset link.</p>
        </div>

        <div class="form">
            <form action="" @submit.prevent="submit()">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <label for="email" class="form-label">Email Address<span>*</span> </label>
                        <input type="email" v-model.trim="form.email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="proceed">
            <div class="row">
                <div class="col text-center">
                    <button class="btn proceed__btn">Send Reset Link</button>
                </div>
            </div>
        </div>
        
        <div class="alt">
            <div class="col-12">
                <p>Remembered your password? <nuxt-link to="/auth/login">Login</nuxt-link> </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forgot-password",
        layout: "auth",

        data(){
            return{
                form:{
                    email: "",
                }
            }
        },

        methods:{
            submit(){

            }
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

        .form{
            margin: 0 auto;

            .row{
                .col-12{
                    margin-bottom: 1rem;
                }
            }

            .form-label{
                @include form-label();
            }

            .form-control {
                @include form-control();
            }
        }

        .extras{
            a{
                font-size: .75rem;
                color: $secondary;
                text-decoration: none;
            }
        }

        .proceed{
            .btn{
                @include button();
                margin-top: 1rem;
                width: 100%;
            }
        }

        .social{
            margin-top: 2rem;
            &__or{
                text-align: center;

                p{
                    color: grey;

                    &::before, &::after{
                        content: " ";
                        width: 7rem;
                        height: .05rem;
                        background-color: lightgray;
                        display: inline-block;
                        margin-bottom: .25rem;
                    }
                    
                    &::before{
                        margin-right: .5rem;
                    }

                    &::after{
                        margin-left: .5rem;
                    }
                }
            }

            .btn{
                @include button();
                margin-bottom: 1rem;

                background-color: $white;
                color: grey;

                &:hover{
                    background-color: $secondary;
                    color: $white;
                }

                img{
                    width: 1.2rem;
                    margin-right: .5rem;
                }
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

            .extras{
                a{
                    font-size: .75rem;
                }
            }

            .proceed{
                .btn{
                    margin-top: 1rem;
                }
            }

            .social{
                margin-top: 2rem;
                &__or{
                    p{
                        &::before, &::after{
                            width: 7rem;
                        }
                    }
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

            .extras{
                a{
                    font-size: .8rem;
                }
            }

            .proceed{
                .btn{
                    margin-top: 2rem;
                }
            }

            .social{
                margin-top: 2rem;
                &__or{
                    p{
                        &::before, &::after{
                            width: 10rem;
                        }
                    }
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