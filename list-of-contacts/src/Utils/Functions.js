import Axios from 'axios';

const API_ENDPOINT_BASE = 'https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login/';
const API_ENDPOINT_CONTACTS = 'https://contacts-api.prd.parceirodaconstrucao.com.br/contacts';

export async function sendLoginInputs(add) {
  const result = await Axios.post(API_ENDPOINT_BASE, add).then((resp) => resp.data);
  return result.token;
};

// Mob20we23##

export async function getAllList(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const result = await Axios.get(API_ENDPOINT_CONTACTS, config).then((resp) => resp.data);
  return result;
};

export function createContact(add) {
  /* const config = { headers: { Authorization: `Bearer ${token}` } }; */
  const result = Axios.post(API_ENDPOINT_BASE, add).then((resp) => resp.data);
  return result;
};

export function deleteContact(numberId) {
  /* const config = { headers: { Authorization: `Bearer ${token}` } }; */
  const objectId = {id: numberId};
  const result = Axios.delete(API_ENDPOINT_BASE, {data: objectId}).then((resp) => resp.status);
  return result;
};