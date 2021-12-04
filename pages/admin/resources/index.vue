<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Resources</h1>
            <nuxt-link to="/admin/resources/create" class="btn wrapper__head--btn">Add Resource</nuxt-link>
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
                                        <th scope="col">Title</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Link</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="wrapper__table--row" v-for="(doc, index) in docs" :key="doc.id">
                                        <th>{{ index + 1 }}</th>
                                        <td><img :src="doc.image" :alt="doc.title" class="img"></td>
                                        <td>{{ doc.title }}</td>
                                        <td>{{ doc.category }} </td>
                                        <td>{{ doc.link }} </td>
                                        <td class="">
                                            <nuxt-link :to="{ name: 'admin-resources-id', params:{ id: doc._id} }" class="btn btn-primary">
                                                <span class="fas fa-edit"></span>
                                            </nuxt-link>
                                            <button class="btn btn-danger" @click="deleteDoc(doc._id)">
                                                <span class="fas fa-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-12" v-else>
                        <div class="wrapper__empty text-center">
                            <img src="~/assets/images/dashboard/empty.png" alt="Empty state" class="wrapper__empty--img">
                            <h3 class="wrapper__empty--title">No Added Resource</h3>
                            <nuxt-link to="/admin/resources/create" class="btn wrapper__empty--btn">Add Resource</nuxt-link>
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
                title: 'Resources -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Resources',
                        content: 'Resources'
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
                let docs = await this.$axios.$get(`/resources?page=${this.page}&limit=${this.perPage}`)
                this.records = docs.records
                this.docs = docs.data;
            },

            deleteDoc(id){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {
                        this.$axios.$delete(`/resources/${id}`)
                        this.$toast.success("Resource deleted successfully", {
                            icon: "check"
                        })

                        location.reload();
                    }
                })
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
                padding: .5rem .65rem;
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
                    width: 4rem;
                }

                .btn{
                    color: white;
                    padding: .25rem .5rem;
                    box-shadow: none;
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

            &--btn{
                @include button();
                padding: .5rem .65rem;
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
                    padding: .75rem 2rem;
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