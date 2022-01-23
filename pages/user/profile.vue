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
                                 <a href="#" class="mx-auto">
                                    <span class="fas fa-camera" @click="$refs.image.click()" ></span>
                                    <input type="file" ref="image" @change="uploadImage" class="d-none">
                                    <img 
                                        :alt="form.name"
                                        :src="form.image"
                                        @click="$refs.image.click()"
                                        class="rounded-circle avatar-img">
                                </a>
                                <small class="text-danger" v-if="imageErr">{{ imageErr }} </small>
                            </div>
                        </div>
                        <div class="col-md-9 profile__form">
                            <form action="" @submit.prevent="submit">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-6">
                                        <label for="fname" class="form-label">Name<span>*</span> </label>
                                        <input type="text" v-model="form.name" class="form-control form-control-lg" placeholder="e.g. John" id="fname" required>
                                    </div>

                                    <div class="col-12 col-md-6">
                                        <label for="phone_number" class="form-label">Phone Number<span>*</span> </label>
                                        <input type="text" v-model.trim="form.phone" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="1234567890" id="phone_number" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-6">
                                        <label for="profession" class="form-label">Profession<span>*</span> </label>
                                        <input type="text" v-model.trim="form.profession" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="Software Engineer" id="profession" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <label for="country" class="form-label">Country<span>*</span> </label>
                                        <input type="text" v-model.trim="form.country" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="Rwanda" id="country" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col text-end">
                                        <button class="btn details__form--btn">
                                            <span class="fas fa-spinner fa-spin" v-if="loading"></span>
                                            Save Changes
                                        </button>
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
    import { mapGetters } from 'vuex';

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
                loading: false,

                form:{
                    name: "",
                    phone: "",
                    country: "",
                    profession: "",
                    image: "",
                },

                imageErr: ''
            }
        },

        computed:{
            ...mapGetters({
                user: 'loggedInUser'
            })
        },

        created(){
            this.getUser();
        },

        methods: {
            async getUser(){
                const current_user = (this.user.me) ? this.user.me : this.user;
                const user = await this.$axios.$get(`/users/${current_user.id}`);

                this.form = user.data;
            },

            async submit(){
                this.loading = true;

                try {

                    const formData = new FormData();

                    formData.append('image', this.form.image)
                    formData.append('name', this.form.name)
                    formData.append('phone', this.form.phone)
                    formData.append('country', this.form.country)
                    formData.append('profession', this.form.profession)

                    await this.$axios.$patch(`/users/update-me`, formData)
                    this.loading = false;

                    this.$toast.success("User profile updated successfully", {
                        icon : 'check'
                    });

                    this.getUser();
                } catch (err) {
                    this.loading = false;
                }
            },

             uploadImage(e){
                const image = this.$refs.image.files[0];                
                this.imageErr = ''

                if(image.type.startsWith('image')){
                    if(image.size <= 1000000){
                        this.form.image = image
                        this.status = false
                    }else {
                        this.imageErr = "Image Size Must be less than 1mb"
                    }
                }else {
                    this.imageErr = "File Must be of an Image format (PNG, JPG, JPEG)"
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .head{
            margin: 2rem auto 2rem;

            &__title{
                font-size: $font-hd;
                font-weight: bold;
            }
        }

        .profile{
            margin-bottom: 1rem;

            .card{
                padding: 2rem 1rem;
            }
            
            &__avatar{
                text-align: center;
                margin: 0 auto 2rem;

                .avatar{
                    position: relative;
                    width: 7rem;
                    height: 7rem;
                    border-radius: 50%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    &-img{
                        width: 5rem;
                        height: 5rem;
                    }

                    .fas{
                        position: absolute;
                        font-size: 1.5rem;
                        bottom: 1rem;
                        right: .5rem;
                        color: $secondary;
                        transition: all .5s;
                    }

                    &:hover{
                        .fas{
                            bottom: 1.2rem;
                        }
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
                margin-bottom: 3rem;

                .card{
                    padding: 3rem 5rem;
                }
            }
        }
    }
</style>