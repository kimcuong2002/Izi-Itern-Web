import { Box, Grid } from "@mui/material";
import Banner from "./components/banner";
import chair from "../../assets/images/chair.jpg";
import sofabanner from "../../assets/images/sofa-bg-banner.jpg";
import wall from "../../assets/images/wall.jpg";
import woodenchair from "../../assets/images/wooden-chair.jpg";
import { PRODUCT_DATA } from "./constants";
import HomeServiceItem from "./components/homeserviceitem";
import sale from "../../assets/images/sale-highlight-bg-banner.png";
import LatestProduct from "./components/latest-product";

const Home = () => {
  return (
    <Box>
      <Banner
        thumb={sofabanner}
        bannerBigTitle="style comfort& affordable"
        buttonName="Explore Store"
        buttonLink=""
      />
      <Grid container spacing={2} className="flex justify-center items-center">
        <Grid item lg={4}>
          <img src={chair} alt="" />
        </Grid>
        <Grid item lg={8}>
          <Banner
            thumb={wall}
            bannerBigTitle="style comfort& affordable"
            buttonName="Explore Store"
            buttonLink=""
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="flex justify-center items-center">
        <Grid item lg={8}>
          <Banner
            thumb={wall}
            bannerBigTitle="style comfort& affordable"
            buttonName="Explore Store"
            buttonLink=""
          />
        </Grid>
        <Grid item lg={4}>
          <img src={woodenchair} alt="" />
        </Grid>
      </Grid>
      <Box className="flex justify-between items-center my-14">
        {PRODUCT_DATA.map((item) => (
          <HomeServiceItem
            icon={item.icon}
            title={item.title}
            key={item.title}
          />
        ))}
      </Box>
      <Banner
        buttonLink=""
        thumb={sale}
        bannerBigTitle="sale!"
        bannerSmallTitle="10% Off On All Products!"
        buttonName="shop now"
        className="bg-gray-200"
      />
      <LatestProduct />
    </Box>
  );
};

export default Home;
