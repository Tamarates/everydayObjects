<template>
  <div>
    <MDBModal v-model="modalVisible" :size="isform ? 'sm' : 'lg'">
      <MDBModalDialog >
        <MDBModalContent>
          <MDBModalHeader style="background-color: #5368F5;">
            {{ dynamicTitle }}
          </MDBModalHeader>
          <MDBModalBody>
            <div v-if="isform">
              <p class="font-extra-light-blue-16 text-center">{{ dynamicContent }}</p>
            </div>
            <div v-if="!isform">
              <MDBRow>
                <MDBCol col="4">
                  <img src="/src/assets/alerta.png" alt="">
                </MDBCol>
                <MDBCol col="7" class="mt-5">
                  <p class="font-extra-light-blue-16 text-center">{{ dynamicContent }}</p>
                </MDBCol>
              </MDBRow>
              <p></p>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" @click="closeModal">Cerrar</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  data() {
    return {
      modalVisible: false,
      isform: false, // Controla si el modal es pequeño o grande
      dynamicTitle: '',
      dynamicContent: '',
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    updateContent(content, isform) {
      this.dynamicContent = content; // Actualiza el contenido
      this.isform = isform;          // Cambia el tamaño del modal
    },
    updateTitle(title) {
      this.dynamicTitle = title;
    },
  },
};
</script>

<style scoped>
.modal-header {
  background-color: #5368F5;
}
</style>
