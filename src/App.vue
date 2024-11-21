<template id="app">
  <MDBContainer fluid class="background">
    <Navbar></Navbar>
    <router-view></router-view>
  </MDBContainer>
</template>

<script>
import Navbar from './utils/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style scoped>
/* Asegura que html y body ocupen el 100% de la altura */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* El contenedor principal ocupa al menos el 100% del viewport */
}

/* Fondo ocupa el espacio disponible y crece con el contenido */
.background {
  background-image: url('/src/utils/assets/images/background.svg'); /* Ajusta la ruta si es necesario */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Asegura que el fondo llene el viewport y crezca según el contenido */
  padding: 0
}
</style>
