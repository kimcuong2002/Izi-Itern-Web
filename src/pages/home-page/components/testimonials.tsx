import { Box, Divider, Typography, Grid, Avatar } from "@mui/material";
import testimonials from "../../../assets/images/tetimonialsbg.jpeg";

import { TESTIMONIALS } from "../../../data/constants";

const Testimonials = () => {
  return (
    <Box className="w-full relative !my-80 xl:!my-60 2xl:!my-0">
      <img src={testimonials} alt="aa" />
      <Box className="w-full flex flex-col justify-center items-center absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Typography className="!text-5xl !font-bold text-[#78909C] !mb-10">
          Our Latest Products
        </Typography>
        <Divider className="my-10 border-red-600" />
        <Grid container spacing={4}>
          {TESTIMONIALS.map((item) => (
            <Grid item xs={12} xl={4} key={item.id}>
              <Typography className="!text-xl text-center">
                "{item.comment}"
              </Typography>
              <Box className="w-full flex justify-center items-center mt-4 gap-2">
                <Avatar
                  alt="Remy Sharp"
                  src={item.image}
                  className="!w-20 !h-20"
                />
                <Typography className="text-[#212529]">{item.user}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Testimonials;
