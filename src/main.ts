// Importa estilos globales y CSS de MDBootstrap y Lexend Deca
import './assets/main.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fontsource/lexend-deca';

// Importa dependencias y configuraciones necesarias
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Importa componentes de MDBootstrap
import { 
  MDBNavbar, MDBBtn, MDBInput, MDBTextarea, MDBNavbarToggler, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBCollapse, MDBContainer, MDBCol, MDBRow, 
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon 
} from 'mdb-vue-ui-kit';

// Configura Firebase
import { initializeApp } from "firebase/app";

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

// Registra componentes de MDBootstrap globalmente
app.component('MDBNavbar', MDBNavbar);
app.component('MDBBtn', MDBBtn);
app.component('MDBInput', MDBInput);
app.component('MDBTextarea', MDBTextarea);
app.component('MDBNavbarToggler', MDBNavbarToggler);
app.component('MDBNavbarBrand', MDBNavbarBrand);
app.component('MDBNavbarNav', MDBNavbarNav);
app.component('MDBNavbarItem', MDBNavbarItem);
app.component('MDBCollapse', MDBCollapse);
app.component('MDBContainer', MDBContainer);
app.component('MDBCol', MDBCol);
app.component('MDBRow', MDBRow);
app.component('MDBCard', MDBCard);
app.component('MDBCardBody', MDBCardBody);
app.component('MDBCardTitle', MDBCardTitle);
app.component('MDBCardText', MDBCardText);
app.component('MDBIcon', MDBIcon);

// Configura axios como propiedad global
app.config.globalProperties.axios = axios;
 export {firebaseApp};
// Usa el enrutador y monta la aplicación
app.use(router);
app.mount('#app');
