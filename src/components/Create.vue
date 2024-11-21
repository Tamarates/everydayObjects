<template>
  <MDBContainer fluid>
    <MDBRow>
      <div class="map-container">
        <div class="map"></div>
        <MDBCard class="overlay-card background-blue">
          <div v-if="!created">
            <MDBCardBody>
              <h5 class="card-title font-light-white-18">Crear un objeto</h5>
              <MDBRow>
                <MDBCol col="3">
                  <label class="font-extra-light-white-16">Elige un objeto</label>
                </MDBCol>
                <MDBCol col="4">
                  <div class="custom-select-container">
                    <select id="body_material" class="custom-select" v-model="selectedMaterials[index]"
                      @change="updateMaterialLists(selectedMaterials[index], $event)">
                      <option v-for="option in options" :key="option.id" :value="option.id">
                        {{ option.item }}
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
                    <h5 class="material-title mb-4 font-light-white-18">Materiales</h5>
                    <MDBRow v-for="(key, index) in materialKey" :key="index" class="mb-3 align-items-center ">
                      <MDBCol col="4" class="text-right mb-3 font-extra-light-white-15">
                        <label>
                          {{ key.label }}
                        </label>
                      </MDBCol>
                      <MDBCol col="7" class="mb-3">
                        <select :id="'material' + index" class="custom-select" v-model="selectedMaterials[index]"
                          @change="updateMaterialLists(index)">
                          <option v-if="materialLists[key.id] && materialLists[key.id][index]"
                            v-for="(material, idx) in materialLists[key.id][index]" :key="idx" :value="material.value">
                            {{ material.label }}
                          </option>
                          <option v-else disabled>No hay materiales disponibles</option>
                        </select>
                      </MDBCol>
                    </MDBRow>
                    <!-- Select numérico para la cantidad de objetos a crear -->
                    <MDBRow class="mb-3 align-items-center">
                      <MDBCol class="text-right mb-3 col-8">
                        <label for="cantidad" class="font-extra-light-white-12">Cantidad de objetos a crear</label>
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
                <MDBCol col="5" class="text-start">
                  <label class="font-extra-light-white-15">Elige un lugar de destino</label>
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
                <MDBBtn color="light" block @click="goToCreate" class="font-regular-blue-20">Ir a crear</MDBBtn>
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
                      <MDBCol col="12">
                        <label class="font-thin-white-14 mb-3">Diesel 1.046 Lt</label>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div>
                    <h5 class="material-title text-start">Envios</h5>
                    <!-- <MDBRow v-for="(label, index) in envios" :key="index" class="mb-3"> -->
                    <MDBRow>
                      <MDBCol class="d-flex justify-content-start font-thin-white-14 mb-3">
                        <!-- <label :for="'total' + index" class="font-thin-white-14">{{ label }}</label> -->
                        Co2 0.075 Kg
                      </MDBCol>
                      <MDBCol col="12">
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
                      <MDBCol col="12">
                        <label class="font-thin-white-14 mb-3">Diesel 1.074 Lt</label>
                      </MDBCol>
                      <MDBCol col="12">
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
import ObjectService from '@/services/services.service';

export default {
  name: 'CreateComponent',
  data() {
    return {
      options: [],
      selectedOption: null,
      selectedMaterials: [],
      materialKey: [
        { id: "body_materials", label: "Cuerpo" },
        { id: "detail_materials", label: "Detalles 1" },
        { id: "detail_materials", label: "Detalles 2" },
        { id: "detail_materials", label: "Detalles 3" },
      ],
      materialLists: {}, // Inicializado como objeto reactivo
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
        { value: 'punta_arenas', label: 'Punta Arenas' },
      ],
      created: false,
    };
  },
  mounted() {
    this.getObjects();
  },
  methods: {
    async getObjects() {
      const objects = await ObjectService.getObjects();
      this.options = objects.map(o => ({
        id: o.id,
        item: o.item,
      }));
    },
    async getMaterials(index) {
      const selectedMaterialId = this.selectedMaterials[index];
      if (selectedMaterialId) {
      
        this.materialLists = {}; 
        this.getMaterials(selectedMaterialId);  
      }
    },
    getMaterialType(index) {
      if (this.materialKey[index]) {
        return this.materialKey[index].id;  
      }
  },
    async getMaterials(index) {

      const materials = await ObjectService.getMaterials(index);

      this.materialLists = {};

      this.materialKey.forEach((key, index) => {
        if (!this.materialLists[key.id]) {
          this.materialLists[key.id] = [];
        }

        if (key.id === "body_materials" && Array.isArray(materials.body_materials)) {
          this.materialLists[key.id][index] = materials.body_materials.map(material => ({
            label: material,
            value: material,
          }));
        } else if (key.id === "detail_materials" && Array.isArray(materials.detail_materials)) {
          this.materialLists[key.id][index] = materials.detail_materials.map(material => ({
            label: material,
            value: material,
          }));
        }
      });
    },
    updateMaterialLists(index, event) {
      if(event === undefined){
        return
      }

      let id = event.target.id

      if(id !== 'detail_materials'){
        this.materialLists = {};
        this.getMaterials(index);
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
  background-image: url('../utils/assets/images/maps.png');
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
  padding-top: 10px;
  padding-left: 5px;
  padding-bottom: 10px;
  padding-right: 5px;
  text-transform: uppercase;  
}
</style>
