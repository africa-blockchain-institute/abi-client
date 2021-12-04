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
                faculties: [
                    { name: "John Doe", title: "MSC Phd.", position: "Faculty Head and Lead Instructor", image: 'faculty/faculty_1.jpg' },
                    { name: "Horse Soey", title: "Just high School.", position: "Member and Support Coach", image: 'faculty/faculty_2.jpg'  },
                    { name: "Female Doe", title: "B.Tech.", position: "Lead Instructor", image: 'faculty/faculty_1.jpg'  },
                ]
            }
        },

        components: {
            Hero, Lists
        }
    }
</script>

<style lang="scss" scoped>
    
</style>