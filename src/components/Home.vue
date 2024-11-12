<template>
  <MDBContainer class="d-flex align-items-center justify-content-center vh-100">
    <MDBRow class="justify-content-center">
      <MDBCol md="2">
        <h1 class="font-regular-white-38 text-end">
          EL MUNDO DE LOS OBJETOS
        </h1>
      </MDBCol>
      <MDBCol md="6">
        <p class="font-regular-white-14">
          El 80 % del impacto de un objeto se encuentra determinado dentro de su fase de diseño.  Todos los objetos que diseñamos se encuentran contenidos en un mundo invisible, donde están fabricados a partir de diferentes materiales procedentes de diferentes fuentes a lo largo y ancho del planeta. En este espacio se busca darle visualización a este mundo normalmente invisible a ojos comunes, con el fin de comprender y concientizar del impacto que tienen los objetos de uso cotidiano en medio ambiente. 
        </p>
        <span class="font-regular-white-14"> 
          En esta plataforma web se busca simular la creación de un objeto procedente desde China el cual ha sido manufacturado en dicho país y enviado a cualquier parte de Chile, para así calcular cual es el impacto medioambiental que tiene dicho producto. Esto con el fin de comprender que las pequeñas decisiones de diseño afectan en gran medida al mundo que nos rodea.
        </span>
      </MDBCol>
      <MDBRow class="justify-content-center mt-5 ms-5 ps-">
      <MDBCol md="auto">
        <MDBBtn color="light" block @click="goToCreate">Ir a crear</MDBBtn>
      </MDBCol>
    </MDBRow>
    </MDBRow>
  </MDBContainer>
</template>

<script>

export default {
  name: 'HomeComponent',
  components: {},
  methods:{
     goToCreate() {
      this.$router.push("/create");
    }
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: center; /* Centra los elementos verticalmente */
  align-items: center; 
}

.text-center {
  text-align: center; /* Asegura que el texto esté centrado */
}

.ripple-surface{
  color: #3b71ca;
}
</style>
