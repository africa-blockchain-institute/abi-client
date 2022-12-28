<template>
   <div class="partners" v-if="partners.length > 0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 partners__head">
                    <h2 class="partners__head--title">Our Amazing Partners</h2>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="col-4 col-md-3 col-xl-2 px-md-4 partners__img" v-for="(partner, index) in partners" :key="index">
                    <img :src="partner.image" :alt="partner.name" class="partners__img--img img-fluid">
                </div>
            </div>

            <!-- <div class="row justify-content-center align-items-center">
                <div class="col-4 col-md-3 col-xl-2 px-md-4 partners__img">
                    <img src="~/assets/images/incubator/images/convexity.jpg" alt="" class="partners__img--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-4 partners__img">
                    <img src="~/assets/images/incubator/images/tech_london.png" alt="" class="partners__img--img img-fluid">
                </div>
                <div class="col-4 col-md-3 col-xl-2 px-md-4 partners__img">
                    <img src="~/assets/images/incubator/images/bbic.jpg" alt="" class="partners__img--img img-fluid">
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                partners: [],
            }
        },

        created(){
            this.getPartners();
        },

        methods:{
            async getPartners(){
                let docs = await this.$axios.$get(`/partners`)
                console.log(docs.data);
                this.records = docs.records;
                this.partners = docs.data;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .partners{
        margin: 3rem 0;

        &__head{
            text-align: center;
            margin-bottom: 2rem;

            &--title{
                font-size: $font-hd;
                font-weight: 800;
            }
        }

        &__img{
            &--img{
                width: 100%;
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  
        .partners{
            margin: 7rem 0;

            &__head{
                &--title{
                    font-size: $font-md;
                }
            }
        }
    }
</style>