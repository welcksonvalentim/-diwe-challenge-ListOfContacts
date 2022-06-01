import Axios from 'axios';

const API_ENDPOINT_BASE = 'https://contacts-api.prd.parceirodaconstrucao.com.br/auth/login/';
const API_ENDPOINT_CONTACTS = 'https://contacts-api.prd.parceirodaconstrucao.com.br/contacts';

export async function sendLoginInputs(add) {
  const result = await Axios.post(API_ENDPOINT_BASE, add).then((resp) => resp.data);
  return result.token;
};

export async function getAllList(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const result = await Axios.get(API_ENDPOINT_CONTACTS, config).then((resp) => resp.data);
  return result;
};

export function createContact(add, token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const result = Axios.post(API_ENDPOINT_CONTACTS, add, config).then((resp) => resp.data); 
  return result;
};

export function editContact(numberId, add, token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const API_ENDPOINT_CONTACTS_ID = (`${API_ENDPOINT_CONTACTS}/${numberId}`);
  const result = Axios.post(API_ENDPOINT_CONTACTS_ID, add, config).then((resp) => resp.data); 
  return result;
};

// Mob20we23##

export function deleteContact(numberId, token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const API_ENDPOINT_CONTACTS_ID = (`${API_ENDPOINT_CONTACTS}/${numberId}`);
  const result = Axios.delete(API_ENDPOINT_CONTACTS_ID, config).then((resp) => resp.data);
  return result;
};