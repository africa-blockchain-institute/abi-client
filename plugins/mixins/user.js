import Vue from 'vue';
import { mapGetters } from 'vuex'

const User = {
    install(Vue, options){
        Vue.mixin({
            computed: {
                ...mapGetters([
                    "loggedInUser",
                    "isAuthenticated",
                ])
            }
        })
    }
}

Vue.use(User)