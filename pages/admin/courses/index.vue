<template>
    <div class="wrapper">
        <div class="wrapper__head">
            <h1 class="wrapper__head--title">Courses</h1>
        </div>

        <div class="wrapper__body shadow">
            <div class="container"> 
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-hover align-middle">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Blockchain Essentials Cerification</td>
                                        <td>Get a thorough understanding of how the Blockchain..</td>
                                        <td>$200</td>
                                        <td>
                                            <button class="btn">
                                                <span class="fas fa-edit"></span>
                                            </button>
                                            <button class="btn">
                                                <span class="fas fa-trash"></span>
                                            </button>
                                        </td>
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
                title: 'Courses -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Courses',
                        content: 'Courses'
                    }
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        &__head{
            margin: 2rem auto 3rem;
            
            &--title{
                font-weight: bold;
                font-size: $font-md;
            }
        }

        &__body{
            padding: 3rem 2rem;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>