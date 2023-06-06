import { Box, Typography, Grid, Paper } from "@mui/material";
import Image from "next/image";

const PlanTrip = () => {
  return (
    <Box
      mb={10}
      mt={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid spacing={3} container>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Plan your trip now
          </Typography>
          <Typography fontWeight="bolder" variant="h3" align="center">
            Quick &amp; easy car rental
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Paper sx={{ padding: "20px 30px" }} elevation={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image src="/images/plan/icon1.png" width={200} height={200} />
            </Box>

            <Typography align="center" fontWeight="bolder" variant="h4">
              Select Car
            </Typography>
            <Typography align="center" variant="subtitle1" color={"gray"}>
              We offer a wide range of vehicles to meet all your driving needs.
              Choose the perfect car for your requirements.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ padding: "20px 30px" }} elevation={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image src="/images/plan/icon2.png" width={200} height={200} />
            </Box>

            <Typography align="center" fontWeight="bold" variant="h4">
              Contact Operator
            </Typography>
            <Typography align="center" variant="subtitle1" color={"gray"}>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ padding: "20px 30px" }} elevation={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image src="/images/plan/icon3.png" width={200} height={200} />
            </Box>

            <Typography align="center" fontWeight="bolder" variant="h4">
              Let's Drive
            </Typography>
            <Typography align="center" variant="subtitle1" color={"gray"}>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlanTrip;
