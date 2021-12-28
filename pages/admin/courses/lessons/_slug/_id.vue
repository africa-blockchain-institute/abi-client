<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Edit "{{ form.title }}" Lesson</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="wrapper__form">
                            <form class="row" @submit.prevent="submit">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="title" class="form-label">Lesson Title<span>*</span> </label>
                                        <input type="text" v-model.trim="form.title" class="form-control form-control-lg" id="title" required>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <div class="form-group">
                                            <label class="form-label">Lesson Video <span>*</span></label>
                                            <input class="form-control form-control-lg" type="file" ref="lesson"
                                            @change="uploadVideo" :class="{'is-invalid': videoErr }">
                                            <div class="invalid-feedback">{{ this.videoErr }} </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>

                                <div class="col-lg-8 mx-auto">
                                    <button type="submit" class="btn btn-primary">
                                        <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                        Edit Lesson
                                    </button>
                                </div>
                            </form>
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
                title: 'Add Lesson -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Courses',
                        content: 'Courses'
                    }
                ],
            }
        },

        components:{

        },

        data(){
            return {
                loading: false,
                form : {
                    title: "",
                    lesson: "",
                },

                videoErr: null,
                status: true,
            }
        },

        created(){
            this.getLesson();
        },

        methods:{
            async submit(){
                this.loading = true;

                try {
                    let formData = new FormData();

                    formData.append('title', this.form.title)
                    formData.append('lesson', this.form.lesson)

                    await this.$axios.$patch(`/courses/${this.$route.params.slug}/lessons/${this.$route.params.id}`, formData)
                    this.loading = false;

                    this.$toast.success("Lesson edited successfully.", {
                        icon : 'check'
                    });

                    this.$router.push({ name: "admin-courses-lessons-slug", params:{ slug: this.$route.params.slug } })

                } catch (err) {
                    this.loading = false;
                }
            },

            uploadVideo(e){
                const video = this.$refs.lesson.files[0];                
                this.videoErr = ''

                if(video.type.startsWith('video')){
                    this.form.lesson = video
                    this.status = false
                }else {
                    this.videoErr = "File Must be of an video format (MP4)"
                }
            },

            async getLesson(){
                let doc = await this.$axios.$get(`/courses/${this.$route.params.slug}/lessons/${this.$route.params.id}`);
                this.form = doc.data
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
                padding: .5rem .75rem;
            }
        }

        &__body{
            padding: 2rem 0rem;
        }

        &__form{
            .row{
                .col-12{
                    margin-bottom: 1rem;
                }
            }

            .form-label{
                @include form-label();
                font-weight: bold;
                font-size: $font-rg;
            }

            .form-control, .form-select{
                box-shadow: none;
            }

            .btn{
                @include button();
            }
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
                    padding: .75rem 2.5rem;
                }
            }

            &__body{
                padding: 3rem 2rem;
            }

            &__form{
                .row{
                    margin-bottom: 1rem;
                }

                .btn{
                    @include button();
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>