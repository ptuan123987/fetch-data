import { createRouter, createWebHistory } from 'vue-router'
import ListUser from '../components/ListUser.vue'
import Contact from '../components/VueContact.vue'
import Service from '../views/VueService.vue'
const routes = [{
        path: '/:name',
        name: 'home',
        alias: '/tuan/:name',
        component: Contact,
        props: true
    },
    {
        path: '/about/',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: ListUser,
        beforeEnter: () => {
            //...
        },
        meta: { require: true }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        children: [{
                path: 'service',
                name: 'service',
                component: Service,
            }

        ],
        meta: { require: false, title: 'quan trọng' }

    },
    {
        path: '/:path',
        // component: Error404,

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

// router.beforeEach((to, from, next) => {
//     console.log(to);
//     // điểm tới
//     console.log(from);
//     // điểm đầu
//     next({ name: 'about' })
//      trang đich
// })

// router.beforeEach((to, from, next) => {
//     if (to.meta.require == true) {

//         next({ name: 'Login' })
//     }
// })

export default router