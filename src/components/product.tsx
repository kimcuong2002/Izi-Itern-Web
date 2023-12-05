import { Box, Typography } from "@mui/material";
import { BiDollar } from "react-icons/bi";
import { FC } from "react";
import { Link } from "react-router-dom";
import { productType } from "../feature/services/type";
import { IoMdCart } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Product: FC<productType> = ({
  image,
  category,
  title,
  price,
  oldPrice,
  id,
}) => {
  return (
    <Box className="relative">
      <Link to={`/shop/${id}`}>
        <img src={image} alt="" />
      </Link>
      <Box className="px-2 ">
        <Typography className="!text-[#212529] !font-bold opacity-50 leading-4 !mt-2">
          {category}
        </Typography>
        <Typography className="!text-xl text-[#78909C] !font-bold">
          {title}
        </Typography>
        <Box className="flex gap-4">
          {oldPrice && (
            <Typography className="flex justify-center items-center !text-[#212529] !font-bold !text-xl opacity-60">
              <BiDollar />
              {oldPrice}
            </Typography>
          )}
          <Typography className="flex justify-center items-center !text-[#212529] !font-bold !text-xl">
            <BiDollar />
            {price}
          </Typography>
        </Box>
      </Box>
      <Box className="flex justify-between p-5 text-3xl text-[#78909C] absolute top-0 w-full">
        <Box className="bg-white h-8 w-16 flex justify-center items-center rounded-full !text-base text-black">
          Sale!
        </Box>
        <Box>
          <Box>
            <Box>
              <Box className="!text-xs bg-[#78909C] text-white py-1 px-2">
                Add to Cart
              </Box>
              <div className="h-4 w-4 border-t-8 border-r-8 border-transparent transform rotate-45 bg-[#78909C]"></div>
            </Box>
            <IoMdCart className="cursor-pointer mb-4" />
          </Box>
          <Box>
            <FaEye />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
