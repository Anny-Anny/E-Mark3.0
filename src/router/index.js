import Vue from 'vue'
import Router from 'vue-router'
// import  Home from "../components/Home.vue"
// import Graphic from "../components/Graphic.vue"
// import Mark from "../components/Mark.vue"
// import MarkAdd from "../components/MarkAdd.vue"
import olmap from "../components/olmap.vue"

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/', name: 'Home',component: olmap,
    }
  ]
  // routes: [
  //   { path: '/', name: 'Home',component: Home,
  //     // children:[
  //     //   {path:'/Graphic',component: Graphic},
  //     //   {path:'Mark',component: Mark},
  //     // ]
  //   },
  //    { path: '/MarkAdd', name: 'MarkAdd',component: MarkAdd},
  //   { path: '/Graphic', name: 'Graphic',component: Graphic},
  //   { path: '/Mark', name: 'Mark',component: Mark},
  // ]
})
