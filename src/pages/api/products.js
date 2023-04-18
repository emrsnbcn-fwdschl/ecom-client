import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("http://localhost:1111/products");
  return res.data;
};
