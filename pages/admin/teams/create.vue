<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Create Team</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="wrapper__form">
                            <form class="row" @submit.prevent="submit">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-4">
                                        <label for="name" class="form-label">Team Member name<span>*</span> </label>
                                        <input type="text" v-model.trim="form.name" class="form-control form-control-lg" id="name" required>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <label for="category" class="form-label">Team Member Category<span>*</span> </label>
                                        <select class="form-control form-control-lg" name="category" id="category" v-model.trim="form.category" required>
                                            <option value="advisory">Advisory</option>
                                            <option value="leadership">Leadership</option>
                                            <option value="faculty">Faculty</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-4">
                                        <label for="title" class="form-label">Team Member Title<span>*</span> </label>
                                        <input type="text" v-model.trim="form.title" :class="{'is-invalid': errors.status }" class="form-control form-control-lg" id="title" required>
                                        <div class="invalid-feedback" v-if="errors"> {{ errors.message }} </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <label for="position" class="form-label">Team Member Organization </label>
                                        <input type="text" v-model.trim="form.position" class="form-control form-control-lg" id="position">
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <div class="form-group">
                                            <label class="form-label">Team Member Image</label>
                                            <input class="form-control form-control-lg" type="file" ref="image"
                                            @change="uploadImage" :class="{'is-invalid': imageErr }" required>
                                            <div class="invalid-feedback">{{ this.imageErr }} </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-8 mx-auto">
                                    <button type="submit" class="btn btn-primary" :disabled="status">
                                        <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                        Create Team Member
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
                title: 'Create Team Member -  Africa Blockchain Institute.',
                meta: [
                    {
                        name: 'Team Members',
                        content: 'Team Members'
                    }
                ],
            }
        },

        data(){
            return {
                loading: false,
                categories: {},
                form : {
                    position: '',
                    category: '',
                    image: '',
                    title: '',
                    name: '',
                },
                imageErr: null,
                status: true,
            }
        },

        created(){
        },

        methods:{
            async submit(){
                this.loading = true;

                try {
                    let formData = new FormData()
                    formData.append('name', this.form.name)
                    formData.append('position', this.form.position)
                    formData.append('category', this.form.category)
                    formData.append('title', this.form.title)
                    formData.append('image', this.form.image)

                    await this.$axios.$post('/teams', formData)
                    this.loading = false;

                    this.$toast.success("Team created successfully.", {
                        icon : 'check'
                    });

                    this.$router.push({ name: "admin-teams" })

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
                        this.imageErr = "Image Size Must be less than 1mb."
                    }
                }else {
                    this.imageErr = "File Must be of an Image format (PNG, JPG, JPEG)."
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