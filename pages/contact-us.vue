<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="Contact Us" image="contact" />
        <!-- hero section ends -->

        <!-- details section -->
        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="sendMessage()">
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
                                    <input type="email" v-model.trim="form.email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="message" class="form-label">Message<span>*</span> </label>
                                    <textarea class="form-control" id="message" rows="3" v-model="form.message" :class="{'is-invalid': errors.status }" placeholder="Enter your message" required></textarea>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                                <div class="small">For any question contact our 24/7 call center: <span class="fw-bold"> +250 783 632 405 </span></div>
                            </div>

                            <div class="row">
                                <div class="col text-center">
                                    <button class="btn details__form--btn">Send Message</button>
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
    import Hero from '@/components/reusable/Hero.vue';

    export default {
        name: "contact-us",

        data(){
            return {
                form:{
                    fname: "",
                    lname: "",
                    email: "",
                    message: ""
                }
            }
        },

        components: {
            Hero
        },

        created(){

        },

        methods: {
            async sendMessage(){
                try {

                    const res = await this.$axios.$post('/send-message', this.form);

                    if(res.status == 'success'){
                        this.$swal.fire({
                            title: 'Thank you!',
                            text: "Your message was sent successfully",
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonText: 'Download Now!'
                        }).then((result) => {
                            if (result.value) {
                                return;
                            }
                        })
                    }

                    this.form = "";
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>

<style lang="scss">
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

            &__form{
                margin: 0 auto;

                .row{
                    .col-12{
                        margin-bottom: 1rem;
                    }
                }

                .form-label{
                    font-size: $font-sm;

                    span{
                        color: red;
                    }
                }

                .form-control {
                    padding-left: 1rem;
                    background: $white!important;
                    box-shadow: none;
                    font-size: $font-rg;

                    &:focus{
                        border: 1px solid $primary;
                    }
                }

                .btn{
                    @include button();
                    padding: .75rem 1.5rem;
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

                    .row{
                        margin-bottom: 1rem;
                    }

                    .form-label{
                        font-size: $font-rg;
                    }

                    .form-control {
                        padding: 1rem;
                    }

                    .btn{
                        padding: 1rem 2.5rem;
                    }
                }
            }
        }
    }
</style>