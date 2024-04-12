<template>
    <div class="container">
      <h1 class="title">Nuevo Producto</h1>
      <form @submit.prevent="createProduct" class="form-group">
        <div>
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="newProduct.name" required>
        </div>
        <div>
            <label for="price">Precio:</label>
            <input type="number" id="price" v-model.number="newProduct.price" required>
        </div>
        <div>
            <label for="expiration">Fecha de Expiración:</label>
            <input type="date" id="expiration" v-model="newProduct.expiration">
        </div>
        <router-link to="/">
            <button type="submit" class="submit-btn">Crear Producto</button>
        </router-link>
      </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
data() {
    return {
    newProduct: {
        name: '',
        price: 0,
        expiration: ''
    }
    };
},
methods: {
    async createProduct() {
    try {
        const response = await axios.post('http://localhost:8000/products', this.newProduct);
        console.log('Producto creado:', response.data);
        // Puedes manejar la respuesta según sea necesario, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página
    } catch (error) {
        console.error('Error al crear producto:', error);
        // Puedes manejar el error mostrando un mensaje de error al usuario
    }
    }
}
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 30px;
}

.form-group div{
  margin-bottom: 50px;
}
.form-group div label {
  margin-bottom: 5px;
}

.form-group div input {
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}
input{
    border-radius: 10px;
    height: 50px;
    font-size: 30px;
}
.title {
  margin-bottom: 20px;
}
.submit-btn {
  width: 100%;
  max-width: 200px;
  height: 40px;
  border-radius: 10px;
  color: white;
  background-color: blue;
  font-size: 25px;
  display: block;
  margin: auto;
}
</style>
