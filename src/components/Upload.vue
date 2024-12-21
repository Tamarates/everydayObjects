<template>
  <ModalComponent class="pt-4" ref="modalRef" />
  <MDBContainer fluid>
    <MDBRow class="justify-content-center mt-5 ms-2 pt-4">
      <MDBCol col="4" class="text-start font-regular-white-14">
        <p>Explora el impacto ambiental del diseño de diferentes objetos.</p>
        <p>Completa la tabla con los datos requeridos y utiliza los enlaces de fuentes para acceder a información útil.
          Recuerda registrar las cantidades en las unidades de medida: Km, Kg y Lt.</p>
        <p>Campos de la tabla a llenar:
        <ul class="mt-2">
          <li>
            <p>Materiales Internos: materiales internos de dispositivos electrónicos (Ej.: cobalto, cobre).</p>
          </li>
          <li>
            <p>Materiales del cuerpo: materiales que forman la mayor parte del objeto (Ej.: plásticos, metales).</p>
          </li>
          <li>
            <p>Materiales de elementos: materiales de las partes funcionales y pequeñas (Ej.: punta de un lápiz de acero
              inoxidable, mango de una tetera).</p>
          </li>
        </ul>
        </p>
      </MDBCol>
      
      <MDBCol col="8">
        <MDBCard bg="white">
          <MDBCardHeader class="text-center font-light-blue-25 mt-4"  v-if="stage === 0">
            Objeto
          </MDBCardHeader>
          <MDBCardHeader class="text-center font-light-blue-25 mt-4"  v-if="stage === 1">
            Materiales Cuerpo
          </MDBCardHeader>
          <MDBCardHeader class="text-center font-light-blue-25 mt-4"  v-if="stage === 2">
            Materiales Adicionales
          </MDBCardHeader>
          <MDBCardBody>
            <div v-if="stage === 0">
              <p class="font-extra-light-blue-14 p-0 my-2">Selecciona un objeto que tu consideres de uso cotidiano y no se encuentre en la lista, indica el nombre de este y  por ultimo agregale una descripción.</p>
            </div>
            <div v-if="stage === 1">
              <p class="font-extra-light-blue-14 p-0 m-0">De no contener materiales internos aprieta continuar sin llenar los campos.</p>
              <p class="font-extra-light-blue-14 pt-0 mt-0">Puedes agregar hasta <b>5 materiales</b>. </p>
            </div>
            <div v-if="stage === 2">
              <p class="font-extra-light-blue-14 pt-0 mt-0">Puedes agregar hasta <b>5 materiales</b>. </p>
            </div>


            <div v-if="stage === 0">
              <MDBRow>
                <MDBCol>
                  <span class="font-medium-blue-20">Objeto</span>
                  <MDBCol col="4" class="my-4">
                    <MDBInput label="Nombre del objeto" />
                  </MDBCol>
                  <span class="font-medium-blue-20">Descripción</span>
                  <MDBCol col="4" class="my-4">
                    <MDBTextarea label="¿Que es este objeto?" rows="4" v-model="textareaValue" />
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </div>

            <div v-if="stage === 1">
              <MDBRow>              
                <MDBCol col="6">
                  <span class="font-medium-blue-20">Procedencia</span>
                </MDBCol>
                <MDBCol col="6">
                  <span class="font-medium-blue-20">Impacto Ambiental</span>
                </MDBCol>
              </MDBRow>

              <!-- Bucle para renderizar dinámicamente las filas -->
              <MDBRow v-for="(material, index) in materials" :key="index" class="mt-3">
                <!-- Inputs de Procedencia -->
                <MDBCol col="6">
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput label="Nombre" v-model="material.name" />
                    </MDBCol>
                    <MDBCol col="6">
                      <MDBInput label="País de Procedencia" v-model="material.countryOrigin" />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <!-- Inputs de Impacto Ambiental -->
                <MDBCol col="6">
                  <MDBRow>
                    <MDBCol col="4">
                      <MDBInput label="Huella de Carbono" v-model="material.fprintC" />
                    </MDBCol>
                    <MDBCol col="4">
                      <MDBInput label="Huella Hídrica" v-model="material.hh" />
                    </MDBCol>
                    <MDBCol col="4">
                      <MDBInput label="Diésel" v-model="material.diesel" />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>

              <!-- Botón para agregar una nueva fila -->
              <MDBRow>
                <MDBCol col="12" class="text-start">
                  <MDBBtn color="link" class="mt-3 no-padding" @click="addMaterial">
                    Agregar otro material +
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>

            <div v-if="stage === 2">
              <MDBRow>              
                <MDBCol col="6">
                  <span class="font-medium-blue-20">Procedencia</span>
                </MDBCol>
                <MDBCol col="6">
                  <span class="font-medium-blue-20">Impacto Ambiental</span>
                </MDBCol>
              </MDBRow>

              <MDBRow v-for="(material, index) in materials" :key="index" class="mt-3">
                <MDBCol col="6">
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput label="Nombre" v-model="material.name" />
                    </MDBCol>
                    <MDBCol col="6">
                      <MDBInput label="País de Procedencia" v-model="material.countryOrigin" />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <MDBCol col="6">
                  <MDBRow>
                    <MDBCol col="4">
                      <MDBInput label="Huella de Carbono" v-model="material.fprintC" />
                    </MDBCol>
                    <MDBCol col="4">
                      <MDBInput label="Huella Hídrica" v-model="material.hh" />
                    </MDBCol>
                    <MDBCol col="4">
                      <MDBInput label="Diésel" v-model="material.diesel" />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol col="12" class="text-start">
                  <MDBBtn color="link" class="mt-3 no-padding" @click="addMaterial">
                    Agregar otro material +
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
            
          </MDBCardBody>
          <MDBCardFooter class="m-4">
            <MDBRow>
              <MDBCol col="3">
                <MDBBtn color="link" class="text"><u>Ver procedencia</u></MDBBtn>
              </MDBCol>
              <MDBCol col="4" class="text-start me-2">
                <MDBBtn color="link" class="text"><u>Calcular impacto</u></MDBBtn>
              </MDBCol>
              <MDBCol col="4" class="ms-5 pe-0 text-end">
                <MDBBtn color="primary" class="no-padding-blue mx-3" @click="removeStage" :disabled="stage === 0"><span class="mx-3">Volver</span></MDBBtn>
                <MDBBtn color="primary" class="no-padding-blue" @click="addStage" v-if="stage < 2"><span class="mx-1">Continuar</span></MDBBtn>
                <MDBBtn color="primary" class="no-padding-blue" v-if="stage === 2" @click="openModal"><span class="mx-1">Continuar</span></MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
<script>
import ModalComponent from '@/utils/ModalComponent.vue';


export default {
  name: 'UploadComponent',
  components: {
    ModalComponent
  },
  data() {
    return {
      stage: 0,
      materials: [
        {
          name: '',
          countryOrigin: '',
          fprintC: '',
          hh: '',
          diesel: '',
        },
      ]
    }
  },
  methods: {
    addMaterial(){
      if(this.materials.length < 5){
        this.materials.push({
          name: '',
          countryOrigin: '',
          fprintC: '',
          hh: '',
          diesel: '',
        });
      }else return
    },
    addStage() {
      if (this.stage <=2 ) {
        this.stage += 1;
      }
      
      if (this.stage === 2) {
        return;
      }      
    },
    removeStage(){

      if (this.stage > 0) {
        this.stage -= 1;
      }
      
      if (this.stage === 0) {
        return;
      }
    },
    openModal(){
      this.$refs.modalRef.updateContent('¡Aviso! La información que subas aquí será revisada manualmente, por lo que no estará disponible de inmediato.', true)
      this.$refs.modalRef.openModal()
    }
  }
}
</script>
<style>
  .btn{
    text-transform: inherit;
  }
  .no-padding{
    padding: 0;
  }

  .no-padding-blue{
    padding-top: 3px !important;
    padding-bottom: 3px !important;
    font-family: 'Lexend Deca';
    font-size: 16px;
    color: white;
  }

  .text{
    font-family: 'Lexend Deca ExtraLight';
    font-size: 16px;
  }

</style>