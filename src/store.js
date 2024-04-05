// store.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    cantidadRecibida: 0,
  },
  mutations: {
    incrementarCantidad(state) {
      state.cantidadRecibida++;
    },
  },
});
