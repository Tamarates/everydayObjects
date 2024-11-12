<template>
  <MDBContainer fluid>
    <MDBRow>
      <div class="map-container">
        <div class="map"></div>
        <MDBCard class="overlay-card background-blue">
          <div v-if="!created">
            <MDBCardBody>
              <h5 class="card-title">Crear un objeto</h5>
              <MDBRow>
                <MDBCol col="3">
                  <label>Elige un objeto</label>
                </MDBCol>
                <MDBCol col="4">
                  <div class="custom-select-container">
                    <select class="custom-select" v-model="selectedOption" @change="updateMaterialLists">
                      <option value="" disabled selected>Seleccionar</option>
                      <option v-for="(option, index) in options" :key="index" :value="option.value">
                        {{ option.label }}
                      </option>
                    </select>
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow class="mt-5 pt-4">
                <MDBCol col="6" class="d-flex justify-content-center align-items-center">
                  <img class="pencil" src="/src/utils/assets/images/lapiz.png" />
                </MDBCol>
                <MDBCol col="6">
                  <div class="material-container">
                    <h5 class="material-title mb-4">Materiales</h5>

                    <!-- Mostrar materiales solo si hay materialKey disponible -->
                    <MDBRow v-for="(label, index) in materialKey" :key="index" class="mb-3 align-items-center">
                      <MDBCol col="4" class="text-right mb-3">
                        <label>
                          {{ label }}
                        </label>
                      </MDBCol>
                      <MDBCol col="7" class="mb-3">
                        <!-- Selección de materiales basada en materialLists, solo si selectedOption es válido -->
                        <select :id="'material' + index" class="custom-select" v-model="selectedMaterials[index]">
                          <option v-if="selectedOption && materialLists[selectedOption]" 
                                  v-for="(material, idx) in materialLists[selectedOption][index]" 
                                  :key="idx" 
                                  :value="material.value">
                            {{ material.label }}
                          </option>
                          <!-- Mostrar un mensaje si no hay materiales disponibles -->
                          <option v-else disabled>No hay materiales disponibles</option>
                        </select>
                      </MDBCol>
                    </MDBRow>

                    <!-- Select numérico para la cantidad de objetos a crear -->
                    <MDBRow class="mb-3 align-items-center">
                      <MDBCol class="text-right mb-3 col-8">
                        <label for="cantidad" class="font-thin-white-14">Cantidad de objetos a crear</label>
                      </MDBCol>
                      <MDBCol class="mb-3 col-3">
                        <select id="cantidad" class="custom-select" v-model="cantidad">
                          <option v-for="n in 100" :key="n" :value="n">{{ n }}</option>
                        </select>
                      </MDBCol>
                    </MDBRow>

                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow class="mt-3">
                <MDBCol col="5" class="text-end">
                  <label class="font-regular-white-14">Elige un lugar de destino</label>
                </MDBCol>
                <MDBCol col="6">
                  <div class="custom-select-container">
                    <select class="custom-select" v-model="citySelected">
                      <option value="" disabled selected>Seleccionar</option>
                      <option v-for="(city, index) in citiesList" :key="index" :value="city.value">
                        {{ city.label }}
                      </option>
                    </select>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            <MDBCardFooter class="mb-4 d-flex justify-content-center">
              <MDBCol col="4">
                <MDBBtn color="light" block @click="goToCreate">Ir a crear</MDBBtn>
              </MDBCol>
            </MDBCardFooter>
          </div>

          <div v-else>
            <MDBCardBody>
              <h5 class="card-title mt-3">Crear un objeto</h5>
              <MDBBtn color="transparent" class="d-flex align-items-center btn-hidden" @click="goToBack">
                <img class="arrow me-2" src="../utils/assets/icons/left-arrow.png" alt="Arrow" />
                <label class="font-thin-white-14 pt-1">Volver</label>
              </MDBBtn>
              <div class="material-container text-center">
                <h5 class="material-title">IMPACTO</h5>
                <span class="font-thin-white-14 text-center">por kg de producto</span>
              </div>
              <MDBRow class="mt-4">
                <MDBCol col="6" class="d-flex justify-content-center align-items-center">
                  <img class="pencil" src="/src/utils/assets/images/lapiz.png" alt="Imagen de lápiz" />
                </MDBCol>
                <MDBCol col="6">
                  <div>
                    <h5 class="material-title text-start">Producción</h5>
                    <!-- <MDBRow v-for="(label, index) in production" :key="index" class="mb-3"> -->
                      <MDBRow>
                        <MDBCol col="12" class="d-flex justify-content-start mb-3">
                          <!-- <label :for="'production' + index" class="font-thin-white-14">{{ label }}</label> -->
                          <label class="font-thin-white-14" for="">Huella de Carbono 6.789 Kg</label>
                        </MDBCol>
                        <MDBCol col="12">
                          <label class="font-thin-white-14 mb-3" for="">Huella Hídrica 111.254 Lt</label>
                        </MDBCol>
                        <MDBCol  col="12">
                          <label class="font-thin-white-14 mb-3">Diesel 1.046 Lt</label>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  <div>
                    <h5 class="material-title text-start">Envios</h5>
                    <!-- <MDBRow v-for="(label, index) in envios" :key="index" class="mb-3"> -->
                      <MDBRow >  
                        <MDBCol class="d-flex justify-content-start font-thin-white-14 mb-3">
                        <!-- <label :for="'total' + index" class="font-thin-white-14">{{ label }}</label> -->
                         Co2 0.075 Kg
                      </MDBCol>
                      <MDBCol  col="12">
                        <label class="font-thin-white-14 mb-3">Diesel 0.028 Lt</label>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div>
                    <h5 class="material-title text-start">Total</h5>
                    <!-- <MDBRow v-for="(label, index) in total" :key="index" class="mb-3"> -->
                    <MDBRow>
                      <MDBCol class="d-flex justify-content-start font-thin-white-14 mb-3">
                        <!-- <label :for="'total' + index" class="font-thin-white-14">{{ label }}</label> -->
                         Co2 6.864 Kg
                      </MDBCol>
                      <MDBCol  col="12">
                        <label class="font-thin-white-14 mb-3">Diesel 1.074 Lt</label>
                      </MDBCol>
                      <MDBCol  col="12">
                        <label class="font-thin-white-14 mb-3">Huella Hídrica 111.254 Lt</label>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </div>
        </MDBCard>
      </div>
    </MDBRow>
  </MDBContainer>
</template>

<script>
export default {
  name: 'CreateComponent',
  data() {
    return {
      options: [
        { value: 'lapiz', label: 'Lápiz' },
        { value: 'bicicleta', label: 'Bicicleta' },
        { value: 'audifono', label: 'Audífono' },
      ],
      selectedOption: null,
      selectedMaterials: [],
      materialKey: ['Cuerpo', 'Detalles 1', 'Detalles 2', 'Detalles 3'],
      materialLists: {
        lapiz: [
          [{ label: 'Pvc', value: 'pvc' }, { label: 'Acero inoxidable', value: 'AI' }, { label: 'Polipropileno', value: 'poli' }, { label: 'Aluminio', value: 'AI' }, { label: 'Madera', value: 'AI' }],
          [{ label: 'Tinta', value: 'tinta' }, { label: 'Grafito', value: 'grafito' },  { label: 'Arcilla', value: 'arcilla' }],
          [{ label: 'Caucho', value: 'caucho' }, { label: 'Silicona', value: 'silicona' }],
          ,

        ],
        bicicleta: [
          [{ label: 'Acero', value: 'acero' }, { label: 'Aluminio', value: 'aluminio' }, { label: 'Fibra de carbono', value: 'FC' }, { label: 'Titanio', value: 'Titanio' }],
          [{ label: 'Nylon', value: 'nylon' }, { label: 'Aluminio', value: 'aluminio' }, { label: 'Acero', value: 'acero' }],
          [{ label: 'Caucho', value: 'caucho' }, { label: 'Gomas', value: 'gomas' }],
          [],
        ],
        audifono: [
          [{ label: 'Aluminio', value: 'aluminio' }, { label: 'Cobre', value: 'cobre' },{ label: 'ABS', value: 'abs' }],
          [{ label: 'Espuma', value: 'espuma' }, { label: 'Cuero sintético', value: 'cs' }, { label: 'Goma (Latex) ', value: 'goma' }],
            ],
      },
      citySelected: '',
      citiesList: [
      { value: 'santiago', label: 'Santiago' },
      { value: 'valparaiso', label: 'Valparaíso' },
      { value: 'concepcion', label: 'Concepción' },
      { value: 'la_serena', label: 'La Serena' },
      { value: 'antofagasta', label: 'Antofagasta' },
      { value: 'temuco', label: 'Temuco' },
      { value: 'iquique', label: 'Iquique' },
      { value: 'puerto_montt', label: 'Puerto Montt' },
      { value: 'rancagua', label: 'Rancagua' },
      { value: 'arica', label: 'Arica' },
      { value: 'talca', label: 'Talca' },
      { value: 'punta_arenas', label: 'Punta Arenas' }
    ],
      created: false,
    };
  },
  methods: {
    updateMaterialLists() {
      // Actualiza las opciones de materiales solo si una opción es seleccionada
      if (this.selectedOption) {
        this.selectedMaterials = new Array(this.materialKey.length).fill(null);
      }
    },
    goToCreate() {
      this.created = true;
    },
    goToBack() {
      this.created = false;
    },
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
}

.map {
  background-image: url('/src/utils/assets/images/maps.png');
  background-size: cover;
  width: 100%;
  height: 666px;
  margin-top: 40px;
}

.overlay-card {
  position: absolute;
  top: 53%;
  right: 20px;
  transform: translateY(-50%);
  width: 40%;
  height: 88%;
}

.background-blue {
  background-color: #5369F5;
  color: white;
}

.custom-select-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.custom-select {
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #94A2FF;
  font-size: 16px;
  width: 100%;
  transition: border 0.3s ease-in-out;
  color: #EFEFEF;
}

.custom-select:focus {
  outline: none;
  border-color: #007bff;
}

option:disabled {
  color: #EFEFEF !important;
}

.pencil {
  width: 265px;
  height: auto;
}

.material-container {
  display: flex;
  flex-direction: column;
}

.material-title {
  margin-bottom: 10px;
}

.arrow {
  width: 20px;
}

.btn-hidden {
  background-color: transparent;
}

.btn:hover,
.btn {
  box-shadow: none;
  text-transform: inherit;
}
</style>

