<template>
    <h1>Hola</h1>
    <table>
      <tr>
        <th>Identificador</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Fecha Expiracion</th>
      </tr>
      <tr v-for="product in productos" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.expiration }}</td>
      </tr>
    </table>
</template>

<script>
export default {
  props: ['productos'], // Propiedad para recibir los productos del padre
  mounted() {
    console.log('Productos recibidos:', this.productos);
  }
  // Resto del código del componente
};
</script>
