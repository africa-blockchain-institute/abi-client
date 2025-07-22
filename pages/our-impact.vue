<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :desc="hero.desc" :image="hero.image" />
        <!-- hero section ends -->

        <!-- about section starts -->
        <div class="impact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-9 impact__body">
                        <p class="impact__body--text">Through strategic partnerships, technical trainings, and thought leadership, ABI has empowered thousands of developers, entrepreneurs, academic scholars, and policymakers with the knowledge and tools to harness blockchain for real-world problem solving. From supporting the creation of national blockchain strategies to incubating locally driven solutions, ABI has become a catalyst for inclusive digital transformation in Africa.</p>
                        <p class="impact__body--text">ABI will continue to transform lives by equipping individuals and institutions with the capacity to innovate, deploying blockchain solutions that address pressing socio-economic challenges, and fostering a resilient, policy-aligned ecosystem that enables sustainable digital progress across the continent.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- about section ends -->

        <!-- carousel section starts -->
        <div class="carousel">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 carousel__slider">
                        <Carousel />
                    </div>

                    <div class="col-12 text-center">
                        <nuxt-link to="/gallery" class="btn carousel__btn">View Gallery</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- carousel section ends -->
        
        <!-- <Aside2
            title="Download Our Impact Report – A Demi-Decade of Transformation"
            image="impact/report.png"
            text1="<p>We are excited to share with you our Impact Report, a comprehensive reflection of our five-year journey driving blockchain innovation across Africa. This landmark report highlights our strides in research, education, incubation, and policy advocacy, detailing how ABI has empowered thousands of developers, entrepreneurs, and policymakers, and cultivated a new generation of blockchain changemakers. From launching Africa’s first accredited Master’s program in Blockchain Technology to forming strategic partnerships such as our MoU with the Government of Rwanda, ABI has consistently pushed the boundaries of what is possible with decentralized technology.</p>"
            text2="<p>Whether you're a policymaker, educator, tech enthusiast, or ecosystem stakeholder, this report offers valuable insights into how blockchain is being used to solve some of Africa’s most pressing challenges, and beyond. Dive into the stories, milestones, and metrics that define our collective progress.</p>"
            linkText="Download Impact Report"
            linkUrl="/impact-report"
        /> -->
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';
    import About from '~/components/reusable/about/About.vue';
    import Aside from '~/components/reusable/programs/Aside.vue';
    import Aside2 from '~/components/reusable/programs/Aside2.vue';
    import Carousel from '~/components/reusable/Carousel.vue';

    export default {
        head(){
            return{
                title: 'Our Impact -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Our Impact',
                        content: 'Our Impact'
                    }
                ],
            }
        },

        data(){
            return{
                hero:{
                    title: "Transforming Lives Through Blockchain",
                    image: "impact",
                    desc: "Empowering communities, fostering innovation, and advocating for inclusive policy through the limitless potential of blockchain technology",
                }
            }
        },

        components: {
            Hero, About, Aside, Aside2, Carousel
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .impact {
            padding: 2rem 1rem;
            background-color: $primary-light;

            &__body {
                text-align: center;
                
                &--text {
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.8;
                }
            }
        }

        .carousel {
            padding: 2rem 1rem;

            &__slider {
                margin-bottom: 2rem;
                text-align: center;
            }
            
            &__btn {
                @include button();
                margin-top: 1rem;
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper{
            .impact {
                padding: 2rem 1rem;

                &__body {                    
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }

            .carousel {
                padding: 3rem 1rem;

                &__slider {
                    margin-bottom: 2rem;
                    text-align: center;
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .wrapper{
            .impact {
                padding: 3rem 1rem;

                &__body {                    
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }

            .carousel {
                padding: 3rem 1rem;
            }
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper{
            .impact {
                padding: 4rem 1rem;

                &__body {                    
                    &--text {
                        font-size: 1.2rem;
                        line-height: 1.8;
                    }
                }
            }

            .carousel {
                padding: 4rem 1rem;
            }
        }
    }
</style>