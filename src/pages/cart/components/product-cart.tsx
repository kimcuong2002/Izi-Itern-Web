import { Box, Grid, Typography } from "@mui/material";
import chair from "../../../assets/images/chair.jpg";
import { IoCloseCircleOutline } from "react-icons/io5";

const ProductCart = () => {
  return (
    <Box className="w-full">
      <Grid container spacing={4} className="items-center ">
        <Grid lg={2} item>
          <img src={chair} alt="" className="rounded-lg" />
        </Grid>
        <Grid lg={3} item>
          <Typography className="text-[#6C757D] py-2">Chair</Typography>
          <Typography className="!font-bold">
            Armchair with Head Rester
          </Typography>
        </Grid>
        <Grid
          lg={3}
          item
          className="flex justify-center items-center !text-4xl gap-3">
          <Box className="border-2 px-3">-</Box>
          <Typography className="!font-bold">1</Typography>
          <Box className="border-2 px-3">+</Box>
        </Grid>
        <Grid lg={3} item>
          <Typography className="!font-bold !text-lg">$safbahsbjk</Typography>
        </Grid>
        <Grid lg={1} item className="flex justify-center items-center">
          <IoCloseCircleOutline className="text-6xl" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCart;
