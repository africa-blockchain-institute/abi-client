<template>
    <div class="wrapper">
        <div class="body">
            <nav class="sidebar" :class="{ active: toggle }">
                <nuxt-link to="/" class="sidebar__logo">
                    <img src="/logo_1.png" alt="ABI Logo" class="sidebar__logo--img" v-if="!toggle">
                    <img src="/favicon.png" alt="ABI Logo" class="sidebar__logo--img-2" v-else>
                </nuxt-link>

                <div class="list-group sidebar__list">
                    <nuxt-link to="/admin/courses" class="list-group-item list-group-item-action sidebar__list--link" aria-current="true" nuxt-link-active exact>
                        <span class="fas fa-user-graduate icon"></span>
                        <span class="name" :class="{ active: toggle }">Courses</span>
                    </nuxt-link>
                    <nuxt-link to="/admin/resources" class="list-group-item list-group-item-action sidebar__list--link" aria-current="true" nuxt-link-active>
                        <span class="fas fa-book icon"></span>
                        <span class="name" :class="{ active: toggle }">Resources</span>
                    </nuxt-link>
                    <nuxt-link to="/admin/users" class="list-group-item list-group-item-action sidebar__list--link" aria-current="true" nuxt-link-active exact>
                        <span class="fas fa-users icon"></span>
                        <span class="name" :class="{ active: toggle }">Users</span>
                    </nuxt-link>

                </div>
            </nav>

            <div class="content" :class="{ active: toggle }">
                <nav class="content__toggler shadow-sm">
                    <button type="button" id="sidebarCollapse" class="btn content__toggler--btn" @click="toggle = !toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </nav>

                <div class="container-fluid content__body">
                    <div class="row">
                        <div class="col-12">
                            <Nuxt />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <Footer /> -->
    </div>
</template>

<script>
    import Footer from '@/components/nav/Footer';

    export default {
        head: {
            title: 'User Dashboard - Africa Blockchain Institute',
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
                toggle: false,
            }
        },
        
        components: {
            Footer
        },

        mounted(){
            
        },

        methods:{
            toggleSidebar(){
                // const sd = document.getElementById("sidebar");
                // sd.classList.toggle("active");
                
                // const ct = document.getElementById("main");
                // ct.classList.toggle("active");
            },

            logout(){

            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        .body{
            display: flex;
            width: 100%;

            .sidebar {
                width: 250px;
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                z-index: 999;
                background: $secondary-2;
                color: #fff;
                transition: all .3s;

                &.active {
                    min-width: 80px;
                    max-width: 80px;
                    text-align: center;
                    background: $secondary-2;
                }

                &__logo{
                    display: block;
                    padding: 1rem;
                    text-align: center;
                    margin-bottom: 2rem;

                    &--img{
                        width: 9rem;
                    }

                    &--img-2{
                        width: 3rem;
                    }
                }

                &__ul{
                    padding-left: 0;
                }

                &__list{
                    border: none;
                    border-radius: 0;
            
                    &--link{
                        font-weight: bold;
                        background: transparent;
                        color: #fff;
                        padding: .75rem 1rem;
                        border-right: .3rem solid transparent;
                        transition: all .2s;
                        margin-bottom: .5rem;
                        
                        &:hover{
                            background-color: $white;
                            color: $dark;
                        }

                        &.nuxt-link-exact-active, &.nuxt-link-active{
                            background-color: $white;
                            color: $dark;
                            border-right: .3rem solid $secondary;
                        }
                        
                        .icon{
                            display: inline-block;
                            color: $secondary;
                        }

                        .name{
                            margin-left: 1rem;

                            &.active{
                                display: none;
                            }
                        }
                    }
                }
            }

            .content{
                width: calc(100% - 250px);
                min-height: 100vh;
                transition: all 0.3s;
                position: absolute;
                top: 0;
                right: 0;

                &.active{
                    width: calc(100% - 80px);
                }

                &__toggler{
                    padding: .75rem 2rem;
                    position: fixed;
                    width: 100%;
                    
                    &--btn{
                        box-shadow: none;
                        background: $secondary;
                        color: #fff;
                        font-size: 1rem;
                        padding: .35rem 1rem;
                    }
                }

                &__body{
                    padding: 5rem 2rem 3rem;
                }
            }
        }
    }
    
    @media (max-width: 992px) { 
        .wrapper{
            .body{
                .sidebar {
                    
                }

                .content{
                    &__body{
                        padding: 5rem 1rem 3rem;
                    }
                }
            }
        }

    }
</style>