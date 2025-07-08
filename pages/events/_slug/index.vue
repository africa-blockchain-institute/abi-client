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
                        <p class="hero__content--date">{{ event.date }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="event">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-10 col-xxl-8 event__content">
                        <p class="event__content--body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum repudiandae ut quos in, vel sapiente, blanditiis repellendus tempora sed nesciunt, adipisci distinctio ex error obcaecati rem iure consectetur illo dignissimos!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="comment">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-10 col-xxl-8 comment__content">
                        <Disqus :identifier="this.$route.path" />
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
                // title: `${this.course.title} -  Africa Blockchain Institute`,
                title: `Africa Blockchain Institute`,
                meta: [
                    {
                        // name: this.course.title,
                        // content: this.course.title
                    }
                ],
            }
        },

        data() {
            return {
                event: {
                    title: 'Insights into the most formidable challenges facing the blockchain industry today',
                    tag: 'Discovery',
                    date: new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                },
            }
        },

        components: {
            Header,
        },
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
            }
        }

        .comment {
            padding: 2rem 1rem;
        }

        .related{
            padding: 2rem 1rem;

            &__head{
                margin-bottom: 1rem;

                &--title{
                    font-size: 1.2rem;
                    font-weight: bold;
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

            .comment {
                padding: 2rem 3rem;
            }

            .related{
                padding: 2rem 1rem;

                &__head{
                    margin-bottom: 1rem;

                    &--title{
                        font-size: 1.2rem;
                    }
                }
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

            .comment {
                padding: 2rem 3rem;
            }

            .related{
                padding: 2rem 1rem;

                &__head{
                    margin-bottom: 1rem;

                    &--title{
                        font-size: 1.2rem;
                    }
                }
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

            .comment {
                padding: 2rem 3rem;
            }

            .related{
                padding: 2rem 1rem;

                &__head{
                    margin-bottom: 1rem;

                    &--title{
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
</style>