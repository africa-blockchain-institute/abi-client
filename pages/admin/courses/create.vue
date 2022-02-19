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
                                        <input type="text" v-model.trim="form.title" class="form-control form-control-lg" id="title" required>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="price" class="form-label">Course Price<span>*</span> </label>
                                        <input type="number" v-model.trim="form.price" class="form-control form-control-lg" id="price" required>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="category" class="form-label">Course Category<span>*</span> </label>
                                        <input type="text" v-model.trim="form.category" class="form-control form-control-lg" id="category" required>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <div class="form-group">
                                            <label class="form-label">Course Poster Image <span>*</span></label>
                                            <input class="form-control form-control-lg" type="file" ref="image"
                                            @change="uploadImage" :class="{'is-invalid': imageErr }" required>
                                            <div class="invalid-feedback">{{ this.imageErr }} </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="description" class="form-label">Course Description <span>*</span> </label>
                                        <client-only>
                                            <froala id="description" :tag="'textarea'" :config="froalaConfig" v-model="form.description" required></froala>
                                        </client-only>
                                    </div>
                                </div> -->

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="description" class="form-label">Course Description <span>*</span> </label>
                                        <textarea id="description" v-model="form.description" required class="form-control" rows="3" ></textarea>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="requirements" class="form-label">Course Requirements <span>*</span> </label>
                                        <textarea id="requirements" v-model="form.requirements" required class="form-control" rows="3" ></textarea>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="learning_outcome" class="form-label">Learning Outcome <span>*</span> </label>
                                        <textarea id="learning_outcome" v-model="form.learning_outcome" required class="form-control" rows="3" ></textarea>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="certification" class="form-label">Certification </label>
                                        <input type="text" v-model.trim="form.certification" class="form-control form-control-lg" id="certification" required>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="career_prospect" class="form-label">Career Prospect </label>
                                        <input type="text" v-model.trim="form.career_prospect" class="form-control form-control-lg" id="career_prospect" required>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="project" class="form-label">Course Project <span>*</span> </label>
                                        <textarea id="project" v-model="form.project" required class="form-control" rows="3" ></textarea>
                                    </div>
                                    <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                </div>

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

    export default {
        layout: 'admin',

        head(){
            return{
                title: 'Create Course -  Africa Blockchain Institute',
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
                courses: {},
                form : {
                    title: '',
                    description: '',
                    image: '',
                    requirements: '',
                    learning_outcome: '',
                    price: '',
                    category: '',
                    certification: '',
                    career_prospect: '',
                    skill_level: 'All',
                    language: 'English',
                    project: '',
                },

                imageErr: null,
                status: true,

                froalaConfig:{
                    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'superscript', 'subscript', 'insertLink'],
                },
            }
        },

        created(){
        },

        methods:{
            async submit(){
                this.loading = true;

                try {
                    let formData = new FormData()
                    formData.append('title', this.form.title)
                    formData.append('description', this.form.description)
                    formData.append('requirements', this.form.requirements)
                    formData.append('image', this.form.image)
                    formData.append('learning_outcome', this.form.learning_outcome)
                    formData.append('price', this.form.price)
                    formData.append('category', this.form.category)
                    formData.append('career_prospect', this.form.career_prospect)
                    formData.append('certification', this.form.certification)
                    formData.append('skill_level', this.form.skill_level)
                    formData.append('language', this.form.language)
                    formData.append('project', this.form.project)

                    await this.$axios.$post('/courses', formData)
                    this.loading = false;

                    this.$toast.success("Course created successfully", {
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