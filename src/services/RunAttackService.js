import axios from "axios";

const API_URL = "https://localhost:5001/api/runAttacks/";

const runNmap = (userId, ipAddress) => {
  return axios.get(API_URL + "runNmap", {
    params: { userId: userId, ipAddress: ipAddress },
  });
};

const runTokenImpersonation = (userId) => {
  return axios.get(API_URL + "runTokenImpersonation", {
    params: { userId: userId },
  });
};

export default {
  runNmap,
  runTokenImpersonation,
};
