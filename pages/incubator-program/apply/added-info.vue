<template>
    <div class="wrapper">
         <!-- hero section starts -->
        <HeroIncubator />
        <!-- hero section ends -->

        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Section E: Additional Information</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="submit()">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="team_history" class="form-label">Team History <span>*</span> </label>
                                    <textarea class="form-control" name="team_history" id="team_history" cols="30" rows="3" v-model="form.team_history" placeholder="How did you meet? What brought you together? (If it is Individual Application, tell us about yourself/background)" required></textarea>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label">Upload Pitch Deck <span>*</span></label>
                                        <input class="form-control form-control-lg" type="file" ref="doc" :required="checkPitchDeck"
                                        @change="uploadPitchDeck" :class="{'is-invalid': imageErr }">
                                        <div class="invalid-feedback">{{ this.imageErr }} </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label">Upload Additional Documentation <span>*</span></label>
                                        <input class="form-control form-control-lg" type="file" ref="doc" :required="checkAddedDoc"
                                        @change="uploadAddedDoc" :class="{'is-invalid': imageErrDoc }">
                                        <div class="invalid-feedback">{{ this.imageErrDoc }} </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="additional_links" class="form-label">Additional links <span>*</span> </label>
                                    <textarea class="form-control" name="additional_links" id="additional_links" cols="30" rows="3" v-model="form.additional_links" placeholder="Kindly provide links." required></textarea>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="hear_about_us" class="form-label">How did you hear about us?*<span>*</span> </label>
                                    <input type="text" name="hear_about_us" id="hear_about_us" class="form-select form-select-lg" v-model="form.hear_about_us" required>
                                </div>
                            </div>
                     
                            <div class="row">
                                <div class="col-12">
                                    <nuxt-link to="/incubator-program/apply/legal" class="btn details__form--btn float-start"> Back to Section D</nuxt-link>
                                    <button class="btn details__form--btn float-end"> <span class="fas fa-spinner fa-spin" v-if="loading"></span> Submit</button>
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
                title: 'Section E - Incubator Program -  Africa Blockchain Institute',
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
                    team_history: "",
                    hear_about_us: "",
                    additional_links: "",
                    pitch_deck: "",
                    additional_doc: "",
                },

                imageErr: "",
                imageErrDoc: "",
                checkPitchDeck: true,
                checkAddedDoc: true,
            }
        },

        mounted(){
            if(localStorage.hasOwnProperty("incubator-program")){
                this.form = JSON.parse(localStorage.getItem("incubator-program"))

                if(this.form.pitch_deck) this.checkPitchDeck = false;
                else this.checkPitchDeck = true;

                if(this.form.additional_doc) this.checkAddedDoc = false;
                else this.checkAddedDoc = true;
            }
        },

        methods:{
            uploadPitchDeck(e){
                // const image = e.target.files[0];
                const image = this.$refs.image.files[0]; 

                if(image.type.startsWith('image')){
                    if(image.size <= 5000000){
                        const reader = new FileReader();
                        reader.readAsDataURL(image);

                        reader.onload = e =>{
                            this.form.pitch_deck = e.target.result;
                        };

                        this.status = false;
                    }else {
                        this.imageErr = "Image Size Must be less than 5mb"
                    }
                }else {
                    this.imageErr = "File Must be of an Image format (PNG, JPG, JPEG)"
                }
            },

            uploadAddedDoc(e){
                // const image = e.target.files[0];
                const image = this.$refs.image.files[0]; 

                if(image.type.startsWith('image')){
                    if(image.size <= 5000000){
                        const reader = new FileReader();
                        reader.readAsDataURL(image);

                        reader.onload = e =>{
                            this.form.additional_doc = e.target.result;
                        };

                        this.status = false;
                    }else {
                        this.imageErrDoc = "Image Size Must be less than 5mb"
                    }
                }else {
                    this.imageErrDoc = "File Must be of an Image format (PNG, JPG, JPEG)"
                }
            },

            async submit(){
                this.loading = true;

                localStorage.setItem("incubator-program", JSON.stringify(this.form));

                function dataURItoBlob(dataURI) {
                    // convert base64 to raw binary data held in a string
                    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
                    var byteString = atob(dataURI.split(',')[1]);

                    // separate out the mime component
                    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                    // write the bytes of the string to an ArrayBuffer
                    var ab = new ArrayBuffer(byteString.length);
                    var ia = new Uint8Array(ab);
                    for (var i = 0; i < byteString.length; i++) {
                        ia[i] = byteString.charCodeAt(i);
                    }
                    //New Code
                    return new Blob([ab], {type: mimeString});
                }

                const passportImg = dataURItoBlob(this.form.passport);
                const pitch_deckImg = dataURItoBlob(this.form.pitch_deck);
                const additional_docImg = dataURItoBlob(this.form.additional_doc);
            
                var formData = new FormData();
            
                // Create formdata object and append the object file
                formData.append("passport", passportImg);
                formData.append("pitch_deck", pitch_deckImg);
                formData.append("additional_doc", additional_docImg);

                formData.append("team_history", this.form.team_history);
                formData.append("hear_about_us", this.form.hear_about_us);
                formData.append("additional_links", this.form.additional_links);
                formData.append("legal_entity", this.form.legal_entity);
                formData.append("legal_type", this.form.legal_type);
                formData.append("market_size", this.form.market_size);
                formData.append("competitors", this.form.competitors);
                formData.append("success_factors", this.form.success_factors);
                formData.append("right_team", this.form.right_team);
                formData.append("business_challenges", this.form.business_challenges);
                formData.append("webpage_url", this.form.webpage_url);
                formData.append("target_group", this.form.target_group);
                formData.append("revenue_streams", this.form.revenue_streams);
                formData.append("focus_area", this.form.focus_area);
                formData.append("company_desc", this.form.company_desc);
                formData.append("company_why", this.form.company_why);
                formData.append("problem_solution", this.form.problem_solution);
                formData.append("approach_standout", this.form.approach_standout);
                formData.append("application_goals", this.form.application_goals);
                formData.append("early_state", this.form.early_state);
                formData.append("taken_investment", this.form.taken_investment);
                formData.append("application_type", this.form.application_type);
                formData.append("name", this.form.name);
                formData.append("phone_number", this.form.phone_number);
                formData.append("email", this.form.email);
                formData.append("gender", this.form.gender);
                formData.append("dob", this.form.dob);
                formData.append("address", this.form.address);
                formData.append("citizenship", this.form.citizenship);
                formData.append("co_founder", this.form.co_founder);
                formData.append("github", this.form.github);
                formData.append("linkedin", this.form.linkedin);
                formData.append("linkedin_founder", this.form.linkedin_founder);

                await this.$axios.$post('/entries', formData);

                this.$toast.success('Congratulations! Application submitted successfully.', { icon : 'check' });
        
                this.$router.push({ name: "incubator-program-apply" });
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