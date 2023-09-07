import Home from "../Home/Home";
import Products from "../Products/Products";

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
    element: <Products />,
  },
];

export default routes;
