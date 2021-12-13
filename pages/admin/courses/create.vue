<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Create Course</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="wrapper__form">
                            <form class="row" @submit.prevent="submit">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="title" class="form-label">Course Title<span>*</span> </label>
                                        <input type="text" v-model.trim="form.title" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" id="title" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="description" class="form-label">Course Description <span>*</span> </label>
                                        <div class="form-group">
                                            <froala id="edit" :tag="'textarea'" :config="froalaConfig" v-model="form.description"></froala>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="description" class="form-label">Course Description <span>*</span> </label>
                                        <div class="form-group">
                                            <div class="quill-editor" required
                                                :content="form.description"
                                                v-quill:myQuillEditor="editorOption"
                                                @change="descriptionChange($event)" >
                                            </div>
                                        </div>
                                    </div>
                                </div> -->

                                <div class="col-lg-8 mx-auto">
                                    <button type="submit" class="btn btn-primary">
                                        <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                        Create Course
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

    // import VueFroala from 'vue-froala-wysiwyg';

    export default {
        layout: 'admin',

        head(){
            return{
                title: 'Create Courss -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Courses',
                        content: 'Courses'
                    }
                ],
            }
        },

        components:{
            // frola: VueFroala,
        },

        data(){
            return {
                loading: false,
                courses: {},
                editorOption: {
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                            [{ 'script': 'sub' }, { 'script': 'super' }],
                            [{ 'indent': '-1' }, { 'indent': '+1' }],
                            [{ 'header': [4, 5, 6, false] }],
                        ],
                        syntax: {
                            highlight: text => hljs.highlightAuto(text).value
                        }
                    }
                },
                form : {
                    title: '',
                    description: '',
                    image: '',
                    requirements: '',
                    learning_outcome: '',
                },
                imageErr: null,
                status: true,

                froalaConfig:{
                    events: {
                        initialized: function () {
                            console.log('initialized')
                        }
                    }
                }
            }
        },

        created(){
        },

        methods:{
            descriptionChange({ editor, html, text }) {
                this.form.description = html
            },

            requirementsChange({ editor, html, text }) {
                this.form.requirements = html
            },

            learning_outcomeChange({ editor, html, text }) {
                this.form.learning_outcome = html
            },

            async submit(){
                this.loading = true;

                try {
                    let formData = new FormData()
                    formData.append('link', this.form.link)
                    formData.append('category', this.form.category)
                    formData.append('title', this.form.title)
                    formData.append('image', this.form.image)

                    await this.$axios.$post('/courses', formData)
                    this.loading = false;

                    this.$toast.success("Courses created successfully", {
                        icon : 'check'
                    });

                    this.$router.push({ name: "admin-courses" })

                } catch (err) {
                    this.loading = false;
                }
            },

            uploadImage(e){
                const image = this.$refs.image.files[0];                
                this.imageErr = ''

                if(image.type.startsWith('image')){
                    if(image.size <= 1000000){
                        this.form.image = image
                        this.status = false
                    }else {
                        this.imageErr = "Image Size Must be less than 1mb"
                    }
                }else {
                    this.imageErr = "File Must be of an Image format (PNG, JPG, JPEG)"
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