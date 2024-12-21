<template>
  <div>
    <MDBModal v-model="modalVisible" :size="isForm ? 'sm' : 'lg'">
      <MDBModalDialog>
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
            <MDBBtn color="primary" v-if="!form" @click="closeModal">Cerrar</MDBBtn>
          </MDBModalFooter>
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
      isform: false,
      dynamicTitle : '',
      dynamicTitle2 : '',
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
      this.dynamicContent = content;
      this.isform = isform;
    },
    updateTitle(title) {
      this.dynamicTitle = title;
    },
  },
};
</script>
<style>
.less-margin{
  .modal.show .modal-dialog{
     margin-top: 36px !important;
  }

  .modal-header{
    background-color: #5368F5;
  }
}
</style>