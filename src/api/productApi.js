import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const fetchProducts = async (filters) => {
  const { sort, brand, category, minPrice, maxPrice, limit, page } = filters;

  const queryParams = new URLSearchParams({
    ...(sort && { sort }),
    ...(brand && { brand }),
    ...(category && { category }),
    ...(minPrice && { minPrice }),
    ...(maxPrice && { maxPrice }),
    ...(limit && { limit }),
    ...(page && { page }),
  });

  const response = await axios.get(`${API_URL}?${queryParams.toString()}`);
  return response.data;
};
