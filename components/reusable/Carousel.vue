<template>
    <div class="slider">
        <VueSlickCarousel v-bind="settings">
            <div class="slider__image">
                <img src="~/assets/images/impact/gallery/gallery-1.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="~/assets/images/impact/gallery/gallery-2.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="~/assets/images/impact/gallery/gallery-3.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="~/assets/images/impact/gallery/gallery-4.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="~/assets/images/impact/gallery/gallery-5.jpg" alt="gallery images" class="img-fluid">
            </div>
        </VueSlickCarousel>
    </div>
</template>
 
<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    
    export default {
        name: 'Carousel',
        components: { VueSlickCarousel },
        data() {
            return {
                settings: {
                    gap: '1rem',
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        }
                    ]
                }
            }
        }
    }
</script> 

<style lang="scss" scoped>

    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  }
</style>