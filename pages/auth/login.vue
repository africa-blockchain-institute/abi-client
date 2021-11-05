<template>
    <div class="wrapper">
        <div class="header">
            <h1 class="header__title">Login Here</h1>
            <p class="header__sub">Fill in the credentials to your account to proceed.</p>
        </div>

        <div class="form">
            <form action="" @submit.prevent="submit()">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <label for="email" class="form-label">Email<span>*</span> </label>
                        <input type="email" v-model.trim="form.email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-center">
                        <button class="btn details__form--btn">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        layout: "auth",

        data(){
            return{
                form:{
                    email: "",
                    password: ""
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
            &__title{
                font-size: $font-md;
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

            .btn{
                @include button();
                margin-top: 2rem;
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>