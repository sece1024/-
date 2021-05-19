import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import menus from '@/config/menu-config'
import VueRouter from 'vue-router'


Vue.use(Router)
var sub_home = []
menus.forEach((item) => {
    item.sub.forEach((sub) => {
        sub_home.push({
            path: `/${sub.componentName}`,
            name: sub.componentName,
            component: () =>
                import(`@/components/${sub.componentName}`)
        })
    })
})
var routes = [{
    path: '/',
    redirect: '/login' //重定向
},
{
    path: '/login',
    component: () =>
        import('@/components/MyLogin')
},
{
    path: '/home',
    component: () =>
        import('@/components/Home'),
    // },
    // {
    //     redirect: '/home',
    children: sub_home
}
]

//[
// {
//     path: '/home',
//     component: () =>
//         import ('@/components/Home'),
// },
// {
//     path: '/BasicLayout',
//     component: () =>
//         import ('@/components/BasicLayout')
// },

//]
//},


//,
// {
//     path: '/home',
//     name: 'Home',
//     component: Home,
//     children: [{
//             path: '/home/success',
//             component: () =>
//                 import ('@/components/Success')
//         },
//         {
//             path: '/home/error',
//             component: () =>
//                 import ('@/components/Error')
//         }
//     ]
// }
//]







// menus.forEach((item) => {
//     item.sub.forEach((sub) => {
//         console.log(`@/components/${sub.componentName}`)
//     })
// });

// 懒加载
// menus.forEach((item) => {
//     item.sub.forEach((sub) => {
//         routes.push({
//             path: `/home/${sub.componentName}`,
//             name: sub.componentName,
//             component: () =>
//                 import (`@/components/${sub.componentName}`)
//         })
//     })
// });

export default new Router({ routes })
    // export default new Router({

//     routes: [{
//             path: '/',
//             name: 'HelloWorld',
//             component: HelloWorld
//         },
//         {
//             path: '/home',
//             name: 'Home',
//             component: Home
//         },
//         //懒加载
//         {
//             path: '/lazy',
//             name: 'Lazy',
//             // component: Lazy
//             // vue异步组件实现
//             // component: resolve => (require(["@/components/Lazy"], resolve))
//             // ES,在外部先 const Lazy = ()=>import(@/components/Lazy)
//             // 或者直接()=>
//             component: () =>
//                 import ("@/components/Lazy")
//         }
//     ]
// })