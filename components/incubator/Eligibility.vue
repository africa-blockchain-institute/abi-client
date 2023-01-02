<template>
    <div class="eligibility">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7 col-lg-5 offset-lg-1 eligibility__text">
                    <h2 class="eligibility__text--title">{{title}}</h2>
                    <p class="eligibility__text--sub">{{ sub  }}</p>
                    <div class="eligibility__text--item" v-for="(item, index) in list" :key="index">
                        <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                        <h4>{{ item }}</h4>
                    </div>

                    <div v-if="disp">
                        <div class="eligibility__text--item">
                            <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                            <h4>Incubation Program: <b>March - June 2023 </b></h4>
                        </div>
                        <div class="eligibility__text--item">
                            <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                            <h4>Deadline for Mentorship Application: <b>6th February 2023 </b></h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4 offset-lg-1 eligibility__img">
                    <img :src="require(`~/assets/images/incubator/images/${image}`)" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Outline',

        props: {
            image: {
                type: String,
            },
            title: {
                type: String,
            },
            sub: {
                type: String,
            },
            list: {
                type: Array,
            },
            disp: {
                type: Boolean,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .eligibility {
        margin: 3rem 1rem;

        &__img{
            display: block;
            margin-bottom: 1rem;
        }

        &__text{
            &--title{
                font-size: $font-hd;
                font-weight: 800;
                margin-bottom: 1.2rem;
            }

            &--sub{
                margin-bottom: 1.2rem;
            }

            &--item{
                display: flex;
                margin-bottom: 1rem;
                
                img {
                    width: 1rem;
                    height: 1rem;
                    margin-right: .5rem;
                    margin-top: .15rem;
                }
            
                h4 {
                    font-size: $font-rg;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .eligibility {
            margin: 5rem 1rem;

            &__img{
                display: block;
            }

            &__text{
                &--sub{
                    margin-bottom: 1.5rem;
                }

                &--item{
                    margin-bottom: 1rem;
                    
                    img {
                        margin-top: 0.1rem;
                    }
                
                    h4 {
                        font-size: $font-rg;
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .eligibility {
            &__text{
                &--title{
                    font-size: $font-md;
                }
            }
        }
    }
</style>