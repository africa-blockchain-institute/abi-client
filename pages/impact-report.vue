<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="Download Our Impact Report – A Demi-Decade of Transformation" image="extras" />
        <!-- hero section ends -->

        <!-- details section -->
        <div class="details">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Please fill the form below to download our impact report</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="downloadReport()">
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
                                    <label for="organization" class="form-label">Organization<span>*</span> </label>
                                    <input type="text" v-model="form.organization" class="form-control form-control-lg" placeholder="e.g. Africa Blockchain Institute" id="organization" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="position" class="form-label">Position<span>*</span> </label>
                                    <input type="text" v-model="form.position" class="form-control form-control-lg" placeholder="e.g. IT Manager" id="position" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="email" class="form-label">Email address<span>*</span> </label>
                                    <input type="email" v-model.trim="form.email" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="position" class="form-label">Which Edition to Download<span>*</span> </label>
                                    <select name="edition" id="edition" v-model="form.edition" class="form-control form-control-lg" required>
                                        <option value="" disabled>Select Edition</option>
                                        <option value="1st">1st Edition</option>
                                        <option value="2nd">2nd Edition</option>
                                        <option value="3rd">3rd Edition</option>
                                    </select>
                                </div>
                                <div class="small">By submitting this form, you consent to Africa Blockchain Institute storing and processing your information to manage your request and share relevant updates about our programs, events, and resources. You can unsubscribe from these communications at any time. </div>
                            </div>

                            <div class="row">
                                <div class="col text-end">
                                    <button type="submit" class="btn details__form--btn">Download {{ this.form.edition }} Edition</button>
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
        name: "impact-report",
        layout: 'default',

        head(){
            return{
                title: 'Impact Report -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Impact Report',
                        content: 'Africa Blockchain Report (2nd Edition)'
                    }
                ],
            }
        },
        
        data(){
            return {
                form:{
                    fname: "",
                    lname: "",
                    email: "",
                    organization: "",
                    position: "",
                    edition: "",
                }
            }
        },

        components: {
            Hero
        },

         methods: {
            async downloadReport(){
                try {
                    if(true){
                        this.$swal.fire({
                            title: 'Thank you!',
                            text: `You can proceed to download the ${this.form.edition} Edition report.`,
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonText: `Download Report!`
                        }).then((result) => {
                            if (result.value) {
                                if (this.form.edition == "1st") {
                                    return window.open('https://abi-api-assets.s3.us-east-2.amazonaws.com/algorand-report/AFRICA+Blockchain+Report+2021-2.pdf', '_blank')
                                } else if (this.form.edition == "2nd") {
                                    return window.open("https://abi-api-assets.s3.us-east-2.amazonaws.com/algorand-report/AFRICA+Blockchain+Report+II+-+2022.pdf", '_blank')
                                } else if (this.form.edition == "3rd") {
                                    return window.open("https://abi-api-assets.s3.us-east-2.amazonaws.com/algorand-report/AFRICA+Blockchain+Report+III+-+2023.pdf", '_blank')
                                }
                            }
                        })
                    }

                    await this.$axios.$post('/subscribers/add-subscriber', this.form);
                    this.form = this.form;
                } catch (err) {
                    console.log(err)
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .intro{
            padding: 2rem 1rem;

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
                
                .consent {
                    font-size: .8rem;
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
                padding: 3rem 1rem;
                
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
                }
            }
        }
    }
</style>