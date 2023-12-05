import { Box, Grid, Typography } from "@mui/material";
import Product from "../../../components/product";
import { DATA } from "../../../data/constants";

const LatestProduct = () => {
  const latestProduct = DATA.slice(0, 4);

  return (
    <Box className="my-20 flex flex-col justify-center items-center">
      <Typography className="!text-5xl !font-bold text-[#78909C]">
        Our Latest Products
      </Typography>
      <hr className="my-10 border-red-600" />
      <Grid container spacing={2}>
        {latestProduct.map((item) => (
          <Grid item lg={3} key={item.id} className="!my-4 lg:!my-0">
            <Product
              image={item.image}
              title={item.title}
              category={item.category}
              oldPrice={item.oldPrice}
              price={item.price}
              id={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestProduct;
