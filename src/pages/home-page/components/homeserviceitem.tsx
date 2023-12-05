import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  icon: string;
};

const HomeServiceItem: FC<Props> = ({ title, icon }) => {
  return (
    <Box className="flex !flex-col justify-center items-center">
      <img src={icon} alt="" className="w-14 h-14" />
      <Typography className="text-[#78909C] !text-xl !font-bold">
        {title}
      </Typography>
    </Box>
  );
};

export default HomeServiceItem;
