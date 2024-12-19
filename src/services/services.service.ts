import interceptor from '../backend/interceptor';

const axios = interceptor.axios;
const url = interceptor.url;

const ObjectService = {

  async getObjects(){
    const response = await axios.get('/object');
    if (response.status === 200) {
      return response.data;
    }
  },

  async getMaterials(index: any){
    const response = await axios.get('/object/'+index);
    if(response.status === 200){
      //  GUARDAR ID PARA MANDARLOS DEVUELTA
      return response.data
    }
  }
}

export default ObjectService;