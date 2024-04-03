<script setup>
import ProductList from "./components/ProductList.vue";
import Product from "./components/Product.vue";
import Navbar from "./components/Navbar.vue"

</script>

<template>
  <!-- <header>
    <h1>Carrito de Compras</h1>
  </header> -->
  <div id="app" class="container">
    <!-- <header>
      <Navbar/>
    </header> -->
    <main>
      <Product/>
    </main>
  </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra los elementos horizontalmente */
    justify-content: center; /* Centra los elementos verticalmente */
}
header{
  width: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
main{
  width: 100%;
  margin: 50px;
}
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
