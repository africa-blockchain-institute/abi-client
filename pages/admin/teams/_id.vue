<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Edit Team Member -  {{title}}</h1>
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
                                            <option value="team">Team</option>
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
                                        <label for="organization" class="form-label">Team Member Organization </label>
                                        <input type="text" v-model.trim="form.organization" class="form-control form-control-lg" id="organization">
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <div class="form-group">
                                            <label class="form-label">Team Member Image</label>
                                            <input class="form-control form-control-lg" type="file" ref="image"
                                            @change="uploadImage" :class="{'is-invalid': imageErr }">
                                            <div class="invalid-feedback">{{ this.imageErr }} </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="details" class="form-label">Team Details <span>*</span> </label>
                                        <client-only>
                                            <froala id="details" :tag="'textarea'" v-model="form.details" required></froala>
                                        </client-only>
                                      </div>
                                </div>

                                <div class="col-lg-8 mx-auto">
                                    <button type="submit" class="btn btn-primary">
                                        <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                        Edit Team Member
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
                title: 'Edit '+ this.title +'- Africa Blockchain Institute',
                meta: [
                    {
                        name: 'teams',
                        content: 'teams'
                    }
                ],
            }
        },

        data(){
            return {
                loading: false,
                title: "",
                form : {
                    organization: '',
                    category: '',
                    image: '',
                    title: '',
                    name: '',
                    details: '',
                },
                imageErr: null,
                status: true,
                froalaConfig: {
                    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'superscript', 'subscript', 'insertLink'],
                }
            }
        },

        created(){
            this.getDoc()
        },

        methods:{
            async getDoc(){
                let team = await this.$axios.$get(`/teams/${this.$route.params.id}`)
                this.title = team.data.name;
                this.form = team.data
            },

            async submit(){
                this.loading = true;

                try {
                    let formData = new FormData()
                    formData.append('organization', this.form.organization)
                    formData.append('name', this.form.name)
                    formData.append('category', this.form.category)
                    formData.append('title', this.form.title)
                    formData.append('details', this.form.details)
                    formData.append('image', this.form.image)

                    await this.$axios.$patch(`/teams/${this.$route.params.id}`, formData)
                    this.loading = false;

                    this.$toast.success("Team updated successfully", {
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