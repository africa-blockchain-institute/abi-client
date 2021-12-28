<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">Login Here</h1>
            <p class="header__sub">Fill in the credentials to your account to proceed.</p>
        </div>

        <div class="form">
            <form @submit.prevent="submit">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <label for="email" class="form-label">Email Address<span>*</span> </label>
                        <input type="email" v-model.trim="form.email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                    <div class="col-12">
                        <label for="password" class="form-label">Password<span>*</span> </label>
                        <input type="password" v-model.trim="form.password" class="form-control form-control-lg" placeholder="**********" id="password" required>
                        <span class="password" :class="icon" @click="showPassword('password')"></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-center proceed">
                        <button class="btn proceed__btn"><span class="fas fa-spinner fa-spin" v-if="loading"></span> Login</button>
                    </div>
                </div>
            </form>
        </div>

        <div class="extras">
            <div class="row justify-content-end">
                <div class="col-6 text-end">
                    <nuxt-link to="/auth/forgot-password" class="">Forgot Password?</nuxt-link>
                </div>
            </div>
        </div>
        
        <div class="social">
            <div class="row">
                <div class="col-12 social__or">
                    <p> or </p>
                </div>
            </div>

            <div class="row">
                <button @click="loginWithGoogle()" class="btn">
                    <img src="~/assets/images/auth/google.png" alt="ABI google auth login">
                    Continue with Google 
                </button>
                <button @click="loginWithFacebook()" class="btn">
                    <img src="~/assets/images/auth/facebook.png" alt="ABI facebook auth login">
                    Continue with Facebook 
                </button>
            </div>
        </div>

        <div class="alt">
            <div class="col-12">
                <p>Don’t have an account? <nuxt-link to="/auth/register">Register</nuxt-link> </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        layout: "auth",

        head(){
            return{
                title: 'Login -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Login',
                        content: 'Login'
                    }
                ],
            }
        },

        data(){
            return{
                loading: false,
                icon : 'fas fa-eye',

                form:{
                    email: "",
                    password: ""
                }
            }
        },

        methods:{
            async submit(){
                this.loading = true
                
                try {
                    //check for user
                    const user = await this.$axios.$post(`/users/get-user`, { email: this.form.email})

                    let destination;

                    if(user.data.role == 'user'){
                        destination = '/user/courses'
                    }else if( user.data.role == 'instructor'){
                        destination = '/instructor/courses'
                    }else if(user.data.role == 'admin' ){
                        destination = '/admin/courses'
                    }

                    let res = await this.$auth.loginWith('local', { data: this.form });
                    this.loading = false;
                    
                    this.$auth.setUser(res.data.data.user);

                    this.$toast.success('Successfully logged in', {
                        icon : 'check',
                    })

                    this.$router.push({ path: destination });

                } catch (err) {
                    this.loading = false
                }
            },

            async loginWithFacebook(){

                const res = await this.$auth.loginWith('facebook');

                console.log(res);

                throw "";
                this.$auth.setUser(res.data.data.user);

                let destination;
                
                if(user.data.role == 'user'){
                    destination = '/user/courses'
                }else if( user.data.role == 'instructor'){
                    destination = '/instructor/courses'
                }else if(user.data.role == 'admin' ){
                    destination = '/admin/courses'
                }

                this.$toast.success('Successfully logged in', {
                    icon : 'check',
                })

                this.$router.push({ path: destination });
            
            },

            async loginWithGoogle(){

                const res = await this.$auth.loginWith('google');

                console.log(res);

                throw "";
                this.$auth.setUser(res.data.data.user);

                let destination;
                
                if(user.data.role == 'user'){
                    destination = '/user/courses'
                }else if( user.data.role == 'instructor'){
                    destination = '/instructor/courses'
                }else if(user.data.role == 'admin' ){
                    destination = '/admin/courses'
                }

                this.$toast.success('Successfully logged in', {
                    icon : 'check',
                })

                this.$router.push({ path: destination });
            
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