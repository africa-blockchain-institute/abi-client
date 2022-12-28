<template>
    <div>
        <header class="header">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <nuxt-link to="/" class="navbar-brand header__logo">
                        <img src="/logo_1.png" alt="Africa blockchain institute Logo">
                    </nuxt-link>

                    <div class=" header__links justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwtEcKZDGabK-0XhjN_tbMGgFXIA0k8cpS177BWa98aCcN0g/viewform" target="blank" class="nav-link btn">Become a Mentor</a>
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
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(20, 27, 86, 0.9) 27.29%, rgba(20, 27, 86, 0.9) 51.62%);
        
        &__logo{
            img{
                width: 7rem;
            }
        }

        &__links{
            .nav-item{
                margin-bottom: .5rem;
                text-align: center;

                .btn{
                    @include button();
                    padding: .5rem .9rem;
                    font-size: $font-sm;
                }
            }
        }
    }

    @media (min-width: 992px) { 
        .header{
            &__logo{
                img{
                    width: 9rem;
                }
            }

            &__links{
                margin-bottom: 0;

                .nav-item{
                    margin-right: 1rem;
                    margin-bottom: 0;

                    .btn{
                        padding: .75rem 1.2rem;
                        font-size: $font-rg;
                    }

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