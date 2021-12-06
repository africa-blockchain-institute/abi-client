<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">User Details</h1>
        </div>

        <div class="user shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-lg-3 user__img">
                        <!-- <img src="~/assets/images/avatar.png" alt="user avatar" class="img-fluid"> -->
                        <img :src="user.image" :alt="user.name" class="img-fluid">
                    </div>
                    <div class="col-lg-8 offset-lg-1 user__info">
                        <h3 class="user__info--head">Personal Information</h3>

                        <div class="row">
                            <div class="col-md-6">
                                <small class="user__info--title"> Name</small>
                                <p class="user__info--info">{{ user.name }} </p>
                            </div>

                            <div class="col-md-6">
                                <small class="user__info--title">Email</small>
                                <p class="user__info--info">{{ user.email }} </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <small class="user__info--title">Phone Number</small>
                                <p class="user__info--info">{{ user.phone }} </p>
                            </div>

                            <div class="col-md-6">
                                <small class="user__info--title">Gender</small>
                                <p class="user__info--info">{{user.gender}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <small class="user__info--title">Profession</small>
                                <p class="user__info--info">{{ user.profession }}</p>
                            </div>

                            <div class="col-md-6">
                                <small class="user__info--title">Country</small>
                                <p class="user__info--info">{{user.country}}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12" v-if="1 > 0">
                                <div class="table-responsive user__table">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Course Title</th>
                                                <th scope="col">Enrolled On</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- <tr class="wrapper__table--row" v-for="(doc, index) in docs" :key="doc.id"> -->
                                            <tr class="user__table--row">
                                                <th>{{  1 }}</th>
                                                <td>Blockchain Technology</td>
                                                <td>{{ new Date() | formatDate }}</td>
                                                <td> <span class="badge bg-warning">Ongoing</span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="col-12" v-else>
                                <div class="wrapper__empty text-center">
                                    <h3 class="wrapper__empty--title">No course(s) yet</h3>
                                </div>
                            </div>
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
                title: 'User Details -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Users Details',
                        content: 'Users Details'
                    }
                ],
            }
        },

        data(){
            return {
                user: {}
            }
        },

        created(){
            this.getDoc()
        },

        methods:{
            async getDoc(){
                let user = await this.$axios.$get(`/users/${this.$route.params.id}`)
                this.user = user.data;

                console.log(this.user)
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
        }

        .user{
            padding: 2rem 0rem;

            &__img{
                text-align: center;

                img{
                    width: 7rem;
                    margin-bottom: 2rem;
                }
            }

            &__info{
                &--head{
                    font-size: $font-hd;
                    font-weight: bold;
                    margin-bottom: 3rem;
                }

                &--title{
                    font-size: $font-rg;

                }

                &--info{
                    font-size: 1rem;
                    font-weight: bold;
                }
            }

            &__table{
                &--row{
                    &:hover{
                        background: $primary-light;
                    }

                    .btn{
                        color: white;
                        padding: .25rem .5rem;
                        box-shadow: none;
                        font-size: .8rem;
                        margin-bottom: .25rem;
                    }
                }
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
            }

            .user{
                padding: 3rem 2rem;

                &__info{
                    &--head{
                        font-size: $font-hd;
                        margin-bottom: 3rem;
                    }

                    .row{
                        margin-bottom: 1rem;
                    }

                    &--title{
                        font-size: $font-rg;
                    }

                    &--info{
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>