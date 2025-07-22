<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :desc="hero.desc" :image="hero.image" />
        <!-- hero section ends -->
        
        <!-- careers section starts -->
        <section class="careers">
            <div class="container">
                <Career :listings="careers"/>
            </div>
        </section> 
        <!-- careers section ends -->
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';
    import Career from '~/components/reusable/Career.vue';

    export default {
        head(){
            return{
                title: 'Careers -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Careers',
                        content: 'Careers'
                    }
                ],
            }
        },

        data(){
            return{
                hero: {
                    title: "Career",
                    image: "career",
                    desc: "Check out our available job openings!",
                },
                careers: [
                    {
                        title: "Software Engineer",
                        description: "Join our team as a Software Engineer to develop innovative blockchain solutions.",
                        status: "Full-time",
                        location: "Remote",
                        link: "https://example.com/apply/software-engineer",
                    },
                    {
                        title: "Blockchain Developer",
                        description: "Seeking a Blockchain Developer to design and implement blockchain protocols.",
                        status: "Contract",
                        location: "Remote",
                        link: "https://example.com/apply/blockchain-developer",
                    },
                    {
                        title: "Project Manager",
                        description: "Looking for a Project Manager to oversee blockchain projects and ensure timely delivery.",
                        status: "Part-time",
                        location: "Remote",
                        link: "https://example.com/apply/project-manager",
                    }
                ],

            }
        },

        components: {
            Hero,
            Career,
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .careers {
            padding: 2rem 1rem;

            &__body {
                text-align: center;
                
                &--text {
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.8;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper{
            .careers {
                padding: 2rem 1rem;

                &__body {                    
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .wrapper{
            .careers {
                padding: 3rem 1rem;

                &__body {                    
                    &--text {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper{
            .careers {
                padding: 4rem 1rem;

                &__body {                    
                    &--text {
                        font-size: 1.2rem;
                        line-height: 1.8;
                    }
                }
            }
        }
    }
</style>