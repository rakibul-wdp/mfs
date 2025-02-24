import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_BACKEND_API_URL });

export const login = async (data) => {
  const response = await API.post("/api/auth/login", data);
  return response.data;
};

export const sendMoney = async (data) => {
  const response = await API.post("/api/user/send-money", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};

export const cashIn = async (data) => {
  const response = await API.post("/api/agent/cash-in", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};

export const getAllUsers = async () => {
  const response = await API.get("/api/admin/users", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};
