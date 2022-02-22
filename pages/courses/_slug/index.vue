<template>
    <div class="wrapper">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-8 col-lg-8 order-2 order-md-1 wrapper__body">
                    <div class="row">
                        <div class="col-12 wrapper__head">
                            <h3 class="wrapper__head--title">{{ course.title }}</h3>

                            <ul class="nav wrapper__head--links">
                                <li class="nav-item link">
                                    <a class="nav-link active" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab" >Overview</a>
                                    <a class="nav-link" id="pills-curriculum-tab" data-bs-toggle="pill" data-bs-target="#pills-curriculum" type="button" role="tab">Curriculum</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-overview" role="tabpanel">
                            <div class="row">
                                <div class="col-12 wrapper__overview">
                                    <div class="wrapper__video--video">
                                        <img :src="course.image" :alt="course.title" class="img-fluid">
                                    </div>
                                    <!-- <div class="wrapper__video--video"
                                        :playsinline="playsinline"
                                        v-video-player:myVideoPlayer="playerOptions">
                                    </div> -->
                                </div>

                                <div class="col-12 wrapper__overview">
                                    <h2 class="wrapper__overview--title">Course Description</h2>
                                    <div class="wrapper__overview--desc" v-html="course.description"> </div>
                                </div>
                                
                                <div class="col-12 wrapper__overview">
                                    <h2 class="wrapper__overview--title">Requirements</h2>
                                    <div class="wrapper__overview--desc" v-html="course.requirements"> </div>
                                </div>
                                
                                <div class="col-12 wrapper__overview">
                                    <h2 class="wrapper__overview--title">Learning Outcomes</h2>
                                    <div class="wrapper__overview--desc" v-html="course.learning_outcome"> </div>
                                </div>

                                <div class="col-12 wrapper__overview" v-if="course.certification">
                                    <h2 class="wrapper__overview--title">Certification</h2>
                                   <div class="wrapper__overview--desc" v-html="course.certification"> </div>
                                </div>

                                <div class="col-12 wrapper__overview" v-if="course.career_prospect">
                                    <h2 class="wrapper__overview--title">Career Prospects</h2>
                                    <div class="wrapper__overview--desc" v-html="course.career_prospect"> </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-curriculum" role="tabpanel">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="wrapper__curriculum--title">What you Will Learn</h2>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 wrapper__curriculum">
                                    <div class="accordion" id="accordionCurriculum">
                                        <div class="accordion-item shadow-sm">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+tab">
                                                    Lesson Modules
                                                </button>
                                            </h2>
                                            <div :id="tab" class="accordion-collapse collapse show">
                                                <div class="accordion-body">
                                                    <ul v-for="(lesson, index) in course.lessons" :key="index">
                                                        <li><span>Lesson {{index+1}}:</span> {{ lesson.title }}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                    Module 2: Setup and Installation
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse">
                                                <div class="accordion-body">
                                                    <ul>
                                                        <li><span>Lesson 1:</span> Introduction to Blockchain Enterprise</li>
                                                        <li><span>Lesson 2:</span> Nomination</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 col-lg-4 order-1 order-md-2 wrapper__enrol">
                   <div class="card border-0 shadow sticky-lg-top">
                        <div class="enrol__head" v-if="checkUserHasCourse">
                           <h2 class="enrol__head--price"> {{ course.price | moneyFormat }} </h2>
                           <nuxt-link :to="{ name: 'user-courses-slug', params: { slug: course.slug }}" class="enrol__head--enrol btn">Continue to Course</nuxt-link>
                       </div>

                       <div class="enrol__head" v-else>
                           <h2 class="enrol__head--price"> {{ course.price | moneyFormat }} </h2>
                          
                            <client-only v-if="this.$auth.loggedIn">
                                <button @click="payViaService()" class="enrol__head--enrol btn" >
                                    Make Payment
                                </button>
                           </client-only>
                           <nuxt-link to="/login" class="enrol__head--enrol btn" v-else>Purchase Course</nuxt-link>
                       </div>
                      
                       <div class="enrol__body">
                           <ul>
                               <li class="enrol__body--list"> <span class="fas fa-globe"></span> Online </li>
                               <li class="enrol__body--list"> <span class="fas fa-map-marker-alt"></span> Self Paced </li>
                               <li class="enrol__body--list"> <span class="fas fa-list"></span> {{ course.lessons_count }} Lectures </li>
                               <li class="enrol__body--list"> <span class="fas fa-clock"></span> {{ course.duration | secondsToHours }} Hour(s) </li>
                               <li class="enrol__body--list"> <span class="fas fa-poll"></span> All Levels </li>
                               <li class="enrol__body--list"> <span class="fas fa-spell-check"></span> English </li>
                           </ul>
                       </div>
                   </div>

                   <!-- <div class="share">
                       <h3 class="share__title">Share this course</h3>
                       <div>
                           <a href="#"> <span class="fab fa-facebook"></span> </a>
                           <a href="#"> <span class="fab fa-twitter"></span> </a>
                           <a href="#"> <span class="fab fa-linkedin"></span> </a>
                       </div>
                   </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        head(){
            return{
                title: `${this.course.title} -  Africa Blockchain Institute`,
                meta: [
                    {
                        name: this.course.title,
                        content: this.course.title
                    }
                ],
            }
        },

        data(){
            return{
                course: {},
                currentTab: "Overview",
                tabs: [
                    "Overview", "Curriculum"
                ],
                tab: "collapseOne",

                // component options
                playsinline: true,
                
                // videojs options
                playerOptions: {
                    muted: false,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: ""
                    }],
                    poster: ""
                },

                userId: "",
                checkUserHasCourse: false,

                paymentData:{
                    tx_ref: this.generateReference(),
                    amount: '',
                    currency: 'USD',
                    payment_options: 'card',
                    redirect_url: "",
                    customer: {
                        name: "",
                        email: "",
                    } ,
                    customizations: {
                        title: 'Africa Blockchain Institute',
                        description: "",
                        logo: 'https://abi-api-assets.s3.us-east-2.amazonaws.com/general/logo.png'
                    },
                    onclose: this.closedPaymentModal
                }
            }
        },

        computed:{
            ...mapGetters({
                user: 'loggedInUser'
            })
        },

        created(){
            this.checkUser();
            this.getCourse();
            this.getUserInfo();
        },

        methods: {
            async payViaService() {
                const res = await this.asyncPayWithFlutterwave(this.paymentData);

                if(res.status == "successful"){
                    const user = (this.user.me) ? this.user.me : this.user;

                    const paymentInfo = {
                        email: user.email, 
                        amount: res.amount,
                        course: this.course.id,
                        user: this.userId,
                        tx_ref: res.tx_ref,
                        transaction_id: res.transaction_id,
                        flw_ref: res.flw_ref
                    }

                    const doc = await this.$axios.$post(`/payments`, paymentInfo);
                    
                    if(doc.status == "success"){
                        this.$toast.success("Course purchased successfully.", {
                            icon : 'check'
                        });

                        this.$router.push({ name: "user-courses" });
                        location.reload();
                    }
                }
                
            },

            async getCourse(){
                let doc = await this.$axios.$get(`/courses/${this.$route.params.slug}`);
                this.course = doc.data;

                //set player video properties
                this.playerOptions.sources[0].src = this.course.preview;
                this.playerOptions.poster = this.course.image;

                //set payment data properties
                this.paymentData.amount = this.course.price;
                this.paymentData.customizations.description = this.course.title;
            },

            async checkUser(){
                const user = (this.user.me) ? this.user.me : this.user;
                let status = await this.$axios.$post(`/users/courses/check-user`, { user: user.id, slug: `${this.$route.params.slug}` });
                this.checkUserHasCourse = status.data;
            },

            getUserInfo(){
                const user = (this.user.me) ? this.user.me : this.user;
                
                this.paymentData.customer.name = user.name;
                this.paymentData.customer.email = user.email;
                this.userId = user.id;
            },

            generateReference(){
                let text = "ABI-";
                let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
                for( let i=0; i < 10; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));
        
                return text;
            },

            closedPaymentModal: function(){
                this.$swal.fire({
                    title: 'Transaction Cancelled!',
                    text: "You've cancelled the transaction by closing the payment checkout!",
                    type: 'warning',
                    confirmButtonText: 'Okay!'

                }).then((result) => {
                    if (result.value) {
                        
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        margin: 2rem 1rem;

        &__body{
            padding: 2rem 0;
        }

        &__head{
            margin-bottom: 2rem;

            &--title{
                font-size: $font-md;
                font-weight: bold;
                margin-bottom: 2rem;
            }

            &--links{
                .link{
                    a{
                        display: inline;
                        font-weight: bold;
                        padding: .5rem 1rem;
                        color: $dark;
                        border-radius: .5rem;
                        margin-right: 1rem;
                        
                        &.active{
                            background: $secondary;
                            color: $white;
                        }
                    }
                }
            }
        }

        &__overview{
            margin-bottom: 1rem;

            &--video{
                width: 100%!important;
            }

            &--title{
                font-size: 1.2rem;
                font-weight: bold;
            }

            &--desc{
                font-size: .9rem;
                overflow: auto;
            }

            &--check{
                padding-left: 0;

                li{
                    display: inline-block;
                    margin-bottom: .5rem;
                    font-size: .9rem;

                    .fas{
                        color: $secondary;
                    }
                }
            }
        }

        &__curriculum{
            &--title{
                font-size: 1.1rem;
                font-weight: bold;
                margin-bottom: 2rem;
            }

            .accordion{
                &-item{
                    margin-bottom: 1rem;
                }

                &-header{
                    background: transparent;

                    button{
                        padding: 1.2rem 1rem;
                        box-shadow: none;
                        font-size: 1rem;
                        font-weight: bold;
                        color: $dark;
                        border: none;
                    }
                }

                &-body{
                    ul{
                        margin-bottom: 0;
                        padding-left: 0;

                        li{
                            display: block;
                            margin-bottom: .5rem;
                            font-size: .9rem;
                        }
                    }
                }
            }
        }

        &__enrol{
            .card{
                padding: 2rem;
                margin-bottom: 2rem;
                top: 1rem;
            }

            .enrol{
                &__head{
                    margin-bottom: 2rem;

                    &--price{
                        color: $secondary;
                        font-size: $font-lg;
                        font-weight: bold;
                        margin-bottom: 2rem;
                    }

                    &--enrol{
                        @include button();
                    }
                }

                &__body{
                    ul{
                        padding-left: 0;

                        li{
                            margin-bottom: 1rem;
                            display: block;
                            color: grey;
                            font-size: .9rem;

                            span{
                                margin-right: .5rem;    
                            }
                        }
                    }
                }
            }

            .share{
                &__title{
                    font-size: $font-rg;
                    font-weight: bold;
                }

                a{
                    color: $secondary;
                    margin-right: .5rem;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .wrapper{
            margin: 2rem 1rem;

            &__body{
                padding: 2rem 1rem;
            }

            &__head{
                &--title{
                    margin-bottom: 2rem;
                }
            }

            &__overview{
                margin-bottom: 2rem;

                &--desc{
                    font-size: $font-rg;   
                }

                &--check{
                    padding-left: 0;

                    li{
                        font-size: $font-rg;  
                        margin-bottom: .75rem;

                        .fas{
                            margin-right: .75rem;
                            color: $secondary;
                        }
                    }
                }
            }

            &__curriculum{
                &--title{
                    font-size: $font-hd;
                }

                .accordion{
                    &-item{
                        margin-bottom: 1rem;
                    }

                    &-header{
                        button{
                            padding: 1.2rem 1rem;
                            font-size: 1.1rem;
                        }
                    }

                    &-body{
                        ul{
                            li{
                                margin-bottom: 1rem;
                                font-size: $font-rg;
                            }
                        }
                    }
                }
            }

            &__enrol{
                padding: 2rem 1rem;

                .card{
                    padding: 2rem;
                    margin-bottom: 2rem;
                }

                .enrol{
                    &__head{
                        margin-bottom: 2rem;

                        &--price{
                            font-size: $font-lg;
                            margin-bottom: 2rem;
                        }
                    }

                    &__body{
                        ul{
                            padding-left: 0;

                            li{
                                margin-bottom: 1rem;

                                span{
                                    margin-right: .5rem;    
                                }
                            }
                        }
                    }
                }

                .share{
                    &__title{
                        font-size: $font-rg;
                        font-weight: bold;
                    }

                    a{
                        color: $secondary;
                        margin-right: .5rem;
                    }
                }
            }
        }
    }
</style>