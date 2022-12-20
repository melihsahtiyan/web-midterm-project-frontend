import axios from "axios";

const API_URL = "https://localhost:5001/api/users/";

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

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
  getPublicContent,
  getUserBoard,
  getUserByIdBoard,
  // getModeratorBoard,
  // getAdminBoard,
};
