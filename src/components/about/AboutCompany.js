import { Box, Grid, Typography } from "@mui/material";

const AboutCompany = () => {
  return (
    <Grid container spacing={4} sx={{ p: { xs: 2, md: 10 } }}>
      <Grid item xs={12} md={6} py={4}>
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src="/images/about/about-main.jpg"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          sx={{ textAlign: { xs: "center", lg: "left" } }}
          fontWeight={"bold"}
          variant="h6"
        >
          About Company
        </Typography>
        <Typography
          sx={{ textAlign: { xs: "center", lg: "left" } }}
          fontWeight={"bold"}
          variant="h3"
        >
          You start the engine and your adventure begins
        </Typography>
        <Typography
          sx={{ textAlign: { xs: "center", lg: "left" } }}
          variant="body1"
        >
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </Typography>
        <Grid container spacing={3} p={3}>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              textAlign: { xs: "center" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <img src="/images/about/icon1.png" />
            <Typography fontWeight={"bold"} variant="h3">
              20
            </Typography>
            <Typography variant="body1">
              Car
              <br />
              Types
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              textAlign: { xs: "center" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <img src="/images/about/icon2.png" />
            <Typography fontWeight={"bold"} variant="h3">
              85
            </Typography>
            <Typography variant="body1">
              Rental
              <br />
              Outlets
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              textAlign: { xs: "center" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <img src="/images/about/icon3.png" />
            <Typography fontWeight={"bold"} variant="h3">
              75
            </Typography>
            <Typography variant="body1">
              Repair
              <br />
              Shop
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutCompany;
