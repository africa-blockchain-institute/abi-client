<template>
    <footer class="footer">
        <div class="container">
            <div class="row footer__subscribe">
                <div class="col-12 col-md-6">
                    <h2 class="footer__subscribe--header">Subscribe to Our Newsletter</h2>
                </div>

                <div class="col-12 col-md-5 offset-md-1">
                    <div class="input-group footer__subscribe--form">
                        <input type="email" class="form-control form-control-lg" 
                            :class="{'is-invalid': errors.status }" 
                            v-model="form.email" placeholder="Enter your email address"
                            aria-label="enter your email address" aria-describedby="subscribe" required
                        >
                        <button class="btn" type="button" id="subscribe" @click="submit()">
                            <span class="fas fa-paper-plane" v-if="!loading"></span>
                            <span class="fas fa-spinner fa-spin" v-else></span>
                        </button>
                        <div class="invalid-feedback" v-if="mcErr"> {{ mcErr }} </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 footer__sect">
                    <div class="footer__sect--logo">
                        <img src="/logo_1.png" alt="Africa Blockchain Institute Logo" class="img-fluid">
                    </div>

                    <div class="footer__sect--social">
                        <a href="mailto:info@africablockchain.institute" target="blank" class="icon"><span class="fas fa-envelope"></span></a>
                        <a href="https://twitter.com/AfricaBlockInst" target="blank" class="icon"><span class="fab fa-twitter"></span></a>
                        <a href="https://www.linkedin.com/company/africablockinst" target="blank" class="icon thin"><span class="fab fa-linkedin"></span></a>
                        <a href="https://web.facebook.com/Africa-Blockchain-Institute-103445117670312" target="blank" class="icon thin"><span class="fab fa-facebook-square"></span></a>
                        <a href="#" target="blank" class="icon thin"><span class="fab fa-youtube"></span></a>
                        <a href="#" target="blank" class="icon thin"><span class="fab fa-medium"></span></a>
                    </div>
                </div>
                <div class="col-md-4 footer__sect">
                    <h4 class="footer__sect--header">Quick Links</h4>

                    <div class="row">
                        <div class="col-6">
                            <ul class="footer__sect--links ps-0">
                                <li><nuxt-link to="/about-abi" class="link">About ABI</nuxt-link> </li>
                                <li><nuxt-link to="/events" class="link">Events</nuxt-link> </li>
                                <li><nuxt-link to="/our-impact" class="link">Our Impact</nuxt-link> </li>
                                <li><nuxt-link to="/enterprise" class="link">Enterprise</nuxt-link> </li>
                                <li><nuxt-link to="/careers" class="link">Careers</nuxt-link> </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="footer__sect--links ps-0">
                                <li><a href="https://bittersweet-cellar-8f6.notion.site/Africa-Blockchain-Institute-ABI-fca726ed28944074b98cf5f110aed317" class="link">Careers</a> </li>
                                <li><nuxt-link to="/research" class="link">Research</nuxt-link> </li>
                                <li><nuxt-link to="/programs" class="link">Programs</nuxt-link> </li>
                                <li><nuxt-link to="/insights" class="link">Insights</nuxt-link> </li>
                                <li><nuxt-link to="/membership-network" class="link">Membership Network</nuxt-link> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 footer__sect">
                    <h4 class="footer__sect--header">Contact Us</h4>

                    <div class="footer__sect--contact">
                        <p class="address"><span class="fas fa-map-marker"></span> KN 5 Airport Road, Kimihurura, Kigali, Rwanda</p>
                        <p class="email"><span class="fas fa-envelope"></span> info@africablockchain.institute </p>
                        <p class="phone"><span class="fas fa-phone"></span> +250 783 632 405 </p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 footer__copy">
                    <p> &copy; {{ new Date().getFullYear() }} Africa Blockchain Institute | All rights reserved. </p>
                    <p> 
                        <nuxt-link class="link" to="/privacy-policy">Privacy Policy</nuxt-link> |
                        <nuxt-link class="link" to="/terms-of-service">Terms of Service</nuxt-link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

        data(){
            return{
                loading: false,

                form:{
                    email: ""
                },

                mcErr: ""
            }
        },

        created(){
        },

        methods: {
            async submit(){
                try {
                    this.loading = true;
                    const res = await this.$axios.$post('/subscribers/email-subscriber', this.form);

                    if(res.status == 'success'){
                        this.$swal.fire({
                            title: 'Thank you!',
                            text: "You've succesfully subscribed!",
                            type: 'success',
                            showCancelButton: false,
                        }).then((result) => {
                            if (result.value) {
                                return;
                            }
                        })
                    }

                    this.form = "";
                    this.loading = false;

                } catch (err) {
                    this.mcErr = "Failed to subscribe. Please try again later."
                    this.form = "";
                    this.loading = false;
                    
                    this.timeOut();
                }
            },

            timeOut(){
                return setTimeout( ()=>{
                    this.mcErr = ""
                }, 5000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer{
        background-color: $secondary-2;
        padding: 3rem 1rem 2rem;

        &__subscribe {
            margin-bottom: 2rem;

            &--header {
                font-size: 1.2rem;
                color: $white;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            &--form{
                width: 100%;

                .form-control{
                    padding: .9rem 1rem;
                    color: $white;
                    background: #FFFFFF33;
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
        }

        &__sect{
            padding-top: 1rem;
            margin-bottom: 2rem;

            &--header{
                font-size: 1rem;
                color: $white;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            &--logo{
                width: 70%;
                margin-bottom: 2rem;
            }
            
            &--social{
                margin-top: 2rem;

                .icon{
                    margin-right: 1.2rem;
                    display: inline-block;
                    transition: .2s all;

                    .fab, .fas{
                        color: $white;
                        font-size: 1.2rem;
                    }

                    &:hover{
                        color: $white;
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

                    .fas{
                        margin-right: .5rem;
                    }
                }
            }
        }

        &__copy{
            margin-top: 1rem;
            text-align: center;

            p{
                color: $white;
                font-size: .9rem;

                .link{
                    color: $white;
                    text-decoration: none;
                    
                    &:hover{
                        color: $secondary;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) { 
        .footer{
            padding: 5rem 1rem 2rem;

            &__subscribe {
                margin-bottom: 3rem;
                align-items: center;

                &--header {
                    font-size: $font-xl;
                    margin-bottom: 3rem
                }

                &--form{
                    .form-control{
                        padding: 1rem;
                        font-size: 1.2rem;
                    }

                    .btn{
                        padding: .5rem 1.5rem;

                        .fas {
                            font-size: 1.2rem;
                        }
                    }
                }
            }

            &__sect{
                padding-top: 1rem;

                &--header{
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                &--logo{
                    width: 60%;
                    margin-bottom: 3rem;
                }

                &--contact {
                    p {
                        margin-bottom: 1rem;
                    }
                }
            }

            &__copy{
                margin-top: 2rem;
                display: flex;
                justify-content: space-between;
            }
        }   
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) { 
        .footer{
            &__sect{
                padding-top: 1rem;

                &--header{
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }

                &--logo{
                    width: 50%;
                }


                &--social{
                    margin-top: 2rem;

                    .icon{
                        margin-right: 1.5rem;

                        .fab, .fas{
                            font-size: 1.5rem;
                        }
                    } 
                }

                &--links{
                    li {
                        margin-bottom: 1rem;

                        a{
                            font-size: 1rem;
                        }
                    }
                }

                &--contact{
                    p {
                        font-size: 1rem;

                        .fas{
                            margin-right: .5rem;
                        }
                    }
                }
            }
        }
    }
</style>