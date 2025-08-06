<template>
    <div class="wrapper">
        <!-- <div class="hero" :style="{ backgroundImage: 'url('+ insight.image +')' }"> -->
        <div class="hero" :style="backgroundStyle">
            <div class="overlay"></div>
            <div class="container">
                <Header />
                <div class="row">
                    <div class="col-md-8 col-xl-6 col-xxl-6 hero__content">
                        <button class="btn hero__content--tag">Featured</button>
                        <h1 class="hero__content--title">{{ insight.title }}</h1>

                        <p class="hero__content--pub">Published:</p>
                        <p class="hero__content--date">{{ insight.published | formatDate }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="insight">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-10 col-xxl-8 insight__content">
                        <div class="insight__content--body" v-html="insight.content"> </div>
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

        <!-- <div class="related">
             <div class="container">
                <div class="row">
                    <div class="col-12 related__head">
                        <h1 class="related__head--title">Related Insights</h1>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 col-xl-10 col-xxl-8 related__content">

                    </div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script>
    import Header from '@/components/nav/Header';
    
    export default {
        head(){
            return{
                title: `${this.insight.title} -  Africa Blockchain Institute`,
                meta: [
                    {
                        name: this.insight.title,
                        content: this.insight.title
                    }
                ],
            }
        },

        data() {
            return {
                insight: {},
            }
        },

        computed: {
            backgroundStyle() {
                return {
                    backgroundImage: `url(${this.insight.image})`
                }
            }
        },

        components: {
            Header,
        },

        mounted(){
            this.getInsight();
        },

        methods: {
            async getInsight() {
                try {
                    let response = await this.$axios.$get(`/insights/${this.$route.params.slug}`);
                    this.insight = response.data;
                } catch (error) {
                    console.error('Error fetching insight:', error);
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

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.6); /* black overlay */
            }
            
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

        .insight {
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

            .insight {
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
                height: 60vh;
                
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

            .insight {
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

            .insight {
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