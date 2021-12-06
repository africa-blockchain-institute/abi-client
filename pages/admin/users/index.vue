<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Users</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12" v-if="docs.length > 0">
                        <div class="table-responsive wrapper__table">
                            <table class="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Joined On</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="wrapper__table--row" v-for="(doc, index) in docs" :key="doc.id">
                                        <th>{{ index + 1 }}</th>
                                        <td><img :src="doc.image" :alt="doc.title" class="img"></td>
                                        <td>{{ doc.name }}</td>
                                        <td>{{ doc.email }} </td>
                                        <td>{{ doc.createdAt | formatDate }} </td>
                                        <td class="">
                                            <nuxt-link :to="{ name: 'admin-users-id', params:{ id: doc._id} }" class="btn btn-primary">
                                                <span class="fas fa-eye"></span>
                                            </nuxt-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-12" v-else>
                        <div class="wrapper__empty text-center">
                            <img src="~/assets/images/dashboard/empty.png" alt="Empty state" class="wrapper__empty--img">
                            <h3 class="wrapper__empty--title">No User</h3>
                        </div>
                    </div>
                </div>

                <div class="row mt-3 mt-lg-5" v-if="records > 9">
                    <div class="col-12">
                        <pagination v-model="page" :records="records" :per-page="perPage *1" @paginate="getDocs"/>
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
                title: 'Users -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Users',
                        content: 'Users'
                    }
                ],
            }
        },

        data(){
            return {
                page: 1,
                perPage: 9,
                records: 0,
                docs: [],
            }
        },

        created(){
            this.getDocs();
        },

        methods:{
            async getDocs(){
                let docs = await this.$axios.$get(`/users/get-only-users?page=${this.page}&limit=${this.perPage}`)
                this.records = docs.records
                this.docs = docs.data;
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

        &__body{
            padding: 2rem 0rem;
        }

        &__table{
            &--row{
                &:hover{
                    background: $primary-light;
                }

                .img{
                    width: 3rem;
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

        &__empty{
            &--img{
                width: 4rem;
                display: inline-block;
                margin-bottom: 2rem;
            }

            &--title{
                font-weight: bold;
                font-size: $font-rg;
                margin-bottom: 1rem
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

            &__body{
                padding: 3rem 2rem;
            }

            &__empty{
                &--img{
                    width: 6rem;
                    margin-bottom: 2rem;
                }

                &--title{
                    font-size: $font-hd;
                    margin-bottom: 2rem;
                }
            }
        }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>