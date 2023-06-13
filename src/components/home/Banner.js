import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      py={4}
      sx={{
        backgroundColor: "#2a2a2a",
      }}
      mb={10}
    >
      <Typography
        color={"primary.contrastText"}
        fontWeight={"bolder"}
        align="center"
        variant="h2"
      >
        Save big with our cheap car rental!
      </Typography>
      <Typography color="primary.contrastText" align="center" variant="h5">
        Top Airports. Local Suppliers.{" "}
        <Typography component="span" color="primary.main">
          24/7
        </Typography>{" "}
        Support.
      </Typography>
    </Box>
  );
};

export default Banner;
