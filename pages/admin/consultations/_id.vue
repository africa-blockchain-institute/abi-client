<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Consultation Details</h1>
        </div>

        <div class="consultation shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-lg-10 mx-auto consultation__info">
                        <div class="row">
                            <div class="col-md-4">
                                <small class="consultation__info--title"> Name</small>
                                <p class="consultation__info--info">{{ consultation.name }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="consultation__info--title"> Email Address</small>
                                <p class="consultation__info--info">{{ consultation.email }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="consultation__info--title"> Phone Number </small>
                                <p class="consultation__info--info">{{ consultation.contact_number }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <small class="consultation__info--title"> Job Title</small>
                                <p class="consultation__info--info">{{ consultation.job_title }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="consultation__info--title"> Company Name</small>
                                <p class="consultation__info--info">{{ consultation.company_name }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="consultation__info--title"> How did you hear about us?</small>
                                <p class="consultation__info--info">{{ consultation.hear_about_us }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <small class="consultation__info--title"> Message </small>
                                <p class="consultation__info--info">{{ consultation.message }} </p>
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
                title: 'Consultation Details -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Consultations Details',
                        content: 'Consultations Details'
                    }
                ],
            }
        },

        data(){
            return {
                consultation: {}
            }
        },

        created(){
            this.getDoc()
        },

        methods:{
            async getDoc(){
                let consultation = await this.$axios.$get(`/consultations/${this.$route.params.id}`)
                this.consultation = consultation.data;
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

        .consultation{
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

            .consultation{
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