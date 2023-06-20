import { Box, Grid, Typography } from "@mui/material";

const AboutCompany = () => {
  return (
    <Grid container p={10}>
      <Grid item xs={6}>
        <img src="/images/about/about-main.jpg" />
      </Grid>
      <Grid item xs={6}>
        <Typography fontWeight={"bold"} variant="h6">
          About Company
        </Typography>
        <Typography fontWeight={"bold"} variant="h3">
          You start the engine and your adventure begins
        </Typography>
        <Typography variant="body1">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </Typography>
        <Grid container m={3}>
          <Grid item xs={4}>
            <img src="/images/about/icon1.png" />
            <Typography fontWeight={"bold"} variant="h3">20</Typography>
            <Typography variant="body1">Car Types</Typography>
            
          </Grid>
          <Grid item xs={4}>
            <img src="/images/about/icon2.png" />
            <Typography fontWeight={"bold"} variant="h3">85</Typography>
            <Typography variant="body1">Rental Outlets</Typography>
          </Grid>
          <Grid item xs={4}>
            <img src="/images/about/icon3.png" />
            <Typography fontWeight={"bold"} variant="h3">75</Typography>
            <Typography variant="body1">Repair Shop</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutCompany;
