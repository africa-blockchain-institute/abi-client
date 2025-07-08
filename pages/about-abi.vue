<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="title" :image="image" :desc="desc" />
        <!-- hero section ends -->

        <!-- about section starts -->
        <div class="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 col-lg-4 about__header">
                        <h1 class="about__header--title">Our Story</h1>
                    </div>

                    <div class="col-12 col-md-8 col-lg-7 about__body">
                        <p class="about__body--text">
                            Our story began with the remarkable successes of the Africa Blockchain Incubation Program, an initiative that nurtured groundbreaking ideas and empowered countless innovators.
                        </p>
                        <p class="about__body--text">
                            The program’s impact resonated far and wide, and the feedback from our participants revealed a growing need for deeper engagement and sustained support.
                        </p>
                        <p class="about__body--text">
                            This inspired us to launch the ABI Venture Studio, a dynamic hub designed to serve Africa’s blockchain community by transforming innovative ideas into viable businesses.
                        </p>
                        <p class="about__body--text">
                            Positioned in Morocco, this venture studio not only strengthens ABI’s reach in Northern Africa but also acts as a beacon of entrepreneurial excellence for the region.
                        </p>
                        <p class="about__body--text">
                            The power of knowledge has always been a cornerstone of our mission. With our research publications earning acclaim across Africa and globally, the establishment of the Africa Centre of Excellence in Blockchain Research in Namibia became a natural progression.
                        </p>
                        <p class="about__body--text">
                            This centre serves the ABI’s mission in the Southern African region with a dedicated space for cutting-edge research, empowering scholars and professionals with the resources to publish more authoritative resources.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- about section ends -->

        <!-- map section starts -->
        <div class="map">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 order-2 order-md-1 map__body">
                        <p class="map__body--text">
                            As we delved deeper into blockchain’s adoption across Africa, our research unveiled a striking truth about Francophone Africa. Despite the presence of highly skilled blockchain experts, the region lacked a cohesive and collaborative ecosystem. To bridge this gap, we launched the ABI Francophone Initiative. This program unites experts, fosters collaboration, and drives sustainable blockchain activities in the region. Covering Western Africa, the initiative serves as a platform for ABI in strengthening the Francophone community’s contribution to Africa’s blockchain future.
                        </p>
                        <p class="map__body--text">
                            ABI’s headquarters in Rwanda positions us at the center of Central and Eastern Africa’s blockchain activities. From there, we oversee and coordinate the efforts of all our regional initiatives, ensuring they remain aligned with our mission to serve the entire continent. By maintaining a presence in all corners of Africa, ABI embodies the spirit of pan-Africanism, fostering unity and growth through blockchain technology.
                        </p>
                    </div>

                    <div class="col-12 col-md-4 col-lg-5 offset-lg-1 order-1 order-md-2 map__img">
                        <img src="~/assets/images/about/about-map.png" alt="map" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <!-- map section ends -->

        <!-- mission section starts -->
        <div class="mission">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-6 order-2 order-md-1 mission__body">
                        <h1 class="mission__body--title">Our Mission</h1>
                        
                        <p class="mission__body--text">
                            As we delved deeper into blockchain’s adoption across Africa, our research unveiled a striking truth about Francophone Africa. Despite the presence of highly skilled blockchain experts, the region lacked a cohesive and collaborative ecosystem. To bridge this gap, we launched the ABI Francophone Initiative. This program unites experts, fosters collaboration, and drives sustainable blockchain activities in the region. Covering Western Africa, the initiative serves as a platform for ABI in strengthening the Francophone community’s contribution to Africa’s blockchain future.
                        </p>
                        <p class="mission__body--text">
                            ABI’s headquarters in Rwanda positions us at the center of Central and Eastern Africa’s blockchain activities. From there, we oversee and coordinate the efforts of all our regional initiatives, ensuring they remain aligned with our mission to serve the entire continent. By maintaining a presence in all corners of Africa, ABI embodies the spirit of pan-Africanism, fostering unity and growth through blockchain technology.
                        </p>
                    </div>

                    <div class="col-12 col-md-4 col-lg-5 offset-lg-1 order-1 order-md-2 mission__img">
                        <img src="~/assets/images/about/about-mission.jpg" alt="mission" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <!-- mission section ends -->

        <!-- priorities section starts -->
        <div class="priorities">
            <div class="container">
                <div class="row">
                    <div class="col-12 priorities__head">
                        <h1 class="priorities__head--title">Our Priorities</h1>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-xl-2">
                    <div class="col priorities__list">
                        <div class="card h-100">
                            <div class="row align-items-end">
                                <div class="col-md-4 col-lg-5 priorities__img">
                                    <img src="~/assets/images/about/priorities-1.png" class="img-fluid">
                                </div>
                                <div class="col-md-8 col-lg-7 priorities__info bg-dange">
                                    <div class="card-body">
                                        <h5 class="priorities__info--title">Advancing Innovative Blockchain Policies</h5>
                                        <p class="priorities__info--desc">ABI is committed to creating an enabling environment for blockchain adoption by collaborating with African governments and regional bodies to develop progressive and sustainable policies. <br> Through targeted frameworks, we aim to encourage ethical use of blockchain technology while fostering innovation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col priorities__list">
                        <div class="card h-100">
                            <div class="row align-items-end">
                                <div class="col-md-4 col-lg-5 priorities__img">
                                    <img src="~/assets/images/about/priorities-2.png" class="img-fluid">
                                </div>
                                <div class="col-md-8 col-lg-7 priorities__info">
                                    <div class="card-body">
                                        <h5 class="priorities__info--title">Building a Resilient Blockchain Ecosystem</h5>
                                        <p class="priorities__info--desc">ABI currently has various communities and alumni, from our initiatives and projects, that spread across Africa. Many of which have grown in capacities, expertise, and transferable skills. Plus the partnerships with stakeholders, ABI aim to further reinforce these communities into a resilient ecosystem of collaborations and innovations that implement groundbreaking ideas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col priorities__list">
                        <div class="card h-100">
                            <div class="row align-items-end">
                                <div class="col-md-4 col-lg-5 priorities__img">
                                    <img src="~/assets/images/about/priorities-3.png" class="img-fluid">
                                </div>
                                <div class="col-md-8 col-lg-7 priorities__info">
                                    <div class="card-body">
                                        <h5 class="priorities__info--title">Deploying Sustainable Solutions</h5>
                                        <p class="priorities__info--desc">At ABI, deploying sustainable solutions is part of our core priority to harness blockchain technology for Africa’s Digital Transformation. Our approach prioritizes innovation that addresses critical socio-economic challenges while ensuring long-term viability and scalability. By focusing on real-world applications, ABI aims to demonstrate the transformative potential of blockchain technology in creating lasting impact across key sectors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- priorities section ends -->
        
        <!-- advisory section starts -->
        <Team />
        <!-- advisory section ends -->
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';
    import Team from '~/components/reusable/about/Team.vue';

    export default {
        head(){
            return{
                title: 'About ABI -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'about-abi',
                        content: 'About ABI'
                    }
                ],
            }
        },

        data(){
            return{
                title: 'About ABI',
                image: 'about',
                desc: "Africa Blockchain Institute is Africa’s foremost Blockchain Think-Tank that is Advancing Innovative Blockchain Policies, Building a Resilient Ecosystem, and Powering Sustainable Innovations for Digital Transformation in Africa."
            }
        },

         components: {
            Hero, Team,
        },

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .about {
            padding: 2rem 1rem;

            &__header {

                &--title {
                    font-weight: bold;
                    font-size: $font-hd;
                }
            }

            &__body {
                &--text {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: $dark;
                }
            }
        }

        .map {
            padding: 2rem 1rem;
            background-color: $secondary-2;

            &__img {
                margin-bottom: 2rem;
            }

            &__body {
                &--text {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: $white;
                }
            }
        }

        .mission {
            padding: 2rem 1rem;

            &__img {
                margin-bottom: 2rem;

                img {
                    border-radius: 0.5rem;
                }
            }

            &__body {
                &--title {
                    font-size: $font-hd;
                    font-weight: bold;
                }

                &--text {
                    font-size: 1rem;
                    line-height: 1.6;
                }
            }
        }

        /** priorities section ends */
        .priorities{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 1rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__list{
                margin-bottom: 2rem;
				
                .card {
                    @include card();
                    padding: 1rem;
                    color: $white;
                    background-color: $secondary-2;
                }
			}

            &__img{
                img {
                    border-radius: .75rem;
                }
            }

			&__info {
                .card-body {
                    padding: .7rem 0 0;
                }

                &--title{
                    font-size: 1rem;
                    font-weight: bold;
                }
                
                &--desc{
                    font-size: .9rem;
                    margin-bottom: 0;
                }
            }
        }
        /** priorities section ends */
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper {
            .about {
                padding: 3rem 0;

                &__header {
                    &--title {
                        font-size: $font-hd;
                    }
                }
            }

            .mission {
                padding: 3rem 0;

                &__img {
                    margin-bottom: 2rem;
                }

                &__body {
                    &--title {
                        font-size: $font-hd;
                    }

                    &--text {
                        font-size: 1rem;
                        line-height: 1.6;
                    }
                }
            }

            /** priorities section ends */
            .priorities{
                padding: 3rem 1rem;

                &__head{
                    margin-bottom: 1rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__list{
                    margin-bottom: 3rem;
                }

                &__info {
                    &--title{
                        font-size: 1.2rem;
                        margin-bottom: .5rem;
                    }
                }
            }
            /** priorities section ends */
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .wrapper {
            .about {
                &__header {
                    &--title {
                        font-size: $font-md;
                    }
                }

                &__body {
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.6;
                        color: $dark;
                    }
                }
            }

            .map {
                padding: 3rem 0;

                &__img {
                    margin-bottom: 1rem;
                }

                &__body {
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }

            .mission {
                padding: 3rem 0;

                &__body {
                    &--title {
                        font-size: $font-hd;
                    }

                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }

            /** priorities section ends */
            .priorities{
                padding: 3rem 1rem;

                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__info {
                    .card-body {
                        padding: 0 0;
                    }

                    &--title{
                        margin-bottom: .5rem;
                    }
                }
            }
            /** priorities section ends */
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper {
            .about {
                &__header {
                    &--title {
                        font-size: $font-md;
                    }
                }

                &__body {
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.6;
                    }
                }
            }


            .map {
                padding: 4rem 0;

                &__body {
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }

            .mission {
                padding: 4rem 0;

                &__body {
                    &--title {
                        font-size: $font-md;
                    }

                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }


            /** priorities section ends */
            .priorities{
                padding: 4rem 0;

                &__head{
                    &--title{
                        font-size: $font-md;
                    }
                }

                &__info {
                    padding-left: 0;

                    .card-body {
                        padding: 0 .5rem;
                    }
                }
            }
            /** priorities section ends */
        }
    }
</style>