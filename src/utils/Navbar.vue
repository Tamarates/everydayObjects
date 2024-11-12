<template>
  <MDBNavbar light bg="light" expand="lg">
    <MDBNavbarToggler
      target="#navbarNav"
      @click="collapse2 = !collapse2"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarNav" v-model="collapse2">
      <div class="ms-5">
        <img class="logo" src="../utils/assets/images/logo.svg" alt="logo">
      </div>
      <MDBNavbarNav class="mx-auto d-flex justify-content-center">
        <router-link to="/home" class="me-5">
          <MDBNavbarItem class="font-regular-18">
            Inicio
          </MDBNavbarItem>
        </router-link>
        <router-link to="/create" class="mx-5">
          <MDBNavbarItem class="font-regular-18">
            Crear
          </MDBNavbarItem>
        </router-link>
        <router-link to="/sources" class="mx-5">
          <MDBNavbarItem class="font-regular-18">
            Fuentes
          </MDBNavbarItem>
        </router-link>
        <router-link to="/upload-objects" class="mx-5">
          <MDBNavbarItem class="font-regular-18">
            Sube tu objeto
          </MDBNavbarItem>
        </router-link>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>


<script>
import { ref } from 'vue';

export default {
  name: 'Navbar',
  components: {

  },
  
  setup() {
    const collapse2 = ref(false);
    
    return {
      collapse2,
    };
  }
};
</script>

<style scoped>
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
    height: 80px;
  }

  .logo{
    height: 65px !important;
    width: 65px !important;
  }

  .router-link-active .font-regular-18 {
    text-decoration: underline;
    text-decoration-color: #3b71ca;
    color: #3b71ca;
  }

</style>
