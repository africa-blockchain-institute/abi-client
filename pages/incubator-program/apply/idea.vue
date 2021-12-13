<template>
    <div class="wrapper">
         <!-- hero section starts -->
        <HeroIncubator />
        <!-- hero section ends -->

        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Section B: Company / Idea</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="submit()">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="focus_area" class="form-label">Focus Area<span>*</span> </label>
                                    <select name="focus_area" id="focus_area" class="form-select form-select-lg" v-model="form.focus_area" required>
                                        <option disabled>Select Option</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="Agriculture">Agriculture</option>
                                        <option value="e-Commerce">e-Commerce</option>
                                        <option value="e-Sporting">e-Sporting</option>
                                        <option value="Financial Inclusion">Financial Inclusion</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="company_desc" class="form-label">Please provide us a short description of your company or the project you are working on.<span>*</span> </label>
                                    <textarea class="form-control" name="company_desc" id="company_desc" cols="30" rows="3" v-model="form.company_desc" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="company_why" class="form-label">What is the "why" behind your company/project? (Vision &amp; Mission).<span>*</span> </label>
                                    <textarea class="form-control" name="company_why" id="company_why" cols="30" rows="3" v-model="form.company_why" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="problem_solution" class="form-label">Problem/Solution: What is the problem you are solving? <span>*</span> </label>
                                    <textarea class="form-control" name="problem_solution" id="problem_solution" cols="30" rows="3" v-model="form.problem_solution" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="approach_standout" class="form-label">What makes your approach stand out? <span>*</span> </label>
                                    <textarea class="form-control" name="approach_standout" id="approach_standout" cols="30" rows="3" v-model="form.approach_standout" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="early_state" class="form-label">Please indicate that your project is early-stage (i.e. pre-seed / seed) <span>*</span> </label>
                                    <select name="early_state" id="early_state" class="form-select form-select-lg" v-model="form.early_state" required>
                                        <option disabled>Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="taken_investment" class="form-label">Have you taken any investment yet? <span>*</span> </label>
                                    <select name="taken_investment" id="taken_investment" class="form-select form-select-lg" v-model="form.taken_investment" required>
                                        <option disabled>Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="application_goals" class="form-label">What is your goal when applying for the incubator program <span>*</span> </label>
                                    <textarea class="form-control" name="application_goals" id="application_goals" cols="30" rows="3" v-model="form.application_goals" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <nuxt-link to="/incubator-program/apply" class="btn details__form--btn float-start"> Back to Section A</nuxt-link>
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
                title: 'Section B - Incubator Program -  Africa Blockchain Institute',
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
                    focus_area: "",
                    company_desc: "",
                    company_why: "", 
                    problem_solution: "", 
                    approach_standout: "", 
                    application_goals: "", 
                    early_state: "", 
                    taken_investment: "", 
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
                    this.$toast.success('Saved Successfully! Proceed to Section C.', { icon : 'check' });

                    this.$router.push({ name: "incubator-program-apply-market-entry" })
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