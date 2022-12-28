<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Messages</h1>
            <nuxt-link to="/admin/messages/create" class="btn wrapper__head--btn">Create Message</nuxt-link>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12" v-if="isEmptyObject(doc)">
                        <div class="table-responsive wrapper__table">
                            <table class="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">Message</th>
                                        <th scope="col">#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="wrapper__table--row" v-if="doc">
                                        <td>{{ doc.message }}</td>
                                        <td class="">
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
                            <h3 class="wrapper__empty--title">No Message</h3>
                            <nuxt-link to="/admin/messages/create" class="btn wrapper__empty--btn">Add Message</nuxt-link>
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
                title: 'Messages -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Messages',
                        content: 'Messages'
                    }
                ],
            }
        },

        data(){
            return {
                doc: {},
            }
        },

        created(){
            this.getDoc();
        },

        methods:{
            async getDoc(){
                try {
                    let doc = await this.$axios.$get(`/messages`);
                    this.doc = doc.data;
                } catch (err) {
                    if (err.response) {
                        this.doc = err.response.data;
                    }
                }
            },

            deleteDoc(){
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!'

                }).then((result) => {

                    if (result.value) {
                        this.$axios.$delete(`/messages`)
                        this.$toast.success("Message deleted successfully", {
                            icon: "check"
                        })

                        location.reload();
                    }
                })
            },

            isEmptyObject(obj){
                return JSON.stringify(obj) !== '{}'
            }
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