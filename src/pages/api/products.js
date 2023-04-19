import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("http://localhost:1111/products");
  return res.data;
};

export const addProduct = async (product, image) => {
  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("description", product.description);
  formData.append("quantity", product.quantity);
  formData.append("image", image);
  const res = await axios.post("http://localhost:1111/products", formData, {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  });
  return res.data;
};
