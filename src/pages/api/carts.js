import axios from "axios";
import localforage from "localforage";
export async function getCart() {
  const res = await axios.get(
    "https://ecom-backend-service-hoaz.onrender.com/carts",
    {
      headers: {
        "x-auth-token": await localforage.getItem("token"),
      },
    }
  );
  return res.data;
}

export async function addToCart(product) {
  const res = await axios.post(
    "https://ecom-backend-service-hoaz.onrender.com/carts",
    product,
    {
      headers: {
        "x-auth-token": await localforage.getItem("token"),
      },
    }
  );
  return res.data;
}
