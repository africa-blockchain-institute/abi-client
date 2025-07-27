<template>     
    <div class="team">
        <!-- board section starts -->
        <Lists :listings="advisory" title="Advisory Board" />
        <!-- board section ends -->
        
        <!-- leadership section ends -->       
        <Lists :listings="leadership" title="Our Team" />
        <!-- leadership section ends -->

        <ListsModal :listings="leaderships" title="Our Leadership" />
    </div>
</template>

<script>
    import Lists from '@/components/reusable/CardLists.vue';
    import ListsModal from '../CardListsModal.vue';

    export default {
        data(){
            return{
                advisory: [],
                leadership: [],
                leaderships: [
                    {
                        name: 'John Doe',
                        title: 'CEO',
                        position: 'Founder & CEO',
                        image: 'https://placehold.co/400x420',
                        details: 'John is the visionary behind our institute, leading the team with over 20 years of experience in blockchain technology.'
                    },
                    {
                        name: 'Jane Smith',
                        title: 'CTO',
                        position: 'Chief Technology Officer',
                        image: 'https://placehold.co/400x420',
                        details: 'Jane oversees all technological developments, ensuring our programs are at the forefront of blockchain innovation.'
                    }
                ],
            }
        },

        components: {
            Lists, ListsModal, 
        },

        created(){
            this.getAdvisory();
            this.getLeadership();
        },

        methods:{
            async getAdvisory(){
                let advisory = await this.$axios.$get(`/teams/advisory`)
                this.advisory = advisory.data;
            },

            async getLeadership(){
                let leadership = await this.$axios.$get(`/teams/leadership`)
                this.leadership = leadership.data;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .team{
        &__header{
            &--title{
                font-size: $font-hd;
                font-weight: bold;
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 992px) { 
        .team{
            &__header{
                &--title{
                    font-size: $font-md;
                }
            }
        }
    }
</style>