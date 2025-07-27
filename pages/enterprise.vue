<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <div class="hero" :style="{ backgroundImage: 'url('+ require('~/assets/images/'+hero.image+'/banner.jpg')}">
            <div class="container">
                <Header />
                <div class="row">
                    <div class="col-md-9 col-xl-7 col-xxl-6 hero__content">
                        <h1 class="hero__content--title">{{ hero.title }}</h1>
                        <p class="hero__content--desc">{{ hero.desc }}</p>
                        <nuxt-link to="/abi-consulting" class="btn hero__content--btn" v-if="hero.buttonText">{{ hero.buttonText }}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- hero section ends -->

        <div class="info">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-xxl-9">
                        <p class="info__intro">
                            Blockchain technology has become an essential part of the enterprise software stack for organizations that want to streamline business processes and issue digital assets. Not all organizations need a blockchain solution, but for those that do, the technology can be transformational. Blockchains helps businesses solve for three main scenarios:
                        </p>
                            
                        <div class="row">
                            <div class="col-md-4 info__key">
                                <img src="~/assets/images/enterprise/icons/trust-secure.png" alt="process data efficiently" class="info__key--img">
                                <p class="info__key--title">Process data efficiently</p>
                            </div>
                            <div class="col-md-4 info__key">
                                <img src="~/assets/images/enterprise/icons/data-efficiency.png" alt="Trusted transactions and secure business networks" class="info__key--img">
                                <p class="info__key--title">Trusted transactions and secure business networks</p>
                            </div>
                            <div class="col-md-4 info__key">
                                <img src="~/assets/images/enterprise/icons/digital-assets.png" alt="Create, issue, and manage digital assets" class="info__key--img">
                                <p class="info__key--title">Create, issue, and manage digital assets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slogan">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7">
                        <span class="fas fa-quote-left slogan__quote--left"></span>
                        <h3 class="slogan__info">You have to find the right problem before you find the right solution.</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="services">
            <div class="container">
                <div class="row">
                    <div class="col-12 services__head">
                        <h2 class="services__head--title">Enterprise Services</h2>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 col-lg-9 col-xxl-7 services__list">
                        <div class="accordion accordion-flush" id="service-accordion">
                            <div class="accordion-item services__srv">
                                <h2 class="accordion-header services__srv--title">
                                    <button class="accordion-button collapsed services__srv--btn" type="button" data-bs-toggle="collapse" data-bs-target="#service-one" aria-expanded="false" aria-controls="service-one">
                                        Education
                                    </button>
                                </h2>
                                <div id="service-one" class="accordion-collapse collapse show" data-bs-parent="#service-accordion">
                                    <div class="accordion-body">
                                        Custom Blockchain trainings in upskilling your team with our robust specialized curriculum for enterprise. We also design high-quality curriculum for academic institutions, TVETs, tech hubs, corporate training programs, and government capacity-building initiatives.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item services__srv">
                                <h2 class="accordion-header services__srv--title">
                                    <button class="accordion-button collapsed services__srv--btn" type="button" data-bs-toggle="collapse" data-bs-target="#service-two" aria-expanded="false" aria-controls="service-two">
                                        Blockchain Advisory
                                    </button>
                                </h2>
                                <div id="service-two" class="accordion-collapse collapse" data-bs-parent="#service-accordion">
                                    <div class="accordion-body">
                                        Gain guidance through every stage of your blockchain project. You will receive insight into business model prototyping, use case discovery, market analysis, and proofs-of-concept to develop comprehensive strategies for blockchain adoption.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item services__srv">
                                <h2 class="accordion-header services__srv--title">
                                    <button class="accordion-button collapsed services__srv--btn" type="button" data-bs-toggle="collapse" data-bs-target="#service-three" aria-expanded="false" aria-controls="service-three">
                                        Deployment of Blockchain Solutions
                                    </button>
                                </h2>
                                <div id="service-three" class="accordion-collapse collapse" data-bs-parent="#service-accordion">
                                    <div class="accordion-body">
                                        We provide you with the programming of scalable and distributed applications and custom-built protocols. Additionally, we support you throughout the entire process of integration and adaptation of blockchain technology into your already existing company network.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item services__srv">
                                <h2 class="accordion-header services__srv--title">
                                    <button class="accordion-button collapsed services__srv--btn" type="button" data-bs-toggle="collapse" data-bs-target="#service-four" aria-expanded="false" aria-controls="service-four">
                                        Policy Development
                                    </button>
                                </h2>
                                <div id="service-four" class="accordion-collapse collapse" data-bs-parent="#service-accordion">
                                    <div class="accordion-body">
                                        Co-create policies that foster innovation while ensuring compliance, security, and inclusivity. We provide expert guidance and assistance in drafting national blockchain strategies, regulatory frameworks, legal toolkits, and digital transformation policies, that align with global standards yet reflect local contexts.
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item services__srv">
                                <h2 class="accordion-header services__srv--title">
                                    <button class="accordion-button collapsed services__srv--btn" type="button" data-bs-toggle="collapse" data-bs-target="#service-five" aria-expanded="false" aria-controls="service-five">
                                        Project Implementation
                                    </button>
                                </h2>
                                <div id="service-five" class="accordion-collapse collapse" data-bs-parent="#service-accordion">
                                    <div class="accordion-body">
                                        We offer end-to-end project implementation support that successfully deliver high-impact blockchain and tech-driven initiatives. Including, grant management, market entry, regulatory projects, MVP supervision, ambassadorial networks, research and developers’ program.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="media">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 media__head">
                        <h2 class="media__head--title">Media Mention</h2>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-xl-3">
                    <div class="col media__list mb-3 mb-md-4" v-for="(mention, index) in mentions" :key="index">
                        <a :href="mention.link" target="blank">
                            <div class="card h-100">
                                <img :src="mention.image" class="card-img-top" :alt="mention.title">
                                <div class="card-body">
                                    <p class="media__list--description">{{ mention.title }} </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="work">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 work__head">
                        <h2 class="work__head--title">How We Work</h2>
                        <p class="work__head--sub">Each blockchain journey is unique but may follow similar steps.</p>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-xl-3">
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/strategy-assessment.png" class="work__list--img" alt="strategy assessment">
                                <h5 class="work__list--title"> Strategy Assessment </h5>
                                <p class="work__list--description">We'll assess your goals and evaluate blockchain's applicability and business impact to help you define and prioritize your transformation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/hands-on-training.png" class="work__list--img" alt="Hands-on training and rapid prototyping">
                                <h5 class="work__list--title"> Hands-on Training and Rapid Prototyping  </h5>
                                <p class="work__list--description">Technology leadership workshops and training upskill your team while working side-by-side with experts in rapid blockchain development environments.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/solution-design.png" class="work__list--img" alt="Solution Design">
                                <h5 class="work__list--title"> Solution Design  </h5>
                                <p class="work__list--description">Holistic solution design encompasses people, process, operating model and technology to maximize your transformation across your business.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/build-implementation.png" class="work__list--img" alt="Build and implementation">
                                <h5 class="work__list--title"> Build and Implementation  </h5>
                                <p class="work__list--description">Complex implementation management, third-party integration and custom coding assures each solution fits within existing systems to meet future demand.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/assets-solution.png" class="work__list--img" alt="Assets and solutions">
                                <h5 class="work__list--title"> Assets and Solutions  </h5>
                                <p class="work__list--description">Proprietary software add-ons, such as redaction, key management and hardware security modules, give you greater control and customization.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/ecosystem-mgmt.png" class="work__list--img" alt="Ecosystem Management">
                                <h5 class="work__list--title"> Ecosystem Management  </h5>
                                <p class="work__list--description">Stay focused on the bigger picture while we handle the operation of your new blockchain networks and ecosystems using our proven functional expertise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="tools">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 tools__head">
                        <h2 class="tools__head--title">Tools</h2>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 col-xxl-10 bg-dange">
                        <ul class="nav justify-content-start justify-content-lg-center tools__nav" id="pills-tab">
                            <li class="nav-item">
                                <a class="nav-link tools__nav--link active" id="pills-frameworks-tab" data-bs-toggle="pill" data-bs-target="#pills-frameworks" type="button" role="tab" >Frameworks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link tools__nav--link" id="pills-programming-tab" data-bs-toggle="pill" data-bs-target="#pills-programming" type="button" role="tab">Programming Languages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link tools__nav--link" id="pills-databases-tab" data-bs-toggle="pill" data-bs-target="#pills-databases" type="button" role="tab">Databases</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link tools__nav--link" id="pills-frontend-tab" data-bs-toggle="pill" data-bs-target="#pills-cloud" type="button" role="tab">Cloud Platforms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link tools__nav--link" id="pills-others-tab" data-bs-toggle="pill" data-bs-target="#pills-others" type="button" role="tab">Other Tools</a>
                            </li>
                        </ul>
                        <div class="tab-content tools__content justify-content-center" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-frameworks">
                                <div class="row row-cols-3 row-cols-md-4 row-cols-lg-6 justify-content-center">
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/frameworks/angular.png" alt="angular">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/frameworks/react.png" alt="react">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/frameworks/truffle.png" alt="truffle">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/frameworks/vue.png" alt="vue">
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-programming">
                                <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/programming/solidity.png" alt="javascript">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/programming/javascript.png" alt="javascript">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/programming/java.png" alt="java">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/programming/c++.png" alt="c++">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/programming/rust.png" alt="rust">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/programming/go.png" alt="go">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/programming/python.png" alt="python">
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-databases">
                                <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/databases/mongodbnosql.png" alt="mongodb">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/databases/ipfs.png" alt="ipfs">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/databases/postgres.png" alt="postgres">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/databases/mysql.png" alt="mysql">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/databases/filecoin.png" alt="filecoin">
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-others">
                                <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/wms.png" alt="wms">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/open-zeppelin.png" alt="open-zeppelin">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/clu.png" alt="clu">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/embark.png" alt="embark">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/hardhat.png" alt="hardhat">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/ganache.png" alt="ganache">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/metamask.png" alt="metamask">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/others/sdk.png" alt="sdk">
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-cloud">
                                <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/cloud/aws.png" alt="aws">
                                    </div>
                                    <div class="col tools__content--sect">
                                        <img src="~/assets/images/enterprise/icons/cloud/azure.png" alt="azure">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="resources">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 resources__head">
                        <h2 class="resources__head--title">Resources</h2>
                    </div>
                </div>

                <div class="row row-cols-2 row-cols-md-4 row-cols-lg-3 g-xl-3">
                    <div class="col resources__list" v-for="(resource, index) in resources" :key="index">
                        <a :href="resource.link" target="blank">
                            <div class="card h-100">
                                <img :src="resource.image" class="card-img-top" :alt="resource.description">
                                <div class="card-body">
                                    <button class="resources__list--category">{{ resource.category }} </button>
                                    <p class="resources__list--title">{{ resource.title }} </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- find section starts -->
        <Find :title="find.title" :text="find.text" :buttonText="find.buttonText" :image="find.image" :link="find.link" />
        <!-- find section ends -->
    </div>
</template>

<script>    
    import Header from '@/components/nav/Header';
    import Find from '~/components/reusable/Find.vue';

    export default {
        name: "Enterprise",

        head(){
            return{
                title: 'Enterprise -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Enterprise',
                        content: 'Enterprise'
                    }
                ],
            }
        },

        data(){
            return{
                hero: {
                    title: 'Blockchain Consulting Solutions Development',
                    image: 'enterprise',
                    desc: 'ABI Enterprise helps clients explore every aspect of blockchain and build tailored solutions designed to deliver value. Our cutting-edge Blockchain Technology Capabilities lead the way to a disruptive future for numerous businesses striving for transparent, secure, decentralized and productive business solutions, that are market-ready and address real business issues.',
                    buttonText: 'Bring ABI to your Business'
                },
                mentions: [],
                resources: [],

                find: {
                    title: 'Finding the Best Blockchain for Your Business?',
                    text: 'Let’s work together. Get in touch with us and send some basic info about your project.',
                    buttonText: 'Get Started',
                    image: 'enterprise/find.jpg',
                    link: '/abi-consulting'
                }
            }
        },

        components: {
            Header, Find
        },

        created(){
            this.getMediaMentions();
            this.getResources()
        },

        methods:{
            async getMediaMentions(){
                let mentions = await this.$axios.$get(`/mentions`)
                this.mentions = mentions.data;
            },

            async getResources(){
                let resources = await this.$axios.$get(`/resources`)
                this.resources = resources.data;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .hero {
            height: 50vh;
            background-size: cover;
            background-position: center;
            position: relative;
            
            &__content{
                position: absolute;
                padding-left: 2rem;
                bottom: 5%;
            
                &--title{
                    font-weight: bold;
                    color: $white;
                    font-size: $font-hd;
                }
                
                &--desc{
                    color: $white;
                    font-size: .9rem;
                    margin-bottom: 1rem;
                }
                
                &--btn{
                    @include button;
                }
            }
        }

        .info{
            padding: 2rem 1rem;

            &__intro{
                font-size: 1rem;
                margin-bottom: 2rem;
                text-align: center;
            }

            &__key{
                text-align: center;
                margin-bottom: 2rem;

                &--img{
                    width: 4rem;
                    margin-bottom: .75rem;
                }

                &--title{
                    font-size: 1rem;
                    font-weight: 600;
                }
            }
        }

        .slogan{
            background: url("~/assets/images/enterprise/slogan.jpg");
            padding: 4rem 1rem;
            text-align: center;
            background-size: cover;
            background-position: top center;

            &__info{
                font-size: $font-hd;
                color: #fff;
                font-weight: 700;
            }

            &__quote--left{
                font-size: 7rem;
                display: inline;
                color: #fff;
                position: absolute;
                left: 20%;
                opacity: 0.2;
            }
        }

        .services{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 2rem;

                &--title{
                    font-weight: bold;
                    font-size: $font-hd;
                }
            }

            &__srv {
                button {
                    box-shadow: none;
                    padding-left: .5rem;
                }

                &--btn{
                    font-size: 1rem;
                    font-weight: 600;
                    
                    &:not(.collapsed) {
                        color: $dark;
                        font-weight: 600;
                        background-color: transparent;
                        box-shadow: none;
                    }
                }

                .accordion-body{
                    padding-left: .5rem;
                }
            }
        }

        .media{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 2rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__list{
                margin-bottom: 1rem;

                a {
                    text-decoration: none;
                }

                .card {
                    @include card();

                    &:hover{
                        box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                    }

                    &-body{
                        color: $dark;
                    }
                }
                
                &--description{
                    font-size: .9rem;
                    font-weight: bold;
                    margin-bottom: 0;
                }
            }
        }

        .work{
            padding: 2rem 1rem;
            background: $secondary-2;
            color: white;

            &__head{
                margin-bottom: 2rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            .card{
                background: transparent;
                border: none;
                margin-bottom: 1rem;

                .card-body{
                    padding-left: 0;
                }
            }

            &__list{
                &--img{
                    width: 2rem;
                    margin-bottom: 1rem;
                }

                &--title{
                    font-weight: bold;
                    font-size: $font-rg;
                }

                &--description{
                    margin-bottom: 0;
                }
            }
        }

        .tools{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 1rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__nav{
                margin-bottom: 2rem;

                &--link{
                    display: inline;
                    font-weight: bold;
                    color: $secondary-2;
                    padding: .5rem;
                    margin-right: .5rem;
                    
                    &.active{
                        color: $secondary;
                    }
                }
            }

            &__content{
                .row{
                    justify-content: center;
                }

                &--sect{
                    margin-bottom: 1rem;
                    img{
                        width: 100%;
                    }
                }
            }
        }

        .resources{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 2rem;
                text-align: center;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__list{
                margin-bottom: 2rem;

                a {
                    text-decoration: none;
                }

                .card {
                    @include card();

                    &:hover{
                        box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                    }

                    &-body{
                        padding: .5rem .75rem;
                        color: $dark;
                    }
                }
                
                &--title{
                    font-size: $font-rg;
                    font-weight: bold;
                    margin-bottom: 0;
                }
                
                &--category{
                    background-color: transparent;
                    border: .075rem solid $dark;
                    border-radius: 1rem;
                    color: $dark;
                    font-size: .75rem;
                    margin-bottom: 1rem;
                    padding: .15rem .5rem;
                    margin-bottom: .75rem;
                    font-weight: 600;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper{
            .hero{
                height: 50vh;

                &__content{
                    bottom: 7%;
                
                    &--title{
                        font-size: $font-lg;
                    }
                }
            }

            .info{
                padding: 3rem 1rem;

                &__intro{
                    margin-bottom: 3rem;
                }

                &__key{
                    margin-bottom: 1rem;
                    
                    &--img{
                        width: 4rem;
                        margin-bottom: .75rem;
                    }

                    &--title{
                        font-size: 1rem;
                    }
                }
            }

            .slogan{
                padding: 5rem 1rem;

                &__info{
                    font-size: $font-md;
                }
            }

            .services{
                padding: 3rem 1rem;

                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__srv{
                    margin-bottom: 2rem;

                    button {
                        padding-left: .5rem;
                    }

                    &--btn{
                        font-size: 1.2rem;
                    }

                    .accordion-body{
                        padding-left: .5rem;
                    }
                }
            }

            .media{
                padding: 3rem 1rem;

                &__list{
                    margin-bottom: 1rem;
                }
            }

            .work{
                padding: 3rem 1rem;
            }

            .tools{
                padding: 3rem 1rem;
            }

            .resources{
                padding: 3rem 1rem;
            }

            .find{
                padding: 3rem 1rem;

                &__text{
                    margin-bottom: 1rem;

                    &--sub{
                        font-size: $font-rg;
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            .hero{
                height: 70vh;

                &__content{
                    
                    &--desc{
                        font-size: 1rem;
                        margin-bottom: 2rem;
                    }
                }
            }

            .info{
                padding: 3rem 1rem;

                &__intro{
                    font-size: 1.2rem;
                    margin-bottom: 4rem;
                }

                &__key{
                    padding: .5rem 1rem;
                    &--img{
                        width: 5rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: 1rem;
                    }
                }
            }

            .slogan{
                padding: 7rem 1rem;

                &__info{
                    font-size: $font-lg;
                }
            }

            .services{
                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__srv{
                    margin-bottom: 2rem;

                    &--btn{
                        font-size: $font-hd;
                    }
                }
            }

            .media{
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__list{
                    .card {
                        &-body{
                            color: $dark;
                        }
                    }
                    
                    &--description{
                        font-size: .9rem;
                        font-weight: bold;
                    }
                }
            }

            .work{
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                .card{
                    margin-bottom: 1rem;
                }

                &__list{
                    &--img{
                        width: 3rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: $font-rg;
                    }
                }
            }

            .tools{
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__nav{
                    margin-bottom: 2rem;

                    &--link{
                        padding: .5rem;
                        margin-right: 1.5rem;
                    }
                }

                &__content{
                    &--sect{
                        margin-bottom: 1rem;
                    }
                }
            }

            .resources{
                padding: 4rem 1rem;

                &__head{
                    &--title{
                        font-size: $font-md;
                    }
                }

                &__list{
                    margin-bottom: 2rem;

                    .card {
                        &-body{
                            padding: .75rem 1rem;
                        }
                    }
                    
                    &--title{
                        font-size: 1.1rem;
                    }
                    
                    &--category{
                        font-size: .75rem;
                    }
                }
            }

            .find{
                padding: 4rem 1rem;

                &__text{
                    &--title{
                        font-size: $font-lg;
                    }

                    &--sub{
                        font-size: 1.1rem;
                        margin-bottom: 2rem;
                    }
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1439px) {  
        .wrapper{
            .hero{
                height: 65vh;

                &__content{
                    &--title {
                        font-size: $font-xl;
                    }
                }
            }

            .info{
                padding: 5rem 1rem;

                &__intro{
                    font-size: 1.2rem;
                    line-height: 1.9;
                    margin-bottom: 4rem;
                }

                &__key{
                    &--img{
                        width: 5rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: 1.1rem;
                    }
                }
            }

            .slogan{
                padding: 9rem 1rem;

                &__info{
                    font-size: $font-xl;
                }
            }

            .services {
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__srv{
                    margin-bottom: 2rem;

                    &--btn{
                        font-size: 1.7rem;
                    }

                    .accordion-body{
                        padding-left: .5rem;
                        font-size: 1.2rem;
                    }
                }
            }

            .media{
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__list{
                    .card {
                        &-body{
                            color: $dark;
                        }
                    }
                    
                    &--description{
                        font-size: .9rem;
                        font-weight: bold;
                    }
                }
            }

            .work{
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                .card{
                    margin-bottom: 1rem;
                }

                &__list{
                    &--img{
                        // width: 4rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: $font-rg;
                    }
                }
            }

            .tools{
                padding: 4rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__nav{
                    margin-bottom: 2rem;

                    &--link{
                        padding: .5rem;
                        margin-right: 1.5rem;
                        font-size: 1.2rem;
                    }
                }

                &__content{
                    &--sect{
                        margin-bottom: 1rem;
                    }
                }
            }

            .resources{
                padding: 4rem 1rem;

                &__head{
                    &--title{
                        font-size: $font-md;
                    }
                }

                &__list{
                    margin-bottom: 2rem;

                    .card {
                        &-body{
                            padding: .75rem 1rem;
                        }
                    }
                    
                    &--title{
                        font-size: 1.1rem;
                    }
                    
                    &--category{
                        font-size: .75rem;
                    }
                }
            }

            .find{
                padding: 4rem 1rem;

                &__text{
                    &--title{
                        font-size: $font-lg;
                    }
                }
            }
        }
    }
</style>