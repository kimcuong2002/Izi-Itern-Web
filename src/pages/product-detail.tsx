import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { DATA } from "../data/constants";
import { useEffect, useState } from "react";
import { productType } from "../components/common/type";
import { BiDollar } from "react-icons/bi";
import Button from "../components/button";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<productType>();
  console.log(product);

  useEffect(() => {
    const productDetail = DATA.find((item) => +item.id === +id);
    setProduct(productDetail);
  }, [id]);

  return (
    <Box>
      <Grid container spacing={10}>
        <Grid item lg={6}>
          <img src={product?.image} alt="" />
        </Grid>
        <Grid item lg={6}>
          <Typography className="text-[#212529] !text-5xl !font-bold">
            {product?.title}
          </Typography>
          <Typography className="text-[#212529] opacity-70 !my-4">
            {product?.category}
          </Typography>
          <Typography className="text-[#212529] !text-base !font-bold opacity-80">
            {product?.content}
          </Typography>
          <Box className="my-6 flex items-center gap-6">
            {product?.oldPrice && (
              <Typography className="text-[#212529] !text-3xl !font-bold flex items-center opacity-70">
                <BiDollar />
                {product?.oldPrice}
              </Typography>
            )}
            <Typography className="text-[#212529] !text-3xl !font-bold flex items-center">
              <BiDollar />
              {product?.price}
            </Typography>
          </Box>
          <Button buttonName="Add to cart" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
