<template>
    <div class="slider">
        <VueSlickCarousel v-bind="settings">
            <div class="slider__image">
                <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767793873/photo_5994796781050904074_y_b9seyc.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767793874/photo_5997081231205974534_y_ixmeuq.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767793910/_MG_0296_a6jnrr.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767793919/2024EAHCDay1-127_j8kt13.jpg" alt="gallery images" class="img-fluid">
            </div>
            <div class="slider__image">
                <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767793921/RM1L5520_tndh8x.jpg" alt="gallery images" class="img-fluid">
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