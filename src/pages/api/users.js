import axios from "axios";

export const register = async (userData) => {
  const res = await axios.post(
    "http://localhost:1111/users/register",
    userData
  );
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post("http://localhost:1111/users/login", userData);
  return res.data;
};
