import './assets/main.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router';
import App from './App.vue';
import { createApp } from 'vue'

import axios from 'axios';

import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fontsource/lexend-deca';

import { 
  MDBNavbar, MDBBtn, MDBInput, MDBTextarea, MDBNavbarToggler, MDBNavbarBrand, MDBNavbarNav, MDBNavbarItem, MDBCollapse, MDBContainer, MDBCol, MDBRow, 
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon 
} from 'mdb-vue-ui-kit';

const app = createApp(App);

app.component('MDBNavbar', MDBNavbar)
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
app.component('MDBCardTitle', MDBCardTitle)
app.component('MDBCardText', MDBCardText)
app.component('MDBIcon', MDBIcon)


app.config.globalProperties.axios = axios;

app.use(router);
app.mount('#app');


