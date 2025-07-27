<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <div class="hero">
            <HeaderHP />
            <div id="carouselNav" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselNav" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselNav" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="~/assets/images/home/hero_1.jpg" class="d-block" alt="Improving the Narrative of Blockchain Across Africa">
                        <div class="carousel-caption">
                            <h5 class="title">Improving the Narrative of Blockchain Across Africa</h5>
                            <nuxt-link to="/about-abi" class="btn">Explore</nuxt-link>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                        <img src="~/assets/images/home/hero_1.jpg" class="d-block" alt="Improving the Narrative of Blockchain Across Africa">
                        <div class="carousel-caption">
                            <h5 class="title">Improving the Narrative of Blockchain Across Africa</h5>
                            <p class="sub">Driving awareness, education, and innovation to reshape blockchain’s impact across Africa—empowering communities, fostering adoption, and building a decentralized future.</p>
                            <nuxt-link to="/about-abi" class="btn">Explore</nuxt-link>
                        </div>
                    </div>
                    <!-- <div class="carousel-item" data-bs-interval="10000">
                        <img src="~/assets/images/home/hero_1.jpg" class="d-block" alt="Improving the Narrative of Blockchain Across Africa">
                        <div class="carousel-caption">
                            <h5 class="title">Improving the Narrative of Blockchain Across Africa</h5>
                            <p class="sub">Driving awareness, education, and innovation to reshape blockchain’s impact across Africa—empowering communities, fostering adoption, and building a decentralized future.</p>
                            <nuxt-link to="/about-abi" class="btn">Explore</nuxt-link>
                        </div>
                    </div> -->
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselNav" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Prev</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselNav" data-bs-slide="next">
                    <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- hero section ends -->

        <!-- info section starts -->
        <div class="info">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <p class="info__intro">
                            Africa Blockchain Institute is Africa's foremost Blockchain Think-Tank that is addressing critical Blockchain Policy gaps, Building a Resilient Ecosystem, and Powering Sustainable Innovations via Real-World Applications for Africa. With presence across multiple regions in Africa, ABI work with Governments, Multinationals, Universities, and Global Blockchain Organizations to create impactful initiatives and projects.
                        </p>
                    </div>
                </div>
                
                <div class="row justify-content-center">
                    <div class="col-6 col-md-3 text-center info__stat">
                        <h2 class="info__stat--num">42+</h2>
                        <p class="info__stat--desc">Countries Reached</p>
                    </div>
                    <div class="col-6 col-md-3 text-center info__stat">
                        <h2 class="info__stat--num">53+</h2>
                        <p class="info__stat--desc">Projects Deployed</p>
                    </div>
                    <div class="col-6 col-md-3 text-center info__stat">
                        <h2 class="info__stat--num">100+</h2>
                        <p class="info__stat--desc">Programs Implemented</p>
                    </div>
                    <div class="col-6 col-md-3 text-center info__stat">
                        <h2 class="info__stat--num">120+</h2>
                        <p class="info__stat--desc">Research Publications</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- info section ends -->
        
        <!-- organizations section starts -->
        <div class="trust">
			<div class="container">
				<div class="row">
                    <div class="col-md-7 offset-md-1 col-xxl-6 trust__head">
                        <h2 class="trust__head--title">Trusted By Leading Organizations Worldwide</h2>
                    </div>
                </div>
			</div>
			<div class="container">
				<div class="col-md-10 mx-auto">
					<div class="row row-cols-3 row-cols-md-5 row-cols-lg-6 justify-content-center trust__content align-items-center">
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/au.png" alt="au">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/and.png" alt="and">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/ibm.png" alt="ibm">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/codeln.png" alt="codeln">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/ghana-tech.png" alt="ghana tech hub">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/ict.png" alt="ict">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/microsoft.png" alt="microsoft">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/mest.png" alt="mest">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/oracle.png" alt="oracle">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/risa.png" alt="risa">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/unam.png" alt="risa">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/convexity.jpeg" alt="convexity">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/algorand.png" alt="algorand">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/alu.png" alt="African leadership university">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/gba.png" alt="governement blockchain association">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/kleros.png" alt="kleros">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/wouessi.png" alt="wouessi">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/tech_london.png" alt="tech london">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/bbic.jpg" alt="black women">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/rrgf.png" alt="rrgf">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/epitech.png" alt="epitech">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/aims.png" alt="aims">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/world-bank-group.png" alt="world bank group">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/risa.jpg" alt="risa">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/hashgraph.png" alt="hashgraph">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/solana.png" alt="solana">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/rwanda-ict.jpg" alt="rwanda ict">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/seme-city.png" alt="seme city">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/berlin.png" alt="berlin">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/movetia.jpg" alt="movetia">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/fhnw.png" alt="fhnw">
						</div>
						<div class="col trust__content--sect">
							<img src="~/assets/images/home/organizations/tether.png" alt="tether">
						</div>
					</div>
				</div>
			</div>
		</div>
        <!-- organizations section ends -->
        
        <!-- values section starts -->
        <div class="values">
			<div class="container">
				<div class="row">
                    <div class="col-7 values__head">
                        <h2 class="values__head--title">Core Values</h2>
                    </div>
                </div>

				<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
					<div class="col values__key">
						<img src="~/assets/images/home/innovation.png" alt="Leading Innovation" class="values__key--img">
						<h4 class="values__key--title">Leading Innovation</h4>
						<p class="values__key--text"> We are driven by the passion to create innovative solutions and participate in cutting edge projects. </p>
					</div>
					<div class="col values__key">
						<img src="~/assets/images/home/impact.png" alt="Global Impact" class="values__key--img">
						<h4 class="values__key--title">Global Impact</h4>
						<p class="values__key--text">The scalability of our initiatives tends to be highly impactful not only in Africa, but the world at large.</p>
					</div>
					<div class="col values__key">
						<img src="~/assets/images/home/inclusivity.png" alt="Inclusivity" class="values__key--img">
						<h4 class="values__key--title">Inclusivity</h4>
						<p class="values__key--text">We are committed to ensuring equal access to blockchain opportunities for all.</p>
					</div>
					<div class="col values__key">
						<img src="~/assets/images/home/excellence.png" alt="Excellence" class="values__key--img">
						<h4 class="values__key--title">Excellence</h4>
						<p class="values__key--text"> We are dedicated to delivering high-quality initiatives that position Africa as a leader in the global blockchain landscape.</p>
					</div>
				</div>
			</div>
		</div>
        <!-- values section ends -->

        <!-- impact section starts -->
        <div class="impact">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 impact__head">
                        <h2 class="impact__head--title">How We Drive Impact</h2>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-3 gx-lg-5">
                    <div class="col impact__img">
                        <div class="card first">
                            <img src="~/assets/images/home/abivs-logo.png" alt="Africa Blockchain Institute Venture Studio" class="img-fluid logo">
                        </div>
                    </div>

                    <div class="col impact__img">
                        <div class="card second">
                            <img src="~/assets/images/home/acebr-logo.png" alt="Africa Blockchain Institute Venture Studio" class="img-fluid logo">
                        </div>
                    </div>

                    <div class="col impact__img">
                        <div class="card third">
                            <img src="~/assets/images/home/francophone-logo.png" alt="Africa Blockchain Institute Venture Studio" class="img-fluid logo">  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- impact section ends -->

        <!-- insights section starts -->
        <!-- <div class="insights" v-if="insights.length > 0"> -->
        <div class="insights">
            <div class="container">
                <div class="row">
                    <div class="col-12 insights__head">
                        <h2 class="insights__head--title">Insights</h2>
                    </div>
                </div>

                <Insight />

                <div class="row">
                    <div class="col-12 insights__cta">
                        <div class="text-center">
                            <nuxt-link to="/insights" class="btn insights__cta--btn">View All Insights</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        <!-- insights section ends -->
        
        <!-- market starts -->
        <div class="market">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 market__head">
                        <h2 class="market__head--title">Global Blockchain Market</h2>
                        <h2 class="market__head--sub">Market Size Overview</h2>
                    </div>
                </div>

                <div class="row justify-content-center align-items-end">
                    <div class="col-md-2 col-xl-2 market__stat">
                        <h2 class="market__stat--title">45.2%</h2>
                        <p class="market__stat--desc">Global market CAGR, 2024-2032</p>
                    </div>
                    <div class="col-md-10 col-xl-8 offset-xl-1">
                        <img src="~/assets/images/market/market_stat.png" alt="Blockchain Market Overview" class="img-fluid">
                    </div>
                </div>
            
            </div>
        </div>
        <!-- market ends -->
        
        <!-- know section starts -->
        <div class="know">
            <div class="container">
                <div class="row">
                    <div class="col-12 know__body">
                        <h2 class="know__body--sub">Do You Know?</h2>
                        <p class="know__body--text">
                            More than 50% of all chief executive, financial, and human resource officers say blockchain is critical to their infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- know section ends -->
        
        <!-- event section starts -->
        <!-- <div class="events" v-if="events.length > 0"> -->
        <div class="events">
            <div class="container">
                <div class="row">
                    <div class="col-12 events__head">
                        <h2 class="events__head--title">Upcoming Events</h2>
                    </div>
                </div>

                <Event :listings="events"/>

                <div class="row">
                    <div class="col-12 events__cta">
                        <div class="text-center">
                            <nuxt-link to="/events" class="btn events__cta--btn">View All Events</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- event section ends -->

        <!-- talent section starts -->
        <Find :title="find.title" :text="find.text" :buttonText="find.buttonText" :image="find.image" :link="find.link" />
        <!-- talent section ends -->
    </div>
</template>

<script>
    import Header from '@/components/nav/Header.vue';
    import Find from '@/components/reusable/Find.vue';
    import Lists from '@/components/reusable/CardLists.vue';
    import HeaderHP from '@/components/nav/HeaderHP.vue';
    import Insight from '~/components/reusable/Insight.vue';
    import Event from '@/components/reusable/Event.vue';

    export default {
        head(){
            return{
                title: 'Home -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Home',
                        content: 'Home page'
                    }
                ],
            }
        },

        data() {
            return {
                events: [],
                insights: [],
                find: {
                    title: 'Finding a Talent?',
                    text: 'Get now a talent from our vibrant network of alumni. Post your opportunities here.',
                    buttonText: 'Find Talent',
                    image: 'home/find_talent.jpg',
                    link: '/top-talents'
                }
            }
        },

        components: {
            Header, HeaderHP, Lists, Find, Insight, Event
        },

        created() {
            // this.getInsights();
            this.getEvents();
        },

        methods: {
            async getInsights() {
                try {
                    let response = await this.$axios.$get('/posts');
                    this.insights = response.data;
                } catch (error) {
                    console.error('Error fetching posts:', error);
                }
            },

            async getEvents() {
                try {
                    let response = await this.$axios.$get('/events/upcoming-three-events');
                    this.events = response.data;
                } catch (error) {
                    console.error('Error fetching events:', error);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        /** hero section starts */
        .hero{
            .carousel {
                max-height: 45vh;
                .carousel-indicators {
                    button {
                        background-color: $grey;

                        &.active {
                            background-color: $primary;
                        }
                    }
                }

                .carousel-inner {
                    height: 45vh;
                
                    .carousel-item {
                        height: 100%;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }

                        .carousel-caption {
                            // position: absolute;
                            color: $white;
                            transform: translateY(-30%);
                            top: 30%;
                            left: 5%;
                            right: 5%;
                            
                            .title {
                                font-size: $font-hd;
                                margin-bottom: 1rem;
                                font-weight: bold;
                            }

                            .sub {
                                font-size: .9rem;
                            }
                            
                            .btn {
                                @include button();
                                margin-top: 1.5rem;
                                padding: 0.5rem 1rem;
                                font-size: 0.9rem;
                            }
                        }
                    }
                }

                .carousel-control-prev,
                .carousel-control-next {
                    top: 50%;
                    width: 2rem;
                    height: 2rem;
                    margin-left: 2rem;
                    margin-right: 2rem;
                    display: none;

                    .carousel-control-prev-icon,
                    .carousel-control-next-icon {
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }
        }
        /** hero section ends */

        /** info section starts */
        .info{
            padding: 2rem 1rem;
            background-color: $secondary-2;

            &__intro{
                font-size: 1rem;
                // line-height: 1.5rem;
                text-align: center;
                color: $white;
            }

            .row:nth-child(2) {
                margin-top: 2rem;
            }

            &__stat {
                padding: 1rem;
                color: $white;

                &--num {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }

                &--desc {
                    font-size: .9rem;
                }
            }
        }
        /** info section ends */

        /** trust section start */
        .trust {
            padding: 2rem 1rem;

            &__head {
                text-align: left;
                margin-bottom: 2rem;

                &--title {
                    font-size: 1.2rem;
                    color: black;
                    font-weight: bold;
                }
            }

            &__content {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                &--sect {
                    padding: .5rem;
                    img {
                        max-width: 80%;
                    }
                }
            }
        }
        /** trust section ends */

        /** values section starts */
        .values{
			padding: 2rem 1rem;
        	
			&__head{
                margin-bottom: 1rem;

                &--title{
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }

			&__key{
                margin-bottom: 1.2rem;

                &--img{
                    width: 2rem;
                    margin-bottom: 1.3rem;
                }

                &--title{
                    font-size: 1rem;
                    font-weight: bold;
                }

                &--text{
                    font-size: 1rem;
                }
            }
		}
        /** values section ends */

        /** impact section starts */
        .impact {
            padding: 2rem 1rem;

            &__head {
                text-align: left;
                margin-bottom: 1rem;

                &--title {
                    font-size: 1.2rem;
                    color: black;
                    font-weight: bold;
                }
            }

            &__img {
                height: 20rem;
                margin-bottom: 1.5rem;

                .card {
                    width: 100%;
                    height: 100%;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                    &.first {
                        background: url('~/assets/images/home/drive_impact_venture_studio.jpg') no-repeat center center;
                        background-size: cover;
                    }
                    
                    &.second {
                        background: url('~/assets/images/home/drive_impact_acebr.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    &.third {
                        background: url('~/assets/images/home/drive_impact_francophone.jpg') no-repeat center center;
                        background-size: cover;
                    }

                    .logo {
                        width: 10rem;
                        margin-bottom: 2rem;
                    }
                }
            }
        }
        /** impact section ends */

        /** insights section starts */
        .insights{
            padding: 2rem 1rem;

            &__head{
                text-align: left;
                margin-bottom: 1rem;

                &--title{
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }

            &__cta{
                text-align: center;
                margin-top: 2rem;

                &--btn{
                    @include button();
                    padding: .75rem 1rem;
                    font-size: .9rem;
                }
            }
        }
        /** insights section ends */

        /** market section starts */
        .market{
            padding: 2rem 1rem;

            &__head{
                text-align: left;
                margin-bottom: 1rem;

                &--title{
                    font-size: 1.2rem;
                    font-weight: bold;
                }

                &--sub {
                    font-size: .9rem;
                    color: $secondary-2;
                }
            }

            &__stat {
                margin-bottom: 1rem;

                &--title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 0rem;
                }

                &--desc {
                    font-size: .9rem;
                }
            }
        }
        /** market section ends */

        /** know section ends */
        .know {
            padding: 2rem 1rem;
            
            &__body {
                padding: 3rem 1rem 3rem;
                background: url('~/assets/images/home/did_you_know.png') no-repeat right;
                background-size: contain;

                &--sub {
                    margin-bottom: 0;
                    font-size: 1rem;
                    color: $secondary-2;
                }

                &--text {
                    width: 90%;
                    font-weight: 600;
                    font-size: $font-hd;
                    color: $secondary-2;
                }
            }
        }
        /** know section ends */

        /** event section ends */
        .events{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 1rem;

                &--title{
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }

            &__cta{
                text-align: center;
                margin-top: 2rem;

                &--btn{
                    @include button();
                    padding: .75rem 1rem;
                    font-size: .9rem;
                }
            }
        }
        /** event section ends */
    }

    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  
         .wrapper{
            .hero{
                .carousel {
                    max-height: 60vh;

                    .carousel-inner {
                        height: 60vh;
                    
                        .carousel-item {
                            .carousel-caption {
                                transform: translateY(-40%);
                                top: 40%;
                                
                                .title {
                                    font-size: $font-lg;
                                    margin-bottom: 1rem;
                                }

                                .sub {
                                    font-size: 1rem;
                                }
                                
                                .btn {
                                    margin-top: 3rem;
                                    padding: .75rem 2rem;
                                    font-size: 1rem;
                                }
                            }
                        }
                    }
                }
            }

            .info{
                padding: 3rem 1rem;

                &__stat {
                    &--num {
                        font-size: 2.5rem;
                    }

                    &--desc {
                        font-size: 1rem;
                    }
                }
            }

            .trust {
                padding: 3rem 1rem;

                &__head {
                    margin-bottom: 2rem;

                    &--title {
                        font-size: $font-md;
                    }
                }

                &__content {
                    &--sect {
                        padding: .5rem;
                        img {
                            max-width: 70%;
                        }
                    }
                }
            }

            /** values section starts */
            .values{
                padding: 3rem 1rem;
                
                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__key{
                    margin-bottom: 1.5rem;

                    &--img{
                        width: 2rem;
                        margin-bottom: 1.5rem;
                    }

                    &--title{
                        font-size: 1.1rem;
                    }

                    &--text{
                        font-size: 1rem;
                    }
                }
            }
            /** values section ends */

            /** impact section starts */
            .impact {
                padding: 3rem 1rem;

                &__head {
                    margin-bottom: 2rem;

                    &--title {
                        font-size: $font-hd;
                    }
                }

                &__img {
                    height: 17rem;
                    margin-bottom: 1.5rem;

                    .card {
                        width: 100%;
                        height: 100%;

                        .logo {
                            width: 10rem;
                            margin-bottom: 2rem;
                        }
                    }
                }
            }
            /** impact section ends */

            /** insights section starts */
            .insights{
                padding: 3rem 1rem;
            }
            /** insights section ends */

            /** market section starts */
            .market{
                padding: 3rem 1rem;

                &__head{
                    margin-bottom: 1rem;

                    &--title{
                        font-size: 1.2rem;
                    }

                    &--sub {
                        font-size: .9rem;
                    }
                }

                &__stat {
                    margin-bottom: 0;
                    
                    &--title {
                        font-size: 2rem;
                    }

                    &--desc {
                        font-size: .9rem;
                    }
                }
            }
            /** market section ends */

            /** know section ends */
            .know {
                padding: 3rem 1rem;

                &__body {
                    &--sub {
                        font-size: 1rem;
                    }
                    
                    &--text {
                        width: 80%;
                        font-size: $font-md;
                    }
                }
            }
            /** know section ends */

            /** event section ends */
            .events{
                padding: 3rem 1rem;

                &__head{
                    margin-bottom: 1rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }
            }
            /** event section ends */
        }
    }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  
        .wrapper{
            .hero{
                .carousel {
                    max-height: 90vh;

                    .carousel-inner {
                        height: 90vh;
                        
                        .carousel-item {
                            .carousel-caption {
                                width: 65%;
                                transform: translate(-50%, -45%);
                                top: 45%;
                                left: 50%;
                                
                                .title {
                                    font-size: 4rem;
                                    margin-bottom: 1rem;
                                }

                                .sub {
                                    width: 90%;
                                    margin: 0 auto;
                                    font-size: 1.3rem;
                                    margin-bottom: 3rem;
                                }

                                .btn {
                                    padding: .75rem 2rem;
                                    font-size: 1rem;
                                }
                            }
                        }
                    }
                }
            }

            .info{
                padding: 4rem 1rem;

                &__intro{
                    font-size: 1.2rem;
                }

                .row:nth-child(2) {
                    margin-top: 3rem;
                }

                &__stat {
                    &--num {
                        font-size: 3rem;
                    }

                    &--desc {
                        font-size: 1rem;
                    }
                }
            }

            .trust {
                padding: 4rem 1rem;

                &__head {
                    &--title {
                        font-size: $font-md;
                    }
                }

                &__content {
                    &--sect {
                        padding: .5rem;
                        img {
                            max-width: 80%;
                        }
                    }
                }
            }

            /** values section starts */
            .values{
                padding: 3rem 1rem;
                
                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__key{
                    &--img{
                        width: 3rem;
                        margin-bottom: 2rem;
                    }

                    &--title{
                        font-size: 1.2rem;
                    }

                    &--text{
                        font-size: 1rem;
                    }
                }
            }
            /** values section ends */

            /** impact section starts */
            .impact {
                padding: 3rem 1rem;

                &__head {
                    margin-bottom: 2rem;

                    &--title {
                        font-size: $font-md;
                    }
                }

                &__img {
                    height: 25rem;
                    margin-bottom: 1.5rem;

                    .card {
                        .logo {
                            width: 12rem;
                        }
                    }
                }
            }
            /** impact section ends */

            /** insights section starts */
            .insights {
                &__head{
                    &--title{
                        font-size: $font-md;
                    }
                }

                &__cta{
                    margin-top: 2rem;

                    &--btn{
                        font-size: 1rem;
                    }
                }
            }
            /** insights section ends */

            /** market section starts */
            .market {
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-md;
                    }

                    &--sub {
                        font-size: 1.2rem;
                    }
                }
            }
            /** market section ends */

            /** know section ends */
            .know {
                padding: 4rem 1rem;

                &__body {
                    padding: 4rem 1rem 4rem;

                    &--text {
                        width: 75%;
                        font-size: $font-lg;
                        line-height: 4rem;
                    }
                }
            }
            /** know section ends */
            
            /** event section ends */
            .events{
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 1rem;

                    &--title{
                        font-size: $font-md;
                    }
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper{
            .hero {
                .carousel {
                    .carousel-inner {
                        .carousel-item {
                            .carousel-caption {
                                width: 70%;
                                
                                .title {
                                    font-size: 4.5rem;
                                    margin-bottom: 1rem;
                                }

                                .sub {
                                    width: 75%;
                                    font-size: $font-hd;
                                }

                                .btn {
                                    padding: 1rem 3rem;
                                }
                            }
                        }
                    }
                }
            }

            .info{
                &__intro{
                    font-size: 1.3rem;
				}

                .row:nth-child(2) {
                    margin-top: 4rem;
                }
            }

            .trust {
                &__head {
                    margin-bottom: 2rem;
                }

                &__content {
                    &--sect {
                        img {
                            max-width: 70%;
                        }
                    }
                }
            }

            /** values section starts */
            .values{                
                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__key{
                    margin-bottom: 1.5rem;

                    &--img{
                        width: 2rem;
                        margin-bottom: 1.5rem;
                    }

                    &--title{
                        font-size: 1.1rem;
                    }

                    &--text{
                        font-size: 1rem;
                    }
                }
            }
            /** values section ends */

            /** impact section starts */
            .impact {
                &__head {
                    margin-bottom: 2rem;

                    &--title {
                        font-size: $font-md;
                    }
                }

                &__img {
                    height: 30rem;
                    margin-bottom: 1.5rem;

                    .card {
                        .logo {
                            width: 12rem;
                        }
                    }
                }
            }
            /** impact section ends */

            /** market section starts */
            .market {
                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-md;
                    } 
                    &--sub {
                        font-size: 1.2rem;
                    }
                }

                &__stat {
                    margin-bottom: 0;
                    
                    &--title {
                        font-size: 3rem;
                    }

                    &--desc {
                        font-size: 1rem;
                    }
                }
            }

            /** know section ends */
            .know {
                padding: 4rem 1rem;

                &__body {
                    &--sub {
                        font-size: 1.2rem;
                    }

                    &--text {
                        font-size: 4rem;
                        line-height: 5rem;
                    }
                }
            }
            /** know section ends */

            /** event section ends */
            .events{
                padding: 4rem 1rem;

                &__cta{
                    margin-top: 2rem;

                    &--btn{
                        font-size: 1rem;
                    }
                }
            }
            /** event section ends */   
        }
    }
</style>
