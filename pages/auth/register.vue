<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">Register</h1>
            <p class="header__sub">For registration purposes, you are required to supply the following details.</p>
        </div>

        <div class="form">
            <form action="" @submit.prevent="submit()">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <label for="name" class="form-label">Name<span>*</span> </label>
                        <input type="text" v-model.trim="form.name" class="form-control form-control-lg" placeholder="John Doe" id="name" required>
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email Address<span>*</span> </label>
                        <input type="email" v-model.trim="form.email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                    <div class="col-12">
                        <label for="password" class="form-label">Create Password<span>*</span> </label>
                        <input type="password"  v-model.trim="form.password" class="form-control form-control-lg" :class="{'is-invalid': passwordErr }" placeholder="**********" id="password" required>
                        <span class="password" :class="icon" @click="showPassword('password')"></span>
                        <div class="invalid-feedback" v-if="passwordErr"> {{ passwordErr }} </div>
                    </div>
                    <div class="col-12">
                        <label for="c_password" class="form-label">Confirm Password</label>
                        <input type="password"  v-model.trim="form.passwordConfirm" class="form-control form-control-lg" placeholder="**********" id="c_password" required>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-center proceed">
                        <button class="btn proceed__btn"><span class="fas fa-spinner fa-spin" v-if="loading"></span> Register</button>
                    </div>
                </div>
            </form>
        </div>
        
        <div class="social">
            <div class="row">
                <div class="col-12 social__or">
                    <p> or </p>
                </div>
            </div>

            <div class="row">
                <button @click="loginWithGoogle()" class="btn" type="button">
                    <img src="~/assets/images/auth/google.png" alt="ABI google auth login">
                    Continue with Google 
                </button>
                <!-- <a href="/auth/facebook" class="btn">
                    <img src="~/assets/images/auth/facebook.png" alt="ABI facebook auth login">
                    Continue with Facebook 
                </a> -->
            </div>
        </div>

        <div class="alt">
            <div class="col-12">
                <p>Already have an account? <nuxt-link to="/auth/login">login</nuxt-link> </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        layout: "auth",

        head(){
            return{
                title: 'Register -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Register',
                        content: 'Register'
                    }
                ],
            }
        },

        data(){
            return{
                loading: false,
                icon : 'fas fa-eye',
                form : {
                    email: '',
                    password: '',
                    passwordConfirm: '',
                    name: "",
                },
                passwordErr: '',
            }
        },

        methods:{
            async submit(){
                this.loading = true;
                
                try {
                    //check if passwords match 
                    if(this.form.password !== this.form.passwordConfirm ){
                        this.passwordErr = "Passwords do not match";
                        throw "Passwords do not match";
                    }

                    this.passwordErr = '';
                    const res = await this.$axios.$post('/auth/register', this.form) 
                    this.loading = false
                    
                    this.$toast.success(`${res.msg}`, {
                        icon : 'check',
                    })

                    this.$router.push({ name: "auth-email-verification" });

                } catch (err) {
                    this.loading = false
                }
            },

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

            async loginWithGoogle(){
                this.loading = true;

                try {
                    await this.$auth.loginWith('google');
                    this.loading = false;

                    if(this.loading == false){
                        this.$toast.success('Successfully logged in.', {
                            icon : 'check',
                        });
                    }

                    this.$router.push({ path: "/user/courses" });
                   
                } catch (err) {
                    console.log(err);   
                }
            },
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