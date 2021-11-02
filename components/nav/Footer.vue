<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer__sect">
                    <h4 class="footer__sect--header">Subscribe To Our Newsletter</h4>

                    <div class="input-group footer__sect--subscribe">
                        <input type="email" class="form-control form-control-lg" placeholder="Enter your email address" aria-label="enter your email address" aria-describedby="subscribe">
                        <button class="btn" type="button" id="subscribe"><span class="fas fa-envelope"></span> </button>
                    </div>

                    <div class="footer__sect--social">
                        <a href="mailto:info@africablockchain.institute" target="blank" class="icon"><span class="fas fa-envelope"></span></a>
                        <a href="https://twitter.com/AfricaBlockInst" target="blank" class="icon"><span class="fab fa-twitter"></span></a>
                        <a href="https://www.linkedin.com/company/africablockinst" target="blank" class="icon thin"><span class="fab fa-linkedin"></span></a>
                        <a href="https://web.facebook.com/Africa-Blockchain-Institute-103445117670312" target="blank" class="icon thin"><span class="fab fa-facebook-square"></span></a>
                    </div>
                </div>
                <div class="col-md-4 footer__sect">
                    <h4 class="footer__sect--header">Quick Links</h4>

                    <ul class="footer__sect--links ps-0">
                        <li><nuxt-link to="/about-abi" class="link">About ABI</nuxt-link> </li>
                        <li><nuxt-link to="/faculty" class="link">Faculty</nuxt-link> </li>
                        <li><nuxt-link to="/enterprise" class="link">Enterprise</nuxt-link> </li>
                        <li><nuxt-link to="/courses" class="link">Courses</nuxt-link> </li>
                    </ul>
                </div>
                <div class="col-md-4 footer__sect">
                    <h4 class="footer__sect--header">Contact Us</h4>

                    <div class="footer__sect--contact">
                        <p class="phone">+250 783 632 405 </p>
                        <p class="email">info@fricablockchain.institute </p>
                        <p class="address">KN 5 Airport Road, Kimihurura, Kigali, Rwanda</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 footer__copy">
                    <p> &copy; {{ new Date().getFullYear() }} Africa Blockchain Institute | All rights reserved. </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .footer{
        background-color: $secondary-2;
        padding: 2rem 1rem;

        &__sect{
            padding-top: 1rem;
            margin-bottom: 1rem;

            &--header{
                font-size: 1rem;
                color: $secondary;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            &--subscribe{
                width: 100%;

                .form-control{
                    padding: .9rem 1rem;
                    background: $white!important;
                    box-shadow: none;
                    border: 0;
                    font-size: .9rem;
                }

                .btn{
                    border: none;
                    background-color: $grey;
                    color: $secondary;
                    padding: .375rem 1rem;
                    box-shadow: none;

                    &:hover{
                        background-color: $secondary;
                        color: $white;
                    }
                }
            }
            
            &--social{
                margin-top: 2rem;

                .icon{
                    background-color: $secondary;
                    padding: .2rem .55rem;
                    border-radius: 50%;
                    margin-right: .5rem;
                    display: inline-block;
                    transition: .2s all;

                    .fab, .fas{
                        color: $white;
                        font-size: .9rem;
                    }

                    &.thin{
                        padding: .2rem .6rem;
                    }

                    &:hover{
                        background-color: $white;

                        .fab, .fas{
                            color: $secondary;
                        }
                    }
                } 
            }

            &--links{
                li{
                    display: block;
                    margin-bottom: .5rem;

                    a{
                        color: $white;
                        text-decoration: none;
                        font-size: .9rem;

                        &:hover{
                            color: $secondary;
                        }
                    }
                }
            }

            &--contact{
                p {
                    color: $white;
                    font-size: .9rem;
                }
            }
        }

        &__copy{
            margin-top: 2rem;
            text-align: center;

            p{
                color: $white;
                font-size: .9rem;
            }
        }
    }

    @media (min-width: 768px) { 
        
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) { 
        .footer{
            padding: 4rem 1rem 2rem;

            &__sect{
                padding-top: 1rem;

                &--header{
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                &--subscribe{
                    width: 70%;

                    .form-control{
                        padding: .9rem 1rem;
                        font-size: .9rem;
                    }
                }
                
                &--social{
                    margin-top: 2rem;

                    .icon{
                        padding: .2rem .55rem;
                        border-radius: 50%;
                        margin-right: .75rem;

                        .fab, .fas{
                            font-size: .9rem;
                        }

                        &.thin{
                            padding: .2rem .6rem;
                        }
                    }
                }

                &--links{
                    li{
                        margin-bottom: .5rem;
                    }
                }
            }
        }
    }
</style>