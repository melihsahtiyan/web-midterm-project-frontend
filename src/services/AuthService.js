import axios from "axios";

const API_URL = "https://localhost:44394/api/auth/"; // Auth api endpoint

const register = (firstName, lastName, email, password) => {
  debugger;
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log("====================================");
      console.log(response.data);
      console.log("====================================");
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((error) => {
      console.error("axios: ", error.message);
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
