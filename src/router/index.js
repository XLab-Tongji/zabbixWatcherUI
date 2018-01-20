import Vue from 'vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/google/:mapId',
      name: 'google',
      components: {
        mainPage: Google
      }
    },
    {
      path: '/google/compare/:mapId',
      name: 'mapCompare',
      components: {
        mainPage: MapCompare
      }
    },
    {
      path:'/myMap',
      name:'myMap',
      components:{
        mainPage:MyMap
      }
    },
    {
      path:'/recycled',
      name:'recycled',
      components:{
        mainPage:Recycled
      }
    },
     {
      path: '/signup',
      name: 'signup',
      components:{
        login: Signup
      }
    },
    {
      path: '/login',
      name:'login',
      components: {
        login: Login
      }
    },
    {
      path: '/task',
      name: 'task',
      components: {
        mainPage: Task
      }
    },
    {
      path:'/displayMap',
      name:'displayMap',
      components:{
        mainPage:DisplayMap
      }
    },
    {
      path:'/userManagement',
      name:'userManagement',
      components:{
        mainPage:userManagement
      }
    },
    {
      path:'/commonMap',
      name:'commonMap',
      components:{
        mainPage: CommonMap
      }
    },
    {
      path:'/personalInfo',
      name:'personalInfo',
      components:{
        mainPage: PersonalInfo
      }
    },
    {
      path: '*',
      name: 'others',
      redirect: '/myMap'
    }
  ]
})

// router.beforeEach( (to, from, next) => {
//     console.log('beforeEach')
//     console.log(store)
//     console.log(store.getters.isLoggedIn)
//     console.log(store.state.session.userName)
//     let userName = store.state.session.userName
//     let isLoggedIn = store.getters.isLoggedIn
//     if(isLoggedIn) next()
//     else next('/index')
//   }
// )

export default router
