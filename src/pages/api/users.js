import axios from "axios";
import { redirect } from "next/navigation";
import localforage from "localforage";
import { useRouter } from "next/navigation";
export const register = async (userData) => {
  const res = await axios.post(
    "https://ecom-backend-service-hoaz.onrender.com/users/register",
    userData
  );
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post(
    "https://ecom-backend-service-hoaz.onrender.com/users/login",
    userData
  );
  if (res.data) {
    await localforage.setItem("token", res.data);
  }
  return res.data;
};

export const logout = async () => {
  await localforage.removeItem("token");
};
