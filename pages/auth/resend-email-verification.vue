<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">Resend Email Verification</h1>
            <p class="header__sub">Please enter your email and we will send you another verification link.</p>
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

                <div class="row">
                    <div class="col proceed text-center">
                        <button class="btn proceed__btn"><span class="fas fa-spinner fa-spin" v-if="loading"></span> Resend Email Verification</button>
                    </div>
                </div>
            </form>
        </div>
        
        <div class="alt">
            <div class="col-12">
                <p>Already verified? <nuxt-link to="/login">Login</nuxt-link> </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resend-verification-link",
        layout: "auth",

        head(){
            return{
                title: 'Resend Verification Link -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Resend Verification Link',
                        content: 'Resend Verification Link'
                    }
                ],
            }
        },

        data(){
            return{
                loading: false,

                form:{
                    email: "",
                }
            }
        },

        methods:{
            async submit(){
                this.loading = true
                
                try {
                    await this.$axios.$post('/auth/resend-email-verification', this.form);

                    this.$toast.success('Email Verification token has been sent to your mail. Please check your mail inbox or promotions to proceed.', {
                        icon : 'check',
                    })

                    this.loading = false;
                    this.$router.push({ name: "login" });

                } catch (err) {
                    this.loading = false
                }
            }
        },
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

            .alt{
                p{
                    font-size: .9rem;
                }
            }
        }
    }
</style>