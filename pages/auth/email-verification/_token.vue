<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">Email Verification </h1>
            <p class="header__sub" v-if="!err">{{ message.msg }}</p>
            <p class="header__sub text-danger" v-if="err">{{ errors.message }}</p>
        </div>

        <div class="proceed">
            <div class="row">
                <div class="col text-center">
                    <nuxt-link to="/auth/login" class="btn proceed__btn" v-if="!err">Proceed to Login</nuxt-link>
                    <nuxt-link to="/auth/resend-email-verification" v-if="err" class="btn proceed__btn">Resend Verification Link</nuxt-link>
                </div>
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
                err: '',
                message: ''
            }
        },

        mounted(){
            this.getVerification();
        },

        methods: {
            async getVerification(){
                try {
                    const token = this.$route.params.token
                    const message = await this.$axios.$post('/auth/email-verification', {token});

                    this.message = message;
                } catch (err) { 
                    console.log(this.err);
                    this.err = err;
                }
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

        .proceed{
            .btn{
                @include button();
                margin-top: 1rem;
                width: 100%;
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
        }
    }
</style>