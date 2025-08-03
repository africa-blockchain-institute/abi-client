<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :image="hero.image" position="top"/>
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
        <div class="memberships">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7 memberships__head">
                        <h2 class="memberships__head--title">Complete this form below and we will be in touch with you for the next steps.</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-8 memberships__form">
                        <form action="" @submit.prevent="submit()">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="org_name" class="form-label">Organization Name<span>*</span> </label>
                                    <input type="text" v-model="form.org_name" class="form-control form-control-lg" placeholder="e.g. Africa Blockchain Institute" id="org_name" required>
                                </div>
                                
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="sector" class="form-label">Sector/Industry<span>*</span> </label>
                                    <input type="text" v-model="form.sector" class="form-control form-control-lg" placeholder="e.g. ICT" id="sector" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="company_size" class="form-label">Company Size<span>*</span> </label>
                                    <select name="company_size" id="company_size" class="form-select form-select-lg" v-model="form.company_size" required>
                                        <option value="less than 10">less than 10</option>
                                        <option value="10-20">10-20</option>
                                        <option value="20-50">20-50</option>
                                        <option value="50-100">50-100</option>
                                        <option value="above 100">above 100</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="contact_person" class="form-label">Contact Person (Full Name)<span>*</span> </label>
                                    <input type="text" v-model.trim="form.contact_person" class="form-control form-control-lg" placeholder="John Doe" id="contact_person" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="job_title" class="form-label">Title/Role<span>*</span> </label>
                                    <input type="text" v-model="form.job_title" class="form-control form-control-lg" placeholder="Chief of Staff" id="job_title" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="email" class="form-label">Email Address<span>*</span> </label>
                                    <input type="email" v-model.trim="form.email" class="form-control form-control-lg" placeholder="e.g. johndoe@abi.com" id="email" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="phone_number" class="form-label">Phone Number<span>*</span> </label>
                                    <input type="text" v-model="form.phone_number" class="form-control form-control-lg" placeholder="+44 123456789" id="phone_number" required>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <label for="website" class="form-label">Website<span>*</span> </label>
                                    <input type="url" v-model="form.website" class="form-control form-control-lg" placeholder="https://africablockchain.institute" id="website" required>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="hear_about_us" class="form-label">How did you hear about us?<span>*</span> </label>
                                    <select name="hear_about_us" id="hear_about_us" class="form-select form-select-lg" v-model="form.hear_about_us" required>
                                        <option value="Social Media">Social Media</option>
                                        <option value="From Friend / Referral">From Friend / Referral</option>
                                        <option value="Our Website">Our Website</option>
                                        <option value="Our Programs and Events">Our Programs and Events</option>
                                        <option value="Online Search">Online Search</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <label for="message" class="form-label">Message<span>*</span> </label>
                                    <textarea class="form-control" id="message" rows="3" v-model="form.message" :class="{'is-invalid': errors.status }" placeholder="Brief Description of Interest in Membership" required></textarea>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>
                                <div class="small">By submitting this form, you consent to Africa Blockchain Institute storing and processing your information to manage your request and share relevant updates about our programs, events, and resources. You can unsubscribe from these communications at any time. </div>
                            </div>

                            <div class="row">
                                <div class="col text-end">
                                    <button class="btn memberships__form--btn"><span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span> Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
                    "Private Sector Companies (Fintechs, Banks, Telcos, Agritech, Healthtech, etc).",
                    "Public Sector Institutions and Government Agencies.",
                    "International Development Organizations.",
                    "Technology Enterprises and Blockchain Solution Providers.",
                    "Chambers of Commerce, Industry Associations, and Research Institutions."
                ],

                form:{
                    org_name: "",
                    company_name: "",
                    sector: "",
                    company_size: "",
                    website: "",
                    contact_person: "",
                    job_title: "",
                    email: "",
                    phone_number: "",
                    role: "",
                    hear_about_us: "",
                    message: ""
                }

            }
        },

        components: {
            Hero, Aside, Aside3, Members,
        },

        methods: {
            async submit(){
                try {
                    this.loading = true;

                    const res = await this.$axios.$post('/memberships', this.form);

                    if(res.status === 'success'){
                        this.$toast.success(res.message);
                        this.form = {
                            name: "",
                            email: "",
                            phone_number: "",
                            company_name: "",
                            job_title: "",
                            hear_about_us: "",
                            message: ""
                        };
                    } else {
                        this.$toast.error(res.message);
                    }
                } catch (error) {
                    console.error(error);
                    this.$toast.error('An error occurred while submitting the form.');
                } finally {
                    this.loading = false;
                }
            }
        }
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

        .memberships {
            padding: 1rem;
            
            &__head{
                text-align: center;
                margin: 0 auto 2rem;

                &--title{
                    font-size: $font-hd;
                    font-weight: bold;
                }
            }

            &__form{
                margin: 0 auto;

                .row{
                    .col-12{
                        margin-bottom: 1rem;
                    }
                }

                .form-label{
                    @include form-label()
                }

                .form-control, .form-select {
                    @include form-control();

                    &:focus{
                        border: 1px solid $primary;
                    }
                }

                .btn{
                    @include button();
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

            .memberships{
                padding: 2rem 1rem;
                
                &__head{
                    margin: 0 auto 3rem;

                    &--title{
                        font-size: $font-hd;
                    }
                }

                &__form{
                    margin: 0 auto;

                    .row{
                        .col-12{
                            margin-bottom: 1.5rem;
                        }
                    }

                    .btn{
                        @include button();
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