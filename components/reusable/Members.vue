<template>
    <div class="listings">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-xl-4">
                <div class="col listings__list" v-for="(perk, index) in perks" :key="index">
                    <div class="card h-100">
                        <h5 class="listings__list--num">{{ perk.no }}</h5>

                        <div class="listings__list--body">
                            <h5 class="listings__list--title">{{ perk.title }}</h5>
                            <ul class="list-items">
                                <li class="listings__list--item" v-for="(why, index) in perk.whys" :key="index">
                                    {{ why }}
                                </li>
                            </ul>   
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
            perks: Array,
        },

        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    .listings{
        padding: 1rem;

        &__list{
            .card {
                border: none;
                border-radius: .5rem;
                background-color: $grey;
                padding: 1rem;
                // justify-content: space-between;
            }

            &--num{
                font-size: $font-hd;
                font-weight: bold;
                color: $secondary;
                margin-bottom: 2rem;
            }

            &--title{
                font-size: 1rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            ul {
                padding-left: 1rem;
            }

            &--item{
                font-size: $font-rg;
                margin-bottom: .5rem;
                color: $dark;
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 1365px) { 
         .listings{
            padding: 2rem 1rem;

            &__list{
                .card {
                    padding: 1rem;
                }

                &--num{
                    font-size: 1.7rem;
                    margin-bottom: 2rem;
                }

                &--title{
                    font-size: 1.1rem;
                    margin-bottom: 1rem;
                }

                ul {
                    padding-left: 1rem;
                }

                &--item{
                    font-size: $font-rg;
                    margin-bottom: .5rem;
                }
            }
        }   
    }

    @media (min-width: 1440px) { 
         .listings{
            &__list{
                .card {
                    padding: 1.5rem;
                }
            }
        }   
    }
</style>