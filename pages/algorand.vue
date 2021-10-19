<template>
    <div class="wrapper">
        <!-- hero section -->
        <div class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="hero__logos">
                            <a href="https://africablockchain.institute/">
                                <img src="~/assets/icons/abi.png" alt="ABI logo">
                            </a>
                            <a href="https://algorand.foundation/">
                                <img src="~/assets/icons/algorand.png" alt="Algorand logo">
                            </a>
                        </div>
                        <div class="hero__text">
                            <h1 class="hero__text--title">Africa Blockchain Report</h1>
                            <h3 class="hero__text--desc">(First Edition)</h3>
                            <p class="hero__text--tagline">...accelerating Blockchain Innovation across the Continent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- hero section ends -->

        <!-- listings section -->
        <div class="listings">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 order-2 order-sm-1 listings__text">
                        <h1 class="listings__text--title">Problem Identification</h1>
                        <p class="listings__text--content">This research has been conducted to study the trends of Blockchain activities in Africa and has resulted in the production of this practitioner report to enlighten the African public on Blockchain use cases, success stories, and future patterns of expectations on the technology. </p>
                    </div>
                    <div class="col-md-5 order-1 order-sm-2 listings__image">
                        <img src="~/assets/images/algorand/problem.png" alt="problem identification">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 listings__image">
                        <img src="~/assets/images/algorand/blockchain.png" alt="Blockchain Misconception">
                    </div>
                    <div class="col-md-5 listings__text">
                        <h1 class="listings__text--title">Blockchain Misconception</h1>
                        <p class="listings__text--content">Blockchain technology has been riddled in different quarters in Africa as a tool for Ponzi schemes and cryptocurrency scams. The level of ignorance on this technology is still relatively high in many parts of Africa and it is high time we experienced a change in narrative.  </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 order-2 order-sm-1 listings__text">
                        <h1 class="listings__text--title">Our Solution</h1>
                        <p class="listings__text--content">It is against the aforementioned that the <b>Africa Blockchain Institute</b> in partnership with the <b>Algorand Foundation</b> conducted continental-wide research with the aim to showcase the Blockchain activities across Africa by technology startup founders, Blockchain innovators and the technology ecosystem stakeholders. </p>
                    </div>
                    <div class="col-md-5 order-1 order-sm-2 listings__image">
                        <img src="~/assets/images/algorand/solution.png" alt="Our Solution">
                    </div>
                </div>
            </div>
        </div>
        <!-- listings section ends -->

        <!-- expectations section -->
        <div class="expectations">
            <div class="container">
                <div class="row">
                    <div class="col-12 expectations__head">
                        <h2 class="expectations__head--title">What to expect?</h2>
                        <p class="expectations__head--subtext">Succinctly, the content of this report portrayed the following research objectives </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 expectations__list">
                        <img src="~assets/images/algorand/in-depth.png" alt="In-depth knowledge" class="expectations__list--img">
                        <h3 class="expectations__list--title">In-depth Knowledge</h3>
                        <p class="expectations__list--text">Gain in-depth knowledge of the use of blockchain technology in Africa.</p>
                    </div>

                    <div class="col-md-4 expectations__list">
                        <img src="~assets/images/algorand/knowledge-gap.png" alt="bridge knowledge gap" class="expectations__list--img">
                        <h3 class="expectations__list--title">Bridge Knowledge Gap</h3>
                        <p class="expectations__list--text">Bridge the knowledge gap between academic blockchain technology research and Industrial blockchain use and application. </p>
                    </div>

                    <div class="col-md-4 expectations__list">
                        <img src="~assets/images/algorand/data-rich.png" alt="data rich report" class="expectations__list--img">
                        <h3 class="expectations__list--title">Data-rich Report</h3>
                        <p class="expectations__list--text">Produce an African Blockchain Report that is data-rich and truly representative of the real situation of use cases, innovation and application of blockchain in Africa. </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- expectations section ends -->

        <!-- details section -->
        <div class="details">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-10 details__head">
                        <h1 class="details__head--title">Fill in your details to access the report</h1>
                    </div>
                    <div class="col-12 col-md-10 details__form">
                        <form action="" @submit.prevent="downloadReport()">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="fname" class="form-label">First Name<span>*</span> </label>
                                    <input type="text" v-model="form.fname" class="form-control form-control-lg" placeholder="e.g. John" id="fname" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="lname" class="form-label">Last Name<span>*</span> </label>
                                    <input type="text" v-model="form.lname" class="form-control form-control-lg" placeholder="e.g. Doe" id="lname" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="organization" class="form-label">Organization<span>*</span> </label>
                                    <input type="text" v-model="form.organization" class="form-control form-control-lg" placeholder="e.g. Africa Blockchain Institute" id="organization" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="position" class="form-label">Position<span>*</span> </label>
                                    <input type="text" v-model="form.position" class="form-control form-control-lg" placeholder="e.g. IT Manager" id="position" required>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="email" class="form-label">Email<span>*</span> </label>
                                    <input type="email" v-model.trim="form.email" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <button class="btn details__form--btn">Download</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- <div class="col-12">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#downloadReport">
                            Download Report Now
                        </button>

                        <div class="modal fade" id="downloadReport" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="downloadReport" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Download </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- details section ends -->

        <!-- footer section -->
        <div class="footer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10 footer__content">
                        <h1 class="footer__content--title">Stay Connected</h1>
                        <div class="footer__content--links">
                            <a href="https://twitter.com/AfricaBlockInst" target="blank" class="icon"><span class="fab fa-twitter"></span></a>
                            <a href="https://www.linkedin.com/company/africablockinst" target="blank" class="icon"><span class="fab fa-linkedin"></span></a>
                            <a href="https://web.facebook.com/Africa-Blockchain-Institute-103445117670312" target="blank" class="icon"><span class="fab fa-facebook"></span></a>
                            <a href="mailto:info@africablockchain.institute" target="blank" class="icon"><span class="fas fa-envelope"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer section ends -->
    </div>
</template>

<script>
export default {
    name: "algorand",

    data(){
        return {
            form:{
                fname: "",
                lname: "",
                email: "",
                organization: "",
                position: ""
            }
        }
    },

    created(){

    },

    methods: {
        async downloadReport(){
            try {

                const res = await this.$axios.$post('/subscribers/add-subscriber', this.form);

                if(res.status == 'success'){
                    this.$swal.fire({
                        title: 'Thank you!',
                        text: "You can proceed to download the report.",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Download Now!'
                        // confirmButtonText: '<a href="/africa-blockchain-report-2021.pdf" target="blank" download style="color:white; text-decoration: none">Click to download</a>'
                    }).then((result) => {
                        if (result.value) {
                            return document.location.href="https://african-blockchain.s3.us-east-2.amazonaws.com/algorand/AFRICA+Blockchain+Report+2021-2.pdf";
                        }
                    })
                }

                this.form = "";
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        background-color: #F9E3F0;

        .hero{
            background: url("@/assets/images/algorand/hero.jpg");
            background-size: cover;
            height: 50vh;
            clip-path: polygon(0 0, 100% 0%, 100% 70%, 50% 100%, 0 70%);
            text-align: center;
            padding-top: 1rem;
            margin-bottom: 5rem;

            &__logos{
                text-align: center;
                a {
                    display: inline-block;

                    &:nth-child(1){
                        margin-right: 2rem;
                    }
                }

                img{
                    width: 7rem;
                }
            }

            &__text{
                color: $white;
                position: relative;
                top: 20%;
                transform: translateY(20%);

                &--title{
                    font-size: $font-md;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                &--desc{
                    font-size: $font-rg;
                }

                &--tagline{
                    font-size: $font-rg;
                    font-style: italic;
                }
            }
        }

        .listings {
            padding-bottom: 1rem;

            .row{
                justify-content: center;
                align-items: center;
                margin-bottom: 1rem;
            }

            &__text{
                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                &--content{
                    font-size: $font-rg;
                }
            }

            &__image{
                text-align: center;
                margin-bottom: 1rem;

                img {
                    width: 50%;
                }
            }
        }

        .expectations{
            background-color: $white;
            padding: 3rem 1rem 1rem;
            
            &__head{
                text-align: center;
                margin-bottom: 3rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }

                &--subtext{
                    font-size: $font-rg;
                }
            }

            &__list{
                margin-bottom: 1.2rem;

                &--img{
                    width: 5rem;
                    margin-bottom: 1rem;
                }

                &--title{
                    font-weight: bold;
                    font-size: $font-rg;
                }

                &--text{
                    font-size: $font-rg;
                }
            }
        }

        .details{
            background-color: $white;
            padding: 3rem 1rem 3rem;
            
            &__head{
                text-align: center;
                margin: 0 auto 3rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__form{
                margin: 0 auto;

                .row{
                    .col-12{
                        margin-bottom: 1rem;
                    }
                }

                .form-label{
                    font-size: $font-sm;

                    span{
                        color: red;
                    }
                }

                .form-control {
                    padding-left: 1rem;
                    background: $white!important;
                    box-shadow: none;
                    font-size: $font-rg;

                    &:focus{
                        border: 1px solid $primary;
                    }
                }

                .btn{
                    @include button();
                    float: right;
                    padding: .75rem 1.5rem;
                }
            }
        }

        .footer{
            background-color: $secondary-2;
            padding: 3rem 1rem;

            &__content{
                color: $white;
                text-align: center;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                    margin-bottom: 3rem;  
                }

                &--links{
                    .icon{
                        background-color: $secondary;
                        padding: .5rem .75rem;
                        border-radius: 50%;
                        margin-right: 1rem;

                        .fab, .fas{
                            color: $white;
                            font-size: 1rem;
                        }
                    }
                }
                
            }
        }
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 768px) {  
        .wrapper{
            .hero{
                height: 50vh;
                clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%);
                padding-top: 2rem;

                &__logos{
                    img{
                        width: 9rem;
                    }
                }

                &__text{
                    top: 40%;
                    transform: translateY(40%);

                    &--title{
                        font-size: $font-lg;
                    }

                    &--desc{
                        font-size: $font-rg;
                    }

                    &--tagline{
                        font-size: $font-rg;
                    }
                }
            }

            .listings {
                &__text{
                    &--title{
                        font-size: $font-hd;
                    }

                    &--content{
                        font-size: $font-rg;
                    }
                }

                &__image{
                    margin-bottom: 1rem;

                    img {
                        width: 70%;
                    }
                }
            }

            .expectations{
                padding: 3rem 1rem 3rem;
                
                &__head{
                    text-align: center;
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-hd;
                        font-weight: bold;
                    }

                    &--subtext{
                        font-size: $font-rg;
                    }
                }

                &__list{
                    margin-bottom: 1.2rem;

                    &--img{
                        width: 5rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-weight: bold;
                        font-size: $font-rg;
                    }

                    &--text{
                        font-size: $font-rg;
                    }
                }
            }

            .details{
                padding: 3rem 1rem 3rem;
                
                &__head{
                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__form{
                    margin: 0 auto;

                    .row{
                        margin-bottom: 1rem;

                        .col-12{
                            margin-bottom: 1rem;
                        }
                    }

                    .form-control {
                        padding-left: 1rem;
                    }
                }
            }

            .footer{
                padding: 3rem 1rem;

                &__content{
                    &--title{
                        font-size: $font-hd;
                        margin-bottom: 3rem;  
                    }

                    &--links{
                        .icon{
                            padding: .5rem .75rem;
                            border-radius: 50%;
                            margin-right: 1rem;

                            .fab, .fas{
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            .hero{
                height: 60vh;
                clip-path: polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0 80%);
                padding-top: 2rem;

                &__logos{
                    img{
                        width: 9rem;
                    }
                }

                &__text{
                    top: 30%;
                    transform: translateY(30%);

                    &--title{
                        font-size: $font-lg;
                    }

                    &--desc{
                        font-size: $font-rg;
                    }

                    &--tagline{
                        font-size: $font-rg;
                    }
                }
            }

            .listings {
                &__text{
                    &--title{
                        font-size: $font-md;
                    }

                    &--content{
                        font-size: $font-rg;
                    }
                }

                &__image{
                    img {
                        width: 70%;
                    }
                }
            }

            .expectations{
                padding: 3rem 1rem 3rem;
                
                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }

                    &--subtext{
                        font-size: $font-rg;
                    }
                }

                &__list{
                    margin-bottom: 1.2rem;

                    &--img{
                        width: 5rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: $font-rg;
                    }

                    &--text{
                        font-size: $font-rg;
                    }
                }
            }

            .details{
                padding: 3rem 1rem 3rem;
                
                &__head{
                    &--title{
                        font-size: $font-md;
                    }
                }

                &__form{
                    margin: 0 auto;

                    .row{
                        margin-bottom: 1rem;

                        .col-12{
                            margin-bottom: 1rem;
                        }
                    }

                    .form-control {
                        padding-left: 1rem;
                    }
                }
            }

            .footer{
                padding: 5rem 1rem;

                &__content{
                    &--title{
                        font-size: $font-md;
                        margin-bottom: 3rem;  
                    }

                    &--links{
                        .icon{
                            padding: .5rem .75rem;
                            border-radius: 50%;
                            margin-right: 1rem;

                            .fab, .fas{
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) { 
        .wrapper{
            .hero{
                height: 100vh;
                clip-path: polygon(0 0, 100% 0%, 100% 75%, 50% 100%, 0 75%);
               
                &__logos{
                    a{
                        &:nth-child(1){
                            margin-right: 7rem;
                        }
                    }

                    img{
                        width: 12rem;
                    }
                }

                &__text{
                    top: 55%;
                    transform: translateY(55%);

                    &--title{
                        font-size: $font-xxl;
                    }

                    &--desc{
                        font-size: $font-xl;
                    }

                    &--tagline{
                        font-size: $font-hd;
                    }
                }
            }

            .listings {
                padding-bottom: 3rem;

                &__text{
                    &--title{
                        font-size: $font-md;
                    }

                    &--content{
                        font-size: $font-rg;
                    }
                }

                &__image{
                    img {
                        width: 70%;
                    }
                }
            }

            .expectations{
                padding: 5rem 1rem 5rem;
                
                &__head{
                    margin-bottom: 5rem;

                    &--title{
                        font-size: $font-md;
                    }

                    &--subtext{
                        font-size: $font-rg;
                    }
                }

                &__list{
                    &--img{
                        width: 5rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: $font-hd;
                    }

                    &--text{
                        font-size: $font-rg;
                    }
                }
            }

            .details{
                padding: 5rem 1rem 5rem;
                
                &__head{
                    text-align: center;
                    margin: 0 auto 5rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__form{
                    margin: 0 auto;

                    .row{
                        margin-bottom: 2rem;
                    }

                    .form-label{
                        font-size: $font-rg;
                    }

                    .form-control {
                        padding-left: 1rem;
                    }

                    .btn{
                        float: right;
                        padding: .75rem 1.5rem;
                    }
                }
            }

            .footer{
                padding: 5rem 1rem;

                &__content{
                    &--title{
                        font-size: $font-md;
                        margin-bottom: 3rem;  
                    }

                    &--links{
                        .icon{
                            padding: .5rem .75rem;
                            border-radius: 50%;
                            margin-right: 1rem;

                            .fab, .fas{
                                font-size: 1rem;
                            }
                        }
                    }
                    
                }
            }
        }
    }

</style>