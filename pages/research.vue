<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :desc="hero.desc" :image="hero.image" />
        
        <!-- aside section starts -->
        <Aside 
            title="Africa Blockchain Report"
            image="research/report.png"
            text1="<p>The Africa Blockchain Report is an in-depth research conducted to study the  trends of Blockchain activities in Africa. The report is an effort to enlighten the  African public on Blockchain use cases, success stories, and future patterns of  expectations on the technology.</p>"
            text2="<p>To date, three editions of the report have been published which covered twelve (12) African countries with plans to release many more as blockchain adoption  grows across the continent.</p>"
        />
        <!-- aside section ends -->

        <Aside2 
            title="Concept Note"
            image="research/concept-note.png"
            text1="<p>Our Concept Notes are concise yet detailed documents that present fresh blockchain ideas designed to tackle specific challenges in Africa. These notes  serve as a starting point for exploring new possibilities in blockchain technology and its applications.</p>"
            text2="<p>The concept notes offer actionable ideas to drive progress in key sectors like  education, finance, agriculture, healthcare, etc </p>"
        />

        <Aside
            title="Whitepaper"
            image="research/whitepaper.png"
            text1="<p>ABI’s Whitepapers are comprehensive documents that explore blockchain  projects, technologies, and strategies in detail. They are crafted to help developers, businesses, investors, and whitepapers understand how blockchain can  solve Africa’s unique challenges.</p>"
            text2="<p>The whitepapers offer practical guidance and in-depth knowledge to turn innovative ideas into impactful solutions, driving growth and transformation across  the continent.</p>"
        />

        <Aside2
            title="Policy Brief"
            image="research/policy-brief.png"
            text1="<p>Our Policy Briefs are focused resources for policymakers, regulators, and  organizations which help to provide clear recommendations on blockchain-related decisions. They simplify complex concepts and help stakeholders create  policies that support innovation while addressing critical issues like security,  accessibility, and inclusion.</p>"
            text2="<p>Through these policy briefs, we aim to build a balanced framework where  blockchain can thrive and deliver meaningful benefits to society.</p>"
        />

        <div class="download">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-8 download__body">
                        <h2 class="download__body--title">Download Our Research</h2>
                        <p class="download__body--text">Our Research is coordinated by the Africa Centre of Excellence in Blockchain Research, please visit here to download the resources.</p>
                        <a href="https://acebr.org/" class="download__body--btn btn"> Download Now </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';
    import About from '~/components/reusable/about/About.vue';
    import Aside from '~/components/reusable/programs/Aside.vue';
    import Aside2 from '~/components/reusable/programs/Aside2.vue';

    export default {
        head(){
            return{
                title: 'Research -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Research',
                        content: 'Research'
                    }
                ],
            }
        },

        data(){
            return{
                hero:{
                    title: "Research",
                    image: "research",
                    desc: "At the Africa Blockchain Institute, research is a foundational pillar of our work, driving evidence-based insights that inform blockchain policy, guide responsible innovation, and support the use cases of decentralized technologies across Africa.",
                }
            }
        },

        components: {
            Hero, About, Aside, Aside2
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .download {
            padding: 2rem 1rem;
            background-color: $primary-light;

            &__body {
                text-align: center;
                padding: 2rem 1rem;

                &--title {
                    font-size: $font-hd;
                    color: $dark;
                    font-weight: bold;
                }
                
                &--text {
                    font-size: 1rem;
                    margin-bottom: 2rem;
                }

                &--btn {
                    @include button();
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .wrapper{
        }
        
    }
</style>