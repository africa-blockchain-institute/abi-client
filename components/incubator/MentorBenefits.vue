<template>
    <div class="benefits">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5 col-lg-4 offset-lg-1 benefits__img">
                    <img src="~/assets/images/incubator/images/benefit_mentor.jpg" class="img-fluid">
                </div>
                <div class="col-md-7 col-lg-5 offset-lg-1 benefits__text">
                    <h2 class="benefits__text--title">Benefits</h2>
                    <div class="benefits__text--item" v-for="(item, index) in list" :key="index">
                        <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                        <h4>{{ item }}</h4>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Mentor-Benefits',

        data() {
            return {
                list: [
                    "An opportunity to help contribute to new solutions in the blockchain space in Africa",
                    "An opportunity to connect with other professionals and experts in the blockchain space in Africa",
                    "A shareable certificate of serving as a mentor for the Africa Blockchain Institute",
                    "An appreciation stipend",
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .benefits {
        padding: 2rem 1rem;
        background: linear-gradient(180deg, rgba(20, 27, 86, 0.9) 3.09%, rgba(20, 27, 86, 0.9) 100%);
        background-image: url("@/assets/images/incubator/images/footer_bg.jpg") !important;
       
        &__img{
            margin-bottom: 2rem;
        }

        &__text{
            &--title{
                font-size: $font-hd;
                font-weight: 800;
                margin-bottom: 1.5rem;
                background: linear-gradient(91.49deg, #F68634 12.11%, #6DE0F6 35.56%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
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
                    color: $white;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .benefits {
            padding: 5rem 1rem;

            &__img{
                display: block;
            }

            &__text{
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
        .benefits {
            &__text{
                &--title{
                    font-size: $font-md;
                    margin-bottom: 2rem;
                }
            }
        }
    }
</style>