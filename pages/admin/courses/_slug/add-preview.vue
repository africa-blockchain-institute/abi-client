<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Add "{{ this.$route.params.slug }}" Course Preview</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="wrapper__form">
                            <form class="row" @submit.prevent="submit">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <div class="form-group">
                                            <label class="form-label">Course Preview Video <span>*</span></label>
                                            <input class="form-control form-control-lg" type="file" ref="preview"
                                            @change="uploadVideo" :class="{'is-invalid': videoErr }" required>
                                            <div class="invalid-feedback">{{ this.videoErr }} </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>

                                <div class="col-lg-8 mx-auto">
                                    <button type="submit" class="btn btn-primary">
                                        <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                        Add preview
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
                title: 'Add Course Preview -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Courses',
                        content: 'Courses'
                    }
                ],
            }
        },

        data(){
            return {
                loading: false,
                form : {
                    preview: "",
                },

                title: "",
                videoErr: null,
                status: true,
            }
        },

        created(){
        },

        methods:{
            async submit(){
                this.loading = true;

                try {
                    let formData = new FormData();

                    formData.append('preview', this.form.preview)

                    await this.$axios.$post(`/courses/${this.$route.params.slug}/add-preview`, formData)
                    this.loading = false;

                    this.$toast.success("preview added successfully.", {
                        icon : 'check'
                    });

                    this.$router.push({ name: "admin-courses-slug", params:{ slug: this.$route.params.slug } })

                } catch (err) {
                    this.loading = false;
                }
            },

            uploadVideo(e){
                const video = this.$refs.preview.files[0];                
                this.videoErr = ''

                if(video.type.startsWith('video')){
                    this.form.preview = video
                    this.status = false
                }else {
                    this.videoErr = "File Must be of an video format (MP4)"
                }
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