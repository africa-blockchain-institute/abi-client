<template>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-xl-4">
        <!-- <div class="col listings__list" v-for="(list, index) in listings" :key="index">
            <div class="card h-100">
                <img :src="list.image" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="listings__list--name">{{ list.name }}</h5>
                    <span class="listings__list--title">{{ list.title }} </span>
                </div>
            </div>
        </div> -->

        <div class="col event__list">
            <div class="card h-100">
                <div class="row">
                    <div class="event__img">
                        <img src="~/assets/images/home/drive_impact_research.jpg" class="img-fluid">
                    </div>
                    <div class="event__info">
                        <div class="card-body">
                            <h5 class="event__info--title">Event Title to fin the three lines that was required and when it exceeds? </h5>
                            <p class="event__info--date"> <span class="fas fa-calendar"></span> August 23rd, 2025 </p>
                            <p class="event__info--location"> <span class="fas fa-map-marker"></span> Kigali, Rwanda </p>
                            <a href="#" class="event__info--link" target="blank"> View details <span class="fas fa-arrow-right"></span> </a>
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
    /** event section ends */
    .event{
        padding: 2rem 1rem;

        &__head{
            margin-bottom: 1rem;

            &--title{
                font-size: 1.2rem;
                font-weight: bold;
            }
        }

        &__list{
            margin-bottom: 2rem;
            
            .card {
                @include card();
                padding: .75rem;

                &:hover {
                    .fa-arrow-right {
                        transform: translateX(.25rem);
                    }
                }
            }
        }

        &__img{
            img {
                border-radius: .75rem;
            }
        }

        &__info {
            .card-body {
                padding: 1rem .5rem 0;
            }

            &--title{
                font-size: 1rem;
                font-weight: bold;
                margin-bottom: .5rem;
            }
            
            &--date{
                font-size: .9rem;
                margin-bottom: .5rem;
                color: $grey-3;

                .fas {
                    margin-right: .5rem;
                    color: $secondary;
                }
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
                }
            }
        }
    }
    /** event section ends */

    // Large devices (desktops, 992px and up)
    @media (min-width: 738px) { 
        /** event section ends */
        .event {
            padding: 3rem 1rem;

            &__head{
                margin-bottom: 1rem;

                &--title{
                    font-size: $font-hd;
                }
            }

            &__list{
                margin-bottom: 2rem;
            }

            &__info {
                &--title{
                    font-size: 1.2rem;
                    margin-bottom: .75rem;
                }
            }
        }
        /** event section ends */
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 991px) { 
        /** event section ends */
        .event {
            padding: 4rem 1rem;

            &__head{
                margin-bottom: 1rem;

                &--title{
                    font-size: $font-md;
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 1400px) { 

    }
</style>