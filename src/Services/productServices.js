import instance from "../utils/axiosInstance";

const productServices = {
  getAllProducts(payload = {}) {
    return instance.get(
      `/products?skip=${payload?.skip}&limit=${payload?.limit}`
    );
  },
  getAllCategories() {
    return instance.get("/products/categories");
  },
  getAllProdcutByCategory(category_name) {
    return instance.get(`/products/category/${category_name}`);
  },
};

export default productServices;
