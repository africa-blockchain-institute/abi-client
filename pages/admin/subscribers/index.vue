<template>
    <div class="wrapper">
        <div class="wrapper__head d-flex justify-content-between">
            <h1 class="wrapper__head--title">Subscribers</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive wrapper__table">
                            <table class="table align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Subscribed</th>
                                        <th scope="col">Joined On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="wrapper__table--row" v-for="(doc, index) in docs" :key="doc.id">
                                        <th>{{ index + 1 }}</th>
                                        <td>{{ doc.full_name }} </td>
                                        <td>{{ doc.email_address }} </td>
                                        <td>{{ doc.subscribed }} </td>
                                        <td>{{ doc.timestamp_opt | formatDate }} </td>
                                    </tr>
                                </tbody>
                            </table>
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
                title: 'Subscribers - Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Subscribers',
                        content: 'Subscribers'
                    }
                ],
            }
        },

        data(){
            return {
                docs: [],
            }
        },

        created(){
            this.getDocs();
        },

        methods:{
            async getDocs(){
                let docs = await this.$axios.$get(`/subscribers/get-subscribers`)
                this.docs = docs.data.members;
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