import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Button, Grid, Typography } from "@mui/material";

const ChooseUs = () => {
  return (
    <Grid
      mb={20}
      spacing={8}
      container
      sx={{ textAlign: { xs: "center", md: "left" } }}
    >
      <Grid item xs={12}>
        <Box align="center">
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            alt="3 cars"
            src="\images\chooseUs\main.png"
          />
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          backgroundImage: "url('images/chooseUs/bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Typography fontWeight="bold" variant="h5" sx={{ mb: 2 }}>
          Why Choose Us
        </Typography>
        <Typography fontWeight="bold" variant="h3" sx={{ mb: 2 }}>
          Best valued deals you will ever find
        </Typography>
        <Typography color="gray" variant="body1" sx={{ mb: 2 }}>
          Discover the best deals you'll ever find with our unbeatable offers.
          We're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking
          the bank. Our deals are designed to give you the ultimate renting
          experience, so don't miss out on your chance to save big.
        </Typography>
        <Button
          size="large"
          variant="contained"
          endIcon={<ArrowForwardIosRoundedIcon />}
          sx={{
            height: "56px",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingRight: "18px",
          }}
        >
          Find Details
        </Button>
      </Grid>
      <Grid item md={6}>
        <Grid container>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <img alt="logo" src="\images\chooseUs\icon1.png" />
          </Grid>
          <Grid
            item
            md={9}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography fontWeight="bold" variant="h4" sx={{ mb: 1 }}>
              Cross Country Drive
            </Typography>
            <Typography color="gray" variant="body1" sx={{ mb: 4 }}>
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <img alt="logo" src="\images\chooseUs\icon2.png" />
          </Grid>
          <Grid
            item
            md={9}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography fontWeight="bold" variant="h4" sx={{ mb: 1 }}>
              All Inclusive Pricing
            </Typography>
            <Typography color="gray" variant="body1" sx={{ mb: 4 }}>
              Get everything you need in one convenient, transparent price with
              our all-inclusive pricing policy.
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <img alt="logo" src="\images\chooseUs\icon3.png" />
          </Grid>
          <Grid
            item
            md={9}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography fontWeight="bold" variant="h4" sx={{ mb: 1 }}>
              No Hidden Charges
            </Typography>
            <Typography color="gray" variant="body1" sx={{ mb: 4 }}>
              Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChooseUs;
