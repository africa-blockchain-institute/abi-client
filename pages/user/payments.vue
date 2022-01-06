<template>
    <div class="wrapper">
        <div class="head">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="head__title">Payments</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="payments bg-danger">
            <div class="container">
                <div class="col-12">
                    <div class="card shadow">
                        <div  class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col" class="text-nowrap">Course Title</th>
                                        <th scope="col" class="text-nowrap">Date</th>
                                        <th scope="col" class="text-nowrap">Amount Paid</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Blockchain Developer Course</td>
                                        <td>23/12/2021</td>
                                        <td>$210.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Enterprise Developer Course</td>
                                        <td>23/10/2021</td>
                                        <td>$320.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Blockchain Developer Course</td>
                                        <td>13/12/2021</td>
                                        <td>$70.00</td>
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
        layout: 'user',

        head(){
            return{
                title: 'Payments',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'payments'
                    }
                ],
            }
        },

        data(){
            return{
                payments: {},
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .head{
            margin: 2rem auto 2rem;

            &__title{
                font-size: $font-hd;
                font-weight: bold;
            }
        }

        .payments{
            margin-bottom: 1rem;

            .card{
                padding: 2rem 0;
            }
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {  }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {  
        .wrapper{
            .head{
                margin: 3rem auto 4rem;

                &__title{
                    font-size: $font-md;
                    font-weight: bold;
                }
            }

            .payments{
                margin-bottom: 3rem;
                .card{
                    padding: 2rem 3rem;
                }
            }
        }
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {  }
</style>