import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";

const PlanTrip = () => {
  return (
    <Grid my={3} container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Plan your trip now
        </Typography>
        <Typography fontWeight="bold" variant="h3" align="center">
          Quick &amp; easy car rental
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: "10px", height: "100%" }} elevation={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/plan/icon1.png"
              alt="Select Car"
              style={{ maxWidth: "140px" }}
            />
          </Box>

          <Typography align="center" fontWeight="bold" variant="h4">
            Select Car
          </Typography>
          <Typography align="center" variant="subtitle1" color="gray">
            We offer a wide range of vehicles to meet all your driving needs.
            Choose the perfect car for your requirements.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: "10px", height: "100%" }} elevation={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/plan/icon2.png"
              alt="Contact Operator"
              style={{ maxWidth: "140px" }}
            />
          </Box>

          <Typography align="center" fontWeight="bold" variant="h4">
            Contact Operator
          </Typography>
          <Typography align="center" variant="subtitle1" color="gray">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: "10px", height: "100%" }} elevation={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/images/plan/icon3.png"
              alt="Let's Drive"
              style={{ maxWidth: "140px" }}
            />
          </Box>

          <Typography align="center" fontWeight="bold" variant="h4">
            Let's Drive
          </Typography>
          <Typography align="center" variant="subtitle1" color="#777">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PlanTrip;
