<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-xl-4">
        <div class="col insight__list" v-for="(list, index) in listings" :key="index">
            <div class="card">
                <div class="row">
                    <div class="insight__image">
                        <img :src="list.image" class="img-fluid" />
                    </div>
                    <div class="insight__info">
                        <div class="card-body">
                            <button class="btn insight__info--tag">{{ list.tag }}</button>
                            <h5 class="insight__info--title">{{ list.title }} </h5>
                            <p class="insight__info--date"> {{ list.published | formatDate }} </p>
                            <nuxt-link :to="{ name: 'insights-slug', params: { slug: list.slug } }"  class="insight__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </nuxt-link>
                            <!-- <nuxt-link :to="{ name: 'insights-slug', params: '/insights/_slug/' }"  class="insight__info--link" target="blank"> Read More <span class="fas fa-arrow-right"></span> </nuxt-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            listings: Array,
            title: String,
        },

        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    .insight {
        &__list {
            .card {
                @include card();
                padding: .75rem;

                &:hover {
                    box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                }
            }
        }

        &__image {
            img {
                width: 100%;
                height: auto;
                border-radius: 1rem;
            }
        }

        &__info {
            .card-body {
                padding: 1rem .5rem 0;
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

    // Large devices (desktops, 992px and up)
    @media (min-width: 1400px) { 
        .insight {
            &__list {
                .card {
                    padding: 1rem;
                }
            }

            &__info {
                &--title {
                    font-size: 1.2rem;
                }

                &--date {
                    font-size: 1rem;
                }
            }
        }    
    }
</style>