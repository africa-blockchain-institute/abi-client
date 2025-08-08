<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Create Message</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="wrapper__form">
                            <form class="row" @submit.prevent="submit">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-8">
                                        <label for="message" class="form-label">Message<span>*</span> </label>
                                        <input type="text" v-model="form.message" class="form-control form-control-lg" id="message" required />
                                    </div>
                                    <div class="col-12 col-md-8">
                                        <label for="link" class="form-label">Link<span>*</span> </label>
                                        <input type="url" v-model="form.link" class="form-control form-control-lg" id="link" required />
                                    </div>
                                </div>

                                <div class="col-lg-8 mx-auto">
                                    <button type="submit" class="btn btn-primary">
                                        <span class="fas fa-spinner fa-spin mr-2" v-if="loading"></span>
                                        Create Message
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
                title: 'Create Message -  Africa Blockchain Institute.',
                meta: [
                    {
                        message: 'Message',
                        content: 'message'
                    }
                ],
            }
        },

        data(){
            return {
                loading: false,
                form : {
                    message: '',
                    link: '',
                },
                status: true,
            }
        },

        created(){
        },

        methods:{
            async submit(){
                this.loading = true;

                try {

                    await this.$axios.$post('/messages', this.form)
                    this.loading = false;

                    this.$toast.success("message created successfully.", {
                        icon : 'check'
                    });

                    this.$router.push({ name: "admin-messages" })

                } catch (err) {
                    this.loading = false;
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