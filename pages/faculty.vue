<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero title="Faculty" image="faculty" />
        <!-- hero section ends -->

        <!-- faculties section starts -->
        <Lists :listings="faculties" />
        <!-- faculties section ends -->

    </div>
</template>

<script>
    import Hero from '@/components/reusable/Hero.vue';
    import Lists from '@/components/reusable/CardLists.vue';

    export default {
        head(){
            return{
                title: 'Faculty -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Faculty',
                        content: 'Faculty'
                    }
                ],
            }
        },

        data(){
            return{
                faculties: []
            }
        },

        components: {
            Hero, Lists
        },

        created(){
            this.getFaculties()
        },

        methods:{
            async getFaculties(){
                let faculties = await this.$axios.$get(`/teams/faculty`)
                this.faculties = faculties.data;
            },
        }
    }
</script>

<style lang="scss" scoped>
    
</style>