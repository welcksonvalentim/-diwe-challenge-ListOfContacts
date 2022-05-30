import Axios from 'axios';
const API_ENDPOINT = 'https://to-do-list-welckson.herokuapp.com/list';

export function sendLoginInputs(add) {
  const result = Axios.post(API_ENDPOINT, add).then((resp) => {
    if(resp.status === 200) {
      return resp.data;
    } else if (resp.status === 404) {
      alert('Please, input correct email and password');
    }
  });
  return result;
};