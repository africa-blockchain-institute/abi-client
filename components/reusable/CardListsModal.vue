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
                    <div class="card h-100" data-bs-toggle="modal" :data-bs-target="'#teamModal-' + index">
                        <img :src="list.image" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="listings__list--name">{{ list.name }}</h5>
                            <p class="listings__list--title">{{ list.title }} </p>
                            <p class="listings__list--org">{{ list.organization }} </p>
                        </div>
                    </div>

                    <div class="modal fade" :id="'teamModal-'+index" tabindex="-1" aria-labelledby="teamModallabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header px-4">
                                    <h3 class="modal-title fw-bold">Our Team</h3>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-4 col-xl-4 modal__img">
                                                <img :src="list.image" :alt="list.name" class="img-fluid">
                                            </div>
                                            <div class="col-md-8 col-xl-7 ms-auto modal__detail">
                                                <h1 class="modal__detail--name">{{ list.name }}</h1>
                                                <h5 class="modal__detail--title">{{ list.title }},</h5>
                                                <h5 class="modal__detail--org">{{ list.organization }}</h5>
                                                <div class="modal__detail--body" v-html="list.details"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

            cursor: pointer;

            &--name{
                font-size: $font-rg;
                margin-bottom: .5rem;
                font-weight: bold;
            }

            &--title{
                font-size: $font-sm;
                margin-bottom: 0;
            }
            
            &--org{
                font-size: $font-rg;
                margin-bottom: 0;
            }

            &--position{
                margin-bottom: 0;
                color: $primary;
                font-size: .8rem;
            }
        }

        .modal {
            &__img {
                img {
                    margin-bottom: .5rem;
                }
            }
            &__detail {
                &--name {
                    font-size: 1.1rem;
                    font-weight: bold;
                    margin-bottom: .5rem;
                }

                &--title {
                    font-size: .9rem;
                    margin-bottom: 0;
                }

                &--org {
                    font-size: .9rem;
                    margin-bottom: 1rem;
                }
            }
        }
    }


    @media (min-width: 1260px) { 
        .listings {
            .modal {
                &__detail {
                    &--name {
                        font-size: 1.5rem;
                        margin-bottom: .75rem;
                    }

                    &--title {
                        font-size: 1.2rem;
                        margin-bottom: .25rem;
                    }

                    &--org {
                        font-size: 1.2rem;
                        margin-bottom: 1.5rem;
                    }
                }
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
                    margin-bottom: .55rem;
                    font-weight: bold;
                }

                &--title{
                    font-size: .85rem;
                }

                &--org{
                    font-size: 1rem;
                }

                &--position{
                    margin-bottom: 0;
                    color: $primary;
                }
            }

            .modal {
                &__detail {
                    &--name {
                        font-size: $font-md;
                        margin-bottom: .5rem;
                    }

                    &--title {
                        font-size: $font-hd;
                        margin-bottom: 0;
                    }

                    &--org {
                        font-size: $font-hd;
                        margin-bottom: 1.5rem;
                    }
                }
            }
        }    
    }
</style>