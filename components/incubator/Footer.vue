<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-7 mx-auto text-center footer__info">
                    <h3 class="footer__info--title">How to Apply</h3>
                    <p class="footer__info--text">To apply, click on the button below by January 31, 2023. Note that only one application is expected per team.</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSefUa4XoY1xOBKiBQYI42rii4LgjBSsylVBapNwZBy0U0kmLA/viewform?usp=sf_link" target="blank" class="footer__info--btn btn">Apply Now</a>
                </div>
            </div>    
        </div>
     </div>
 </template>
 
 <script>
 </script>
 
 <style lang="scss" scoped>
    .footer {
        background: linear-gradient(180deg, rgba(20, 27, 86, 0.9) 3.09%, rgba(20, 27, 86, 0.9) 100%);
        background-image: url("@/assets/images/incubator/images/footer_bg.jpg") !important;
        color: $white;
        margin: 3rem 0 0;
        padding: 3rem 0;

        &__info{
            &--title {
                font-size: $font-hd;
                font-weight: 800;
                margin-bottom: 1rem;
            }
            
            &--text {
                font-size: $font-rg;
                margin-bottom: 2rem;
            }

            &--btn {
                @include button();
            }
        }
    }
 
     // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
         
     }
 
     // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .footer {
            margin: 5rem 0 0;
            padding: 3rem 0;

            &__info{
                &--title {
                    font-size: $font-md;
                    margin-bottom: 1.5rem;
                }
                
                &--text {
                    font-size: $font-rg;
                }
            }
        }
     }
 
     // XX-Large devices (larger desktops, 1400px and up)
     @media (min-width: 1400px) {  
        .footer {
            padding: 5rem 0;

            &__info{
                &--title {
                    font-size: $font-md;
                }
                
                &--text {
                    font-size: $font-rg;
                    margin-bottom: 2.5rem;
                }
            }
        }
     }
 </style>