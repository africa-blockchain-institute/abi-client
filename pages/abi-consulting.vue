<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero 
            title="Bring ABI To Your Business" 
            desc="ABI Enterprise helps clients explore every aspect of blockchain and build tailored solutions designed to deliver value. Our cutting-edge Blockchain Technology Capabilities lead the way to a disruptive future for numerous businesses striving for transparent, secure, decentralized and productive business solutions, that are market-ready and address real business issues." 
            image="enterprise"
        />
        <!-- hero section ends -->

        <!-- details section -->
        <div class="details">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Please fill the form below with details of your inquiry.</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="submit()">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="name" class="form-label">Name<span>*</span> </label>
                                    <input type="text" v-model="form.name" class="form-control form-control-lg" placeholder="e.g. John Doe" id="name" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="email" class="form-label">Email<span>*</span> </label>
                                    <input type="email" v-model.trim="form.email" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="contact_number" class="form-label">Phone Number<span>*</span> </label>
                                    <input type="text" v-model="form.contact_number" class="form-control form-control-lg" placeholder="e.g. +44 123 778 990" id="contact_number" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="company_name" class="form-label">Company Name<span>*</span> </label>
                                    <input type="text" v-model="form.company_name" class="form-control form-control-lg" placeholder="e.g. ABI Institute" id="company_name" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="job_title" class="form-label">Job Title<span>*</span> </label>
                                    <input type="text" v-model="form.job_title" class="form-control form-control-lg" placeholder="e.g. Technical Manager" id="job_title" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="hear_about_us" class="form-label">How did you hear about us?<span>*</span> </label>
                                    <select name="hear_about_us" id="hear_about_us" class="form-select form-select-lg" v-model="form.hear_about_us" required>
                                        <option value="Social Media">Social Media</option>
                                        <option value="From Friend / Referral">From Friend / Referral</option>
                                        <option value="Our Website">Our Website</option>
                                        <option value="Our Programs and Events">Our Programs and Events</option>
                                        <option value="Online Search">Online Search</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="message" class="form-label">Message<span>*</span> </label>
                                    <textarea class="form-control" id="message" rows="3" v-model="form.message" :class="{'is-invalid': errors.status }" placeholder="To guide the discussion, please give us details on your interest in speaking with the ABI Enterprise Team. " required></textarea>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                                <div class="small">By submitting this form, you consent to Africa Blockchain Institute storing and processing your information to manage your request and share relevant updates about our programs, events, and resources. You can unsubscribe from these communications at any time. </div>
                            </div>

                            <div class="row">
                                <div class="col text-end">
                                    <button class="btn details__form--btn"><span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span> Submit </button>
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
        name: "abi-consulting",

        head(){
            return{
                title: 'ABI Consulting -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'ABI Consulting',
                        content: 'ABI Consulting'
                    }
                ],
            }
        },

        data(){
            return {
                loading: false,

                form:{
                    name: "",
                    email: "",
                    contact_number: "",
                    company_name: "",
                    job_title: "",
                    hear_about_us: "",
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
            async submit(){
                try {
                    this.loading = true;

                    const res = await this.$axios.$post('/consultations', this.form);

                    if(res.status == 'success'){
                        this.$swal.fire({
                            title: 'Thank you!',
                            text: "Your request was sent successfully! We'll get back to you shortly.",
                            type: 'success',
                            showCancelButton: false,
                        }).then((result) => {
                            if (result.value) {
                                return;
                            }
                        })
                    }

                    this.form = "";
                    this.loading = false
                } catch (err) {
                    console.log(err)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .intro{
            background-color: $primary-light;
            padding: 3rem 1rem;
        }

        .details{
            background-color: $white;
            padding: 1rem;
            
            &__head{
                text-align: center;
                margin: 0 auto 2rem;

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
                    @include form-label()
                }

                .form-control, .form-select {
                    @include form-control();

                    &:focus{
                        border: 1px solid $primary;
                    }
                }

                .btn{
                    @include button();
                    // margin-top: 1rem;
                }
            }
        }
    }

    @media (min-width: 992px) {  
        .wrapper{
            .details{
                padding: 2rem 1rem;
                
                &__head{
                    margin: 0 auto 3rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__form{
                    margin: 0 auto;

                    .row{
                        .col-12{
                            margin-bottom: 1.5rem;
                        }
                    }

                    .btn{
                        @include button();
                    }
                }
            }
        }
    }

    @media (min-width: 1439px) {  
        .wrapper{
            .details{
                padding: 4rem 1rem;
            }
        }
    }
</style>