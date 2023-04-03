import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-fullstack-backend-lucaslmzz.onrender.com/",
});

export default api;
