import instance from "../utils/axiosInstance";

const productServices = {
  getAllProducts() {
    return instance.get("/products");
  },
  getAllCategories() {
    return instance.get("/products/categories");
  },
  getAllProdcutByCategory(category_name) {
    return instance.get(`/products/category/${category_name}`);
  },
};

export default productServices;
