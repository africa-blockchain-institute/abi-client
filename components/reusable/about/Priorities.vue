<template>
    <div class="wrapper">
        <div class="sect">
            <div class="container">
                <div class="row sect__body">
                    <div class="col-12">
                        <div class="row sect__content">
                            <div class="col-md-6 col-xl-5 order-1 order-md-1 sect__content--img px-lg-5">
                                <img src="~/assets/images/about/about-training.jpg" alt="about abi-mission" class="img-fluid">
                            </div>
                            <div class="col-md-6 col-xl-5 order-2 order-md-2 sect__content--text px-lg-5">
                                <h3 class="title">Training</h3>
                                <p class="body">Africa Blockchain Institute runs educational programs, and courses to upskill young professionals, students, tech entrepreneurs, including government officials, to be able to handle emerging technology as, Blockchain, for the Future of Work.</p>
                            </div>
                        </div>
                            
                        <div class="row sect__content">
                            <div class="col-md-6 col-xl-5 order-2 order-md-1  sect__content--text px-lg-5">
                                <h3 class="title">Research</h3>
                                <p class="body">Africa Blockchain Institute research accommodates in-house and externally-based scholars from across the world. These disciplines include key component function as Decentralize Finance, Web3, Cryptocurrency, DApps, Cryptography, Smart Contract, Regulations, and industry focus. The investigations of these scholars attempt to clarify the foundations of Blockchain Technology in Africa.</p>
                            </div>
                            <div class="col-md-6 col-xl-5 order-1 order-md-2  sect__content--img px-lg-5">
                                <img src="~/assets/images/about/about-research.jpg" alt="about abi-mission" class="img-fluid">
                            </div>
                        </div>

                        <div class="row sect__content">
                            <div class="col-md-6 col-xl-5 order-1 order-md-1 sect__content--img px-lg-5">
                                <img src="~/assets/images/about/about-deployment.jpg" alt="about abi-mission" class="img-fluid">
                            </div>
                            <div class="col-md-6 col-xl-5 order-2 order-md-2 sect__content--text px-lg-5">
                                <h3 class="title">Deployment</h3>
                                <p class="body">Africa Blockchain Institute is core on deploying Blockchain solutions across relevant government agencies, multinationals, and business organizations, in bringing them closer to digital transformation. We assist interested organizations in deploying relevant blockchain solutions in transforming their businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- about section starts -->
        <About />
        <!-- about section ends -->
    </div>
</template>

<script>
    import About from '~/components/reusable/about/About.vue';

    export default {
        components:{
            About
        }
    }
</script>

<style lang="scss" scoped>
    .sect{
        &__body{
            margin: 2rem auto;
        }

        &__content{
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;

            &--img{
                margin-bottom: 1rem;
            }

            &--text{
                .title{
                    font-weight: bold;
                    font-size: $font-hd;
                    margin-bottom: .25rem;
                }

                .body{
                    font-size: $font-rg;
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .sect{
            &__nav{
                margin: 3rem auto 2rem;

                &--link{
                    a{
                        padding: .5rem 1.5rem;
                    }
                }
            }

            &__info{
                margin: 2rem auto;

                &--text{
                    font-size: $font-rg;
                }
            }

            &__content{
                margin-bottom: 5rem;

                &--img{
                    margin-bottom: 0;
                }

                &--text{
                    .title{
                        font-weight: bold;
                        font-size: $font-hd;
                        margin-bottom: 1rem;
                    }

                    .body{
                        font-size: $font-rg;
                    }
                }
            }
        }            
    }
</style>