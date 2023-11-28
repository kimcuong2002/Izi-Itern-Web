import { Outlet } from "react-router-dom";
import Header from "./component/header";
import { Box } from "@mui/material";

const LayoutComponent = () => {
  return (
    <Box className="w-full flex justify-center items-center">
      <Box className="w-5/6 lg:w-4/6">
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default LayoutComponent;
