<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Payment Details</h1>
        </div>

        <div class="payment shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-lg-10 mx-auto payment__info">
                        <div class="row">
                            <div class="col-md-4">
                                <small class="payment__info--title"> Course Title</small>
                                <p class="payment__info--info">{{ payment.course.title }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="payment__info--title"> Course Category</small>
                                <p class="payment__info--info">{{ payment.course.category }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="payment__info--title"> User Email Address</small>
                                <p class="payment__info--info">{{ payment.email }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="payment__info--title"> Amount </small>
                                <p class="payment__info--info">{{ payment.amount | moneyFormat }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="payment__info--title"> Transaction Reference </small>
                                <p class="payment__info--info">{{ payment.tx_ref }} </p>
                            </div>
                            <div class="col-md-4">
                                <small class="payment__info--title"> Payment Date </small>
                                <p class="payment__info--info">{{ payment.createdAt | formatDateUTC }} </p>
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
                title: 'Payment Details -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Payments Details',
                        content: 'Payments Details'
                    }
                ],
            }
        },

        data(){
            return {
                payment: {}
            }
        },

        created(){
            this.getDoc()
        },

        methods:{
            async getDoc(){
                let payment = await this.$axios.$get(`/payments/${this.$route.params.id}`)
                this.payment = payment.data;
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

        .payment{
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

            .payment{
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