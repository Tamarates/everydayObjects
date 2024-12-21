<template>
  <ModalComponent ref="modalRef" />
  <MDBContainer fluid>
    <MDBRow>
      <div class="map-container">
        <div class="map" v-html="iframeContent" v-if="!created"></div>
        <div class="map pt-5" v-if="created">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle class="font-light-blue-20 pb-4">Huella Ambiental Personal</MDBCardTitle>
              <MDBCardText>
                <p class="font-extra-light-blue-14">Este es José, un chileno promedio que, como todos, realiza acciones diariamente desde que se despierta hasta que se va a dormir. Cada una de estas acciones genera un impacto ambiental. Sus decisiones reflejan las de muchas otras personas en situaciones similares.</p>
                <p class="font-extra-light-blue-14">Para entender mejor el impacto ambiental de las decisiones relacionadas con el uso de materiales en la manufactura, compararemos el impacto ambiental que José genera diariamente con el impacto del objeto que tú has creado.</p>
                <MDBRow class="pt-4 justify-content-evenly align-items-center">
                  <MDBCol col="6">
                    <MDBRow>
                      <MDBCol col="11" class="pb-3">
                        <div class="data-position">
                          <div>
                            <span class="font-regular-blue-38">{{ percentCo2 }} %</span>
                          </div>
                          <div>
                            <img class="logo" src="/src/assets/co2.png" alt="CO2">
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol col="11" class="py-3">
                        <div class="data-position">
                          <div>
                            <span class="font-regular-blue-38">{{ percentWater }} %</span>
                          </div>
                          <div class="pe-4">
                            <img class="logo" src="/src/assets/agua.png" alt="CO2">
                          </div>
                        </div>
                      </MDBCol>
                      <MDBCol col="11" class="py-3">
                        <div class="data-position">
                          <div>
                            <span class="font-regular-blue-38">{{ percentDiesel }}%</span>
                          </div>
                          <div class="pe-4">
                            <img class="logo" src="/src/assets/barrillogo.png" alt="CO2">
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol col="5">
                    <div class="d-flex align-items-start">
                      <!-- Imagen de la persona alineada a la izquierda -->
                      <img class="person" src="/src/assets/person.png" alt="Person">

                      <!-- Contenedor para las imágenes alineadas a la derecha -->
                      <div class="d-flex flex-column align-items-start ms-3 mt-5 pt-5">
                        <img class="logo-cloud" src="/src/assets/co2.png" alt="CO2">
                        <span class="font-light-blue-15">14.5 kg</span>
                        <img class="logo-person ms-2 mt-3" src="/src/assets/agua.png" alt="Agua">
                        <span class="font-light-blue-15">170 Lt</span>
                        <img class="logo-person ms-2 mt-3" src="/src/assets/barrillogo.png" alt="Barril">
                        <span class="font-light-blue-15">0.7 Lt</span>
                      </div>
                    </div>
                  </MDBCol>

                </MDBRow>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
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
                <MDBCol col="6" class="d-flex justify-content-center align-items-center" v-if="haveImage">
                  <img class="pencil" :src="images"/>
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
                <MDBCol col="6" class="d-flex justify-content-center align-items-center" v-if="haveImage">
                  <img class="pencil" :src="images" />
                </MDBCol>
                <MDBCol col="6">
                  <div>
                    <h5 class="material-title text-start">Producción</h5>
                    <MDBRow class="font-thin-white-14 ">
                      <MDBCol class="d-flex justify-content-between mb-3" col="12" >
                        <span class="me-4">Huella de Carbono</span>
                        <span class="me-3">{{ total_carbon_footprint }} Kg</span>
                      </MDBCol>
                      <MDBCol class="d-flex justify-content-between mb-3" col="12">
                        <span class="me-4">Huella Hídrica</span>
                        <span class="me-3">{{ total_hydric_footprint }} Lt</span>
                      </MDBCol>
                      <MDBCol class="d-flex justify-content-between mb-3" col="12">
                        <span class="me-4">Diesel</span>
                        <span class="me-3">{{ total_diesel_consumption }} Lt</span>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div>
                    <h5 class="material-title text-start">Envios</h5>
                    <MDBRow>
                      <MDBCol class="d-flex justify-content-between font-thin-white-14 mb-3" col="12">
                        <span class="me-4">Co2</span>
                        <span class="me-3">{{ total_co2 }} Kg</span>
                      </MDBCol>
                      <MDBCol class="d-flex justify-content-between font-thin-white-14 mb-3" col="12">
                        <span class="me-4">Diesel</span>
                        <span class="me-3">{{ total_diesel }} Lt</span>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div>
                    <h5 class="material-title text-start">Total</h5>
                    <MDBRow>
                      <MDBCol class="d-flex justify-content-between font-thin-white-14 mb-3" col="12">
                        <span class="me-4">Co2</span>
                        <span class="me-3">{{ Number(total_co2) + Number(total_carbon_footprint) }} Kg</span> <!-- Espacio a la derecha del número -->
                      </MDBCol>

                      <MDBCol class="d-flex justify-content-between font-thin-white-14 mb-3" col="12">
                        <span class="me-4">Diesel</span>
                        <span class="me-3">{{ (Number(total_diesel) + Number(total_diesel_consumption)).toFixed(2) }} Lt</span>
                      </MDBCol>
                      <MDBCol class="d-flex justify-content-between font-thin-white-14 mb-3" col="12">
                        <span class="me-4">Huella Hídrica</span>
                        <span class="me-3"> {{ total_hydric_footprint }} Lt</span>
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
import ModalComponent from '@/utils/ModalComponent.vue';

export default {
  name: 'CreateComponent',
  components: {
    ModalComponent
  },
  data() {
    return {
      iframeContent: `
        <iframe src='https://flo.uri.sh/visualisation/20790974/embed' 
          title='Interactive or visual content' 
          class='flourish-embed-iframe' 
          frameborder='0' 
          scrolling='no' 
          style='width:100%;height:666px;' 
          sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'>
        </iframe>
        <div style='width:100%!;margin-top:4px!important;text-align:right!important;'>
          <a class='flourish-credit' 
            href='https://public.flourish.studio/visualisation/20790974/?utm_source=embed&utm_campaign=visualisation/20790974' 
            target='_top' 
            style='text-decoration:none!important'>
            <img alt='Made with Flourish' 
              src='https://public.flourish.studio/resources/made_with_flourish.svg' 
              style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'>
          </a>
        </div>
      `,
      materials: {},
      options: [],
      selectedOption: null,
      selectedMaterials: [],
      materialKey: [
        { id: "body_materials", label: "Cuerpo" },
        { id: "detail_materials", label: "Detalles 1" },
        { id: "detail_materials", label: "Detalles 2" },
        { id: "detail_materials", label: "Detalles 3" },
        { id: "material_ids", values: {}}
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
      images: '',
      haveImage: false,
      percentCo2: '',
      percentWater: '',
      percentDiesel: '',
      total_carbon_footprint: '',
      total_co2: '',
      total_diesel: '',
      total_diesel_consumption: '',
      total_hydric_footprint: ''
    };
  },
  mounted() {
    this.getObjects();
    this.openModal()
  },
  methods: {
    async getObjects() {
      const objects = await ObjectService.getObjects();
      this.options = objects.map(o => ({
        id: o.id,
        item: o.item,
        image: o.image
      }));
    },
    getMaterialType(index) {
      if (this.materialKey[index]) {
        return this.materialKey[index].id;  
      }
    },
    async getMaterials(index) {

      this.materials = await ObjectService.getMaterials(index);

      this.materialLists = {};

      this.materialKey.forEach((key, index) => {
        if (!this.materialLists[key.id]) {
          this.materialLists[key.id] = [];
        }

        if (key.id === "body_materials" && Array.isArray(this.materials.body_materials)) {
          this.materialLists[key.id][index] = this.materials.body_materials.map(material => ({
            label: material,
            value: material,
          }));
        } else if (key.id === "detail_materials" && Array.isArray(this.materials.detail_materials)) {
          this.materialLists[key.id][index] = this.materials.detail_materials.map(material => ({
            label: material,
            value: material,
          }));
        }
      });
    },
    updateMaterialLists(index, event) {
      if (event === undefined) {
        return;
      }

      const id = event.target.id;

      if (id !== 'detail_materials') {
        this.materialLists = {};
        this.getMaterials(index);
      }

      const selectedOption = this.options.find((object) => object.id === index);

      if (selectedOption) {
        this.images = selectedOption.image;
        this.haveImage = true;
      } else {
        this.images = '';
        this.haveImage = false;
      }      
    },
    async getPercents(list) {
      let percents = await ObjectService.getImpact(list);
      console.log(percents);

      this.total_co2 = Number(percents.total_co2).toFixed(2)
      this.total_carbon_footprint = Number(percents.total_carbon_footprint).toFixed(2)
      this.total_diesel = Number(percents.total_diesel).toFixed(2)
      this.total_diesel_consumption = Number(percents.total_diesel_consumption).toFixed(2)
      this.total_hydric_footprint =  Number(percents.total_hydric_footprint).toFixed(2)

      this.percentCo2 = ((Number(this.total_carbon_footprint) + Number(this.total_co2)) / 14.5 * 100).toFixed(2)
      this.percentWater =  ((this.total_hydric_footprint / 170) * 100).toFixed(2)
      this.percentDiesel = Math.round((Number(this.total_diesel_consumption) + Number(this.total_diesel)) / 0.7 * 100)
      
    },
    goToCreate() {
      const materialIds = []
      this.created = true;

      this.materialKey.forEach((key, index) => {
        if (key.id === "material_ids" && Array.isArray(this.materials.material_ids)) {
          this.materialLists[key.id][index] = this.materials.material_ids.forEach(x => {
            materialIds.push(x)
          })
          
          this.getPercents(materialIds)
        }
      });
    },
    goToBack() {
      this.created = false;
    },
    openModal(){
      this.$refs.modalRef.updateContent('¡Aviso! Los resultados obtenidos son una aproximación y no representan cifras exactas, las distancias expresadas poseen un rango de imprecisión en su cálculo. El impacto de un objeto no se expresa en unidades contables, si no que en kilogramos.', false)
      // this.$refs.modalRef.
      this.$refs.modalRef.openModal()
    }
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
  padding: 0;
}

.map {
  background-size: cover;
  width: 55%;
  height: 666px;
  margin-top: 22px;
  margin-left: 24px;
}

.overlay-card {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 40%;
  height: 90%;
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


.person{
  max-width: 43%;
}
.data-position {
  display: flex; /* Usa Flexbox para alinear elementos */
  align-items: center; /* Alinea verticalmente en el centro */
  justify-content: space-between; /* Separa los elementos hacia los extremos */
}

.data-position span {
  margin-left: 0; /* Asegúrate de que el texto esté alineado a la izquierda */
}

.data-position img {
  margin-right: 0; /* Asegúrate de que la imagen esté alineada a la derecha */
}

.logo{
  width: 70%
}

.logo-person{
  width: 30%;
}

.logo-cloud{
  width: 40%;
}
</style>
