<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="title" :image="image" :desc="desc" />
        <!-- hero section ends -->

        <!-- insights section starts -->
        <section class="insights">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div class="col events__list">
                        <div class="card">
                            <div class="row">
                                <div class="events__image">
                                    <img src="~/assets/images/insights/insight-1.jpg" class="img-fluid" />
                                </div>
                                <div class="events__info">
                                    <div class="card-body">
                                        <button class="btn events__info--tag">Featured</button>
                                        <h5 class="events__info--title">Event Title to fin and even more so the three lines that was required and when it exceeds? </h5>
                                        <p class="events__info--date"> August 23rd, 2025 </p>
                                        <!-- <nuxt-link :to="{ name: 'insights-slug', params: { slug: insight.slug } }"  class="events__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </nuxt-link> -->
                                        <nuxt-link :to="{ name: 'insights-slug', params: '/insights/_slug/' }"  class="events__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col events__list">
                        <div class="card">
                            <div class="row">
                                <div class="events__image">
                                    <img src="~/assets/images/insights/insight-2.jpg" class="img-fluid" />
                                </div>
                                <div class="events__info">
                                    <div class="card-body">
                                        <button class="btn events__info--tag">Featured</button>
                                        <h5 class="events__info--title">As required and when it exceeds? </h5>
                                        <p class="events__info--date"> August 23rd, 2025 </p>
                                        <a href="#" class="events__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col events__list">
                        <div class="card">
                            <div class="row">
                                <div class="events__image">
                                    <img src="~/assets/images/insights/insight-2.jpg" class="img-fluid" />
                                </div>
                                <div class="events__info">
                                    <div class="card-body">
                                        <button class="btn events__info--tag">Featured</button>
                                        <h5 class="events__info--title">As required and when it exceeds? </h5>
                                        <p class="events__info--date"> August 23rd, 2025 </p>
                                        <a href="#" class="events__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col events__list">
                        <div class="card">
                            <div class="row">
                                <div class="events__image">
                                    <img src="~/assets/images/insights/insight-2.jpg" class="img-fluid" />
                                </div>
                                <div class="events__info">
                                    <div class="card-body">
                                        <button class="btn events__info--tag">Featured</button>
                                        <h5 class="events__info--title">This is is the making of something great and even more pleased</h5>
                                        <p class="events__info--date"> August 23rd, 2025 </p>
                                        <a href="#" class="events__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col events__list">
                        <div class="card">
                            <div class="row">
                                <div class="events__image">
                                    <img src="~/assets/images/insights/insight-2.jpg" class="img-fluid" />
                                </div>
                                <div class="events__info">
                                    <div class="card-body">
                                        <button class="btn events__info--tag">Featured</button>
                                        <h5 class="events__info--title">This is is the making of something great and even more pleased</h5>
                                        <p class="events__info--date"> August 23rd, 2025 </p>
                                        <a href="#" class="events__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <!-- insights section ends -->
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';

    export default {
        head(){
            return{
                title: 'Insights -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Insights',
                        content: 'Insights'
                    }
                ],
            }
        },

        data(){
            return{
                title: 'Regulatory Landscape: Navigating Compliance in Blockchain',
                image: 'insights',
                desc: ""
            }
        },

         components: {
            Hero,
        },

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .insights {
            padding: 2rem 1rem;

            .events__list {
                margin-bottom: 1.5rem;

                .card {
                    @include card();
                    padding: .75rem;

                    &:hover {
                        box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                    }

                    .card-body {
                        padding: 1rem .5rem;
                    }
                }

                .events__image {
                    img {
                        width: 100%;
                        height: auto;
                        border-radius: 1rem;
                    }
                }

                .events__info {
                    .card-body {
                        padding-bottom: 0;
                    }

                    &--tag {
                        background-color: transparent;
                        border: .075rem solid $dark;
                        border-radius: 1rem;
                        color: $dark;
                        font-size: 0.75rem;
                        margin-bottom: 1rem;
                        padding: .25rem .75rem;
                        font-weight: 600;
                    }

                    &--title {
                        font-size: 1rem;
                        font-weight: bold;
                        margin-bottom: 0.5rem;
                    }

                    &--date {
                        font-size: 0.9rem;
                        color: $grey-3;
                        margin-bottom: .5rem;
                    }

                    &--link {
                        display: inline-block;
                        margin-top: 1rem;
                        color: $secondary;
                        text-decoration: none;
                        font-size: 0.9rem;
                        transition: all .2s;
                        
                        &:hover {
                            .fas {
                                transition: all .2s;
                                transform: translateX(.5rem)
                            }
                        }
                    }
                }
            }
        }  
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper {
           
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .wrapper {
           
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper {
            .insights {
                padding: 4rem 1rem;

                .events__list {
                    margin-bottom: 2rem;

                    .card {
                        padding: 1rem;
                    }

                    .events__info {
                        &--tag {
                            font-size: 0.9rem;
                            padding: .25rem .9rem;
                        }

                        &--title {
                            font-size: 1.1rem;
                        }


                        &--link {
                            font-size: 1rem;
                        }
                    }
                }
        }
        }
    }
</style>