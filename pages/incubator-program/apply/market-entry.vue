<template>
    <div class="wrapper">
         <!-- hero section starts -->
        <HeroIncubator />
        <!-- hero section ends -->

        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 details__head">
                        <h2 class="details__head--title">Section C: Market Entry</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 details__form">
                        <form action="" @submit.prevent="submit()">
                            
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="market_size" class="form-label">Who are your customers? How large is or can the market be and is it growing? <span>*</span> </label>
                                    <textarea class="form-control" name="market_size" id="market_size" cols="30" rows="3" v-model="form.market_size" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="competitors" class="form-label">Who are your competitors, and who might become competitors? How do you differentiate yourselves? <span>*</span> </label>
                                    <textarea class="form-control" name="competitors" id="competitors" cols="30" rows="3" v-model="form.competitors" placeholder="Kindly provide name and links." required></textarea>
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="success_factors" class="form-label">What are success factors of the project? <span>*</span> </label>
                                    <textarea class="form-control" name="success_factors" id="success_factors" cols="30" rows="3" v-model="form.success_factors" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="right_team" class="form-label">Why are you the right team to be successful in your market? What makes you special? <span>*</span> </label>
                                    <textarea class="form-control" name="right_team" id="right_team" cols="30" rows="3" v-model="form.right_team" placeholder="Kindly provide name and links." required></textarea>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="webpage_url" class="form-label">If you have a Webpage/Demo, please provide the URL</label>
                                    <input type="url" v-model.trim="form.webpage_url" class="form-control form-control-lg" placeholder="https://www.domain.tld" id="webpage_url">
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="business_challenges" class="form-label">List some business challenges you see when building out this product/service <span>*</span> </label>
                                    <textarea class="form-control" name="business_challenges" id="business_challenges" cols="30" rows="3" v-model="form.business_challenges" placeholder="Kindly provide name and links." required></textarea>
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="target_group" class="form-label">What is the current target group of users/customers <span>*</span> </label>
                                    <textarea class="form-control" name="target_group" id="target_group" cols="30" rows="3" v-model="form.target_group" placeholder="e.g. B2B, B2C, SME's etc." required></textarea>
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="revenue_streams" class="form-label">What are your (future) revenue model/streams? <span>*</span> </label>
                                    <textarea class="form-control" name="revenue_streams" id="revenue_streams" cols="30" rows="3" v-model="form.revenue_streams" placeholder="Provide your answer" required></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <nuxt-link to="/incubator-program/apply/idea" class="btn details__form--btn float-start"> Back to Section B</nuxt-link>
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
                title: 'Section C - Incubator Program -  Africa Blockchain Institute',
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
                    market_size: "",
                    competitors: "",
                    success_factors: "",
                    right_team: "",
                    business_challenges: "",
                    webpage_url: "",
                    target_group: "",
                    revenue_streams: "",
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
                    this.$toast.success('Saved Successfully! Proceed to Section D.', { icon : 'check' });

                    this.$router.push({ name: "incubator-program-apply-legal" })
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