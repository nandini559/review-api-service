import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000" // your backend URL
});

export const getReviewsByProduct = productId => API.get(`/products/${productId}/reviews`);
