<template>
    <div class="wrapper">
        <div class="hero" :style="{ backgroundImage: 'url('+ require('~/assets/images/events/banner.jpg')}">
            <div class="container">
                <Header />
                <div class="row">
                    <div class="col-md-8 col-xl-6 col-xxl-6 hero__content">
                        <button class="btn hero__content--tag">Featured</button>
                        <h1 class="hero__content--title">{{ event.title }}</h1>

                        <p class="hero__content--pub">Published:</p>
                        <p class="hero__content--date">{{ event.schedule | formatDate }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="event">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-10 col-xxl-8 event__content">
                        <p class="event__content--body">
                            {{ event.description }}
                        </p>

                        <a :href="event.link" class="btn event__content--btn">Register For Event</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/nav/Header';
    
    export default {
        head(){
            return{
                title: `${this.event.title} -  Africa Blockchain Institute`,
                meta: [
                    {
                        name: this.event.title,
                        content: this.event.title
                    }
                ],
            }
        },

        data() {
            return {
                event: {},
            }
        },

        created(){
            console.log('Event slug:', this.$route.params.slug);
            
            this.getEvent();
        },

        components: {
            Header,
        },

        methods: {
            async getEvent() {
                try {
                    // Assuming you have an API endpoint to fetch the event details
                    let response = await this.$axios.$get(`/events/${this.$route.params.slug}`);
                    this.event = response.data;
                } catch (error) {
                    console.error('Error fetching event:', error);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .hero{
            height: 30vh;
            background-size: cover;
            background-position: center;
            position: relative;
            
            &__content{
                position: absolute;
                padding-left: 2rem;
                bottom: 0;
            
                &--title{
                    font-weight: bold;
                    color: $white;
                    font-size: $font-hd;
                }
                
                &--pub{
                    color: $white;
                    font-size: .7rem;
                    margin-bottom: 0;
                }

                &--date{
                    color: $white;
                    font-size: .9rem;
                    font-weight: bold;
                }

                &--tag {
                    background-color: transparent;
                    border: .075rem solid #fff;
                    border-radius: 1rem;
                    color: #fff;
                    font-size: 0.75rem;
                    margin-bottom: 1rem;
                    padding: .25rem .75rem;
                }
            }
        }

        .event {
            padding: 2rem 1rem;

            &__content {
                &--body {
                    font-size: 1rem;
                    line-height: 1.6;
                }
                
                &--btn {
                    margin-top: 1rem;
                    @include button();
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                }
            }
        }
    }

    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  
        .wrapper{
            .hero {
                height: 40vh;
                
                &__content{
                    bottom: 7%;
                
                    &--title{
                        font-size: $font-hd;
                        margin-bottom: 1.5rem;
                    }
                    
                    &--pub{
                        font-size: .7rem;
                    }

                    &--date{
                        font-size: .9rem;
                    }

                    &--tag {
                        font-size: 0.75rem;
                    }
                }
            }

            .event {
                padding: 2rem 3rem;
            }
        }
    }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  
        .wrapper{
            .hero {
                height: 40vh;
                
                &__content{
                    bottom: 7%;
                
                    &--title{
                        font-size: $font-hd;
                        margin-bottom: 1.5rem;
                    }
                    
                    &--pub{
                        font-size: .7rem;
                    }

                    &--date{
                        font-size: .9rem;
                    }

                    &--tag {
                        font-size: 0.75rem;
                    }
                }
            }

            .event {
                padding: 2rem 3rem;
            }
        }
    }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  
        .wrapper{
            .hero {
                height: 50vh;
                
                &__content{
                    bottom: 7%;
                
                    &--title{
                        font-size: $font-lg;
                    }
                    
                    &--pub{
                        font-size: .8rem;
                    }

                    &--date{
                        font-size: 1rem;
                    }

                    &--tag {
                        font-size: 0.75rem;
                    }
                }
            }

            .event {
                padding: 2rem 3rem;
            }
        }
    }
</style>