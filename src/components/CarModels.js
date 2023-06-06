import { Box, Grid, Typography } from "@mui/material";

const CarModels = () => {
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
      <Grid container spacing={3}>
        <Grid item xs={12} textAlign="center">
          <Typography fontWeight="bold" variant="h5">
            Vehicle Models
          </Typography>
          <Typography fontWeight="bold" variant="h3">
            Our rental fleet
          </Typography>

          <Typography
            m="auto"
            color="#777"
            sx={{ maxWidth: "500px" }}
            variant="body1"
          >
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarModels;
