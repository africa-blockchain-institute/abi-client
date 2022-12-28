<template>
    <div class="eligibility">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7 col-lg-5 offset-lg-1 eligibility__text">
                    <h2 class="eligibility__text--title">Eligibility</h2>
                    <p class="eligibility__text--sub">We are looking for ambitious individuals that are forward-thinking, innovative, and ready to take up challenges in creating the next Big Thing.</p>
                    <div class="eligibility__text--item">
                        <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                        <h4>Must be between 20 - 35 years of age.</h4>
                    </div> 

                    <div class="eligibility__text--item">
                        <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                        <h4>Priorities are given to Female Applications.</h4>
                    </div>

                    <div class="eligibility__text--item">
                        <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                        <h4>Strong business case and market potential.</h4>
                    </div>

                    <div class="eligibility__text--item">
                        <img src="~assets/images/incubator/icons/tick_1.png" alt="">
                        <h4>Both idea-stage and early-stage (1 year) companies are encouraged to apply.</h4>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5 eligibility__img">
                    <img src="~/assets/images/incubator/images/eligibility.jpg" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .eligibility {
        margin: 3rem 1rem;

        &__img{
            display: none;
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
                    font-weight: bold;
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