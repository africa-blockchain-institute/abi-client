<template>
    <div class="wrapper">
        <HeaderHP />
        <div class="hero">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-9 hero__head">
                        <h1 class="hero__head--title">Terms of Service</h1>
                        <p class="hero__head--date">Last updated: 2025</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="privacy">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 col-xxl-9 privacy__content">
                        <p class="privacy__content--text">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import HeaderHP from '@/components/nav/HeaderHP';

    export default {
        head(){
            return{
                title: 'Terms of Service -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Terms of Service',
                        content: 'terms-of-service'
                    }
                ],
            }
        },

        components: {
            HeaderHP
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .hero {
            padding: 2rem 1rem;

            &__head {
                text-align: center;

                &--title {
                    font-size: $font-hd;
                    font-weight: bold;
                }

                &--date {
                    font-size: $font-rg;
                    font-weight: 600;
                }
            }
        }

        .privacy {
            padding: 2rem 1rem;

            &__content {
                &--text {
                    font-size: $font-rg;
                    line-height: 1.7;
                }
            }
        }
    }
    
    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  
        .wrapper {
            .hero {
                padding: 4rem 1rem 3rem;

                &__head {
                    &--title {
                        font-size: $font-md;
                    }

                    &--date {
                        font-size: $font-rg;
                    }
                }
            }

            .privacy {
                padding: 2rem 1rem;
            }
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper {
            .hero {
            }
        }
    }
</style>