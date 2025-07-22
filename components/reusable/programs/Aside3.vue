<template>
    <div class="sect">
        <div class="container-fluid">
            <div class="row sect__content">
                <div class="col-md-7 col-xl-5 order-2 order-md-1 sect__content--text">
                    <h3 class="title">{{ title }}</h3>
                    <p class="body" v-html="text1"></p>
                    <ul class="body">
                        <li v-for="(list, index) in lists" :key="index">{{ list }}</li>
                    </ul>
                </div>
                <div class="col-md-5 col-xl-4 order-1 order-md-2 offset-xl-1 sect__content--img">
                    <img :src="require(`~/assets/images/${image}`)" :alt="title" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'image', 'text1', 'lists'],        
    }
</script>

<style lang="scss" scoped>
    #link {
        color: $secondary!important;
        text-decoration: none !important;
    }
    
    .sect{
        &__content{
            justify-content: center;
            padding: 2rem 1rem;

            &--img{
                margin-bottom: 1rem;
            }

            &--text{
                .title{
                    font-weight: bold;
                    font-size: $font-hd;
                    margin-bottom: .25rem;
                }

                .body{
                    font-size: $font-rg;
                    line-height: 1.7;
                }

                li {
                    margin-bottom: .75rem;
                }

            }

            &--btn {
                @include button();
            }
        }
    }

    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  
        .sect {
            &__content{
                padding: 2rem 3rem;

                &--img{
                    margin-bottom: 0;
                }

                &--text{
                    .title{
                        font-size: $font-hd;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }


    // Large devices (desktops, 992px and up)
    @media (min-width: 991px) { 
        .sect {
            &__content{
                padding: 3rem;

                &--img{
                    margin-bottom: 0;
                }

                &--text{
                    .title{
                        font-size: $font-hd;
                    }
                }
            }
        }            
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 1439px) { 
        .sect {
            &__content{
                padding: 4rem;

                 &--text {
                    .body{
                        font-size: 1.1rem;
                    }
                }
            }
        }            
    }
</style>