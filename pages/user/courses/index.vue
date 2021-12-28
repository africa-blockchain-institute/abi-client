<template>
    <div class="wrapper">
        <div class="head">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="head__title">My Courses</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="courses">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-3 g-xxl-5">
                    <div class="col courses__list mb-2 mb-md-3" v-for="(course, index) in courses" :key="index">
                        <nuxt-link :to="{ name: 'user-courses-slug', params: { slug: course.slug } }" >
                            <div class="card h-100">
                                <img :src="course.image" class="card-img-top" :alt="course.title">
                                <div class="card-header">
                                    <h5 class="courses__list--title">{{ course.title }}</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <div class="courses__list--description" v-html="course.description"></div>
                                    </div>
                                    <div>
                                        <div class="progress" style="height: 5px;">
                                            <div class="progress-bar courses__list--progress" role="progressbar" :style="{ width: getLessonCount(course.id, course.lessons_count)+'%' } "></div>
                                        </div>
                                        <small class="courses__list--completed">{{ getLessonCount(course.id, course.lessons_count) }}% Completed </small>
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

    import { mapGetters } from 'vuex';

    export default {
        layout: 'user',

        head(){
            return{
                title: 'User Courses',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Courses'
                    }
                ],
            }
        },

        data(){
            return{
                courses: [],
                lessons: [],
                count: 0
            }
        },

        created(){
            this.getDocs();
        },

        computed:{
            ...mapGetters({
                user: 'loggedInUser'
            })
        },

        // async asyncData({params, store, $axios}) {
        //     const user = (store.state.auth.user.me) ? store.state.auth.user.me : store.state.auth.user;
        //     let docs = await $axios.$get(`/users/${user.id}`)

        //     return{
        //         courses: docs.data.courses,
        //         lessons: docs.data.lessons
        //     }
        // },

        methods:{
            async getDocs(){
                const user = (this.user.me) ? this.user.me : this.user;
                let docs = await this.$axios.$get(`/users/${user.id}`)
                this.courses = docs.data.courses;
                this.lessons = docs.data.lessons;
            },

            getLessonCount(course_id, lessons_count){
                let lessonPercentCompleted;

                this.lessons.forEach(el => {
                    const [curr] = Object.keys(el);
                    if(curr == course_id){
                        lessonPercentCompleted = Math.ceil((el[course_id].length / lessons_count ) * 100);
                        return;
                    } 
                });

                return lessonPercentCompleted;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .head{
            margin: 2rem auto 2rem;

            &__title{
                font-size: $font-hd;
                font-weight: bold;
            }
        }
        
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

                &--progress{
                    background: $secondary;
                }

                &--completed{
                    font-size: $font-sm;
                    font-weight: bold;
                    color: $secondary;
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
            .head{
                margin: 3rem auto 4rem;

                &__title{
                    font-size: $font-md;
                }
            }
            .courses {
                margin: 3rem 1rem;

                &__list{
                    .card {
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
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>