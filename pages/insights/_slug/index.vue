<template>
    <div class="wrapper">
        <div class="hero" :style="{ backgroundImage: 'url('+ require('~/assets/images/insights/banner.jpg')}">
            <div class="container">
                <Header />
                <div class="row">
                    <div class="col-md-8 col-xl-6 col-xxl-6 hero__content">
                        <button class="btn hero__content--tag">Featured</button>
                        <h1 class="hero__content--title">{{ insight.title }}</h1>

                        <p class="hero__content--pub">Published:</p>
                        <p class="hero__content--date">{{ insight.date }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="insight">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-10 col-xxl-8 insight__content">
                        <p class="insight__content--body">
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

        <div class="related">
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
        </div>

    </div>
</template>

<script>
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
                insight: {
                    title: 'Insights into the most formidable challenges facing the blockchain industry today',
                    tag: 'Discovery',
                    date: new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                },
            }
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
    @media (min-width: 767px) {  }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  }
</style>