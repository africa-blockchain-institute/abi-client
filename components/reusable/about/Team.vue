<template>
    <div class="team">
        <!-- board section starts -->
        <div class="team__header">
            <h2 class="team__header--title">Advisory Board</h2>          
            <Lists :listings="team" />
        </div>
        <!-- board section ends -->

        <!-- leadership section ends -->
        <div class="team__header">
            <h2 class="team__header--title">Leadership Team</h2>          
            <Lists :listings="leadership" />
        </div>
        <!-- leadership section ends -->
    </div>
</template>

<script>
    import Lists from '@/components/reusable/CardLists.vue';

    export default {
        data(){
            return{
                team: [
                    { name: "John Doe", title: "MSC Phd.", position: "Faculty Head and Lead Instructor", image: 'faculty/faculty_1.jpg' },
                    { name: "Horse Soey", title: "Just high School.", position: "Member and Support Coach", image: 'faculty/faculty_2.jpg'  },
                    { name: "Female Doe", title: "B.Tech.", position: "Lead Instructor", image: 'faculty/faculty_1.jpg'  },
                ],

                leadership: [
                    { name: "John Doe", title: "MSC Phd.", position: "Faculty Head and Lead Instructor", image: 'faculty/faculty_1.jpg' },
                    { name: "Horse Soey", title: "Just high School.", position: "Member and Support Coach", image: 'faculty/faculty_2.jpg'  },
                    { name: "Female Doe", title: "B.Tech.", position: "Lead Instructor", image: 'faculty/faculty_1.jpg'  },
                ]
            }
        },

        components: {
            Lists
        }
    }
</script>

<style lang="scss" scoped>
    .team{
        margin-top: 1rem;

        &__header{
            &--title{
                text-align: center;
                font-size: $font-hd;
                font-weight: bold;
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 992px) { 
        .team{
            margin-top: 3rem;
    
            &__header{
                &--title{
                    font-size: $font-md;
                }
            }
        }
    }
</style>