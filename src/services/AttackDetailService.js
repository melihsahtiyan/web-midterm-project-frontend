import axios from "axios";

const API_URL = "https://localhost:5001/api/attackDetails/";

const getPublicContent = () => {
  return axios.get(API_URL + "getall");
};

const getUserBoard = () => {
  return axios.get(API_URL + "getByEmail", {
    params: { email: localStorage.getItem("email") },
  });
};

const getUserByIdBoard = (id) => {
  return axios.get(API_URL + "getById", {
    params: { id: id },
  });
};

export default {
  getPublicContent,
  getUserBoard,
  getUserByIdBoard,
};
