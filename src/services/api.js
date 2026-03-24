import axios from "axios";

// BASE URL
const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// 🔥 GET ALL PRODUCTS
export const getAllProducts = () => API.get("/products");

// 🔥 GET SINGLE PRODUCT
export const getProductById = (id) => API.get(`/products/${id}`);

// 🔥 GET CATEGORIES
export const getCategories = () => API.get("/products/categories");