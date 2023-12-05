import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Button from "../../../components/button";
import { Link } from "react-router-dom";

type Props = {
  thumb: string;
  bannerBigTitle?: string;
  bannerSmallTitle?: string;
  buttonName?: string;
  buttonLink: string;
  className?: string;
};

const Banner: FC<Props> = ({
  thumb,
  bannerBigTitle,
  bannerSmallTitle,
  buttonName,
  buttonLink,
  className,
}) => {
  return (
    <Box className={`relative w-full  my-2 ${className}`}>
      <img src={thumb} alt="" className="w-full max-h-[360px] object-cover" />
      <Box className="absolute top-1/2 left-1/4 lg:-translate-x-1/2 -translate-y-1/2 ">
        <Typography className="!text-xl lg:!text-4xl !font-bold !uppercase w-60 text-[#78909C] !mb-4 ">
          {bannerBigTitle}
        </Typography>
        <Typography className="text-[#78909C] !font-bold !mb-4">
          {bannerSmallTitle}
        </Typography>
        <Link to={buttonLink}>
          {buttonName && <Button buttonName={buttonName} />}
        </Link>
      </Box>
    </Box>
  );
};

export default Banner;
