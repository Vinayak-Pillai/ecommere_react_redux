import instance from "../utils/axiosInstance";

const todoServices = {
  getTodo() {
    return instance.get("/todos");
  },
};

export default todoServices;
