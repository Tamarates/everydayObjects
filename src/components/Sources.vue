<template>
  <MDBContainer class="d-flex align-items-center justify-content-center vh-100">
    <MDBRow class="justify-content-center">
      <MDBCol md="4">
        <h1 class="font-regular-white-38 text-end">
          Fuentes y bases de datos
        </h1>
      </MDBCol>
      <MDBCol md="6">
        <p class="text-white text-size">1. <a href="https://2050-materials.com/" class="sources">2050 Materials</a></p>
        <p class="text-white text-size">2. <a href="https://overshoot.footprintnetwork.org/" class="sources">Earth Overshot Day home</a></p>
        <p class="text-white text-size">3. <a href="https://ecochain.com/e-books/" class="sources">Ecochain</a></p>
        <p class="text-white text-size">4. <a href="https://idematapp.com/" class="sources">Idemat</a></p>
        <p class="text-white text-size">5. <a href="https://www.matweb.com/index.aspx" class="sources">Matweb</a></p>
        <p class="text-white text-size">6. <a href="https://oec.world/en" class="sources">OEC.World</a></p>
        <p class="text-white text-size">7. <a href="https://nexus.openlca.org/databases" class="sources">Open LCA</a></p>
        <p class="text-white text-size">8. <a href="https://www.searates.com/es/carbon-emissions-calculator" class="sources">SeaRates by Dp World</a></p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
export default {
  name: 'SourcesComponent',
};
</script>

<style scoped>
.sources {
  color: white;
  text-decoration: underline;
  font-size: 20px;
}

.sources:hover {
  color: white;
  text-decoration: underline;
  font-size: 20px;
}

.text-size{
  font-size: 20px;
}
</style>
