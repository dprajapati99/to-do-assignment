import { createRouter,createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld';
import user from './components/user';
import showdata from './components/showdata';



const routes=[
    {
        name:'HelloWorld',
        path:'/',
        components:HelloWorld
       },
    {
        name:'user',
        path:'/user',
        components:user
       },
    {
    name:'showdata',
    path:'/showdata',
    components:showdata
   }
  
];
const router =createRouter({
    history:createWebHistory(),
    routes
})
export default router;