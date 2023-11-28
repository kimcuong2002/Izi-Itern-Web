import { useRoutes } from "react-router-dom";
import LayoutComponent from "../layout/index";
import Home from "../pages/home";

const routes = [
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

const RenderRouter = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
