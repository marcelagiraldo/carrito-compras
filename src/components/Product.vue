<template>
    <div class="nav-bar">
        <h1 class="titulo-pagina">Tu Carrito</h1>
        <svg  xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg>
        <input type="" id="cantidad" v-model.number="cantidad">
    </div>
    <div class="all-products">
        <div class="product-container" v-for="product in products" :key="product.id">
            <div class="product">
                <label for="" class="nombre-producto">{{product.name}}</label>
                <img src="../images/gomitas.png" alt="">
            </div>
            <div class="pie-producto">
                <label for="" class="pre">{{product.price}}</label>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg></button>
                <button @click="addToCart(product.id)"><svg  xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                </svg></button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
export default {
    data() {
        const cantidad = ref(0)
        return {
            products: [],
            cantidad
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
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        },
        async addToCart(productId) {
            try {
                const response = await axios.get(`http://localhost:8000/products/${productId}`);
                if (response.status == 200) {
                    this.cantidad++;
                }
            } catch (error) {
                console.error('Error al agregar producto al carrito:', error);
            }
        },
    }
}
</script>
<style>
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



.nav-bar{
    background-color: blue;
    height: 90px;
    display: flex;
    align-items: center;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 35px;
}
.titulo-pagina{
    margin: 50px;
    margin-right: 60%;
}
.nav-bar svg{
    margin-left: 3%;
}
#cantidad{
    width: 45px;
    height: 45px;
    border-radius: 40px;
    background-color: transparent;
    border-style: dashed;
    border-color: aliceblue;
}
</style>
