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

        <Eligibility 
            :image="eligibility_image"
            :title="eligibility_title" 
            :sub="eligibility_sub" 
            :list="eligibility_list"
            :disp="true"
        />

        <MentorBenefits />
        <Testimonials />
        <Footer :footer_text="footer_text" :link="link" />
    </div>
</template>

<script>
    import Hero from '~/components/incubator/Hero.vue';
    import Outline from '~/components/incubator/Outline.vue';
    import Eligibility from '~/components/incubator/Eligibility.vue';
    import MentorBenefits from '~/components/incubator/MentorBenefits.vue';
    import Footer from '~/components/incubator/Footer.vue';
    import Testimonials from '~/components/incubator/Testimonials.vue';

    export default {
        name: "Mentorship-Program",
        layout: 'incubator',

        head(){
            return{
                title: 'Mentorship Program -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Mentorship Program',
                        content: 'Mentorship Program'
                    }
                ],
            }
        },

        components:{
            Hero,
            Outline,
            Eligibility,
            MentorBenefits,
            Footer,
            Testimonials
        },

        data(){
            return{
                call: "Call for Mentorship",
                link: "https://docs.google.com/forms/d/e/1FAIpQLSfwtEcKZDGabK-0XhjN_tbMGgFXIA0k8cpS177BWa98aCcN0g/viewform",
                subtitle:"We are seeking mentors for the Africa Blockchain Incubation Program, 2023, a four-month intensive program designed to support and nurture the next generation of blockchain innovators on the continent.",
                hero_image: "hero_mentor.png",

                idea_title: "Do you have what it takes to be a mentor?",
                idea_subtitle: "As a mentor, you will have the opportunity to play a crucial role in the development and success of aspiring African tech entrepreneurs. You will provide guidance and support to participants as they work to bring their blockchain projects to fruition.",

                outline_image: "role_mentor.jpg",
                outline_title: "In this role, you will be expected to",
                outline_sub: "Mentors will be expected to commit to the following",
                outline_list: [
                    "Meet with mentees regularly (virtually) to provide guidance and support",
                    "Help mentees develop and refine their business plans",
                    "Connect mentees with relevant resources and contacts in the industry",
                    "Offer expertise and advice on blockchain technology and entrepreneurship",
                    "Participate in progress reviews and other program activities as needed"
                ],
                
                eligibility_image: "look_mentor.jpg",
                eligibility_title: "We are looking for mentors who possess:",
                eligibility_sub: "",
                eligibility_list: [
                    "A strong background in blockchain technology and entrepreneurship",
                    "Demonstrated success in launching and growing a business (preferably in the blockchain industry",
                    "A willingness to share knowledge and experience with aspiring entrepreneurs",
                    "Flexibility and availability to meet with mentees regularly during the program"
                ],

                footer_text: "If you are passionate about supporting the next generation of African blockchain innovators and have the skills and experience to be an effective mentor, we encourage you to apply. We look forward to receiving your application and working with you to shape the future of blockchain in Africa.",
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .banner {
            background-image: url("@/assets/images/incubator/images/hero_bg.jpg") ;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(20, 27, 86, 0.9) 27.29%, rgba(20, 27, 86, 0.9) 51.62%);
        }
    }
</style>