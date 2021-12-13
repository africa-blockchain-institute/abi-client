<template>
    <div class="wrapper">
         <!-- hero section starts -->
        <HeroIncubator />
        <!-- hero section ends -->

        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Section A: Profile</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="submit()">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="application_type" class="form-label">Application Type<span>*</span> </label>
                                    <select name="application_type" id="application_type" class="form-select form-select-lg" v-model="form.application_type" required>
                                        <option value="team_application">Team Application</option>
                                        <option value="individual_application">Individual Application</option>
                                    </select>
                                    <small class="info">For Team Application, there will be two (2) Co-Founders, where one has Technical Background, while the other has Business Background. For Individual Application, Technical Background is highly considerable.</small>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="name" class="form-label">Name (Surname First)<span>*</span> </label>
                                    <input type="text" v-model="form.name" class="form-control form-control-lg" placeholder="e.g. Doe John" id="name" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="phone_number" class="form-label">Phone Number<span>*</span> </label>
                                    <input type="text" v-model="form.phone_number" class="form-control form-control-lg" placeholder="e.g. 123456789" id="phone_number" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="email" class="form-label">Email Address<span>*</span> </label>
                                    <input type="email" v-model.trim="form.email" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="gender" class="form-label">Gender<span>*</span> </label>
                                    <select name="gender" id="gender" class="form-select form-select-lg" v-model="form.gender" required>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="dob" class="form-label">Date of Birth<span>*</span> </label>
                                    <input type="date" v-model="form.dob" class="form-control form-control-lg" id="dob" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="address" class="form-label">Address<span>*</span> </label>
                                    <input type="text" v-model.trim="form.address" class="form-control form-control-lg" placeholder="No ...." id="address" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="citizenship" class="form-label">Citizenship<span>*</span> </label>
                                    <select name="citizenship" id="citizenship" class="form-select form-select-lg" v-model="form.citizenship" required>
                                        <option value="Egypt">Egypt</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>

                                <div class="col-12 col-md-6">
                                    <label for="co-founder" class="form-label">Do you have a female Co-founder?*<span>*</span> </label>
                                    <select name="co-founder" id="co-founder" class="form-select form-select-lg" v-model="form.co_founder" required>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    <small class="info">We support gender equality, but it will not affect your application if you do not have a female co-founder.</small>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label">Upload your National ID Card or International Passport (Data Page) <span>*</span></label>
                                        <input class="form-control form-control-lg" type="file" ref="image" :required="checkPassportImg"
                                        @change="uploadImage" :class="{'is-invalid': imageErr }">
                                        <div class="invalid-feedback">{{ this.imageErr }} </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="github" class="form-label">Link to GitHub<span>*</span> </label>
                                    <input type="url" v-model.trim="form.github" class="form-control form-control-lg" placeholder="Github Link" id="github" required>
                                    <small class="info">You can create your account: <a href="https://github.com/join" target="blank">https://github.com/join</a> </small>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="linkedin" class="form-label">Link to Linkedin Profile<span>*</span> </label>
                                    <input type="url" v-model.trim="form.linkedin" class="form-control form-control-lg" placeholder="Linkedin Link" id="linkedin" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="linkedin_founder" class="form-label">Link to LinkedIn profile of other founders<span>*</span> </label>
                                    <input type="url" v-model.trim="form.linkedin_founder" class="form-control form-control-lg" placeholder="Link to co-founder linkedin profile" id="linkedin_founder" required>
                                    <small class="info">For Team Application, there will be two (2) Co-Founders, where one has Technical Background, while the other has Business Background.  For Individual Application, Technical Background is highly considerable. Put "Nil" if it is an Individual Application.</small>
                                </div>
                            </div>
                     
                            <div class="row">
                                <div class="col-12 text-end">
                                    <button class="btn details__form--btn"> <span class="fas fa-spinner fa-spin" v-if="loading"></span> Save and Continue</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

       <FooterIncubator />
    </div>
</template>

<script>
    import HeroIncubator from '@/components/reusable/HeroIncubator';
    import FooterIncubator from '@/components/reusable/FooterIncubator.vue';

    export default {
        name: "incubator-program",
        layout: 'incubator',

        head(){
            return{
                title: 'Incubator Program -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Incubator Program',
                        content: 'Incubator Program'
                    }
                ],
            }
        },

        components:{
            HeroIncubator,
            FooterIncubator
        },

        data(){
            return{
                loading: false,
                form:{
                    application_type: "",
                    name: "",
                    phone_number: "", 
                    email:"", 
                    gender: "",
                    dob: "",
                    address: "",
                    citizenship: "",
                    co_founder: "",
                    passport: "",
                    github: "",
                    linkedin: "",
                    linkedin_founder: "",
                },

                imageErr: "",
                checkPassportImg: true
            }
        },

        mounted(){
            if(localStorage.hasOwnProperty("incubator-program")){
                this.form = JSON.parse(localStorage.getItem("incubator-program"))

                if(this.form.passport) this.checkPassportImg = false;
                else this.checkPassportImg = true;
            }
        },

        methods:{
            uploadImage(e){
                // const image = e.target.files[0];
                const image = this.$refs.image.files[0]; 

                if(image.type.startsWith('image')){
                    if(image.size <= 5000000){
                        const reader = new FileReader();
                        reader.readAsDataURL(image);

                        reader.onload = e =>{
                            this.form.passport = e.target.result;
                        };

                        this.status = false;
                    }else {
                        this.imageErr = "Image Size Must be less than 5mb"
                    }
                }else {
                    this.imageErr = "File Must be of an Image format (PNG, JPG, JPEG)"
                }
            },

            submit(){
                this.loading = true;

                localStorage.setItem("incubator-program", JSON.stringify(this.form));

                if(localStorage.hasOwnProperty("incubator-program")){
                    this.$toast.success('Saved Successfully! Proceed to Section B.', { icon : 'check' })

                    this.$router.push({ name: "incubator-program-apply-idea" })
                }

                this.loading = false;
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

                    .info{
                        display: inline-block;
                        font-size: .75rem;
                        font-style: italic;
                        margin-top: .5rem;
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

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            .details{
                padding: 3rem 1rem 2rem;
                
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

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        
    }
</style>