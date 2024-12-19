<template>
  <MDBModal
    id="exampleModal"
    tabindex="-1"
    labelledby="exampleModalLabel"
    v-model="exampleModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">Modal Title</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>Content of the modal</MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
      <MDBBtn color="primary">Save changes</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  let exampleModal = ref(false); // Estado para mostrar/ocultar el modal

  // Puedes crear una función para abrir el modal manualmente
  function openModal() {
    exampleModal.value = true;
  }

</script>
