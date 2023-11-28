import { BiDollar } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { HEADER_ITEMS } from "./constant";
import logo from "../../assets/images/logo.png";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box className="flex justify-between items-center py-10">
      <Box className="flex justify-center items-center gap-2">
        <Link to="">
          <img src={logo} alt="" className="w-60" />
        </Link>
        {HEADER_ITEMS.map((item) => (
          <Link to={item.headerItemLink} key={item.headerItemLink}>
            <Button className="!font-bold">{item.headerItemName}</Button>
          </Link>
        ))}
      </Box>
      <Box className="flex text-[#78909C] justify-center items-center gap-4 text-4xl">
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
      </Box>
    </Box>
  );
};

export default Header;
