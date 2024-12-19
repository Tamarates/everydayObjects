<template>
  <MDBContainer class="d-flex align-items-center justify-content-center vh-100">
    <MDBRow class="justify-content-center">
      <MDBCol md="4">
        <h1 class="font-regular-white-38 text-end">
          Fuentes y bases de datos
        </h1>
      </MDBCol>
      <MDBCol md="6" class="font-extra-light-white-26">
        <p>1. <a href="https://2050-materials.com/" class="sources font-extra-light-white-26">2050 Materials</a></p>
        <p>2. <a href="https://overshoot.footprintnetwork.org/" class="sources font-extra-light-white-26">Earth Overshot Day home</a></p>
        <p>3. <a href="https://ecochain.com/e-books/" class="sources font-extra-light-white-26">Ecochain</a></p>
        <p>4. <a href="https://idematapp.com/" class="sources font-extra-light-white-26">Idemat</a></p>
        <p>5. <a href="https://www.matweb.com/index.aspx" class="sources font-extra-light-white-26">Matweb</a></p>
        <p>6. <a href="https://oec.world/en" class="sources font-extra-light-white-26">OEC.World</a></p>
        <p>7. <a href="https://nexus.openlca.org/databases" class="sources font-extra-light-white-26">Open LCA</a></p>
        <p>8. <a href="https://www.searates.com/es/carbon-emissions-calculator" class="sources font-extra-light-white-26">SeaRates by Dp World</a></p>
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
  text-decoration: underline;
}

.sources:hover {
  color: white !important;
  text-decoration: underline;
}
</style>
