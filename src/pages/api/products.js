import axios from "axios";
import localforage from "localforage";

export const getProducts = async () => {
  const res = await axios.get(
    "https://ecom-backend-service-hoaz.onrender.com/products"
  );
  return res.data;
};

export const addProduct = async (product, image) => {
  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("description", product.description);
  formData.append("quantity", product.quantity);
  formData.append("image", image);
  const res = await axios.post(
    "https://ecom-backend-service-hoaz.onrender.com/products",
    formData,
    {
      headers: {
        "x-auth-token": await localforage.getItem("token"),
      },
    }
  );
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(
    `https://ecom-backend-service-hoaz.onrender.com/products/${id}`,
    {
      headers: {
        "x-auth-token": await localforage.getItem("token"),
      },
    }
  );
  return res.data;
};

export const updateProduct = async (product) => {
  let formData = new FormData();
  formData.append("name", product.updatedProduct.name);
  formData.append("price", product.updatedProduct.price);
  formData.append("description", product.updatedProduct.description);
  formData.append("quantity", product.updatedProduct.quantity);
  formData.append("image", product.image);
  const res = await axios.put(
    `https://ecom-backend-service-hoaz.onrender.com/products/${product.updatedProduct.id}`,
    formData,
    {
      headers: {
        "x-auth-token": await localforage.getItem("token"),
      },
    }
  );
  return res.data;
};
