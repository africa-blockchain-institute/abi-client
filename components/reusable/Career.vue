<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-xl-4">
        <div class="col career__list" v-for="(list, index) in listings" :key="index">
            <div class="card h-100">
                <div class="row">
                    <div class="career__info">
                        <div class="card-body">
                            <h5 class="career__info--title">{{ list.title }}</h5>
                            <h5 class="career__info--status">{{ list.status }}</h5>
                            <p class="career__info--description"> {{ list.description }} </p>
                            <p class="career__info--location"> <span class="fas fa-map-marker"></span> {{ list.location }} </p>
                            <a :href="list.link" class="career__info--link"> Apply <span class="fas fa-arrow-right"></span> </a>
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
        },
    }
</script>

<style lang="scss" scoped>
    /** career section ends */
    .career{
        padding: 2rem 1rem;

        &__list{
            margin-bottom: 1rem;
            
            .card {
                @include card();
                padding: .75rem;
                background-color: $grey;

                &:hover {
                    .fa-arrow-right {
                        transform: translateX(.25rem);
                    }
                }
            }
        }

        &__info {
            .card-body {
                padding: 1rem .5rem 0;
            }

            &--title{
                font-size: 1rem;
                font-weight: bold;
                margin-bottom: .25rem;
            }

            &--status{
                font-size: .9rem;
                font-weight: bold;
                margin-bottom: .5rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid grey;
            }
            
            &--description{
                font-size: .9rem;
                margin-bottom: 1rem;
                color: $grey-3;
            }
            
            &--location {
                font-size: .9rem;
                color: $grey-3;

                .fas {
                    margin-right: .5rem;
                    color: $secondary;
                }
            }

            &--link{
                color: $secondary;
                font-size: .9rem;
                text-decoration: none;

                .fa-arrow-right {
                    margin-left: .25rem;
                    transition: all .3s ease;
                    transform: translateX(0);
                    margin-bottom: 0;
                }
            }
        }
    }
    /** career section ends */

    // Large devices (desktops, 992px and up)
    @media (min-width: 768px) { 
        /** career section ends */
        .career {
            padding: 3rem 1rem;

            &__list{
                margin-bottom: 1rem;
            }

            &__info {
                &--title{
                    font-size: 1.2rem;
                    margin-bottom: .25rem;
                }

                &--description{
                    font-size: 1rem;
                }
                
                &--link{
                    color: $secondary;
                    font-size: 1rem;
                }
            }

        }
        /** career section ends */
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 991px) { 
        /** career section ends */
        .career {
            padding: 4rem 1rem;
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 1400px) { 

    }
</style>