<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      cart: []
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
        const response = await axios.post(`http://localhost:8000/${productId}`);
        if (response.status === 201) {
          this.fetchCart();
        }
      } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
      }
    },
    async removeFromCart(productId) {
      try {
        const response = await axios.delete(`http://localhost:8000/cart/${productId}`);
        if (response.status === 204) {
          this.fetchCart();
        }
      } catch (error) {
        console.error('Error al eliminar producto del carrito:', error);
      }
    },
    async fetchCart() {
      try {
        const response = await axios.get('http://localhost:8000/cart');
        this.cart = response.data;
      } catch (error) {
        console.error('Error al obtener carrito:', error);
      }
    },
    async clearCart() {
      try {
        const response = await axios.delete('http://localhost:8000/cart');
        if (response.status === 204) {
          this.cart = [];
        }
      } catch (error) {
        console.error('Error al vaciar carrito:', error);
      }
    }
  }
};
</script>

<template>
  <div id="app">
      <div v-if="cart.length === 0">
          <p>No hay productos en el carrito</p>
      </div>
      <div v-else>
          <p>Productos en el carrito:</p>
          <ul>
              <li v-for="product in cart" :key="product.id">
                  {{ product.name }} - {{ product.price | currency }} x {{ product.quantity }}
                  <button @click="removeFromCart(product.id)">Eliminar</button>
              </li>
          </ul>
          <button @click="clearCart">Vaciar Carrito</button>
      </div>

      <hr>

      <div>
          <p>Productos Disponibles:</p>
          <ul>
              <li v-for="product in products" :key="product.id">
                  {{ product.name }} - {{ product.price | currency }}
                  <button @click="addToCart(product.id)">Añadir al Carrito</button>
              </li>
          </ul>
      </div>
  </div>
</template>

<style scoped>
</style>
