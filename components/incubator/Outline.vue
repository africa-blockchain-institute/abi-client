<template>
    <div class="outline">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-4 outline__img">
                    <img src="~/assets/images/incubator/images/outline.jpg" alt="" class="img-fluid">
                </div>
                <div class="col-lg-7 outline__text">
                    <h1 class="outline__text--title">The Africa Blockchain Incubation Program</h1>
                    <p class="outline__text--sub">The Africa Blockchain Incubation Program is a four-month intensive program designed to help participants develop and launch their blockchain projects. Selected participants will receive training, mentorship, and resources to help bring their ideas to fruition.</p>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="outline__text--item">
                                <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                                <h4>Access to a network of industry experts and mentors</h4>
                            </div>
                            <div class="outline__text--item">
                                <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                                <h4>Training sessions on blockchain technology and business/entrepreneurship</h4>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="outline__text--item">
                                <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                                <h4>Opportunities to pitch to potential investors</h4>
                            </div>
                            <div class="outline__text--item">
                                <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                                <h4>Regular check-ins and progress reviews with program mentors</h4>
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
        name: 'Outline',
    }
</script>

<style lang="scss" scoped>
    .outline {
        padding: 2rem 0;

        &__img{
            display: none;
        }

        &__text{
            color: $white;

            &--title{
                font-size: $font-md;
                font-weight: 800;
                line-height: 1.2;
                margin-bottom: 1rem;
                background: linear-gradient(91.49deg, #F68634 31.85%, #6DE0F6 76.5%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            &--sub{
                margin-bottom: 2rem;
            }

            &--item{
                display: flex;
                margin-bottom: 1rem;
                
                img {
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-right: .5rem;
                    margin-top: .15rem;
                }
                
                h4 {
                    font-size: $font-rg;
                    font-weight: bold;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .outline {
            padding: 5rem 1rem;

            &__img{
                display: block;
            }

            &__text{
                &--title{
                    font-size: $font-lg;
                }

                &--sub{
                    margin-bottom: 2rem;
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>