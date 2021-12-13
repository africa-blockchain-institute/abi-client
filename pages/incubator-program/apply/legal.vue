<template>
    <div class="wrapper">
         <!-- hero section starts -->
        <HeroIncubator />
        <!-- hero section ends -->

        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Section D: Legal</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="submit()">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="legal_entity" class="form-label">Have you incorporated or formed any legal entity yet?*<span>*</span> </label>
                                    <select name="legal_entity" id="legal_entity" class="form-select form-select-lg" v-model="form.legal_entity" required>
                                        <option disabled>Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="legal_type" class="form-label">If you answered “Yes”, please specify the type <span>*</span> </label>
                                    <textarea class="form-control" name="legal_type" id="legal_type" cols="30" rows="3" v-model="form.legal_type" placeholder="Kindly provide name and links."></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <nuxt-link to="/incubator-program/apply/market-entry" class="btn details__form--btn float-start"> Back to Section C</nuxt-link>
                                    <button class="btn details__form--btn float-end"> <span class="fas fa-spinner fa-spin" v-if="loading"></span> Save and Continue</button>
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
                title: 'Section D - Incubator Program -  Africa Blockchain Institute',
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
                    legal_entity: "", 
                    legal_type: "", 
                },
            }
        },

        mounted(){
            if(localStorage.hasOwnProperty("incubator-program")){
                this.form = JSON.parse(localStorage.getItem("incubator-program"))
            }
        },

        methods:{
            submit(){
                this.loading = true;

                localStorage.setItem("incubator-program", JSON.stringify(this.form));

                if(localStorage.hasOwnProperty("incubator-program")){
                    this.$toast.success('Saved Successfully! Proceed to Section E.', { icon : 'check' });

                    this.$router.push({ name: "incubator-program-apply-added-info" })
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