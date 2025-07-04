<template>     
    <div class="team">
        <!-- board section starts -->
        <Lists :listings="advisory" title="Our Advisory" />
        <!-- board section ends -->
        
        <!-- leadership section ends -->       
        <Lists :listings="leadership" title="Our Team" />
        <!-- leadership section ends -->
    </div>
</template>

<script>
    import Lists from '@/components/reusable/CardLists.vue';

    export default {
        data(){
            return{
                advisory: [],
                // leadership: [],
                leadership: [
                    {
                        name: 'John Doe',
                        title: 'CEO',
                        position: 'Founder & CEO',
                        image: '/images/team/john_doe.jpg'
                    },
                    {
                        name: 'Jane Smith',
                        title: 'CTO',
                        position: 'Chief Technology Officer',
                        image: '/images/team/jane_smith.jpg'
                    }
                ],
            }
        },

        components: {
            Lists
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