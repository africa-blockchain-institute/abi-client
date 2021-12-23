<template>
    <div class="team">
        <!-- board section starts -->
        <div class="team__header">
            <h2 class="team__header--title">Advisory Board</h2>          
            <Lists :listings="advisory" />
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
                advisory: [],
                leadership: []
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