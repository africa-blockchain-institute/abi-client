<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">Reset Password</h1>
            <p class="header__sub">Enter a new password you can easily remember</p>
        </div>

        <div class="form">
            <form action="" @submit.prevent="submit()">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <label for="password" class="form-label">New Password<span>*</span> </label>
                        <input type="password"  v-model.trim="form.password" class="form-control form-control-lg" :class="{'is-invalid': errors.status }" id="password" placeholder="**********"  required>
                        <span class="password" :class="icon" @click="showPassword('password')"></span>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>

                    <div class="col-12">
                        <label for="c_password" class="form-label">Confirm Password<span>*</span> </label>
                        <input type="password"  v-model.trim="form.passwordConfirm" class="form-control form-control-lg" :class="{'is-invalid': passwordErr }" id="c_password" placeholder="**********" required>
                        <div class="invalid-feedback" v-if="passwordErr"> {{ passwordErr }} </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col proceed text-center">
                        <button class="btn proceed__btn"><span class="fas fa-spinner fa-spin" v-if="loading"></span> Reset Password</button>
                    </div>
                </div>
            </form>
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
        name: "reset-password",
        layout: "auth",

        head(){
            return{
                title: 'Reset Password -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Reset Password',
                        content: 'Reset Password'
                    }
                ],
            }
        },

        data(){
            return{
                loading: false,
                icon : 'fas fa-eye',

                form : {
                    password: '',
                    passwordConfirm: ''
                },
                passwordErr: '' 
            }
        },

        methods:{
            showPassword(){
                var x = document.getElementById("password");

                if (x.type === "password") {
                    x.type = "text";
                    this.icon = "fas fa-eye-slash"
                } else {
                    x.type = "password";
                    this.icon = "fas fa-eye"
                }
            },

            async submit(){
                this.loading = true
                
                try {
                    if(this.form.password !== this.form.passwordConfirm ){
                        this.passwordErr = "Passwords do not match";
                        throw "Passwords do not match";
                    }

                    this.passwordErr = '';
                    await this.$axios.$patch(`/auth/reset-password/${this.$route.params.token}`, this.form )
                    
                    this.$toast.success('Password Reset Successfully. You can proceed to login', {
                        icon : 'check',
                    })

                    this.$router.push({ name: "auth-login" });
                    this.loading = false

                } catch (err) {
                    this.loading = false
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

        .form{
            margin: 0 auto;

            .row{
                .col-12{
                    margin-bottom: 1rem;
                }
            }

            .password {
                position: relative;
                top: -2rem;
                right: 1.5rem;
                float: right;
                color: $grey-3;
                cursor: pointer;
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