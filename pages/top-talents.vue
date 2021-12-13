<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="Access TOP Blockchain Talents" image="extras" />
        <!-- hero section ends -->

        <!-- intro section starts -->
        <div class="intro">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-4 text-center">
                        <img src="~/assets/images/extras/secure.png" alt="" class="intro__img">
                        <p class="intro__text">Access a rich pool of verified Blockchain Talents from our vibrant network of Alumni, that are available, and ready to be hired.</p>
                    </div>
                    <div class="col-md-4 text-center">
                        <img src="~/assets/images/extras/valid.png" alt="" class="intro__img">
                        <p class="intro__text">We validate the Blockchain skills of our talents by verifying that they can build real-world projects as that is the topmost concern of every employer.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- intro section ends -->

        <!-- details section -->
        <div class="details">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Fill below your requirement(s), while we match you with the best talent(s)</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="submit()">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="job_title" class="form-label">Job Title<span>*</span> </label>
                                    <input type="text" v-model="form.job_title" class="form-control form-control-lg" placeholder="e.g. Technical Manager" id="job_title" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="company_name" class="form-label">Company Name<span>*</span> </label>
                                    <input type="text" v-model="form.company_name" class="form-control form-control-lg" placeholder="e.g. ABI Institute" id="company_name" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="location_requirements" class="form-label">Location Requirements<span>*</span> </label>
                                    <select name="location_requirements" id="location_requirements" class="form-select form-select-lg" v-model="form.location_requirements" required>
                                        <option value="requirements">Location Requirements</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="engagement" class="form-label">Engagement<span>*</span> </label>
                                    <select name="engagement" id="engagement" class="form-select form-select-lg" v-model="form.engagement" required>
                                        <option value="engagement">Engagement</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="skills" class="form-label">Skills<span>*</span> </label>
                                    <input type="text" v-model="form.skills" class="form-control form-control-lg" placeholder="e.g. Blockchain Developer" id="skills" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="salary_range" class="form-label">Salary Range<span>*</span> </label>
                                    <input type="text" v-model="form.salary_range" class="form-control form-control-lg" placeholder="e.g. USD 40,000 - 150,000 " id="salary_range" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="no_of_talents" class="form-label">No of Talents<span>*</span> </label>
                                    <input type="number" v-model="form.no_of_talents" class="form-control form-control-lg" placeholder="e.g. 3" id="no_of_talents" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="website" class="form-label">Website<span>*</span> </label>
                                    <input type="url" v-model="form.website" class="form-control form-control-lg" placeholder="e.g. www.africablockchain.institute" id="website" required>
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="contact_person" class="form-label">Contact Person<span>*</span> </label>
                                    <input type="text" v-model="form.contact_person" class="form-control form-control-lg" placeholder="e.g. +44 123 778 990" id="contact_person" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="contact_number" class="form-label">Contact Phone Number<span>*</span> </label>
                                    <input type="text" v-model="form.contact_number" class="form-control form-control-lg" placeholder="e.g. +44 123 778 990" id="contact_number" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="contact_email" class="form-label">Contact Email Address<span>*</span> </label>
                                    <input type="email" v-model.trim="form.contact_email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="contact_email" required>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="job_description" class="form-label">Job Description<span>*</span> </label>
                                    <textarea class="form-control" id="job_description" rows="3" v-model="form.job_description" :class="{'is-invalid': errors.status }" placeholder="Tell us about the job description" required></textarea>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="about_company" class="form-label">About Your Company<span>*</span> </label>
                                    <textarea class="form-control" id="about_company" rows="3" v-model="form.about_company" :class="{'is-invalid': errors.status }" placeholder="Tell us about your company" required></textarea>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col text-center">
                                    <button class="btn details__form--btn">Submit</button>
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
        name: "top-talents",

        head(){
            return{
                title: 'Top Talents -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Top Talents',
                        content: 'Top Talents'
                    }
                ],
            }
        },

        data(){
            return {
                form:{
                    job_title: "",
                    location_requirements: "",
                    company_name: "", 
                    about_company: "", 
                    job_description: "", 
                    engagement: "",
                    skills: "", 
                    salary_range: "", 
                    no_of_talents: "", 
                    website:"", 
                    contact_person:"",
                    contact_email:"", 
                    contact_number : "",
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

                    // const res = await this.$axios.$post('/send-message', this.form);

                    // if(res.status == 'success'){
                    //     this.$swal.fire({
                    //         title: 'Thank you!',
                    //         text: "Your message was sent successfully",
                    //         type: 'success',
                    //         showCancelButton: false,
                    //         confirmButtonText: 'Download Now!'
                    //     }).then((result) => {
                    //         if (result.value) {
                    //             return;
                    //         }
                    //     })
                    // }

                    this.form = "";
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

            &__img{
                width: 4rem;
                margin-bottom: 1rem;
            }
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
                    margin-top: 1rem;
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

                    .form-label{
                        font-size: .8rem;
                    }

                    .btn{
                        @include button();
                    }
                }
            }
        }
    }
</style>