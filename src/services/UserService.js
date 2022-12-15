import axios from "axios";
import authHeader from "./AuthService";

const API_URL = "https://localhost:44394/api/users/";

const getPublicContent = () => {
  return axios.get(API_URL + "getall");
};

const getUserBoard = () => {
  return axios.get(API_URL + "getByEmail", {
    params: { email: localStorage.getItem("email") },
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
  // getModeratorBoard,
  // getAdminBoard,
};
