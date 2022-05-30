import Axios from 'axios';
const API_ENDPOINT = 'https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login';

export async function sendLoginInputs(add) {
  console.log(add);
  const result = await Axios.post(API_ENDPOINT, add).then((resp) => {
    if(resp.status !== 404) {
      console.log(resp.data);
      return resp.data;
    } else if (resp.status === 400) {
    alert('Please, input correct email and password');
    }
  });
    
  return result;
};