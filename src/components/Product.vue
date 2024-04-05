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
                <img :src="obtenerRutaImagen(product.name)" alt="">
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
    <div class="container-options">
        <input type="checkbox" id="btn-mas">
        <div class="options">
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
            </a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                </svg>
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
        obtenerRutaImagen(condicion) {
        // Lógica para determinar la ruta de la imagen
        if (condicion == 'Papitas') {
            return '../images/papitas.png';
        } else if (condicion == 'Gomitas') {
            return '../images/Gomitas.png';
        } else if(condicion == 'Juguitos'){
            return '../images/Juguitos.png';
        }else {
            return ''; // Ruta por defecto si no se cumple ninguna condición
        }
        }
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
.nav-bar{
    background-color: blue;
    height: 90px;
    display: flex;
    align-items: center;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 35px;
    width: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    margin: 0px;
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
    border-style: none;
    font-size: 50px;
    color: red;
}


#btn-mas{
    display: none;
}
.container-options{
    position: fixed;
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
#btn-mas:checked ~ .btn-mas .icon-mas{
    transform: rotate(180deg);
}
#btn-mas:checked ~ .btn-mas .icon-mas {
    transform: rotate(180deg);
}
</style>
