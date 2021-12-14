<template>
    <div>
        <header class="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <nuxt-link to="/incubator-program" class="navbar-brand header__logo">
                        <img src="/logo.png" alt="Africa blockchain institute Logo">
                    </nuxt-link>


                    <div class=" header__links justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEhdDsjesmwkzkH_hLPeTYmutkUyJytJVB1g_AxNVxMpH63A/viewform" target="blank" class="nav-link btn">Apply Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <Nuxt />
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },

        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .header{
        &__logo{
            img{
                width: 9rem;
            }
        }

        &__links{
            .nav-item{
                margin-bottom: .5rem;
                text-align: center;

                .btn{
                    @include button();
                    // padding: .5rem 1rem;
                }
            }
        }
    }

    @media (min-width: 992px) { 
        .header{
            &__logo{
                img{
                    width: 10rem;
                }
            }

            &__links{
                margin-bottom: 0;

                .nav-item{
                    margin-right: 1rem;
                    margin-bottom: 0;

                    &:last-child{
                        margin-right: 0;
                    }

                    a{
                        font-size: .9rem;
                    }
                }
            }
        }
    }
</style>