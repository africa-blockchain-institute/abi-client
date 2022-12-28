<template>
    <div class="list">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 list__head">
                    <h2 class="list__head--title">Benefits of Registering for the Incubation Program</h2>
                    <p class="list__head--sub">Selected participants will enjoy the following benefits which to help bring their ideas to fruition.</p>
                </div>
            </div>

            <div class="row row-cols-2 row-cols-md-3 row-cols-md-4 justify-cotent-center list__content">
                <div class="col list__content--sect">
                    <div class="card h-100">
                        <img src="~/assets/images/incubator/icons/blockchain1.png" alt="">
                        <h3>Blockchain Technology</h3>
                        <p>Participants will be provided with overall insight into blockchain technology and connections with the industry.</p>
                    </div>
                </div>

                <div class="col list__content--sect">
                    <div class="card h-100">
                        <img src="~/assets/images/incubator/icons/education1.png" alt="">
                        <h3>Business Education</h3>
                        <p>Participants will be provided with business knowledge, industry connections, and an introduction to investors.</p>
                    </div>
                </div>

                <div class="col list__content--sect">
                    <div class="card h-100">
                        <img src="~/assets/images/incubator/icons/platform1.png" alt="">
                        <h3>Platform Support</h3>
                        <p>Product development support from leading blockchain platform providers.</p>
                    </div>
                </div>

                <div class="col list__content--sect">
                    <div class="card h-100">
                        <img src="~/assets/images/incubator/icons/support1.png" alt="">
                        <h3>Business Support</h3>
                        <p>Business development and entrepreneurship education support from business experts.</p>
                    </div>
                </div>

                <div class="col list__content--sect">
                    <div class="card h-100">
                        <img src="~/assets/images/incubator/icons/investor1.png" alt="">
                        <h3>Business Guidance and Investor Access</h3>
                        <p>Meetings with a group of highly successful entrepreneurs and investors with expertise in scaling high-tech startups.</p>
                    </div>
                </div>

                <div class="col list__content--sect">
                    <div class="card h-100">
                        <img src="~/assets/images/incubator/icons/demo1.png" alt="">
                        <h3>Demo Day</h3>
                        <p>The program concludes with a Demo Day providing startups the opportunity to pitch their business to investors, experts, and the Blockchain community.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-lg-7 mx-auto text-center list__cost">
                    <h3 class="list__cost--title">Costs to Participate</h3>
                    <p class="list__cost--text">There are a number of scholarships to participate in this program. However, if you are unable to secure one of the scholarships, you can still participate, but you will be responsible for covering the cost of participation in the program.</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVB0VI5XqOob3vow9jOz2IEmT6gN0GLl0NyzgH9A0Dqnfctw/viewform" target="blank" class="list__cost--btn btn">Apply Now</a>
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
    .list {
        padding: 3rem 0 2rem;
        background-image: url("@/assets/images/incubator/images/benefits_bg.jpg");

        &__head{
            &--title{
                font-size: $font-hd;
                font-weight: 800;
                line-height: 1.2;
                margin-bottom: 1rem;
                background: linear-gradient(91.49deg, #F68634 31.85%, #6DE0F6 76.5%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            &--sub{
                font-size: $font-rg;
                margin-bottom: 1.2rem;
                color: $white;
            }
        }

        &__content{
            &--sect{
                margin: 1rem 0;

                .card {
                    padding: 1rem .75rem;
                    background: linear-gradient(0deg, #70E8FC 0.98%, #5AB5CF 14.76%, #4584A3 30.21%, #335A7E 45.53%, #253A62 60.41%, #1B244D 74.71%, #151641 88.18%, #13113D 99.99%);
                    box-shadow: 0px 12px 40px rgba(14, 21, 56, 0.25);
                    border-radius: .5rem;
                    border: none;
                    color: #fff;
                }

                img {
                    width: 2rem;
                    height: 1.75rem;
                    margin-bottom: 1rem;
                }

                h3 {
                    font-size: $font-rg;
                    font-weight: 800;
                    margin-bottom: .5rem;
                }

                p {
                    font-size: $font-sm;
                    margin-bottom: 0;
                }
            }
        }

        &__cost{
            padding: 3rem 1rem 2rem;
            color: $white;

            &--title {
                font-size: $font-hd;
                font-weight: 800;
            }

            &--text {
                font-size: $font-rg;
            }

            &--btn {
                @include button();
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .list {
            padding: 4rem 1rem 2rem;

            &__head{
                &--title{
                    font-size: $font-md;
                }

                &--sub{
                    font-size: $font-rg;
                }
            }

            &__content{
                &--sect{
                    .card {
                        padding: 1.5rem 1.2rem;
                    }

                    img {
                        width: 2.5rem;
                        height: 2.5rem;
                        margin-bottom: 1.5rem;
                    }

                    h3 {
                        font-size: $font-rg;
                        margin-bottom: .5rem;
                    }

                    p {
                        font-size: $font-rg;
                        margin-bottom: 0;
                    }
                }
            }

            &__cost{
                padding: 5rem 1rem 2rem;

                &--title {
                    font-size: $font-hd;
                }

                &--text {
                    font-size: $font-rg;
                }

                &--btn {
                    @include button();
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .list {
            padding: 5rem 1rem 3rem;

            &__content{
                &--sect{
                    .card {
                        padding: 2rem 1.5rem;
                    }


                    h3 {
                        font-size: $font-hd;
                    }
                }
            }

            &__cost{
                &--title {
                    font-size: $font-md;
                }

                &--text {
                    font-size: $font-hd;
                    margin-bottom: 2rem;
                }
            }
        }
    }
</style>
