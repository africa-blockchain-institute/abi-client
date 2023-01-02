<template>
    <div class="timeline">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-5 col-lg-4 offset-lg-1 timeline__img">
                    <img src="~/assets/images/incubator/images/timelines.jpg" class="img-fluid">
                </div>
                <div class="col-md-7 col-lg-6 timeline__text">
                    <h2 class="timeline__text--title">Program Timelines and Details</h2>
                    
                    <div class="timeline__text--sub">
                        <p>Applications Open</p>
                        <h3>December 2022 - 31st January 2023</h3>
                    </div>

                    <div class="timeline__text--sub">
                        <p>Selection and Notification </p>
                        <h3>1st - 28th February 2023</h3>
                    </div>
                    
                    <div class="timeline__text--sub">
                        <p>Incubation Program (Virtual) </p>
                        <h3>1st March 2023 - 16th June 2023</h3>
                    </div>
                    
                    <div class="timeline__text--sub">
                        <p>Demo Day (In-Person at Kigali, Rwanda)</p>
                        <h3>June 2023</h3>
                    </div>

                    <div class="timeline__text--sub">
                        <p>Post-Incubation </p>
                        <h3>July 2023</h3>
                    </div>
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
    .timeline{
        padding: 3rem 0;

        &__img{
            display: block;
            margin-bottom: 1rem;
        }

        &__text{
            &--title{
                font-size: $font-hd;
                font-weight: 800;
                margin-bottom: 1.2rem;
            }

            &--sub{
                margin-bottom: 1.2rem;

                p{
                    font-size: $font-rg;
                    margin-bottom: 0.25rem;
                }

                h3{
                    font-size: $font-rg;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .timeline {
            padding: 5rem 1rem;

            &__img{
                display: block;
            }

            &__text{
                &--sub{
                    margin-bottom: 1.2rem;
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>