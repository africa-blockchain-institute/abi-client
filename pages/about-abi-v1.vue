<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="About ABI" image="about" />
        <!-- hero section ends -->

        <div class="page">
            <div class="container">
                <div class="row">
                    <div class="col-12 page__nav">
                        <ul class="nav justify-content-center">
                            <li class="nav-item page__nav--link" v-for="tab in tabs" :key="tab" >
                                <a  href="#" 
                                    :class="['nav-link', { active: currentTab === tab }]" 
                                    @click="currentTab = tab"
                                > {{ tab }} </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-12 text-center page__arrow">
                        <span class="fas fa-angle-down"></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 col-xl-10 page__info">
                        <p class="page__info--text">Africa Blockchain Institute is Africa’s foremost Blockchain Think-Tank that is reimagining the possibilities of Blockchain Education, extensive Evidence-Based Researches, and High-End Deployment solutions, for Digital Transformation in Africa. </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- about-abi components section starts -->
        <component :is="currentTabComponent" class="tab"></component>
        <!-- about-abi components section ends -->
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero-v1.vue';
    import About from '~/components/reusable/about/About.vue';
    import Mission from '~/components/reusable/about/Mission.vue';
    import Priorities from '~/components/reusable/about/Priorities.vue';
    import Community from '~/components/reusable/about/Community.vue';
    import Team from '~/components/reusable/about/Team.vue';

    export default {
        head(){
            return{
                title: 'About Us -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'About-Us',
                        content: 'About Us'
                    }
                ],
            }
        },

        data(){
            return{
                currentTab: "Mission",
                tabs: [
                    "Mission", "Priorities", "Community", "Team",
                ],

                faculties: [
                    { name: "John Doe", title: "MSC Phd.", position: "Faculty Head and Lead Instructor", image: 'about/faculty_2.jpg' },
                    { name: "Horse Soey", title: "Just high School.", position: "Member and Support Coach", image: 'about/faculty_2.jpg'  },
                ]
            }
        },

        components: {
            Hero, About, Mission, Priorities, Community, Team
        },

        computed: {
            currentTabComponent: function() {
                return this.currentTab;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .page{
            &__nav{
                margin: 2rem auto 1rem;

                &--link{
                    margin-right: .5rem;
                    a{
                        font-weight: bold;
                        color: $secondary-2;
                        padding: .5rem;
                        
                        &.active{
                            color: $white;
                            background-color: $secondary;
                            border-radius: .5rem;
                        }
                    }
                }
            }

            &__arrow{
                .fas{
                    font-size: 2rem;
                    animation: updown 2s ease infinite;
                }

                @keyframes updown {
                    0% {
                        transform: translateY(-50%);
                    }

                    50% {
                        transform: translateY(50%);
                    }

                    100% {
                        transform: translateY(-50%);
                    }
                }
            }

            &__info{
                margin: 1rem auto;
                text-align: center;

                &--text{
                    font-size: $font-rg;
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
            .page{
                &__nav{
                    margin: 3rem auto 1rem;

                    &--link{
                        a{
                            padding: .5rem 1.5rem;
                        }
                    }
                }

                &__arrow{
                    .fas{
                        display: none;
                    }
                }

                &__info{
                    margin: 2rem auto;

                    &--text{
                        font-size: 1.2rem;
                    }
                }
            }            
        }
    }
</style>