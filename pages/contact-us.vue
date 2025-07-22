<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="Contact Us" desc="We'd love to hear from you! If you have any questions, feedback, or inquiries about our services, please reach out to us." image="contact" />
        <!-- hero section ends -->

        <!-- details section -->
        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-4 details__contact">
                        <div class="details__info">
                            <p class="details__info--icon"><span class="fas fa-envelope"></span> </p>

                            <div>
                                <p class="details__info--title">Email Us</p>
                                <p class="details__info--text">info@africablockchain.institute</p>
                            </div>
                        </div>

                        <div class="details__info">
                            <p class="details__info--icon"><span class="fas fa-map-marker"></span> </p>

                            <div>
                                <p class="details__info--title">Visit Us</p>
                                <p class="details__info--text">KN 5 Airport Road, Kimihurura, Kigali, Rwanda</p>
                            </div>
                        </div>

                        <div class="details__info">
                            <p class="details__info--icon"><span class="fas fa-phone"></span> </p>

                            <div>
                                <p class="details__info--title">Call Us</p>
                                <p class="details__info--text">+250 783 632 405</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 col-md-7 col-lg-7 offset-md-1 details__form">
                        <form @submit.prevent="sendMessage()">
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
                                <div class="col-12">
                                    <label for="email" class="form-label">Email<span>*</span> </label>
                                    <input type="email" v-model.trim="form.email" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="message" class="form-label">Message<span>*</span> </label>
                                    <textarea class="form-control" id="message" rows="3" v-model="form.message" :class="{'is-invalid': errors.status }" placeholder="Enter your message" required></textarea>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                                <div class="small">By submitting this form, you consent to Africa Blockchain Institute storing and processing your information to manage your request and share relevant updates about our programs, events, and resources. You can unsubscribe from these communications at any time. </div>
                            </div>

                            <div class="row">
                                <div class="col text-end">
                                    <button class="btn details__form--btn"> <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span> Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- details section ends -->
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';

    export default {
        name: "contact-us",

        head(){
            return{
                title: 'Contact Us -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Contact Us',
                        content: 'Contact Us'
                    }
                ],
            }
        },

        data(){
            return {
                loading: false,
                
                form:{
                    fname: "",
                    lname: "",
                    email: "",
                    message: "",
                }
            }
        },

        components: {
            Hero
        },

        methods: {
            async sendMessage(){
                try {
                    this.loading= true;
                    const res = await this.$axios.$post('/auth/send-message', this.form);

                    if(res.status == 'success'){
                        this.$swal.fire({
                            title: 'Thank you!',
                            text: "Your message was sent successfully!",
                            type: 'success',
                            showCancelButton: false,
                        }).then((result) => {
                            if (result.value) {
                                return;
                            }
                        })
                    }

                    this.form = "";
                    this.loading = false;

                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .details{
            background-color: $white;
            padding: 1rem;
            
            &__head{
                text-align: center;
                margin: 0 auto 3rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__contact{

                .details__info{
                    margin-bottom: 1rem;
                    display: flex;
                    gap: 1rem;

                    &--icon{
                        font-size: 1.1rem;
                    }

                    &--title{
                        font-weight: bold;
                        font-size: 1.1rem;
                        margin-bottom: .25rem;
                    }

                    &--text{
                        font-size: $font-rg;
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
                    margin-top: 2rem;
                }
            }
        }
    }

    @media (min-width: 992px) {  
        .wrapper{
            .details{
                padding: 5rem 1rem 5rem;
                
                &__head{
                    text-align: center;
                    margin: 0 auto 5rem;

                    &--title{
                        font-size: $font-lg;
                    }
                }

                &__form{
                    margin: 0 auto;

                    
                }
            }
        }
    }
</style>