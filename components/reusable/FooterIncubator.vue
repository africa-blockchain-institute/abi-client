<template>
    <div class="footer">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6 text-center footer__body">
                    <h2 class="footer__body--title">Blockchain is our passion, show us yours</h2>
                    <p class="footer__body--contact">Contact us at info@africablockchain.institute</p>
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
    .footer{
        background: $secondary-2;
        padding: 3rem 1rem;
        color: $white;

        &__body{
            &--title{
                font-size: $font-md;
                font-weight: bold;
                margin-bottom: 2rem;
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .footer{
            padding: 5rem 1rem 3rem;

            &__body{
                &--title{
                    margin-bottom: 4rem;
                }
            }
        }
    }
</style>