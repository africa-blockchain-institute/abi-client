<template>
    <div class="access">
        <div class="container">
            <div class="row">
                <div class="col-12 access__head">
                    <h1 class="access__head--title">With Africa Blockchain Institute, <br> you have access to:</h1>
                </div>
                <div class="col-12 access__body">
                    <div class="row access__content">
                        <div class="col-md-6 col-xl-5 order-2 order-md-1 access__content--text px-lg-5">
                            <div class="">
                                <h3 class="title">Use Cases/ Applications</h3>
                                <p class="body">With real world projects and immersive content built in partnership with top tier Blockchain solutions companies, you’ll be able to master the tech skills for a career in this dynamic space.</p>
                            </div>
                            <div class="">
                                <h3 class="title">In Person Collaboration</h3>
                                <p class="body">Work with instructors and peers to complete projects, overcome challenges, and master new concepts</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-5 order-1 order-md-2 access__content--img px-lg-5">
                            <img src="~/assets/images/about/about-1.jpg" alt="about abi-mission" class="img-fluid">
                        </div>
                    </div>

                    <div class="row access__content">
                        <div class="col-md-6 col-xl-5 access__content--img px-lg-5" >
                            <img src="~/assets/images/about/about-2.jpg" alt="about abi-mission" class="img-fluid">
                        </div>
                        <div class="col-md-6 col-xl-5 access__content--text px-lg-5">
                            <div class="alt">
                                <h3 class="title">Better Jobs</h3>
                                <p class="body">Career-seeking and job-ready graduates found a new, better job within six months of graduation, plus average salary increase.</p>
                            </div>
                            <div class="alt">
                                <h3 class="title">Enterprise</h3>
                                <p class="body">Blockchain Businesses and StartUps receive supports to transform their workforce and build agility into the organization so they can operate at scale.</p>
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

}
</script>

<style lang="scss">
    .access{
        background-color: #F1F8FD;
        padding: 3rem 1rem;

        &__head{
            text-align: center;
            margin-bottom: 1rem;

            &--title{
                font-weight: bold;
                font-size: $font-hd;
            }
        }

        &__body{
            margin: 1rem auto;
        }

        &__content{
            justify-content: center;
            align-items: center;
            margin-bottom: 2rem;

            &--img{
                margin-bottom: 1rem;
            }

            &--text{
                div{
                    margin-bottom: 1.5rem;

                    &.alt{
                        text-align: left;
                    }
                }

                .title{
                    font-weight: bold;
                    font-size: $font-rg;
                    margin-bottom: .25rem;
                }

                .body{
                    font-size: $font-rg;
                }
            }
        }
    }

    @media (min-width: 992px) { 
        .access{
            padding: 5rem 1rem 1rem;

            &__head{
                margin-bottom: 3rem;

                &--title{
                    font-size: $font-md;
                }
            }

            &__body{
                margin: 2rem auto;
            }

            &__content{
                margin-bottom: 5rem;

                &--text{
                    div{
                        margin-bottom: 2rem;

                        &.alt{
                            text-align: right;
                        }
                    }

                    .title{
                        font-size: $font-hd;
                    }

                    .body{
                        font-size: $font-rg;
                    }
                }
            }
        }
    }
</style>