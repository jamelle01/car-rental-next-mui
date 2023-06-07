import { Box, Grid, Typography } from "@mui/material";

const ChooseUs = () => {
  return (
    <Grid spacing={8} container>
      <Grid item xs={12}>
        <img alt="3 cars" />
      </Grid>
      <Grid item md={7}>
        <Typography fontWeight="bold" variant="h5" sx={{ mb: 2 }}>
          Why Choose Us
        </Typography>
        <Typography fontWeight="bold" variant="h3" sx={{ mb: 2 }}>
          Best valued deals you will ever find
        </Typography>
        <Typography color="gray" variant="body1" sx={{ mb: 4 }}>
          Discover the best deals you'll ever find with our unbeatable offers.
          We're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking
          the bank. Our deals are designed to give you the ultimate renting
          experience, so don't miss out on your chance to save big.
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box>
          <Typography fontWeight="bold" variant="h4" sx={{ mb: 1 }}>
            Cross Country Drive
          </Typography>
          <Typography color="gray" variant="body1" sx={{ mb: 4 }}>
            Take your driving experience to the next level with our top-notch
            vehicles for your cross-country adventures.
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" variant="h4" sx={{ mb: 1 }}>
            All Inclusive Pricing
          </Typography>
          <Typography color="gray" variant="body1" sx={{ mb: 4 }}>
            Get everything you need in one convenient, transparent price with
            our all-inclusive pricing policy.
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" variant="h4" sx={{ mb: 1 }}>
            No Hidden Charges
          </Typography>
          <Typography color="gray" variant="body1" sx={{ mb: 4 }}>
            Enjoy peace of mind with our no hidden charges policy. We believe in
            transparent and honest pricing.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChooseUs;
