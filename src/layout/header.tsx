import { IoCloseSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { IoMdCart, IoMdMenu } from "react-icons/io";
import { HEADER_ITEMS } from "./component/constant";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import MenuButton from "./component/menu-button";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Box className="flex justify-between items-center py-10">
        <Box className="flex justify-center items-center gap-2">
          <Link to="">
            <img src={logo} alt="" className="w-40 lg:w-60" />
          </Link>
          <Box className="hidden lg:block">
            {HEADER_ITEMS.map((item) => (
              <Link to={item.headerItemLink} key={item.headerItemLink}>
                <Button className="!font-bold" size="small">
                  {item.headerItemName}
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
        <Box className="flex text-[#78909C] justify-center items-center gap-4 text-2xl lg:text-4xl">
          <Box className="flex justify-center items-center">
            <BiDollar />
            <Typography>0.00</Typography>
          </Box>
          <Link to="/cart">
            <Box className="relative">
              <Box className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 bg-[#78909C] rounded-full w-4 h-4 text-center">
                <Typography className="text-black ">0</Typography>
              </Box>
              <IoMdCart />
            </Box>
          </Link>
          <Box className="lg:hidden">
            {openMenu ? (
              <IoCloseSharp
                className="cursor-pointer transition duration-300 transform hover:rotate-45"
                onClick={() => handleMenu()}
              />
            ) : (
              <IoMdMenu
                className="cursor-pointer"
                onClick={() => handleMenu()}
              />
            )}
          </Box>
        </Box>
      </Box>
      <MenuButton openMenu={openMenu} className="absolute top-20" />
    </>
  );
};

export default Header;
