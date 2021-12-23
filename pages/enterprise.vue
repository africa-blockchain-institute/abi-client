<template>
    <div class="wrapper">
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto hero__banner">
                        <h1 class="hero__banner--title">Blockchain Consulting &amp; Solutions Development </h1>
                        <p class="hero__banner--sub">ABI Enterprise helps clients explore every aspect of blockchain and build tailored solutions designed to deliver value. Our cutting-edge Blockchain Technology Capabilities lead the way to a disruptive future for numerous businesses striving for transparent, secure, decentralized and productive business solutions, that are market-ready and address real business issues.</p>
                        <nuxt-link to="/abi-consulting" class="hero__banner--btn btn">Bring ABI to your Business</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="info">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <p class="info__intro">
                            Blockchain technology has become an essential part of the enterprise software stack for organizations that want to streamline business processes and issue digital assets. Not all organizations need a blockchain solution, but for those that do, the technology can be transformational. Blockchains helps businesses solve for three main scenarios:
                        </p>
                            
                        <div class="row">
                            <div class="col-md-4 info__key">
                                <img src="~/assets/images/enterprise/icons/data.png" alt="process data efficiently" class="info__key--img">
                                <p class="info__key--title">Process data efficiently</p>
                            </div>
                            <div class="col-md-4 info__key">
                                <img src="~/assets/images/enterprise/icons/trust.png" alt="process data efficiently" class="info__key--img">
                                <p class="info__key--title">Trusted transactions and secure business networks</p>
                            </div>
                            <div class="col-md-4 info__key">
                                <img src="~/assets/images/enterprise/icons/manage.png" alt="process data efficiently" class="info__key--img">
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
                <div class="row justify-content-center">
                    <div class="col-12 services__head">
                        <h2 class="services__head--title">Enterprise Services</h2>
                    </div>

                    <div class="row services__srv">
                        <div class="col-lg-4 col-md-5 services__img">
                            <img src="~/assets/images/enterprise/education.jpg" alt="" class="services__img--img img-fluid">
                        </div>
                        <div class="col-lg-5 col-md-6 services__info">
                            <h3 class="services__info--title">Education</h3>
                            <p class="services__info--text">Custom Blockchain trainings in upskilling your team with our robust specialized Curriculum for Enterprise. Including Webinars, Workshops, and Keynote for International Conferences, which will provide you with in-depth knowledge of the intricate Blockchain Ecosystem and all its facets.</p>
                        </div>
                    </div>

                    <div class="row services__srv">
                        <div class="col-lg-4 col-md-5 services__img">
                            <img src="~/assets/images/enterprise/advisory.jpg" alt="" class="services__img--img img-fluid">
                        </div>
                        <div class="col-lg-5 col-md-6 services__info">
                            <h3 class="services__info--title">Blockchain Advisory</h3>
                            <p class="services__info--text"> Gain guidance through every stage of your blockchain project. You will receive insight into business model prototyping, use case discovery, market analysis, and proofs-of-concept to develop comprehensive strategies for blockchain adoption. </p>
                        </div>
                    </div>

                    <div class="row services__srv">
                        <div class="col-lg-4 col-md-5 services__img">
                            <img src="~/assets/images/enterprise/deployment.jpg" alt="" class="services__img--img img-fluid">
                        </div>
                        <div class="col-lg-5 col-md-6 services__info">
                            <h3 class="services__info--title">Deployment of Blockchain Solutions</h3>
                            <p class="services__info--text"> We provide you with the programming of scalable and distributed applications and custom-built protocols. Additionally, we support you throughout the entire process of integration and adaptation of blockchain technology into your already existing company network. </p>
                        </div>
                    </div>

                    <div class="row services__srv">
                        <div class="col-lg-4 col-md-5 services__img">
                            <img src="~/assets/images/enterprise/catalyst.jpg" alt="" class="services__img--img img-fluid">
                        </div>
                        <div class="col-lg-5 col-md-6 services__info">
                            <h3 class="services__info--title">Catalyst</h3>
                            <p class="services__info--text"> Uniqueness is core to operation, as we strive to curate new blockchain-based platforms and business models in solving new problems while leveraging our network of partners, and alliances </p>
                        </div>
                    </div>

                    <div class="row services__srv">
                        <div class="col-lg-4 col-md-5 services__img">
                            <img src="~/assets/images/enterprise/asset.jpg" alt="" class="services__img--img img-fluid">
                        </div>
                        <div class="col-lg-5 col-md-6 services__info">
                            <h3 class="services__info--title">Asset Management</h3>
                            <p class="services__info--text"> Accelerates the management of digital assets with blockchain technology. This service facilitates the interaction of asset users, asset owners, and asset issuers.</p>
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
                                <img src="~/assets/images/enterprise/icons/strategy.png" class="work__list--img" alt="strategy assessment">
                                <h5 class="work__list--title"> Strategy assessment </h5>
                                <p class="work__list--description">We'll assess your goals and evaluate blockchain's applicability and business impact to help you define and prioritize your transformation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/hands-on.png" class="work__list--img" alt="Hands-on training and rapid prototyping">
                                <h5 class="work__list--title"> Hands-on training and rapid prototyping  </h5>
                                <p class="work__list--description">Technology leadership workshops and training upskill your team while working side-by-side with experts in rapid blockchain development environments.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/solution.png" class="work__list--img" alt="Solution Design">
                                <h5 class="work__list--title"> Solution Design  </h5>
                                <p class="work__list--description">Holistic solution design encompasses people, process, operating model and technology to maximize your transformation across your business.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/build.png" class="work__list--img" alt="Build and implementation">
                                <h5 class="work__list--title"> Build and implementation  </h5>
                                <p class="work__list--description">Complex implementation management, third-party integration and custom coding assures each solution fits within existing systems to meet future demand.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/assets.png" class="work__list--img" alt="Assets and solutions">
                                <h5 class="work__list--title"> Assets and solutions  </h5>
                                <p class="work__list--description">Proprietary software add-ons, such as redaction, key management and hardware security modules, give you greater control and customization.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col work__list" >
                        <div class="card h-100">
                            <div class="card-body">
                                <img src="~/assets/images/enterprise/icons/ecosystem.png" class="work__list--img" alt="Ecosystem Management">
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
                        <h2 class="tools__head--title">Tools and Techniques</h2>
                    </div>
                </div>
                <div class="row">
                    <ul class="nav justify-content-center tools__nav" id="pills-tab">
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
                            <a class="nav-link tools__nav--link" id="pills-frontend-tab" data-bs-toggle="pill" data-bs-target="#pills-frontend" type="button" role="tab">Frontend Technologies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link tools__nav--link" id="pills-frontend-tab" data-bs-toggle="pill" data-bs-target="#pills-cloud" type="button" role="tab">Cloud Platforms</a>
                        </li>
                    </ul>
                    <div class="tab-content tools__content justify-content-center" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-frameworks">
                            <div class="row row-cols-3 row-cols-md-4 row-cols-lg-6 justify-content-center">
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frameworks/ethereum.png" alt="Ethereum">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frameworks/bitcoin.png" alt="Bitcoin">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frameworks/polkadot.png" alt="polkadot">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frameworks/quorum.png" alt="Quorum">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frameworks/multichain.png" alt="multichain">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frameworks/hyper_ledger.png" alt="Hyper Ledger">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-programming" role="tabpanel" aria-labelledby="pills-programming-tab">
                            <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/programming/asp_net.png" alt="ASP Net">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/programming/c.png" alt="c language">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/programming/c++.png" alt="c++ language">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/programming/php.png" alt="php">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/programming/java.png" alt="java language">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/programming/python.png" alt="python language">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/programming/nodejs.png" alt="nodejs language">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-databases">
                            <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/databases/couchDB.png" alt="couchDB">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/databases/ipfs.png" alt="ipfs">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/databases/mongoDB.png" alt="mongoDB">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-frontend">
                            <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frontend/wms.png" alt="wms">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frontend/apache.png" alt="apache">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frontend/kafka.png" alt="kafka">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frontend/metamask.png" alt="metamask">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frontend/docker.png" alt="docker">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/frontend/metamask.png" alt="metamask">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-cloud">
                            <div class="row row-cols-3 row-cols-md-6 justify-content-center">
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/cloud/aws.png" alt="aws">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/cloud/kaleido.png" alt="kaleido">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/cloud/eth_bass.png" alt="aws">
                                </div>
                                <div class="col tools__content--sect">
                                    <img src="~/assets/images/enterprise/icons/cloud/ibm.png" alt="ibm">
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

                <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-xl-3">
                    <div class="col resources__list" v-for="(resource, index) in resources" :key="index">
                        <a :href="resource.link" target="blank">
                            <div class="card h-100">
                                <img :src="resource.image" class="card-img-top" :alt="resource.description">
                                <div class="card-body">
                                    <span class="resources__list--category">{{ resource.category }} </span>
                                    <p class="resources__list--title">{{ resource.title }} </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="find">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4 find__img">
                        <img src="~/assets/images/enterprise/icons/find_blockchain.png" alt="Findthe best blockchain for your business">
                    </div>
                    <div class="col-md-7 offset-md-1 find__text">
                        <h3 class="find__text--title">Finding the Best Blockchain for Your Business?</h3>
                        <p class="find__text--sub">Let’s work together. Get in touch with us and send some basic info about your project.</p>
                        <nuxt-link to="/abi-consulting" class="find__text--btn btn">Get Started</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                mentions: [],
                resources: [],

            }
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
    .wrapper{
        .hero{
            background: url("@/assets/images/enterprise/banner.jpg") center /cover;

            &__banner{
                text-align: center;
                padding: 4rem 1rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                    color: #fff;
                }

                &--sub{
                    font-size: $font-rg;
                    color: #fff;
                }

                &--btn{
                    @include button();
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
                margin-bottom: 1rem;

                &--img{
                    width: 5rem;
                    margin-bottom: .5rem;
                }

                &--title{
                    font-size: 1rem;
                    font-weight: bold;
                }
            }
        }

        .slogan{
            background: url("~/assets/images/home/pattern.jpg");
            padding: 3rem 1rem;
            text-align: center;
            background-size: cover;

            &__info{
                font-size: $font-hd;
                color: #fff;
                font-weight: 700;
            }

            &__quote--left{
                font-size: 5rem;
                display: inline;
                color: #fff;
                position: absolute;
                left: 20%;
                opacity: 0.3;
            }
        }

        .services{
            padding: 2rem 0 1rem;
            background-color: $primary-light;

            &__head{
                margin-bottom: 2rem;

                &--title{
                    text-align: center;
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__srv{
                justify-content: center;
                align-items: center;
                margin-bottom: 2rem;
            }

            &__img{
                img{
                    border-radius: .5rem;
                    margin-bottom: 1rem;
                }
            }

            &__info{
                &--title{
                    font-size: $font-rg;
                    font-weight: bold;
                }

                &--text{
                    font-size: .9rem;
                }
            }
        }

        .media{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 2rem;

                &--title{
                    text-align: center;
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
            padding: 2rem 0 1rem;
            background: $secondary-2;
            color: white;

            &__head{
                margin-bottom: 2rem;
                text-align: center;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            .card{
                background: transparent;
                border: none;
                margin-bottom: 1rem;
            }

            &__list{
                &--img{
                    width: 4rem;
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
                text-align: center;

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
                        color: $primary;
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
                    font-size: .75rem;
                    font-weight: bold;
                    color: $primary;
                }
            }
        }

        .find{
            padding: 2rem 1rem;

            &__img{
                margin-bottom: 2rem;

                img{
                    width: 100%;
                }
            }

            &__text{
                &--title{
                    font-size: $font-md;
                    font-weight: bold;
                }

                &--sub{
                    font-size: $font-rg;
                }

                &--btn{
                    @include button();
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper{
            .hero{
                &__banner{
                    padding: 4rem 1rem;

                    &--title{
                        font-size: $font-md;
                    }

                    &--btn{
                        @include button();
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
                        width: 5rem;
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
                padding: 2rem 0 1rem;

                &__head{
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__srv{
                    margin-bottom: 2rem;
                }

                &__info{
                    &--title{
                        font-size: 1.2rem;
                    }

                    &--text{
                        font-size: $font-rg;
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
                padding: 3rem 0 1rem;
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
                &__banner{
                    padding: 5rem 1rem;

                    &--title{
                        font-size: $font-lg;
                    }

                    &--sub{
                        font-size: $font-rg;
                        margin-bottom: 2rem;
                    }

                    &--btn{
                        @include button();
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
                padding: 5rem 1rem;

                &__info{
                    font-size: $font-lg;
                }
            }

            .services{
                padding: 3rem 1rem;

                &__head{
                    margin-bottom: 4rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__srv{
                    margin-bottom: 3rem;
                }

                &__img{
                    img{
                        border-radius: .5rem;
                    }
                }

                &__info{
                    &--title{
                        font-size: $font-hd;
                        margin-bottom: 1rem;
                    }

                    &--text{
                        font-size: 1.1rem;
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
                        width: 4rem;
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
    @media (min-width: 1400px) {  
        .wrapper{
            .hero{
                &__banner{
                    padding: 6rem 1rem;

                    &--title{
                        font-size: $font-xl;
                        line-height: 4rem;
                    }

                    &--btn{
                        @include button();
                    }
                }
            }

            .info{
                padding: 5rem 1rem;

                &__intro{
                    font-size: 1.2rem;
                    margin-bottom: 4rem;
                }

                &__key{
                    &--img{
                        width: 7rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: 1.1rem;
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
                padding: 5rem 1rem;

                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__srv{
                    margin-bottom: 3rem;
                }

                &__img{
                    img{
                        border-radius: .5rem;
                    }
                }

                &__info{
                    &--title{
                        font-size: $font-hd;
                        margin-bottom: 1rem;
                    }

                    &--text{
                        font-size: 1.1rem;
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
                        width: 4rem;
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
                }
            }
        }
    }
</style>