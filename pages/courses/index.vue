<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="Courses" image="courses" />
        <!-- hero section ends -->

        <div class="courses">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-3 g-xxl-5">
                    <div class="col courses__list mb-2 mb-md-3" v-for="(course, index) in courses" :key="index">
                        <nuxt-link :to="{ name: 'courses-slug', params: { slug: course.slug } }" >
                            <div class="card h-100">
                                <img :src="course.image" class="card-img-top" :alt="course.title">
                                <div class="card-header">
                                    <h5 class="courses__list--title">{{ course.title }}</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <p class="courses__list--description" v-html="course.description"> </p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <p class="courses__list--lessons"> <span class="fas fa-list"></span> {{ course.lessons_count }} lessons </p>
                                        <p class="courses__list--duration"> <span class="fas fa-clock"></span> {{ course.duration | secondsToHours }} hours</p>
                                    </div>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '@/components/reusable/Hero.vue';

    export default {
        name: "courses",

        head(){
            return{
                title: 'Courses -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Courses',
                        content: 'Courses'
                    }
                ],
            }
        },

        data(){
            return {
                courses: []
            }
        },

        components: {
            Hero
        },

        created(){
            this.getCourses();
        },

        methods:{
            async getCourses(){
                let docs = await this.$axios.$get(`/courses?page=${this.page}&limit=${this.perPage}`)
                this.records = docs.records;
                this.courses = docs.data;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .courses {
            margin: 2rem 0rem;

            &__list{
                a {
                    text-decoration: none;
                }

                .card {
                    @include card();

                    &:hover{
                        box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                    }

                    &-header{
                        position: absolute;
                        bottom: 9rem;
                        border: 0;
                        color: white;
                        background: transparent;
                    }

                    &-body{
                        padding: 1rem;
                        color: $dark;
                    }
                }
                
                &--title{
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                
                &--category{
                    font-size: .8rem;
                }

                &--description{
                    font-size: .9rem;
                }

                &--lessons, &--duration{
                    .fas{
                        color: $primary;
                        margin-right: .2rem;
                    }

                    font-weight: bold;
                    font-size: .9rem;
                    margin-bottom: 0;
                }
            }
        }
    }

    // small devices (tablets, 768px and up)
    @media (min-width: 400px) {  
        .wrapper{
            &__list{
                &--title{
                    font-size: 1.3rem;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            .courses {
                margin: 3rem 1rem;

                &__list{
                    a {
                        text-decoration: none;
                    }

                    .card {
                        @include card();

                        &:hover{
                            box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                        }

                        &-header{
                            bottom: 9.5rem;
                        }

                        &-body{
                            padding: 1.5rem;
                        }
                    }
                    
                    &--title{
                        font-size: 1.5rem;
                    }

                    &--description{
                        font-size: .9rem;
                    }

                    &--lessons, &--duration{
                        .fas{
                            margin-right: .2rem;
                        }

                        font-size: .9rem;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>