<template>
    <div class="wrapper">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-7 col-lg-7 order-2 order-md-1 wrapper__body">
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
                                    <video controls width="100%" height="auto">
                                        <source src="~assets/videos/formulas.mp4" type="video/mp4">
                                    </video>
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

                <div class="col-md-5 col-lg-4 order-1 order-md-2 wrapper__enrol">
                   <div class="card border-0 shadow sticky-lg-top">
                       <div class="enrol__head">
                           <h2 class="enrol__head--price"> {{ course.price | moneyFormat }} </h2>
                           <button class="enrol__head--enrol btn">Take Course Now</button>
                       </div>
                       <div class="enrol__body">
                           <ul>
                               <li class="enrol__body--list"> <span class="fas fa-globe"></span> Online </li>
                               <li class="enrol__body--list"> <span class="fas fa-map-marker-alt"></span> Self Paced </li>
                               <li class="enrol__body--list"> <span class="fas fa-list"></span> {{ course.lessons_count }} Lectures </li>
                               <li class="enrol__body--list"> <span class="fas fa-clock"></span> {{ course.lessons_count | secondsToHours }} Hours </li>
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
    export default {
        head(){
            return{
                title: 'Course Title -  Africa Blockchain Institute',
                meta: [
                    {
                        name: '---',
                        content: '---'
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
            }
        },

        created(){
            this.getCourse();
        },

        methods: {
            async getCourse(){
                let doc = await this.$axios.$get(`/courses/${this.$route.params.slug}`);
                this.course = doc.data
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
                            background: $primary;
                            color: $white;
                        }
                    }
                }
            }
        }

        &__overview{
            margin-bottom: 1rem;

            &--title{
                font-size: $font-hd;
                font-weight: bold;
            }

            &--desc{
                font-size: .9rem;   
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
                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }

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