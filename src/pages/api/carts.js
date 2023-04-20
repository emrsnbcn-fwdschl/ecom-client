import axios from "axios";
import localforage from "localforage";
export async function getCart() {
  const res = await axios.get("http://localhost:1111/carts", {
    headers: {
      "x-auth-token": await localforage.getItem("token"),
    },
  });
  return res.data;
}

export async function addToCart(product) {
  const res = await axios.post("http://localhost:1111/carts", product, {
    headers: {
      "x-auth-token": await localforage.getItem("token"),
    },
  });
  return res.data;
}
