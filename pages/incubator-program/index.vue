<template>
    <div class='wrapper'>
        <div class="banner">
            <Hero 
                :subtitle="subtitle" 
                :link="link" 
                :hero_image="hero_image" 
                :call_text="call" 
                :idea_title="idea_title"
                :idea_subtitle="idea_subtitle"
            />
            <Outline 
                :image="outline_image" 
                :title="outline_title" 
                :sub="outline_sub" 
                :list="outline_list"
            />
        </div>

        <Timeline />
        <Benefit />
        <Eligibility 
            :title="eligibility_title" 
            :sub="eligibility_sub" 
            :list="eligibility_list"
            :image="eligibility_image"
        />
        <Testimonials />
        <Partners />
        <Footer :footer_text="footer_text" :link="link" />
    </div>
</template>

<script>
    import Hero from '~/components/incubator/Hero.vue';
    import Outline from '~/components/incubator/Outline.vue';
    import Timeline from '~/components/incubator/Timeline.vue';
    import Benefit from '~/components/incubator/Benefit.vue';
    import Eligibility from '~/components/incubator/Eligibility.vue';
    import Partners from '~/components/incubator/Partners.vue';
    import Footer from '~/components/incubator/Footer.vue';
    import Testimonials from '~/components/incubator/Testimonials.vue';

    export default {
        name: "Incubator-Program",
        layout: 'incubator',

        head(){
            return{
                title: 'Incubator Program -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Incubator Program',
                        content: 'Incubator Program'
                    }
                ],
            }
        },

        components:{
            Hero,
            Outline,
            Timeline,
            Benefit,
            Eligibility,
            Partners,
            Footer,
            Testimonials
        },

        data(){
            return{
                partners: [],
                call: "Call for Applications",
                link: "https://docs.google.com/forms/d/e/1FAIpQLSdVB0VI5XqOob3vow9jOz2IEmT6gN0GLl0NyzgH9A0Dqnfctw/viewform",
                subtitle: "We are excited to announce the launch of the Africa Blockchain Incubation Program 2023, designed to support and nurture the next generation of blockchain innovators on the continent. This is the 3rd edition of the program that has successfully incubated different blockchain startups from across Africa.",
                hero_image: "hero.png",

                idea_title: "Do you have a grounbreaking idea?",
                idea_subtitle: "Do you have a groundbreaking idea for using blockchain technology to solve a real-world problem? Are you passionate about driving positive change in your community through the power of decentralization?",

                outline_image: "outline.jpg",
                outline_title: "The Africa Blockchain Incubation Program",
                outline_sub: "The Africa Blockchain Incubation Program is a four-month intensive program designed to help participants develop and launch their blockchain projects. Selected participants will receive training, mentorship, and resources to help bring their ideas to fruition.",
                outline_list: [
                    "Access to a network of blockchain experts and mentors.",
                    "Training sessions on blockchain technology and business/entrepreneurship.",
                    "Opportunities to pitch to potential investors.",
                    "Regular check-ins and progress reviews with program mentors.",
                ],

                eligibility_image: "eligibility.jpg",
                eligibility_title: "Eligibility",
                eligibility_sub: "We are looking for ambitious individuals that are forward-thinking, innovative, and ready to take up challenges in creating the next Big Thing.",
                eligibility_list: [
                    "Must be between 20 - 35 years of age.",
                    "Priorities are given to Female Applications.",
                    "Strong business case and market potential.",
                    "Both idea-stage and early-stage (1 year) companies are encouraged to apply.",
                ],

                footer_text: "To apply, click on the button below by January 31, 2023. Note that only one application is expected per team.",
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .banner {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(20, 27, 86, 0.9) 27.29%, rgba(20, 27, 86, 0.9) 51.62%);
            background-image: url("@/assets/images/incubator/images/hero_bg.jpg") !important;
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

    }
</style>