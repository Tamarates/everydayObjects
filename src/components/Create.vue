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
                    <select class="custom-select">
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
                  <img class="pencil" src="/src/utils/assets/images/lapiz.png" alt="Imagen de lápiz" />
                </MDBCol>
                <MDBCol col="6">
                  <div class="material-container">
                    <h5 class="material-title mb-4">Materiales</h5>
                    <MDBRow v-for="(label, index) in materialKey" :key="index" class="mb-3 align-items-center">
                      <MDBCol class="text-right mb-3" :class="index === materialKey.length - 1 ? 'col-8 mt-5' : '4'">
                        <label :for="'material' + index" :class="index === materialKey.length - 1 ? 'font-thin-white-14' : ''">
                          {{ label }}
                        </label>
                      </MDBCol>
                      <MDBCol class="mb-3" :class="index === materialKey.length - 1 ? 'col-3 mt-5' : '8'">
                        <select :id="'material' + index" class="custom-select" :value="index === materialKey.length - 1 ? '1' : ''">
                          <option v-if="index !== materialKey.length - 1" value="" disabled selected>Seleccionar</option>
                          <option v-if="index === materialKey.length - 1" v-for="num in 10" :key="num" :value="num">
                            {{ num }}
                          </option>
                          <option v-else v-for="(option, idx) in options" :key="idx" :value="option.value">
                            {{ option.label }}
                          </option>
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
                    <select class="custom-select">
                      <option value="" disabled selected>Seleccionar</option>
                      <option v-for="(option, index) in options" :key="index" :value="option.value">
                        {{ option.label }}
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
                <h5 class="material-title ">IMPACTO</h5>
                <span class="font-thin-white-14 text-center" >per kg de producto</span>
              </div>
              <MDBRow class="mt-4 ">
                <MDBCol col="6" class="d-flex justify-content-center align-items-center">
                  <img class="pencil" src="/src/utils/assets/images/lapiz.png" alt="Imagen de lápiz" />
                </MDBCol>
                <MDBCol col="6">
                  <div>
                    <h5 class="material-title text-start">Producción</h5>
                    <MDBRow v-for="(label, index) in production" :key="index" class="mb-3 ">
                      <MDBCol class="d-flex justify-content-start">
                        <label :for="'production' + index" class="font-thin-white-14">{{ label }}</label>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div>
                    <h5 class="material-title text-start">Envios</h5>
                    <MDBRow v-for="(label, index) in envios" :key="index" class="mb-3 ">
                      <MDBCol class="d-flex justify-content-start">
                        <label :for="'envios' + index" class="font-thin-white-14">{{ label }}</label>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div>
                    <h5 class="material-title text-start">Total</h5>
                    <MDBRow v-for="(label, index) in total" :key="index" class="mb-3 ">
                      <MDBCol class="d-flex justify-content-start">
                        <label :for="'total' + index" class="font-thin-white-14">{{ label }}</label>
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
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
      ],
      materialKey: ['Cuerpo', 'Detalles 1', 'Detalles 2', 'Detalles 3', 'Cantidad de objetos a crear'],
      production: ['Co2e', 'Huella Hidrica', 'Diesel'],
      envios: ['Co2e', 'Diesel'],
      total: ['Co2e', 'Huella Hidrica', 'Diesel'],
      created: false,
    };
  },
  methods: {
    goToCreate() {
      this.created = true;
    },
    goToBack(){
      this.created = false;
    }
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

