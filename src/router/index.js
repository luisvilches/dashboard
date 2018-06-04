import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import axios from 'axios'
// pages
import Home from '@/pages/home'
import Login from '@/pages/login/login'
import Projects from '@/pages/projects/projects'
import NewProject from '@/pages/projects/new'
import FindProject from '@/pages/projects/find'
import ListProject from '@/pages/projects/list'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      children:[
        {
          path:'new',
          name:'New',
          component: NewProject
        },
        {
          path:'find',
          name:'Find',
          component: FindProject
        },
        {
          path:'list',
          name:'List',
          component: ListProject
        }
      ]
    }
  ]
})

function existToken() {
  if(window.localStorage.getItem('token') == null){
    return false;
  } else {
    return true;
  }
}

router.beforeEach((to,from,next) => {
  console.log(store)
  if(to.path === '/login'){
    next();
    store.commit('OFF');
  } else {
    if (existToken()) {
      store.commit('ON');
        next();
    } else {
        store.commit('OFF');
        next({name:'login'});
    }
  }
});




export default router;