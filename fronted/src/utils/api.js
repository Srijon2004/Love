import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ matches your backend
  withCredentials: true, 
});

export default API;
