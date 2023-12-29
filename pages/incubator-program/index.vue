<template>
    <div class='wrapper'>
        <div class="hero">
            <nav class="navbar">
                <div class="container">
                    <nuxt-link to="/" class="navbar-brand navbar__logo mx-auto">
                        <img src="/logo_1.png" alt="Africa blockchain institute Logo">
                    </nuxt-link>
                </div>
            </nav>

            <div class="banner">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-7 col-lg-6 order-2 order-md-1 banner__text">
                            <h1 class="banner__text--title">Africa Blockchain <br class="d-none d-lg-block"> Incubation Program, 2024: </h1>
                            <h3 class="banner__text--sub"> Nurturing Innovators <br class="d-none d-lg-block"> Continent-wide. </h3>
                            <p class="banner__text--desc">
                                Do you have a ground-breaking idea for using blockchain technology to solve a real-world problem? Are you passionate about driving positive change in your community through the power of decentralization? If so, we encourage you to apply to be a part of our program.
                            </p>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeq8ah5HGjSmoqtvE7xDSFbTShgwi-IUP4WA3WCHbHUxHHtWQ/viewform" target="blank" class="btn banner__text--btn">Register Now</a>                        
                        </div>

                        <div class="col-md-5 offset-lg-1 order-1 order-md-2 banner__image">
                            <img src="~/assets/images/incubator24/hero-img.png" alt="Incubator Program" class="banner__image--img">
                        </div>
                    </div>
                </div>
            </div>

            <div class="about">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-11 col-md-10 col-lg-9 about__header">
                            <p class="about__header--text">
                                The Africa Blockchain Incubation Program is a 6-month incubator program designed to support and nurture the next generation of blockchain innovators on the continent. This is the 4th edition of the program that has successfully incubated different blockchain startups from across Africa.
                            </p>
                        </div>
                    </div>

                    <div class="row justify-content-center align-items-center">
                        <div class="col-8 col-md-5 col-lg-4 about__image">
                            <img src="~/assets/images/incubator24/about.jpg" alt="About the Program" class="img-fluid about__image--img">
                        </div>

                        <div class="col-md-7 col-lg-6 offset-lg-1 about__body">
                            <h2 class="about__body--title">ABOUT: Africa Blockchain <br class="d-none d-lg-block"> Incubation Program </h2>
                            <p class="about__body--text">The Incubation Program is focused on fostering innovation, and elevate Africa's role in the global blockchain landscape. Selected participants will receive training, mentorship, and resources to help bring their ideas to fruition. </p>
                            
                            <div class="row">
                                <div class="col-lg-12 about__perks">
                                    <span class="about__perks--check fas fa-check"></span>
                                    <h5 class="about__perks--detail">Access to a network of industry experts and mentors.</h5>
                                </div>
                                <div class="col-lg-12 about__perks">
                                    <span class="about__perks--check fas fa-check"></span>
                                    <h5 class="about__perks--detail">Opportunity to DEMO your product.</h5>
                                </div>
                                <div class="col-lg-12 about__perks">
                                    <span class="about__perks--check fas fa-check"></span>
                                    <h5 class="about__perks--detail">Training sessions on blockchain technology and business/ entrepreneurship.</h5>
                                </div>
                                <div class="col-lg-12 about__perks">
                                    <span class="about__perks--check fas fa-check"></span>
                                    <h5 class="about__perks--detail">Regular check-ins and progress reviews with program mentors.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- timeline starts -->
        <div class="timeline">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-xl-8 timeline__head">
                        <h1 class="timeline__head--title">Program Timelines and Details</h1>
                        <p class="timeline__head--text">Countdown to Register: Explore Event Schedule and Information Now!</p>
                    </div>
                </div>
            </div>

            <div class="timeline__countdown">
                <Countdown />
            </div>

            <div class="timeline__details">
                <Timeline24 />
            </div>
        </div>
        <!-- timeline ends -->

        <!-- benefits starts -->
        <div class="benefits">
            <div class="container mb-3 mb-lg-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-xl-8 benefits__head">
                        <h1 class="benefits__head--title">Reap the Benefits: Africa Blockchain Incubation 2024 Awaits You!</h1>
                        <p class="benefits__head--text">The Africa Blockchain Incubation Program is designed to support and nurture the next generation of blockchain innovators on the continent. This is the 4th edition of the program that has successfully incubated different blockchain start-ups from across Africa.</p>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-2 gy-md-4 gy-lg-5 justify-content-center">
                    <div class="col benefits__list">
                        <div class="card h-100">
                            <div class="benefits__list--icon icon">
                                <img src="~/assets/images/incubator24/technology.svg" alt="benefits of program">
                            </div>
                            <div class="benefits__list--body bg-warnin">
                                <h1 class="benefits__list--title">Blockchain Technology</h1>
                                <p class="benefits__list--text">Participants will be provided with overall insight into blockchain technology and connections with the industry.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col benefits__list">
                        <div class="card h-100">
                            <div class="benefits__list--icon icon">
                                <img src="~/assets/images/incubator24/education.svg" alt="benefits of program">
                            </div>
                            <div class="benefits__list--body">
                                <h1 class="benefits__list--title">Blockchain Education </h1>
                                <p class="benefits__list--text">Participants will be provided with business knowledge, industry connections, and market access support. This allows access to a wide network of contacts, experts & mentors for their project.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col benefits__list">
                        <div class="card h-100">
                            <div class="benefits__list--icon icon">
                                <img src="~/assets/images/incubator24/support.svg" alt="benefits of program">
                            </div>
                            <div class="benefits__list--body">
                                <h1 class="benefits__list--title">Platform Support</h1>
                                <p class="benefits__list--text">Product development support from leading blockchain platform providers.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col benefits__list">
                        <div class="card h-100">
                            <div class="benefits__list--icon icon">
                                <img src="~/assets/images/incubator24/skill-dev.svg" alt="benefits of program">
                            </div>
                            <div class="benefits__list--body">
                                <h1 class="benefits__list--title">Skill Development and Legal Support</h1>
                                <p class="benefits__list--text">Training sessions to deepen the foundations of Blockchain, and assistance in navigating regulatory matters.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col benefits__list">
                        <div class="card h-100">
                            <div class="benefits__list--icon icon">
                                <img src="~/assets/images/incubator24/support-b.svg" alt="benefits of program">
                            </div>
                            <div class="benefits__list--body">
                                <h1 class="benefits__list--title">Business Support </h1>
                                <p class="benefits__list--text">Business development and entrepreneurship education support from business experts.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col benefits__list">
                        <div class="card h-100">
                            <div class="benefits__list--icon icon">
                                <img src="~/assets/images/incubator24/demo.svg" alt="benefits of program">
                            </div>
                            <div class="benefits__list--body">
                                <h1 class="benefits__list--title">DEMO Day</h1>
                                <p class="benefits__list--text">The program concludes with a Demo Day providing startups the opportunity to present their businesses to the larger ecosystem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row justify-content-center align-items-center about">
                    <div class="col-8 col-md-5 col-lg-4 about__image">
                        <img src="~/assets/images/incubator24/eligibility-criteria.png" alt="eligibility criteria Program" class="img-fluid about__image--img">
                    </div>

                    <div class="col-md-7 col-lg-6 offset-lg-1 about__body">
                        <h2 class="about__body--title">Eligibility Criteria</h2>
                        <p class="about__body--text">We are looking for ambitious individuals that are forward-thinking, innovative, and ready to take up challenges in creating the next Big Thing. These individuals must be dedicated and committed to the project, hardworking, and with strong backgrounds in computer science (with expertise in Object Oriented Languages), mathematics, statistics, business/entrepreneurship, economics, cryptography, blockchain, and any other related fields.</p>
                        
                        <div class="row">
                            <div class="col-lg-12 about__perks">
                                <span class="about__perks--check fas fa-check"></span>
                                <h5 class="about__perks--detail">Must be between 20 - 35 years of age.</h5>
                            </div>
                            <div class="col-lg-12 about__perks">
                                <span class="about__perks--check fas fa-check"></span>
                                <h5 class="about__perks--detail">Priorities are given to Female Applications.</h5>
                            </div>
                            <div class="col-lg-12 about__perks">
                                <span class="about__perks--check fas fa-check"></span>
                                <h5 class="about__perks--detail">Strong business case and market potential.</h5>
                            </div>
                            <div class="col-lg-12 about__perks">
                                <span class="about__perks--check fas fa-check"></span>
                                <h5 class="about__perks--detail">Both idea-stage and early-stage (1 year) companies are encouraged to apply.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- benefits ends -->
        
        <!-- participates section starts -->
        <div class="participate">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6 col-lg-6 col-xl-5 order-2 order-md-1 participate__text">
                        <h1 class="participate__text--title">Costs to Participate</h1>
                        <p class="participate__text--desc">There are a number of scholarships to participate in this program. However, if you are unable to secure one of the scholarships, and you can still participate, but you will be responsible for covering the cost of participation in the program.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeq8ah5HGjSmoqtvE7xDSFbTShgwi-IUP4WA3WCHbHUxHHtWQ/viewform" target="blank" class="btn participate__text--btn">Register Now</a>                        
                    </div>

                    <div class="col-md-5 col-lg-5 col-xl-5 order-1 order-md-2 participate__image">
                        <img src="~/assets/images/incubator24/costs-to-participate.png" alt="Participate in the Africa Blockchain Incubation Program 2024" class="participate__image--img">
                    </div>
                </div>
            </div>
        </div>
        <!-- participates section ends -->

        <!-- testimonials section ends -->
        <div class="testimonials">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 testimonials__head">
                        <h1 class="testimonials__head--title">Previous Participants and <br> Testimonials</h1>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="testimonials__logos">
                        <img src="~/assets/images/incubator24/algorand.png" alt="algorand logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/nghri.png" alt="nghri logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/bfcc.png" alt="bfcc logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/crunch-network.png" alt="crunch-network logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/tigere.png" alt="tigere logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/santech.png" alt="santech logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/gh2-1.png" alt="gh2-1 logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/konnadex.png" alt="konnadex logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/kwdg.png" alt="kwdg logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/mint-condition.png" alt="mint-condition logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/pharma-link.png" alt="pharma-link logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/reitfast.png" alt="reitfast logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/toropal.png" alt="toropal logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/tswaanda.png" alt="tswaanda logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/nihe.png" alt="tswaanda logo" class="testimonials__logos--img">
                        <img src="~/assets/images/incubator24/umojalands.png" alt="umojalands logo" class="testimonials__logos--img">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="gallery">
                    <img src="~/assets/images/incubator24/gallery-1.jpg" alt="gallery" class="gallery__images">
                    <img src="~/assets/images/incubator24/gallery-2.jpg" alt="gallery" class="gallery__images">
                    <img src="~/assets/images/incubator24/gallery-3.jpg" alt="gallery" class="gallery__images">
                    <img src="~/assets/images/incubator24/gallery-4.jpg" alt="gallery" class="gallery__images">
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-11 col-md-10 col-lg-7 review text-center">
                    <p class="review__text">Participating in the ABI Incubation Program has been a remarkable experience. The program has an extensive curriculum with great mentorship and access to resources for early-stage start-ups. The hands-on experience and practical learning have impacted our business strategy and decision-making, which has significantly accelerated our navigation through the entrepreneurial stage. I would strongly recommend the ABI Incubation Program to early-stage enterprises. The program combines mentorship, networking, and resources to provide participants with the help they require to succeed in various markets. </p>
                    <h2 class="review__author">Mercy Kiprono <br> Toropal</h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeq8ah5HGjSmoqtvE7xDSFbTShgwi-IUP4WA3WCHbHUxHHtWQ/viewform" target="blank" class="btn review__btn">Register Now</a>                        
                </div>
            </div>

            <!-- <div class="partners">
                <div class="row justify-content-center">
                    <div class="col-md-8 partners__head">
                        <h1 class="partners__head--title">Our Amazing Partners</h1>
                    </div>
                    
                    <div class="partners__logos">
                        <img src="~/assets/images/incubator24/algorand.png" alt="algorand logo" class="partners__logos--img">
                        <img src="~/assets/images/incubator24/nghri.png" alt="nghri logo" class="partners__logos--img">
                        <img src="~/assets/images/incubator24/bfcc.png" alt="bfcc logo" class="partners__logos--img">
                    </div>
                </div>
            </div> -->
        </div>
        <!-- testimonials section ends -->
        
        <!-- apply section starts -->
        <div class="apply">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-9 col-xl-7 apply__head">
                        <h1 class="apply__head--title">How to Apply</h1>
                        <p class="apply__head--desc">To apply, click on the button below by January 31, 2024. Note that only one application is expected per team.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeq8ah5HGjSmoqtvE7xDSFbTShgwi-IUP4WA3WCHbHUxHHtWQ/viewform" target="blank" class="btn apply__head--btn">Register Now</a>                        
                    </div>

                    <div class="col-10 col-md-9 mx-auto">
                        <hr class="apply__head--line">
                    </div>
                </div>

                <div class="row">
                    <div class="apply__social">
                        <a href="https://web.facebook.com/Africa-Blockchain-Institute-103445117670312" class="apply__social--link">
                            <img src="~/assets/images/incubator24/facebook.svg" />
                        </a>
                        <a href="https://www.linkedin.com/company/africablockinst" class="apply__social--link">
                            <img src="~/assets/images/incubator24/linkedin.svg" />
                        </a>
                        <a href="https://twitter.com/AfricaBlockInst" class="apply__social--link">
                            <img src="~/assets/images/incubator24/x.svg" />
                        </a>
                        <a href="mailto:incubation@africablockchaininstitute.com" class="apply__social--link">
                            <img src="~/assets/images/incubator24/email.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- apply section ends -->
    </div>
</template>

<script>
    import Timeline24 from '~/components/incubator/Timeline24.vue';
    import Countdown from '~/components/incubator/Countdown.vue';

    export default {
        name: "Incubator-Program",
        layout: 'vacuous',

        head(){
            return{
                title: 'Incubator Program -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Incubator Program',
                        content: 'Incubator Program'
                    }
                ],
            }
        },

        components:{
            Timeline24, Countdown
        },

        data(){
            return{
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        font-family: 'Space Grotesk', sans-serif;
        .hero{
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(20, 27, 86, 0.9) 27.29%, rgba(20, 27, 86, 0.9) 51.62%);
            background-image: url("@/assets/images/incubator24/bg-1.jpg") !important;
            
            // navbar section
            .navbar{
                padding: 1rem 0;

                &__logo{
                    img{
                        width: 7rem;
                    }
                }
            }

            // banner section
            .banner {
                padding: 2rem 0;
                color: #fff;

                &__text {
                    &--title {
                        font-size: 1.5rem;
                        font-weight: 700;
                        margin-bottom: 0rem;
                    }

                    &--sub {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                    }

                    &--desc {
                        font-size: 1rem;
                        margin-bottom: 2rem;
                    }

                    &--btn {
                        @include button();
                        padding: .75rem 1.2rem;
                        font-size: $font-rg;
                    }
                }

                &__image {
                    margin-bottom: 2rem;
                    text-align: center;

                    &--img {
                        width: 80%;
                    }
                }
            }

            // about section
            .about {
                padding: 1rem 0;
                color: #fff;

                &__header {
                    padding: 1rem 0;
                    text-align: center;
                    margin-bottom: 1rem;

                    &--text {
                        font-size: 1rem;
                    }
                }

                &__image {
                    margin-bottom: 1rem;

                    &--img {
                        width: 100%;
                        border-radius: 1rem;
                    }
                }

                &__body {
                    &--title {
                        font-size: 1.1rem;
                        font-weight: 700;
                    }

                    &--text {
                        font-size: 1rem;
                        margin-bottom: 2rem;
                        color: lightgray;
                    }
                }

                &__perks {
                    display: flex;
                    align-items: top;
                    margin-bottom: 1.2rem;

                    &--check {
                        display: inline-block;
                        color: $secondary;
                        font-size: 1rem;
                        margin-right: 1rem;
                    }

                    &--detail {
                        font-size: 1rem;
                        margin-bottom: 0;
                    }
                }
            }
        }

        // timeline section
        .timeline {
            padding: 2rem 0;
            background: #F0F3FF;

            &__head {
                text-align: center;

                &--title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: .5rem;
                }
            }
        }

        .benefits {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(20, 27, 86, 0.9) 27.29%, rgba(20, 27, 86, 0.9) 51.62%);
            background-image: url("@/assets/images/incubator24/bg-2.jpg") !important;
            
            padding: 2rem 0;

            &__head {
                text-align: center;
                margin-bottom: 2rem;
                color: #fff;

                &--title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                &--text {
                    font-size: 1rem;
                }
            }

            &__list {
                margin-bottom: .25rem;
                
                .card {
                    border: none;
                    background-color: #fff;
                    border-radius: 0rem 2rem 2rem;
                    margin: .25rem 1rem;
                }
                
                &--icon {
                    width: 6rem;
                    height: 5.5rem;
                    border-radius: 0 50% 50%;
                    border-radius: 0px, 60px, 60px, 60px;

                    text-align: left;
                    margin-bottom: 1rem;

                    img {
                        position: relative;
                        width: 3rem;
                        display: block;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                &--body {
                    padding: .25rem 1.5rem 1rem;
                }

                &--title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: .5rem;
                }

                &--text {
                    font-size: 1rem;
                }
            }

            &__list:nth-child(1) { .card { background-color: #DDE3F3; .icon { background-color: #B3CAF6; } } }
            &__list:nth-child(2) { .card { background-color: #DDEDE3; .icon { background-color: #C5E2D2; } } }
            &__list:nth-child(3) { .card { background-color: #F8F1D7; .icon { background-color: #FCE5AF; } } }
            &__list:nth-child(4) { .card { background-color: #FFF6EF; .icon { background-color: #FFE4CD; } } }
            &__list:nth-child(5) { .card { background-color: #DEF5FF; .icon { background-color: #BCEBFF; } } }
            &__list:nth-child(6) { .card { background-color: #FBE7F0; .icon { background-color: #F6CADD; } } }
        
            // about section
            .about {
                padding: 1rem 0;

                &__image {
                    margin-bottom: 1.5rem;

                    &--img {
                        width: 100%;
                    }
                }

                &__body {
                    &--title {
                        color: #fff;
                        font-size: 1.2rem;
                        font-weight: 700;
                    }

                    &--text {
                        font-size: 1rem;
                        margin-bottom: 2rem;
                        color: lightgray;
                    }
                }

                &__perks {
                    display: flex;
                    align-items: top;
                    margin-bottom: 1.2rem;

                    &--check {
                        display: inline-block;
                        color: $secondary;
                        font-size: 1rem;
                        margin-right: 1rem;
                    }

                    &--detail {
                        color: #fff;
                        font-size: 1rem;
                        margin-bottom: 0;
                    }
                }
            }
        }

        // participate section
        .participate {
            padding: 2rem 0 1rem;

            &__text {
                margin-bottom: 2rem;

                &--title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }

                &--desc {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                &--btn {
                    @include button();
                    padding: .75rem 1.2rem;
                    font-size: $font-rg;
                }
            }

            &__image {
                text-align: center;
                margin-bottom: 1.5rem;

                &--img {
                    width: 80%;
                }
            }
        }

        // testimonials section
        .testimonials {
            padding: 2rem 0;

            &__head {
                margin-bottom: 2rem;
                text-align: center;

                &--title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
            }

            &__logos {
                text-align: center;
                margin: 0 auto;

                &--img {
                    display: inline-block;
                    width: 5rem;
                    margin: 0 1rem;
                    margin-bottom: 1.5rem;
                }
            }

            .gallery {
                margin: 2rem auto;
                text-align: center;

                &__images {
                    display: inline-block;
                    width: 40%;
                    margin: .5rem;
                    border-radius: 1rem;
                }
            }

            .review {
                &__text {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                &__author {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                }

                &__btn{
                    @include button();
                    padding: .75rem 1.2rem;
                    font-size: $font-rg;
                }
            }

            .partners {
                padding: 3rem 0 2rem;

                &__head {
                    margin-bottom: 1rem;
                    text-align: center;

                    &--title {
                        font-size: 1.5rem;
                        font-weight: 700;
                        margin-bottom: 1rem;
                    }
                }

                &__logos {
                    text-align: center;
                    margin: 0 auto;

                    &--img {
                        display: inline-block;
                        width: 5rem;
                        margin: 0 .25rem;
                        margin-bottom: 1rem;
                    }
                }
            }
        }

        // apply section
        .apply {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(20, 27, 86, 0.9) 27.29%, rgba(20, 27, 86, 0.9) 51.62%);
            background-image: url("@/assets/images/incubator24/bg-3.jpg") !important;
            
            padding: 2rem 0;

            &__head {
                text-align: center;
                margin-bottom: 2rem;

                &--title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                    color: #fff;
                }
                
                &--desc {
                    color: #fff;
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                &--line {
                    color: lightgray;
                }

                &--btn {
                    @include button();
                    padding: .75rem 1.2rem;
                    font-size: $font-rg;
                }
            }

            &__social {
                text-align: center;
                margin: 0 auto;

                &--link {
                    img {
                        display: inline-block;
                        width: 2rem;
                        margin: 0 .5rem;
                    }
                }
            }   
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper{
            .hero{
                // navbar section
                .navbar{
                    padding: 1rem 0;

                    &__logo{
                        img{
                            width: 9rem;
                        }
                    }
                }

                // banner section
                .banner {
                    padding: 1rem 0;

                    &__text {
                        &--title {
                            font-size: 1.5rem;
                            margin-bottom: 0rem;
                        }

                        &--sub {
                            font-size: 1.3rem;
                            margin-bottom: 1rem;
                        }

                        &--desc {
                            margin-bottom: 1rem;
                        }

                        &--btn {
                            padding: .75rem 1.2rem;
                        }
                    }

                    &__image {
                        margin-bottom: 0;

                        &--img {
                            width: 100%;
                        }
                    }
                }

                // about section
                .about {
                    padding: 1rem 0 2rem;

                    &__header {
                        padding: 1rem 0;
                        margin-bottom: 1rem;
                    }

                    &__image {
                        margin-bottom: 0;
                    }

                    &__body {
                        &--title {
                            font-size: 1rem;
                        }

                        &--text {
                            font-size: .9rem;
                            margin-bottom: 2rem;
                        }
                    }

                    &__perks {
                        margin-bottom: 1rem;

                        &--check {
                            font-size: .9rem;
                        }

                        &--detail {
                            font-size: .9rem;
                        }
                    }
                }
            }

            // benefit section
            .benefits {
                padding: 3rem 0;

                &__head {
                    margin-bottom: 2rem;

                    &--title {
                        font-size: 1.5rem;
                    }

                    &--text {
                        font-size: 1rem;
                    }
                }

                &__list {
                    &--icon {
                        width: 7rem;
                        height: 6.5rem;
                    }

                    &--body {
                        padding: .35rem 1.75rem 1rem;
                    }
                }

                .about {
                    padding: 4rem 0 2rem;

                    &__body {
                        &--title {
                            font-size: 1.5rem;
                        }

                        &--text {
                            font-size: 1rem;
                            margin-bottom: 2rem;
                        }
                    }

                    &__perks {
                        margin-bottom: 1rem;

                        &--check {
                            font-size: 1rem;
                        }

                        &--detail {
                            font-size: 1rem;
                        }
                    }
                }
            }

            // participate section
            .participate {
                &__image {
                    &--img {
                        width: 100%;
                    }
                }
            }

            // testimonials section
            .testimonials {
                padding: 3rem 0;

                &__head {
                    &--title {
                        font-size: 1.5rem;
                    }
                }

                &__logos {
                    &--img {
                        width: 6rem;
                        margin: 0 1rem;
                        margin-bottom: .5rem;
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            .hero{
                // banner section
                .banner {
                    padding: 3rem 0;

                    &__text {
                        &--title {
                            font-size: 2.2rem;
                            margin-bottom: 0rem;
                        }

                        &--sub {
                            font-size: 2.3rem;
                            margin-bottom: 1rem;
                            font-weight: 100;
                        }

                        &--desc {
                            margin-bottom: 2rem;
                        }

                        &--btn {
                            padding: 1rem 2rem;
                        }
                    }

                    &__image {
                        margin-bottom: 0;

                        &--img {
                            width: 100%;
                        }
                    }
                }

                // about section
                .about {
                    padding: 3rem 0;

                    &__header {
                        margin-bottom: 3rem;

                        &--text {
                            font-size: 1.3rem;
                        }
                    }

                    &__body {
                        &--title {
                            font-size: 1.7rem;
                        }

                        &--text {
                            font-size: 1.2rem;
                            margin-bottom: 2rem;
                        }
                    }

                    &__perks {
                        margin-bottom: 1.5rem;

                        &--check {
                            font-size: 1rem;
                        }

                        &--detail {
                            font-size: 1rem;
                        }
                    }
                }
            }

            // timeline section
            .timeline {
                padding: 3rem 0;

                &__head {
                    margin-bottom: 1rem;

                    &--title {
                        font-size: 2rem;
                        margin-bottom: 1rem;
                    }
                }
            }
        
            // benefit section
            .benefits {
                padding: 4rem 0;

                &__head {
                    margin-bottom: 2rem;

                    &--title {
                        font-size: 2rem;
                    }

                    &--text {
                        font-size: 1.1rem;
                    }
                }

                .about {

                    &__body {
                        &--title {
                            font-size: 2rem;
                        }
                    }
                }
            }

            .participate {
                padding: 2rem 0 1rem;

                &__text {
                    margin-bottom: 2rem;

                    &--title {
                        font-size: 2rem;
                    }

                    &--desc {
                        font-size: 1.1rem;
                        margin-bottom: 2rem;
                    }

                    &--btn {
                        padding: .75rem 2rem;
                    }
                }
            }

            .testimonials {
                &__head {
                    &--title {
                        font-size: 2rem;
                    }
                }

                .gallery {
                    margin: 2rem auto;

                    &__images {
                        width: 22%;
                        margin: 1rem .5rem;

                        &:first-child {
                            margin-left: 1rem;
                        }
                    }
                }

                .review {
                    &__btn{
                        padding: .75rem 2rem;
                    }
                }

                .partners {
                    padding: 4rem;

                    &__head {
                        &--title {
                            font-size: 2rem;
                        }
                    }

                    &__logos {
                        &--img {
                            width: 6rem;
                            margin: 0 1rem;
                        }
                    }
                }
            }

            // apply section
            .apply {
                padding: 3rem 0;

                &__head {
                    &--title {
                        font-size: 2rem;
                    }

                    &--desc {
                        margin-bottom: 2rem;
                    }

                    &--btn {
                        padding: .75rem 1.5rem;
                    }
                }

                &__social {
                    &--link {
                        img {
                            margin: 0 .75rem;
                        }
                    }
                }   
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .wrapper{
            .hero{
                .navbar{
                    padding: 2rem 0;

                    &__logo{
                        img{
                            width: 12rem;
                        }
                    }
                }

                // banner section
                .banner {
                    padding: 3rem 0;

                    &__text {
                        &--title {
                            font-size: 2.5rem;
                        }

                        &--sub {
                            font-size: 2.5rem;
                            margin-bottom: 1rem;
                            font-weight: thin;
                        }

                        &--desc {
                            font-size: 1.2rem;
                            margin-bottom: 2rem;
                        }

                        &--btn {
                            padding: 1rem 2rem;
                        }
                    }
                }

                // about section
                .about {
                    padding: 3rem 0;

                    &__header {
                        padding: 2rem 0;

                        &--text {
                            font-size: 1.5rem;
                        }
                    }

                    &__body {
                        &--title {
                            font-size: 2rem;
                        }

                        &--text {
                            font-size: 1.3rem;
                            margin-bottom: 2rem;
                        }
                    }

                    &__perks {
                        &--check {
                            font-size: 1.2rem;
                        }

                        &--detail {
                            font-size: 1rem;
                        }
                    }
                }
            }

            .benefits {
                .about {
                    &__body {
                        &--title {
                            font-size: 2rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }

            // testimonials section
            .testimonials {
                padding: 3rem 0;

                &__head {
                    &--title {
                        font-size: 2rem;
                    }
                }

                &__logos {
                    &--img {
                        width: 7rem;
                        margin: 0 1.5rem;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }
</style>