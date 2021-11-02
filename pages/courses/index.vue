<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="Courses" image="courses" />
        <!-- hero section ends -->

        <div class="courses">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-xl-5">
                    <div class="col courses__list mb-2 mb-md-3" v-for="(course, index) in courses" :key="index">
                        <nuxt-link :to="{ name: 'courses-slug', params: { slug: course.slug } }" >
                            <div class="card h-100">
                                <!-- <img src="~/assets/images/faculty/banner.jpg" class="card-img-top" alt=""> -->
                                <img :src="require('~/assets/images/'+course.image)" class="card-img-top" :alt="course.title">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <h5 class="courses__list--title">{{ course.title }}</h5>
                                        <p class="courses__list--description">{{ course.description }} </p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <p class="courses__list--lessons"> <span class="fas fa-list"></span> {{ course.lessons }} lessons </p>
                                        <p class="courses__list--duration"> <span class="fas fa-clock"></span> {{ course.duration }} hours </p>
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

        data(){
            return {
                courses: [
                    {
                        slug: "blockchain-developers",
                        image: "courses/banner.jpg",
                        category: "Blockchain",
                        title: "Blockchain for Developers",
                        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolor natus sunt odio amet doloremque iure adipisci voluptates dicta ab, quisquam eos accusantium soluta temporibus. Iste amet hic nihil magnam.",
                        lessons: "13",
                        duration: "2"
                    },
                    {
                        slug: "enterprise-for-consultants",
                        image: "courses/banner.jpg",
                        category: "Enterprise",
                        title: "Enterprise for Consultants",
                        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolor natus sunt odio amet doloremque iure adipisci voluptates dicta ab, quisquam eos accusantium soluta temporibus. Iste amet hic nihil magnam.",
                        lessons: "5",
                        duration: "1"
                    }
                ]
            }
        },

        components: {
            Hero
        },

        created(){

        },
    }
</script>

<style lang="scss" scoped>
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

                    &-body{
                        padding: 1.5rem;
                        color: $dark;
                    }
                }
                
                &--title{
                    font-size: 1.2rem;
                    font-weight: bold;
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

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>