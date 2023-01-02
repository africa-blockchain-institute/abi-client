<template>
    <div class="hero">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 col-xxl-5 hero__text">
                    <h4 class="hero__text--call">{{ call_text }}</h4>
                    <h1 class="hero__text--title">{{ title }}</h1>
                    <p class="hero__text--sub">{{ subtitle }} </p>
                    <a :href="link" target="blank" class="hero__idea--btn btn">Register Now</a>
                </div>
                <div class="col-md-6 col-xxl-6 hero__img">
                    <img :src="require(`~/assets/images/incubator/images/${hero_image}`)" alt="" class="img-fluid">
                  </div>
            </div>

            <div class="row">
                <div class="col-lg-7 mx-auto text-center hero__idea">
                    <h3 class="hero__idea--title">{{ idea_title }} </h3>
                    <p class="hero__idea--text">{{ idea_subtitle  }} </p>
                    <a :href="link" target="blank" class="hero__idea--btn btn">Apply Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Incubator-Program',

        props: {
            title: {
                type: String,
                default: 'Africa Blockchain Incubation Program 2023'
            },
            subtitle: {
                type: String,
            },
            link: {
                type: String,
            },
            hero_image: {
                type: String,
            },
            call_text: {
                type: String,
            },
            idea_title: {
                type: String,
            },
            idea_subtitle: {
                type: String,
            },
        }
    }
</script>

<style lang="scss" scoped>
    .hero {
        padding: 2rem 0;

        &__text {
            color: #fff;
            margin-bottom: 2rem;
            
            &--title {
                font-size: $font-md;
                font-weight: 800;
                line-height: 1.2;
                margin-bottom: 1.2rem;
                background: linear-gradient(91.49deg, #F68634 31.85%, #6DE0F6 76.5%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            &--sub {
                font-size: $font-rg;
                line-height: 1.5;
            }

            &--call {
                font-size: 1rem;
                font-weight: bold;
                line-height: 1.5;
            }
        }

        &__img{
            margin: 0 auto;
            margin-bottom: 2rem;
        }

        &__idea{
            color: $white;

            &--title{
                font-size: $font-hd;
                font-weight: 800;
                margin-bottom: 1.2rem;
            }
            
            &--text{
                margin-bottom: 1.5rem;
            }

            &--btn{
                @include button();
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .hero {
            padding: 3rem 0;

            &__text {
                &--title {
                    font-size: $font-lg;
                }
            }

            &__idea{
                margin-top: 2rem;

                &--title {
                    font-size: $font-md;
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .hero {
            padding: 4rem 0 2rem;

            &__text {
                &--title {
                    font-size: $font-xl;
                }
            }

            &__img{
                display: block;
            }

            &__idea{
                margin-top: 4rem;

                &--title {
                    font-size: $font-lg;
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .hero {
            padding: 5rem 0 2rem;

            &__idea{
                margin-top: 5rem;

                &--title {
                    font-size: $font-lg;
                }
            }
        }
    }
</style>