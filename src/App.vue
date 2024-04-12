<script>

</script>

<template>
  <div id="app" class="container">
    <header>
      <div class="nav-bar">
          <h1 class="titulo-pagina">Tu Carrito</h1>
          <router-link to="/car">
              <svg  xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                  <path color="white" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
              </svg>
          </router-link>
          <input type="" id="cantidad" >
      </div>
    </header>
    <main>
      <router-view></router-view>
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
  margin: 70px;
}
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
    margin: 60px;
    margin-right: 65%;
}
#cantidad{
    width: 45px;
    height: 45px;
    border-radius: 40px;
    background-color: transparent;
    border-style: none;
    font-size: 40px;
    color: red;
}
.carrito-compras{
    background: none;
    border: none;
}
</style>
