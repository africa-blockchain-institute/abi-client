<template>
    <div class="wrapper">
        <!-- hero section starts-->
        <div class="hero">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10 hero__logos">
                        <a href="https://africablockchain.institute/" target="blank">
                            <img src="~/assets/icons/abi.png" alt="ABI logo">
                        </a>
                        <a href="https://www.unam.edu.na" target="blank">
                            <img src="~/assets/icons/algorand.png" alt="algorand logo">
                        </a>
                    </div>
                    
                    <div class="col-10 hero__desc">
                        <h1 class="hero__desc--text">AFRICA BLOCKCHAIN REPORT </h1>
                        <!-- <h4 class="hero__desc--sub">(2nd EDITION)</h4> -->

                        <p class="hero__desc--tagline">...accelerating Blockchain Innovation across the Continent</p>
                        <a href="#details" class="btn hero__desc--btn">Download Report</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- hero section ends -->
        
        <!-- features section starts -->
        <div class="features">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-5">
                        <div class="features__list">
                            <h1 class="features__list--title">Problem Identification</h1>
                            <p class="features__list--text">This research has been conducted to study the trends of Blockchain activities in Africa and has resulted in the production of this practitioner report to enlighten the African public on Blockchain use cases, success stories, and future patterns of expectations on the technology. </p>
                        </div>

                        <div class="features__list">
                            <h1 class="features__list--title">Blockchain Misconception</h1>
                            <p class="features__list--text">Blockchain technology has been riddled in different quarters in Africa as a tool for Ponzi schemes and cryptocurrency scams. The level of ignorance on this technology is still relatively high in many parts of Africa and it is high time we experienced a change in narrative.</p>
                        </div>

                        <div class="features__list">
                            <h1 class="features__list--title">Our Solution</h1>
                            <p class="features__list--text">It is against the aforementioned that the <b>Africa Blockchain Institute </b> in partnership with the <b>Algorand Foundation </b> conducted continental-wide research with the aim to showcase the Blockchain activities across Africa by technology startup founders, Blockchain innovators and the technology ecosystem stakeholders. </p>
                        </div>
                    </div>

                    <div class="col-lg-5 offset-md-1">
                        <div class=" shadow-sm features__img">
                            <img src="~/assets/images/report/solution.png" alt="abi solution">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- features section ends -->

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
                        <img src="~assets/images/report/in-depth.png" alt="In-depth knowledge" class="expectations__list--img">
                        <h3 class="expectations__list--title">In-depth Knowledge</h3>
                        <p class="expectations__list--text">Gain in-depth knowledge of the use of blockchain technology in Africa.</p>
                    </div>

                    <div class="col-md-4 expectations__list">
                        <img src="~assets/images/report/knowledge-gap.png" alt="bridge knowledge gap" class="expectations__list--img">
                        <h3 class="expectations__list--title">Bridge Knowledge Gap</h3>
                        <p class="expectations__list--text">Bridge the knowledge gap between academic blockchain technology research and Industrial blockchain use and application. </p>
                    </div>

                    <div class="col-md-4 expectations__list">
                        <img src="~assets/images/report/data-rich.png" alt="data rich report" class="expectations__list--img">
                        <h3 class="expectations__list--title">Data-rich Report</h3>
                        <p class="expectations__list--text">Produce an African Blockchain Report that is data-rich and truly representative of the real situation of use cases, innovation and application of blockchain in Africa. </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- expectations section ends -->

        <!-- details section -->
        <div class="details" id="details">
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
                                <div class="col-12 col-md-6">
                                    <label for="email" class="form-label">Email address<span>*</span> </label>
                                    <input type="email" v-model.trim="form.email" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="position" class="form-label">Which Edition to Download<span>*</span> </label>
                                    <select name="edition" id="edition" v-model="form.edition" class="form-control form-control-lg" required>
                                        <option value="" disabled>Select Edition</option>
                                        <option value="1st">1st Edition</option>
                                        <option value="2nd">2nd Edition</option>
                                        <option value="3rd">3rd Edition</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col text-center">
                                    <button type="submit" class="btn details__form--btn">Download {{ this.form.edition }} Edition</button>
                                </div>
                            </div>
                        </form>
                    </div>
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
        name: "blockchain-report",
        layout: "vacuous",

        head(){
            return{
                title: 'Blockchain Report -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Blockchain Report',
                        content: 'Africa Blockchain Report (2nd Edition)'
                    }
                ],
            }
        },
        
        data(){
            return {
                form:{
                    fname: "",
                    lname: "",
                    email: "",
                    organization: "",
                    position: "",
                    edition: "",
                }
            }
        },

        methods: {
            async downloadReport(){
                try {
                    if(true){
                        this.$swal.fire({
                            title: 'Thank you!',
                            text: `You can proceed to download the ${this.form.edition} Edition report.`,
                            type: 'success',
                            showCancelButton: false,
                            confirmButtonText: `Download Report!`
                        }).then((result) => {
                            if (result.value) {
                                if (this.form.edition == "1st") {
                                    return window.open('https://abi-api-assets.s3.us-east-2.amazonaws.com/algorand-report/AFRICA+Blockchain+Report+2021-2.pdf', '_blank')
                                } else if (this.form.edition == "2nd") {
                                    return window.open("https://abi-api-assets.s3.us-east-2.amazonaws.com/algorand-report/AFRICA+Blockchain+Report+II+-+2022.pdf", '_blank')
                                } else if (this.form.edition == "3rd") {
                                    return window.open("https://abi-api-assets.s3.us-east-2.amazonaws.com/algorand-report/AFRICA+Blockchain+Report+III+-+2023.pdf", '_blank')
                                }
                            }
                        })
                    }

                    await this.$axios.$post('/subscribers/add-subscriber', this.form);
                    this.form = this.form;
                } catch (err) {
                    console.log(err)
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .hero{
            padding: 2rem 0 3rem;
            background: linear-gradient(257.8deg, rgba(7, 10, 31, 0.85) -17.25%, rgba(26, 36, 114, 0.85) 87.36%), url("@/assets/images/report/hero.jpg") center;
            background-size: cover;
            text-align: center;
            
            &__logos{
                margin-bottom: 3rem;

                a {
                    display: inline-block;

                    &:nth-child(1){
                        margin-right: 1rem;
                    }
                }

                img{
                    width: 6.5rem;
                }
            }

            &__desc{
                color: $white;

                &--text {
                    font-size: $font-hd;
                    font-weight: bold;
                }

                &--sub {
                    font-size: $font-rg;
                }

                &--tagline {
                    font-size: .9rem;
                    margin-bottom: 2rem;
                }

                &--btn{
                    @include button();
                    font-size: .9rem;
                }
            }
        }

        .features{
            padding: 3rem 1rem;

            &__list {
                margin-bottom: 2rem;

                &--title{
                    font-size: $font-rg;
                    font-weight: bold;
                    margin-bottom: 0;
                }

                &--text{
                    font-size: .9rem;
                }
            }

            &__img {
                display: none;
            }
        }

        .expectations{
            background: #d9dcf633;
            padding: 3rem 1rem;
            
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
                    width: 3rem;
                    margin-bottom: 1rem;
                }

                &--title{
                    font-weight: bold;
                    font-size: $font-rg;
                    margin-bottom: 0;
                }

                &--text{
                    font-size: .9rem;
                }
            }
        }

        .details{
            background-color: $secondary-2;
            padding: 3rem 1rem 3rem;
            
            &__head{
                text-align: center;
                margin: 0 auto 3rem;
                color: $white;

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
                    color: $white;

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
                padding: 3rem 1rem;
                
                &__logos{
                    margin-bottom: 4rem;

                    a {
                        &:nth-child(1){
                            margin-right: 7rem;
                        }
                    }

                    img{
                        width: 10rem;
                    }
                }
            
                &__desc {
                    &--text {
                        font-size: $font-lg;
                    }

                    &--sub {
                        font-size: $font-md;
                    }

                    &--tagline {
                        font-size: $font-hd;
                        margin-bottom: 3rem;
                    }

                    &--btn{
                        font-size: $font-hd;
                    }
                }
            }

            .features{
                padding: 3rem 1rem;

                &__list {
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-hd;
                    }

                    &--text{
                        font-size: $font-rg;
                    }
                }
            }

            .expectations{
                padding: 3rem 1rem;
                
                &__head{
                    margin-bottom: 3rem;

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
                padding: 3rem 1rem 7rem;
                
                &__logos{
                    margin-bottom: 4rem;
                }

                &__desc{
                    &--text {
                        font-size: $font-xl;
                    }

                    &--sub {
                        font-size: $font-md;
                    }

                    &--tagline {
                        font-size: $font-hd;
                        margin-bottom: 3rem;
                    }
                }
            }

            .features{
                padding: 3rem 1rem;

                &__list {
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-hd;
                        margin-bottom: .5rem;
                    }

                    &--text{
                        font-size: $font-rg;
                    }
                }

                &__img {
                    width: 80%;
                    height: 90%;
                    display: block;

                    img {
                        width: 100%;
                    }
                }
            }

            .expectations{
                padding: 3rem 1rem;
                
                &__head{
                    margin-bottom: 3rem;

                    &--title{
                        font-size: $font-md;
                    }
                }

                &__list{
                    margin-bottom: 1.2rem;

                    &--img{
                        width: 5rem;
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: $font-hd;
                        margin-bottom: 1rem;
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
                        padding: 1rem;
                    }

                    .btn{ 
                        font-size: $font-rg;
                        margin-right: .75rem;
                    }
                }
            }

            .footer{
                padding: 3rem 1rem;

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
                padding: 3rem 1rem 9rem;
                
                &__logos{
                    margin-bottom: 7rem;

                    img{
                        width: 13rem;
                    }
                }

                &__desc{
                    &--text {
                        font-size: 4rem;
                    }

                    &--sub {
                        font-size: $font-md;
                    }

                    &--tagline {
                        font-size: $font-hd;
                        margin-bottom: 3rem;
                    }

                    &--btn{
                        font-size: $font-hd;
                    }
                }
            }

            .features{
                padding: 5rem 1rem;

                &__list {
                    margin-bottom: 2rem;

                    &--title{
                        font-size: $font-hd;
                    }

                    &--text{
                        font-size: $font-rg;
                    }
                }
            }

            .expectations{
                padding: 5rem 1rem 5rem;
                
                &__head{
                    margin-bottom: 5rem;

                    &--title{
                        font-size: $font-lg;
                    }

                    &--subtext{
                        font-size: $font-hd;
                    }
                }

                &__list{
                    &--img{
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
                    margin: 0 auto 5rem;

                    &--title{
                        font-size: $font-lg;
                    }
                }

                &__form{
                    margin: 0 auto;

                    .row{
                        margin-bottom: 1rem;
                    }

                    .form-label{
                        font-size: $font-rg;
                    }

                    .form-control {
                        padding: 1rem;
                    }

                    .btn{
                        padding: .75rem 1.25rem;
                        margin-right: 1rem;
                    }
                }
            }

            .footer{
                padding: 3rem 1rem;
                border-top: 1px solid $grey;

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