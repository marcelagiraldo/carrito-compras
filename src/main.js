import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

//Componentes
import Car from './components/Car.vue'
import Product from './components/Product.vue'
import NewProduct from './components/NewProduct.vue'
import EditProduct from './components/EditProduct.vue'

const routes = [
    { path: '/edit-product', component: EditProduct, },
    { path: '/new-product', component: NewProduct, },
    { path: '/car', component: Car, },
    { path: '/', component: Product,},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
