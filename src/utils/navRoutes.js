import Home from "../Home/Home";
import ProductCart from "../Products/ProductCart";
import Products from "../Products/Products";
import Todo from "../Todo/Todo";

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
  {
    id: 3,
    name: "Cart",
    path: "/cart",
    element: <ProductCart />,
  },
  {
    id: 4,
    name: "Todo",
    path: "/todo",
    element: <Todo />,
  },
];

export default routes;
