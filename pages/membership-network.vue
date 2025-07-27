<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :image="hero.image" />
        <!-- hero section ends -->
        
        <Aside
            image="membership/member.png"
            text1="<p>Africa Blockchain Institute (ABI) welcomes forward-thinking organizations, corporations, public institutions, and enterprises to become part of our pan-African community committed to operate at the intersection of blockchain policy, resilient ecosystem, and sustainable solutions to improve positively the narrative of blockchain innovations in Africa.</p>"
            text2="<p>ABI’s Membership Program is designed for entities that recognize the transformative potential of blockchain and emerging technologies to solve real-world challenges.</p>"
            text3="<p>By joining our network, your organization becomes part of a mission-driven alliance working to shape policy, promote innovation, drive ecosystem sustainably, and build the digital infrastructure for a resilient African future.</p>"
        />

        <!-- why section starts -->
         <div class="why">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-lg-7 col-xl-5 why__body">
                        <h2 class="why__body--title">Why Become a Member?</h2>
                        <p class="why__body--text">Membership offers your organization strategic access, sectoral influence, and ecosystem positioning across the blockchain and emerging tech space in Africa.</p>
                    </div>
                </div>
            </div>
        </div>

        <Members :perks="perks"/>
                
        <!-- why section ends -->
        
        <Aside3
            title="Who Should Join?"
            image="membership/join-us.jpg"
            text1="<p>Our membership is ideal for: </p>"
            :lists="lists"
            text2="<p>Whether you're a policymaker, educator, tech enthusiast, or ecosystem stakeholder, this report offers valuable insights into how blockchain is being used to solve some of Africa’s most pressing challenges, and beyond. Dive into the stories, milestones, and metrics that define our collective progress.</p>"
        />

        <!-- membership section starts -->
        
        <!-- membership section ends -->
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';
    import Aside from '~/components/reusable/programs/Aside.vue';
    import Aside3 from '~/components/reusable/programs/Aside3.vue';
    import Members from '~/components/reusable/Members.vue';

    export default {
        head(){
            return{
                title: 'Membership Network -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Membership Network',
                        content: 'Membership Network'
                    }
                ],
            }
        },

        data(){
            return{
                hero:{
                    title: "Join the ABI Membership Network",
                    image: "membership",
                },

                perks: [
                    {
                        no: '01',
                        title: 'Exclusive Access to ABI Intelligence',
                        whys: [
                            'Early access to ACEBR research reports, policy briefs, and regulatory trend analyses',
                            'Private member-only insights on funding opportunities, market assessments, and technical developments.'
                        ]
                    },
                    {
                        no: '02',
                        title: 'Priority Engagement & Ecosystem Participation',
                        whys: [
                            'First-in-line invitations to ABI-led events, policy dialogues, training workshops, and high-level forums across Africa.',
                            'Eligibility to co-host regional roundtables, innovation labs, and industry-specific programs.'
                        ]
                    },
                    {
                        no: '03',
                        title: 'Regional Visibility and Brand Positioning',
                        whys: [
                            'Company profile featured on the ABI website and newsletters.',
                            'Thought leadership opportunities via speaking slots, co-authored publications, or partner features.'
                        ]
                    },
                    {
                        no: '04',
                        title: 'Co-Creation of Use Cases and Pilots',
                        whys: [
                            'Collaborate with ABI’s Venture Studio and technical partners to develop blockchain-based solutions tailored to your sector or challenge.',
                            'Access technical advisory for pilot deployment and real-world application of blockchain tools.'
                        ]
                    },
                    {
                        no: '05',
                        title: 'Policy Influence and Advocacy',
                        whys: [
                            'Contribute to policy papers, regulatory consultation processes, and multi-stakeholder working groups focused on enabling blockchain ecosystems across Africa.',
                            'Receive support in navigating national or cross-border digital policy environments.'
                        ]
                    },
                    {
                        no: '06',
                        title: 'Dedicated Support and Matchmaking',
                        whys: [
                            'ABI concierge support for ecosystem matchmaking — including vetted startups, academic partners, and government contacts.',
                            'Facilitated access to funding networks, pilot regions, and regulatory sandboxes.'
                        ]
                    },
                ],
                lists: [
                    "Private Sector Companies (Fintechs, Banks, Telcos, Agritech, Healthtech, etc.)",
                    "Public Sector Institutions and Government Agencies",
                    "International Development Organizations",
                    "Technology Enterprises and Blockchain Solution Providers",
                    "Chambers of Commerce, Industry Associations, and Research Institutions"
                ]

            }
        },

        components: {
            Hero, Aside, Aside3, Members,
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .why {
            padding: 2rem 1rem;

            &__body{
                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                &--text{
                    font-size: $font-rg;
                }
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  
        .wrapper{
            .why {
                padding: 2rem 1rem;

                &__body{
                    &--title{
                        font-size: $font-hd;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        .wrapper{
            .why {
                &__body{
                    &--title{
                        font-size: $font-md;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper{
           .why {
                padding: 4rem 1rem 2rem;
            }
        }
    }
</style>