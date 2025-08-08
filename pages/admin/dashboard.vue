<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Admin Dashboard</h1>
        </div>

        <div class="wrapper__body">
            <div class="container"> 
                <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <div class="wrapper__sect">
                            <span class="fas fa-calendar wrapper__sect--img"></span>
                            <h5 class="wrapper__sect--title">Events</h5>
                            <h1 class="wrapper__sect--num">{{ events }}</h1>
                        </div>
                    </div>

                    <div class="col">
                        <div class="wrapper__sect">
                            <span class="fas fa-book wrapper__sect--img"></span>
                            <h5 class="wrapper__sect--title">Resources</h5>
                            <h1 class="wrapper__sect--num">{{ resources }}</h1>
                        </div>
                    </div>

                    <div class="col">
                        <div class="wrapper__sect">
                            <span class="fas fa-list-ul wrapper__sect--img"></span>
                            <h5 class="wrapper__sect--title">Insights</h5>
                            <h1 class="wrapper__sect--num">{{ insights }}</h1>
                        </div>
                    </div>

                    <div class="col">
                        <div class="wrapper__sect">
                            <span class="fas fa-vote-yea wrapper__sect--img"></span>
                            <h5 class="wrapper__sect--title">Media Mentions</h5>
                            <h1 class="wrapper__sect--num">{{ mediaMentions }}</h1>
                        </div>
                    </div>

                    <div class="col">
                        <div class="wrapper__sect">
                            <span class="fas fa-users wrapper__sect--img"></span>
                            <h5 class="wrapper__sect--title">Users</h5>
                            <h1 class="wrapper__sect--num">{{ users }}</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'admin',
        
        head(){
            return{
                title: 'Admin Dashboard -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Admin Dashboard',
                        content: 'Admin Dashboard'
                    }
                ],
            }
        },

        data(){
            return {
                events: 0,
                resources: 0,
                insights: 0,
                mediaMentions: 0,
                users: 0,
            }
        },

        created(){
            this.getEvents();
            this.getResources();
            this.getInsights();
            this.getMediaMentions();
            this.getUsers();    
        },

        methods:{
            async getEvents(){
                let docs = await this.$axios.$get(`/events`)
                this.events = docs.records
            },
            
            async getResources(){
                let docs = await this.$axios.$get(`/resources`)
                this.resources = docs.records
            },
            async getInsights(){
                let docs = await this.$axios.$get(`/insights`)
                this.insights = docs.records
            },
            async getMediaMentions(){
                let docs = await this.$axios.$get(`/mentions`)
                this.mediaMentions = docs.records
            },
            async getUsers(){
                let docs = await this.$axios.$get(`/users`)
                this.users = docs.records
            },

        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        &__head{
            margin: 1rem auto 2rem;
            
            &--title{
                font-weight: bold;
                font-size: $font-hd;
            }

            &--btn{
                @include button();
                padding: .5rem .65rem;
            }
        }

        &__sect{
            padding: 1rem;
            color: white;
            border-radius: .5rem;
            margin-bottom: .75rem;

            &--img{
                display: inline-block;
                margin-bottom: .5rem;
                color: $secondary;
            }
            
            &--title{
                font-size: 1.3rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }

            &--num{
                font-size: $font-lg;
                font-weight: bold;
            }

            &:nth-child(1) {
                background-color: $secondary-2;
                color: $white;
            }

            // &:nth-child(1) {
            //     background-color: #f582ae;
            //     color: #001858;
            // }

            // &:nth-child(2) {
            //     background-color: #ffc0ad;
            //     color: #271c19;
            // }

            // &:nth-child(3) {
            //     background-color: #ffd803;
            //     color: #272343;
            // }

            // &:nth-child(4) {
            //     background-color: #ff8906;
            //     color: #fffffe;
            // }

            // &:nth-child(5) {
            //     background-color: #eebbc3;
            //     color: #232946;
            // }

            // &:nth-child(6) {
            //     background-color: #8c7851;
            //     color: #fffffe;
            // }

            // &:nth-child(7) {
            //     background-color: #ff8e3c;
            //     color: #0d0d0d;
            // }

            // &:nth-child(8) {
            //     background-color: #078080;
            //     color: #232323;
            // }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 769px) {  
        .wrapper{
            &__head{
                margin: 2rem auto 3rem;
                
                &--title{
                    font-size: $font-md;
                }

                &--btn{
                    padding: .75rem 2rem;
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>

