<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <nuxt-link to="/user/courses" class="navbar-brand header__logo">
                    <img src="/logo.png" alt="Africa blockchain institute Logo">
                </nuxt-link>

                <div class="header__links justify-content-end">
                    <ul class="nav nav-tabs border-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="avatar">OA</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end shadow border-0" aria-labelledby="navbarDropdown">
                                <li><nuxt-link class="dropdown-item" to="/user/courses">My Courses</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/user/profile">Profile</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/user/payments">Payments</nuxt-link></li>
                                <li><a href="#" class="dropdown-item" @click="logout()">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div> 

            </div>
        </nav>

        <Nuxt />
        <Footer />
    </div>
</template>

<script>
    import Footer from '@/components/nav/Footer';
    import { mapGetters } from 'vuex';

    export default {
        middleware: ['user'],

        head: {
            title: 'ABI - User Dashboard',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'User Dashboard'
                }
            ],
        },

        data(){
            return {
                
            }
        },

        components: {
            Footer
        },

        computed:{
            ...mapGetters({
                user: 'loggedInUser'
            })
        },

        methods:{
            logout(){
                this.$auth.logout();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        &__logo{
            img{
                width: 9rem;
            }
        }

        &__toggler{
            border: none;
            box-shadow: none;
        }

        &__links{
            .nav-item{
                margin-bottom: .5rem;
                text-align: center;

                a{
                    font-size: .9rem;
                    font-weight: bold;

                    &.nuxt-link-exact-active{
                        color: $primary;
                    }
                }

                .btn{
                    @include button();
                    padding: .5rem 1rem;
                }

                &.dropdown{
                    .nav-link{
                        background: $primary;
                        border-radius: 50%;
                        padding: .6rem .6rem;
                        border: 1px solid white;

                        .avatar{
                            font-size: 1.2rem;
                            color: white;
                        }
                    }

                    .dropdown-menu{
                        z-index: 1030;
                    }

                    .dropdown-item {
                        margin-bottom: .5rem;
                    }
                }
            }
        }
    }

    @media (min-width: 992px) { 
        .header{
            &__logo{
                img{
                    width: 10rem;
                }
            }

            &__links{
                margin-bottom: 0;

                .nav-item{
                    margin-right: 1rem;
                    margin-bottom: 0;

                    &:last-child{
                        margin-right: 0;
                    }

                    a{
                        font-size: .9rem;
                    }
                }
            }
        }
    }
</style>