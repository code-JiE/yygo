import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'
const cart = () =>
    import ('views/cart/cart')
const login = () =>
    import ('views/login/login.vue')
const settle = () =>
    import ('components/settle/settle.vue')
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/app',
    component: () =>
        import ('@/App.vue')
}, {
    path: '/home',
    component: Home,
    meta: {
        title: '购物商场'
    }
}, {
    path: '/cart',
    component: cart,
    meta: {
        title: '购物商场'
    }

}, {
    path: '/login',
    component: login
}, {
    path: '/settle',
    component: settle
}, {
    path: '/orders',
    component: () =>
        import ('@/views/orders/order.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router