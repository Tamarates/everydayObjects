import './assets/main.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fontsource/lexend-deca';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import { 
  MDBNavbar, MDBBtn, MDBInput, MDBTextarea, MDBNavbarToggler, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBCollapse, MDBContainer, MDBCol, MDBRow, 
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalTitle, MDBModalFooter
} from 'mdb-vue-ui-kit';

import { initializeApp } from "firebase/app";

const mdbComponents = {
  MDBNavbar,
  MDBBtn,
  MDBInput,
  MDBTextarea,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
};

const firebaseConfig = {
  apiKey: "AIzaSyBL0hFLUb6OAfuoYYt1lN8l_Ien__npRz4",
  authDomain: "everyday-objects.firebaseapp.com",
  projectId: "everyday-objects",
  storageBucket: "everyday-objects.firebasestorage.app",
  messagingSenderId: "346995856960",
  appId: "1:346995856960:web:064012866bb5e42266f1a5"
};

const firebaseApp = initializeApp(firebaseConfig);

// Crea la aplicación Vue
const app = createApp(App);

Object.entries(mdbComponents).forEach(([name, component]) => {
  app.component(name, component);
});

// Configura axios como propiedad global
app.config.globalProperties.axios = axios;
 export {firebaseApp};
// Usa el enrutador y monta la aplicación
app.use(router);
app.mount('#app');
