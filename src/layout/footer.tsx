import { Box, Typography } from "@mui/material";
import footerbg from "../assets/images/footer-bg.jpg";
import Button from "../components/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="mt-20">
      <Box className="relative">
        <img src={footerbg} alt="" className="w-full h-80" />
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Typography className="text-white !text-2xl !font-bold">
            Connect with us!
          </Typography>
        </Box>
      </Box>
      <Box className="my-14 flex flex-col justify-center items-center">
        <Typography className="text-[#78909C] !text-4xl !font-bold !mb-6">
          Have Questions?
        </Typography>
        <Button buttonName="Contact Us" />
      </Box>
      <Box className="text-white p-24 bg-gray-400 flex justify-between items-center">
        <Typography className="!text-2xl !font-bold">
          Coppyright @ 2023 Furniture Store
        </Typography>
        <Typography className="!text-2xl !font-bold">
          Made by{" "}
          <Link
            to="https://github.com/kimcuong2002/Izi-Itern-Web.git"
            className="text-[#78909C]">
            Kim Cuong
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
