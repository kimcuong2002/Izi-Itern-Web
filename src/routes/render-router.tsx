import { useRoutes } from "react-router-dom";
import LayoutComponent from "../layout/index";
import AllProducts from "../pages/all-product";
import ProductDetail from "../pages/product-detail";
import Home from "../pages/home-page";
import Cart from "../pages/cart";
import Sofa from "../pages/sofa";
import Table from "../pages/table";
import Chair from "../pages/chair";

const routes = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "all-product",
        element: <AllProducts />,
      },
      {
        path: "/sofa",
        element: <Sofa />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "Chair",
        element: <Chair />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
      },
    ],
  },
];

const RenderRouter = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
