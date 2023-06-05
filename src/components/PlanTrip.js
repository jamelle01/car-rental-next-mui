import { Box, Typography, Grid } from "@mui/material";

const PlanTrip = () => {
  return (
    <Box
      mb
      mt={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Plan your trip now
        </Typography>
        <Typography fontWeight={"bolder"} variant="h3" align="center">
          Quick &amp; easy car rental
        </Typography>
      </Grid>
    </Box>
  );
};

export default PlanTrip;
