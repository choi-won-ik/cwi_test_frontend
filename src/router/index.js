import { createWebHistory, createRouter } from 'vue-router'


import list from '../page/list.vue'
import details from '../page/details.vue'
import regist from '../page/regist.vue'



const routes = [
  { path: '/', 
    name: "list",
    component: list,
   },         // 처음 페이지
  { path: '/details/:idx', 
    name: 'details',
    component: details,
  },
  { path: '/regist', 
    name: 'regist',
    component: regist,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;