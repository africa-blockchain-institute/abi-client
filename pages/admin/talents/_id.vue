<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Find Talent Details</h1>
        </div>

        <div class="talent shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-lg-10 mx-auto talent__info">
                        <div class="row">
                            <div class="col-md-4">
                                <small class="talent__info--title"> Job Title</small>
                                <p class="talent__info--info">{{ talent.job_title }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="talent__info--title"> Company Name</small>
                                <p class="talent__info--info">{{ talent.company_name }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="talent__info--title"> Location Requirements</small>
                                <p class="talent__info--info">{{ talent.location_requirements }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <small class="talent__info--title"> Engagement</small>
                                <p class="talent__info--info">{{ talent.engagement }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="talent__info--title"> Skills</small>
                                <p class="talent__info--info">{{ talent.skills }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="talent__info--title"> Salary Range </small>
                                <p class="talent__info--info">{{ talent.salary_range }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <small class="talent__info--title"> No of Talents</small>
                                <p class="talent__info--info">{{ talent.no_of_talents }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="talent__info--title"> Website</small>
                                <p class="talent__info--info">{{ talent.website }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="talent__info--title"> Contact Person </small>
                                <p class="talent__info--info">{{ talent.contact_person }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <small class="talent__info--title"> Contact Email </small>
                                <p class="talent__info--info">{{ talent.contact_email }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="talent__info--title"> Contact Number </small>
                                <p class="talent__info--info">{{ talent.contact_number }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <small class="talent__info--title"> About Company </small>
                                <p class="talent__info--info">{{ talent.about_company }} </p>
                            </div>

                            <div class="col-12">
                                <small class="talent__info--title"> Job Description </small>
                                <p class="talent__info--info">{{ talent.job_description }} </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'admin',

        head(){
            return{
                title: 'Talent Details -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Talents Details',
                        content: 'Talents Details'
                    }
                ],
            }
        },

        data(){
            return {
                talent: {}
            }
        },

        created(){
            this.getDoc()
        },

        methods:{
            async getDoc(){
                let talent = await this.$axios.$get(`/talents/${this.$route.params.id}`)
                this.talent = talent.data;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        &__head{
            margin: 1rem auto 2rem;
            
            &--title{
                font-weight: bold;
                font-size: $font-hd;
            }
        }

        .talent{
            padding: 2rem 0rem;

            &__img{
                text-align: center;

                img{
                    width: 7rem;
                    margin-bottom: 2rem;
                }
            }

            &__info{
                &--head{
                    font-size: $font-hd;
                    font-weight: bold;
                    margin-bottom: 3rem;
                }

                &--title{
                    font-size: $font-rg;

                }

                &--info{
                    font-size: 1rem;
                    font-weight: bold;
                }
            }

            &__table{
                &--row{
                    &:hover{
                        background: $primary-light;
                    }

                    .btn{
                        color: white;
                        padding: .25rem .5rem;
                        box-shadow: none;
                        font-size: .8rem;
                        margin-bottom: .25rem;
                    }
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 769px) {  
        .wrapper{
            &__head{
                margin: 2rem auto 3rem;
                
                &--title{
                    font-size: $font-md;
                }
            }

            .talent{
                padding: 3rem 2rem;

                &__info{
                    &--head{
                        font-size: $font-hd;
                        margin-bottom: 3rem;
                    }

                    .row{
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: $font-rg;
                    }

                    &--info{
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>