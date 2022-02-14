import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloWorld'
import User from './components/user'
import showdata from './components/showdata'
 import update from './components/update'
// import Edit from './components/Edit'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/showdata',
        name: 'showdata',
        component: showdata
    },
    {
        path: '/update/:id',
        name: 'Update',
        component:update
    },
    // {
    //     path: '/Edit/:id',
    //     name: 'edit',
    //     component:Edit
    // },
  
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router