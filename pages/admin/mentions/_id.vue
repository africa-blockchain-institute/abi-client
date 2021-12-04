<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Edit Mention -  {{title}}</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="wrapper__form">
                            <form class="row" @submit.prevent="submit">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-4">
                                        <label for="title" class="form-label">Mention Title<span>*</span> </label>
                                        <input type="text" v-model.trim="form.title" class="form-control form-control-lg" id="title" required>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <label for="link" class="form-label">Mention Link<span>*</span> </label>
                                        <input type="url" v-model.trim="form.link" class="form-control form-control-lg" id="link" required>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <div class="form-group">
                                            <label class="form-label">Mention Image</label>
                                            <input class="form-control form-control-lg" type="file" ref="image"
                                            @change="uploadImage" :class="{'is-invalid': imageErr }">
                                            <div class="invalid-feedback">{{ this.imageErr }} </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-8 mx-auto">
                                    <button type="submit" class="btn btn-primary">
                                        <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                        Edit Mention
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
                        name: 'Mentions',
                        content: 'Mentions'
                    }
                ],
            }
        },

        data(){
            return {
                loading: false,
                title: "",
                form : {
                    link: '',
                    image: '',
                    title: '',
                },
                imageErr: null,
                status: true,
            }
        },

        created(){
            this.getDoc()
        },

        methods:{
            async getDoc(){
                let mention = await this.$axios.$get(`/mentions/${this.$route.params.id}`)
                this.title = mention.data.title;
                this.form = mention.data
            },

            async submit(){
                this.loading = true;

                try {
                    let formData = new FormData()
                    formData.append('link', this.form.link)
                    formData.append('title', this.form.title)
                    formData.append('image', this.form.image)

                    await this.$axios.$patch(`/mentions/${this.$route.params.id}`, formData)
                    this.loading = false;

                    this.$toast.success("Mention updated successfully", {
                        icon : 'check'
                    });

                    this.$router.push({ name: "admin-mentions" })

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