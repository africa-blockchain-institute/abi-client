<template>
    <div class="listings">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="listings__header--title">{{ title }}</h2>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-xl-4">
                <div class="col listings__list" v-for="(list, index) in listings" :key="index">
                    <div class="card h-100">
                        <img :src="list.image" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="listings__list--name">{{ list.name }}</h5>
                            <span class="listings__list--title">{{ list.title }} </span>
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
    .listings{
        padding: 2rem 1rem;

        &__header{
            &--title{
                font-size: $font-hd;
                font-weight: bold;
                margin-bottom: 1.5rem;
            }
        }

        &__list{
            .card {
                @include card();

                &:hover{
                    box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                }
            }

            &--name{
                font-size: $font-rg;
                margin-bottom: 0;
                font-weight: bold;
            }

            &--title{
                font-size: $font-sm;
                display: inline-block;
                margin-bottom: 1rem;
            }

            &--position{
                margin-bottom: 0;
                color: $primary;
                font-size: .8rem;
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 1400px) { 
        .listings{
            padding: 3rem 1rem;

            &__header{
                &--title{
                    font-size: $font-md;
                    margin-bottom: 2rem;
                }
            }

            &__list{
                .card {
                    @include card();

                    &:hover{
                        box-shadow: 0 .35rem .65rem rgba(0,0,0,.075)!important;
                    }
                }

                &--name{
                    font-size: $font-rg;
                    margin-bottom: .25rem;
                    font-weight: bold;
                }

                &--title{
                    font-size: .85rem;
                    display: inline-block;
                    margin-bottom: .5rem;
                }

                &--position{
                    margin-bottom: 0;
                    color: $primary;
                }
            }
        }    
    }
</style>