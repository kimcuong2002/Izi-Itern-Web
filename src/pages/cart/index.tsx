import {
  Box,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { BiDollar } from "react-icons/bi";
import useCartStore from "../../feature/hooks/use-cart-store";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  return (
    <Box className="w-full border-2 border-gray-300 rounded-xl ">
      <Grid container>
        <Grid item xs={12} lg={8} className="h-[700px]">
          <Box className="p-10">
            <Box className="flex justify-between items-center">
              <Typography className="!text-3xl lg:!text-5xl !font-bold">
                Shopping Cart
              </Typography>
              <Typography className="!text-lg text-gray-500 !font-bold">
                1 items
              </Typography>
            </Box>
            <Divider className="!my-8" />
            {/* <Box className="h-[600px] scroll-auto">
              {cart && cart.map((item) => <ProductCart key={} />)}
            </Box> */}
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box className="bg-[#EFEFEF] p-10 rounded-r-xl h-[700px]">
            <Typography className="!text-3xl lg:!text-5xl !font-bold text-[#78909C]">
              Summary
            </Typography>
            <Divider className="!my-8" />
            <Typography className="uppercase !text-3xl !py-8">
              give code
            </Typography>
            <TextField id="outlined-multiline-flexible" multiline maxRows={4} />
            <Typography>Enter your code</Typography>
            <Divider className="!my-10" />
            <Box className="flex justify-between items-center">
              <Typography className="uppercase !text-xl !font-bold">
                total price
              </Typography>
              <Typography className="flex justify-center items-center">
                <BiDollar />
                0.00
              </Typography>
            </Box>
            <Box className="w-full flex justify-center items-center my-10">
              <Button variant="outlined" size="large">
                Proceed To Checkout
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
