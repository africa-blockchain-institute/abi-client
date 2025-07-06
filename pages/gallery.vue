<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :desc="hero.desc" :image="hero.image" />
        <!-- hero section ends -->

        <div class="gallery">
            <div class="container">
                 <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="~/assets/images/impact/gallery/gallery-1.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="~/assets/images/impact/gallery/gallery-2.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="~/assets/images/impact/gallery/gallery-3.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="~/assets/images/impact/gallery/gallery-4.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="~/assets/images/impact/gallery/gallery-5.jpg" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';

    export default {
        head(){
            return{
                title: 'Gallery -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Gallery',
                        content: 'Gallery'
                    }
                ],
            }
        },

        data(){
            return{
                hero:{
                    title: "Gallery",
                    image: "impact/gallery",
                    desc: "See photos from our events, workshops, and community engagements that showcase the vibrant ecosystem of blockchain innovation in Africa.",
                }
            }
        },

        components: {
            Hero,
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .gallery {
            padding: 2rem 1rem;

            &__list {
                margin-bottom: 2rem;

                .card {
                    border: none;
                    border-radius: 0.5rem;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: auto;
                        border-radius: 0.5rem;
                    }
                }
            }
        }
    }


    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  }
</style>