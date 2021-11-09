import axios from "axios";
import jwt from 'jwt-decode'

import { Base_URL } from '../utils/baseUrlConstant';

import authHeader from './auth-header';

const API_URL = Base_URL + "Identity/";
const userStorageVarName = "user";

const register = (firstName, lastName, companyName, email, password, confirmPassword) => { 
  return axios.post(API_URL + "register", { 
    firstName,
    lastName, 
    companyName,
    email,
    password,
    confirmPassword,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem(userStorageVarName, JSON.stringify(jwt(response.data.token)));
      }

      return response.data;
    });
};

const logout = () => {
  return axios
      .post(API_URL + "logout", authHeader())
    .then((res) => {
        localStorage.removeItem(userStorageVarName);      
        localStorage.removeItem("token");      
    });
};

export const getUser = () => JSON.parse(localStorage.getItem(userStorageVarName)) || null;

const identity = {
  register,
  login,
  logout,
  getUser,
}

export default identity;
