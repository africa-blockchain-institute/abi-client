<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :desc="hero.desc" :image="hero.image" />
        <!-- hero section ends -->
        
        <!-- aside section starts -->
        <Aside 
            title="Incubation Programs"
            image="programs/incubation-program.jpg"
            text1="<p>The Africa Blockchain Incubation Program is a premier initiative designed to spark creativity and ideas implementation around Distributed Ledger Technologies in the African Local Innovation and Entrepreneurship Landscape. Qualified candidates will be nurtured for through a structured 4-Month program of technical trainings, business development supports, mentorship, community events, and networking sessions.</p>"
            text2="<p>The incubation program supports and develop these solutions-turn-to-Start Ups in growing their business, strengthening their commercial viability and increasing their competitiveness in domestic and international markets. Ultimately placing Africa as a major actor in the global blockchain ecosystem. This program started in 2021, and after four (4) years of continued successes this program is now coordinated by the ABI Venture Studio for more opportunities. </p>"
        />
        <!-- aside section ends -->

        <Aside2 
            title="Bootcamps"
            image="programs/bootcamp.jpg"
            text1="<p>Our Bootcamp Programs are designed to provide intensive, hands-on training that equips participants with the necessary skills to understand and implement blockchain solutions. Previously, we had done: Rwanda Blockchain Bootcamp, Enterprise Blockchain Bootcamp, Summer Blockchain Bootcamp (For Teens), amongst others, which is now managed by ABI Enterprise. Moving forward, ABI is presently focused on Bootcamps that align with her priorities, that is Blockchain Policy Bootcamp, etc.</p>"
            text2="<p>The bootcamps serve as practical learning experiences for developers, tech-entrepreneurs, regulators, and corporate professionals, ensuring they gain industry-relevant expertise. Through bootcamps, ABI continues to empower Africa’s workforce with the skills required to thrive in the blockchain industry. </p>"
        />

        <Aside
            title="Workshops & Masterclasses"
            image="programs/workshops.jpg"
            text1="<p>Our workshops and masterclasses offer deep dives into various use cases, emerging trends, policy conversations, and hands-on learning experiences designed to equip participants with advanced knowledge and technical expertise in blockchain technology. These sessions cater to Blockchain enthusiasts, techpreneurs, policy-makers, and experts, looking to expand their skill sets and gain a competitive edge in the blockchain industry. </p>"
            text2="<p>These workshops and masterclasses are in accordance with our priorities and are designed to be interactive, engaging, and solution-driven, ensuring participants understand the core, and they can be able to apply it to their respective fields.</p>"
        />

        <Aside2
            title="Webinar Series"
            image="programs/webinars.jpg"
            text1="<p>The Africa Blockchain Institute Webinar Series is a platform for knowledge exchange, featuring thought leaders and industry experts discussing the latest advancements, challenges, regulatory progress, and opportunities in blockchain technology. These sessions provide valuable insights for professionals, private sector stakeholders, and policymakers looking to stay ahead in the blockchain space.</p>"
            text2="<p>Our webinars cover a wide range of topics, including blockchain adoption across industries, regulatory frameworks, enterprise solutions, cybersecurity, and more. Each session provides participants with valuable insights, real-world case studies, and expert perspectives on how blockchain is transforming businesses and societies across Africa.</p>"
        />

        <Aside
            title="Hackathon Programs"
            image="programs/hackathon.jpg"
            text1="<p>Our hackathons bring together talented developers, designers, and public sector innovators to collaborate and build innovative blockchain solutions. Participants work in teams to develop, test, and present innovative projects, gaining hands-on experience and exposure to industry leaders. Prior to now, we have hosted various forms of hackathon programs including: Campus Blockchain Hackathon Program, Blockchain & Cybersecurity Hackathon Program, Blockchain Innovators Challenge, Africa Blockchain Hackathon Program, Francophone Africa Blockchain Hackathon Program, and more are coming up.</p>"
            text2="<p>These hackathons serve as a launchpad for emerging blockchain solutions and contribute to the growth of the blockchain ecosystem across Africa.</p>"
        />
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
                title: 'Programs -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Programs',
                        content: 'Programs'
                    }
                ],
            }
        },

        data(){
            return{
                hero:{
                    title: "Programs",
                    image: "programs",
                    desc: "Africa Blockchain Institute programs are purposefully designed to advance the continent’s blockchain landscape on policy, ecosystem, and real-world applications.",
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