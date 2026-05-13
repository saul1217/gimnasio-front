import api from "./axios";

export const loginRequest = async (email, password) => {
  const response = await api.post("/login", {
    email,
    password,
  });
  return response.data;
};

export const login_admin = async (email, password) => {
  const response = await api.post("/login_admin", {
    email,
    password,
  });
  return response.data;
};

export const registerRequest = async (nombre, email, password) => {
  const response = await api.post("/register", {
    nombre,
    email,
    password,
  });
  return response.data;
};

export const getUsersRequest = async () => {
  const response = await api.get("/users");
  return response.data;
};