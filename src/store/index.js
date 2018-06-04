import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
Vue.use(Vuex)

const state = {
    name:'Luis 10989',
    navbar: true
}

const getters = {
    user: state => state.user,
    token: state => state.token
}

const mutations = {
    ON(state){
        state.navbar = true;
    },

    OFF(state){
        state.navbar = false;
    },

    async LOGIN(state,obj){
        const form = new FormData();
        form.append('mail', obj.mail);
        form.append('password', obj.password);
        const { data } = await axios('/login',{
            method:'post',
            data: form
        })

        console.log('data =>',data)
        if(data.success){
            window.localStorage.setItem('token',data.token);
            window.localStorage.setItem('user',JSON.stringify(data.user));
            router.push('/');
        }
    }
}

export default new Vuex.Store({
    state,mutations
})