<template>
    <div class="carrito">
      <h2>Productos en el carrito</h2>
      <ul>
        <li v-for="producto in productos" :key="producto.id">
          {{ producto.name }} - {{ producto.price }}
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    props: {
      productos: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style>
  /* Estilos para el componente del carrito */
</style>
