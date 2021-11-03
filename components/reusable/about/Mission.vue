<template>
    <div class="sect">
        <div class="container">
            <div class="row sect__body">
                <div class="col-12">
                    <div class="row sect__content">
                        <div class="col-md-6 col-xl-5 order-1 order-md-1 sect__content--img">
                            <img src="~/assets/images/about/about-mission.jpg" alt="about abi-mission" class="img-fluid">
                        </div>
                        <div class="col-md-6 col-xl-5 order-2 order-md-2 sect__content--text">
                            <h3 class="title">Our Mission</h3>
                            <p class="body">We want to inspire and multiply the kind of technology disruption that furthers innovation, decentralization, and other areas of scholarship that will best serve Africa. </p>
                            <p class="body">The Institute is committed to generating strategic programs, deploying solutions, and researching policies, by working with others in solving africa’s great challenges, using blockchain technology. ABI brings together leading experts in government, business, and academia, from all over the world to provide the highest quality research, and teachings, that push the boundaries of human knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
                margin-bottom: 3rem;

                &--img{
                    padding: .5rem 3rem;
                }

                &--text{
                    padding: .5rem .5rem;

                    .title{
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

    // Large devices (desktops, 992px and up)
    @media (min-width: 1400px) { 
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
                margin-bottom: 3rem;

                &--img{
                    margin-bottom: 0;
                    padding: .5rem 3rem;
                }

                &--text{
                    padding: .5rem 3rem;

                    .title{
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