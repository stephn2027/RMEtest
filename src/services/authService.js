import http, { setJWT } from './httpService';
import { apiUrl } from '../config.json';
import jwtDecode from 'jwt-decode';

const apiEndpoint = apiUrl + '/login';
const tokenKey = "token";
export async function login(email, password) {
  const {
    data: { accessToken: jwt },
  } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJWT(jwt){
 localStorage.setItem(tokenKey,jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
export function getJWT(){
    return localStorage.getItem(tokenKey);
}
http.setJWT(getJWT());

export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
  getJWT
};
