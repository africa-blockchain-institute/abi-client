<template>
    <div class="testimonials">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6 testimonials__head">
                    <h2 class="testimonials__head--title">Previous Participants and Testimonials</h2>
                </div>
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/mint.png" alt="" class="testimonials__logo--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/reifast.png" alt="" class="testimonials__logo--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/tigere.png" alt="" class="testimonials__logo--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/umoja.png" alt="" class="testimonials__logo--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/nihe.png" alt="" class="testimonials__logo--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/kwdg.png" alt="" class="testimonials__logo--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/santech.png" alt="" class="testimonials__logo--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-3 px-lg-5 testimonials__logo">
                    <img src="~/assets/images/incubator/images/bfcc.jpeg" alt="" class="testimonials__logo--img img-fluid">
                </div>
            </div>

            <div class="row testimonials__row">
                <div class="col-lg-6 testimonials__participants">
                    <div class="card shadow border-0 mb-3">
                        <div class="row align-items-end g-0">
                            <div class="col-md-3 col-lg-4 d-none d-md-block">
                                <img src="~/assets/images/incubator/images/participant_1.jpg" class="img-fluid rounded-start" alt="">
                            </div>
                            <div class="col-md-9 col-lg-8">
                                <div class="card-body">
                                    <p class="testimonials__participants--text">What I found greatly valuable about the Incubation program was the opportunity to learn from our mentors and network with important stakeholders in the investment and web3 space.</p>
                                    <h4 class="testimonials__participants--author">Incubation Program Participant</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 testimonials__participants">
                    <div class="card shadow border-0 mb-3">
                        <div class="row align-items-end g-0">
                            <div class="col-md-3 col-lg-4 d-none d-md-block">
                                <img src="~/assets/images/incubator/images/participant_2.jpg" class="img-fluid rounded-start" alt="">
                            </div>
                            <div class="col-md-8 col-lg-8">
                                <div class="card-body">
                                    <p class="testimonials__participants--text">It was really helpful to learn about the prospects of blockchain technology and how the same could improve our business</p>
                                    <h4 class="testimonials__participants--author">Incubation Program Participant</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <script>
     export default {
        data(){
            return{
                testimonials: [],
            }
        },
 
 
        methods:{
        }
     }
 </script>
 
 <style lang="scss" scoped>
    .testimonials{
        margin: 3rem 0;

        &__head{
            text-align: center;
            margin-bottom: 2rem;

            &--title{
                font-size: $font-hd;
                font-weight: 800;
            }
        }

        &__logo{
            &--img{
                width: 100%;
            }
        }

        &__row {
            margin-top: 3rem;
        }

        &__participants {
            border-radius: .5rem;

            &--text{
                font-size: $font-rg;
            }

            &--author{
                font-size: $font-rg;
                font-weight: bold;
            }
        }
    }
 
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .testimonials{
            margin: 5rem 0;

            &__row {
                margin-top: 4rem;
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .testimonials{
            margin: 7rem 0;

            &__head{
                &--title{
                    font-size: $font-md;
                }
            }

            &__row {
                margin-top: 5rem;
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .testimonials{
            margin: 7rem 0;

            &__head{
                &--title{
                    font-size: $font-md;
                }
            }
        }
    }
 </style>