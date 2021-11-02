<template>
    <div class="sect">
        <div class="container">
            <div class="row sect__body">
                <div class="col-12">
                    <div class="row sect__content">
                        <div class="col-md-6 col-xl-5 order-1 order-md-1 sect__content--img px-lg-5">
                            <img src="~/assets/images/about/about-community.jpg" alt="about abi-mission" class="img-fluid">
                        </div>
                        <div class="col-md-6 col-xl-5 order-2 order-md-2 sect__content--text px-lg-5">
                            <h3 class="title">Community</h3>
                            <p class="body">Founded to accelerate the Africa’s Industrial Revolution, ABI is profoundly African. With ingenuity and drive, our graduates have led innovations at work place, launched new ventures, and contributed to national policies. </p>
                            <p class="body">At the same time, and without the slightest sense of contradiction, ABI is profoundly global. Our community gains tremendous strength as a magnet for talent from around the world. Through teaching, research, and innovation, ABI’s exceptional community pursues its mission of service to Africa and the world.</p>
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
                margin: 2rem auto;

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