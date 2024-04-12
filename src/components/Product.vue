<template>
    <div class="container">
        <div class="all-products">
            <div class="product-container" v-for="product in products" :key="product.id">
                <div class="product">
                    <label for="" class="nombre-producto">{{product.name}}</label>
                    <!-- <img class="imagen-producto" :src="obtenerRutaImagen(product.name)" :alt="product.name"> -->
                    <img class="imagen-producto" src="../images/papitas.png" :alt="product.name">
                </div>
                <div class="pie-producto">
                    <label for="" class="pre">{{product.price}}</label>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg></button>
                    <button ><svg  xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg></button>
                    <button @click="updateProduct(product)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                        </svg>
                    </button>
                    <button @click="deleteProduct(product.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="container">
        <h1 class="title">Nuevo Producto</h1>
        <form class="form-group">
            <div>
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="nameProduct" required>
            </div>
            <div>
                <label for="price">Precio:</label>
                <input type="number" id="price" v-model.number="priceProduct" required>
            </div>
            <div>
                <label for="expiration">Fecha de Expiración:</label>
                <input type="date" id="expiration" v-model="expirationProduct">
            </div>
            <router-link to="/">
                <button type="submit" class="submit-btn" @click="create_product">Crear Producto</button>
            </router-link>
        </form>
        </div>
        <div class="container-options">
            <input type="checkbox" id="btn-mas">
            <div class="options">
                <a href="">
                    <router-link to="/new-product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                    </router-link>
                </a>
                <a href="">
                    <router-link to="/edit-product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                        </svg>
                    </router-link>
                </a>

                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </a>
            </div>
            <div class="btn-mas">
                <label for="btn-mas" class="icon-mas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Car from './Car.vue';
import { ref } from 'vue';
export default {
    name:'Product',
    props:{msg:String},
    components:{
        Car
    },
    data() {
        const nameProduct = ref('')
        const priceProduct = ref(0)
        const expirationProduct = ref('')
        return {
            products: [],
            cantidad,
            nameProduct,priceProduct,expirationProduct
        };
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        async getProducts() {
            try {
                const response = await axios.get('http://localhost:8000/products');
                this.products = response.data;
                console.log(this.products);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        },
        async create_product() {
            try {
                const newProduct = {
                    'id': '45',
                    'name':this.nameProduct,
                    'price':this.priceProduct,
                    'expiration':this.expirationProduct
                }
                const response = await axios.post(`http://localhost:8000/products/`,newProduct);
                this.products.push(response.data);
                this.getProducts()
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        },
        async createProduct() {
            try {
                const response = await axios.post('http://localhost:8000/products', this.newProduct);
                console.log('Producto creado:', response.data);
                // Puedes manejar la respuesta según sea necesario, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página
            } catch (error) {
                console.error('Error al crear producto:', error);
                // Puedes manejar el error mostrando un mensaje de error al usuario
            }
        },
        async updateProduct(product) {
            try {
                const response = await axios.put(`http://localhost:8000/products/${product.id}`, product);
                // Manejar la respuesta según sea necesario
                console.log('Producto actualizado:', response.data);
            } catch (error) {
                console.error('Error al actualizar producto:', error);
            }
        },
        async deleteProduct(productId) {
            try {
                const response = await axios.delete(`http://localhost:8000/products/${productId}`);
                // Eliminar el producto del estado local
                this.products = this.products.filter(product => product.id !== productId);
                console.log('Producto eliminado:', response.data);
            } catch (error) {
                console.error('Error al eliminar producto:', error);
            }
        },
        async addToCart(productId) {
            try {
                const response = await axios.get(`http://localhost:8000/products/${productId}`);
                if (response.status == 200) {
                    this.cantidad++;
                    const productoAgregado = this.products.find(producto => producto.id===productId)
                    this.productos.push(productoAgregado)
                    this.$emit('producto-agregado',productoAgregado)
                }
            } catch (error) {
                console.error('Error al agregar producto al carrito:', error);
            }
        },
        cargarProductos() {
            this.$emit('productos-cargados', this.productos);
        },
        obtenerRutaImagen(condicion) {
            console.log('Condición:', condicion);
            const rutaPapitas = '../images/papitas.png'
            const rutaJuguitos = '../images/juguito.png'
            const rutaGomitas = '../images/gomitas.png'
            if (condicion.toLowerCase() === 'papitas') {
                console.log('Ruta de imagen para papitas: ',rutaPapitas);
                return rutaPapitas;
            } else if (condicion.toLowerCase() === 'gomitas') {
                console.log('Ruta de imagen para gomitas',rutaGomitas);
                return rutaGomitas;
            } else if (condicion.toLowerCase() === 'juguitos') {
                console.log('Ruta de imagen para juguitos',rutaJuguitos);
                return rutaJuguitos;
            } else {
                console.log('No se encontró una ruta de imagen para:', condicion);
                return ''; // Devuelve una cadena vacía si no se encuentra ninguna coincidencia
            }
        }
    }
}
</script>
<style>
.container{
    margin-top: 35%;
    height: 100%;
}
.product{
    background-color: transparent;
    border-style: ridge;
    border-color: black;
    border-radius: 20px;
    width: 250px;
    height: 250px;
    margin: 80px 20px 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.all-products{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.pie-producto{
    background-color: #19A7FA;
    border-style: ridge;
    border-color: black;
    border-radius: 20px;
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}
.pie-producto label{
    font-size: 25px;
    margin: 0px 20px;
}
.pie-producto label, .pie-producto button{
    margin: 0px 20px;
}
.pie-producto button{
    background-color: transparent;
    border-style: none;
    margin: 0;
}
.pie-producto button:hover{
    cursor: pointer;
}
.product-conatiner{
    display: flex;
    justify-content: center;
    align-items: center;
}
.product {
    margin-bottom: auto; /* Esto empuja pie-producto al final */
}
.product img{
    width: 220px;
}
.product label{
    font-size: 25px;
}
/* -------------------------NAVBAR */

#------------------------------------------------------------

#btn-mas{
    display: none;
}
.container-options{
    position: relative;
    bottom: 20px;
    right: 20px;
}

.options a, .icon-mas{
    display: block;
    text-decoration: none;
    background-color: #19A7FA;
    color: white;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0px,1px,10px rgba(0, 0, 0, 0.4);
    transition: all 500ms ease;
}

.options a:hover{
    background: black;
    color: white;
}
.icon-mas:hover{
    background: black;
    color: white;
}
.options a{
    margin-bottom: -15px;
    opacity: 0;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
#btn-mas:checked~ .options a{
    margin-bottom: 10px;
    opacity: 1;
    visibility: visible;
}
.icon-mas{
    cursor: pointer;
    background: blue;
}
#btn-mas:checked ~ .options .icon-mas {
    transform: rotate(180deg);
}
</style>
