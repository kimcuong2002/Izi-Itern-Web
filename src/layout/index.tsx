import { Outlet } from "react-router-dom";
import Header from "./component/header";

const LayoutComponent = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
