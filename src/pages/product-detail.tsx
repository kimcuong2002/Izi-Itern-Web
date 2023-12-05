import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { DATA } from "../data/constants";
import { useEffect, useState } from "react";
import { productType } from "../feature/services/type";
import { BiDollar } from "react-icons/bi";
import Button from "../components/button";
import useCartStore from "../feature/hooks/use-cart-store";

const ProductDetail = (product: productType) => {
  const { id } = useParams();
  const [products, setProduct] = useState<productType>();
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    const productDetail = DATA.find((item) => +item.id === +id);
    setProduct(productDetail);
  }, [id]);

  const handleAddToCart = (product: productType) => {
    addToCart(product);
  };
  console.log(cart[0]);

  return (
    <Box>
      <Grid container spacing={10}>
        <Grid item lg={6}>
          <img src={products?.image} alt="" />
        </Grid>
        <Grid item lg={6}>
          <Typography className="text-[#212529] !text-5xl !font-bold">
            {products?.title}
          </Typography>
          <Typography className="text-[#212529] opacity-70 !my-4">
            {products?.category}
          </Typography>
          <Typography className="text-[#212529] !text-base !font-bold opacity-80">
            {products?.content}
          </Typography>
          <Box className="my-6 flex items-center gap-6">
            {products?.oldPrice && (
              <Typography className="text-[#212529] !text-3xl !font-bold flex items-center opacity-70">
                <BiDollar />
                {products?.oldPrice}
              </Typography>
            )}
            <Typography className="text-[#212529] !text-3xl !font-bold flex items-center">
              <BiDollar />
              {products?.price}
            </Typography>
          </Box>
          <Button
            buttonName="Add to cart"
            onClick={() => handleAddToCart(product)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
