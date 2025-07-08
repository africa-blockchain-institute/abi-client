<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="title" :image="image" :desc="desc" />
        <!-- hero section ends -->

        <!-- events section starts -->
        <section class="events">
            <div class="container">
                <Event />
            </div>
        </section> 
        <!-- events section ends -->
    </div>
</template>

<script>
    import Hero from '@/components/reusable/Hero.vue';
    import Event from '@/components/reusable/Event.vue';

    export default {
        head(){
            return{
                title: 'Events -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Events',
                        content: 'Events'
                    }
                ],
            }
        },

        data() {
            return {
                title: "Events",
                image: 'events',
                desc: 'At Africa Blockchain Institute, our events bring together innovators, policymakers, developers, and industry leaders to charter the digital future for Africa.',
            }
        },

        components: {
            Hero, Event
        },

    }
</script>

<style lang="scss" scoped>
    .wrappper {
        .events {
            padding: 2rem 1rem;
        }
    }

    @media (min-width: 1439px) {  
        .wrapper {
            .insights {
                padding: 4rem 1rem;
            }
        }
    }
</style>