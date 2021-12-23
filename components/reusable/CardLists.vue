<template>
    <div class="listings">
        <div class="container">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-xl-4">
                <div class="col listings__list" v-for="(list, index) in listings" :key="index">
                    <div class="card h-100">
                        <img :src="list.image" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="listings__list--name">{{ list.name }}</h5>
                            <span class="listings__list--title">{{ list.title }} </span>
                            <p class="listings__list--position">{{ list.position }} </p>
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
            listings: Array
        },

        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    .listings{
        margin: 3rem 1rem;

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
                margin-bottom: .5rem;
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
            margin: 3rem 1rem;

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