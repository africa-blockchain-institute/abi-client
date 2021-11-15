<template>
    <div class="wrapper">
        <div class="head">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="head__title">Profile</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile">
            <div class="container">
                <div class="card shadow">
                    <div class="row">
                        <div class="col-md-2 profile__avatar">
                            <div class="avatar">
                                <span>OS</span>
                            </div>
                        </div>
                        <div class="col-md-9 profile__form">
                            <form action="">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-6">
                                        <label for="fname" class="form-label">First Name<span>*</span> </label>
                                        <input type="text" v-model="form.fname" class="form-control form-control-lg" placeholder="e.g. John" id="fname" required>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label for="lname" class="form-label">Last Name<span>*</span> </label>
                                        <input type="text" v-model="form.lname" class="form-control form-control-lg" placeholder="e.g. Doe" id="lname" required>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-6">
                                        <label for="phone_number" class="form-label">Phone Number<span>*</span> </label>
                                        <input type="text" v-model.trim="form.phone_number" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="1234567890" id="phone_number" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label for="email" class="form-label">Email<span>*</span> </label>
                                        <input type="email" v-model.trim="form.email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-6">
                                        <label for="profession" class="form-label">Profession<span>*</span> </label>
                                        <input type="text" v-model.trim="form.profession" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="1234567890" id="profession" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label for="country" class="form-label">Country<span>*</span> </label>
                                        <input type="text" v-model.trim="form.country" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="Rwanda" id="country" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col text-center">
                                        <button class="btn details__form--btn">Save Changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'user',

        head(){
            return{
                title: 'User Profile',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'profile'
                    }
                ],
            }
        },

        data(){
            return{
                form:{
                    fname: "",
                    lname: "",
                    phone_number: "",
                    email: "",
                    country: "",
                    profession: "",
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .head{
            margin: 2rem auto;

            &__title{
                font-size: $font-hd;
                font-weight: bold;
            }
        }

        .profile{
            background-color: $white;

            .card{
                padding: 2rem 1rem;
            }
            
            &__avatar{
                text-align: center;
                margin: 0 auto 2rem;

                .avatar{
                    background: $primary;
                    width: 5rem;
                    height: 5rem;
                    border-radius: 50%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    span{
                        font-size: 2rem;
                        color: white;
                        font-weight: bold;
                    }
                }
            }

            &__form{
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
                    margin-top: 1rem;
                }
            }
        }
    }

    @media (min-width: 992px) {  
        .wrapper{
            .head{
                margin: 3rem auto 4rem;

                &__title{
                    font-size: $font-md;
                }
            }

            .profile{
                .card{
                    padding: 3rem 5rem;
                }
            }
        }
    }
</style>