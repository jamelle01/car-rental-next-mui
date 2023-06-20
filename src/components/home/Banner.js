import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      py={4}
      sx={{
        backgroundColor: "#2a2a2a",
      }}
      mt={10}
    >
      <Typography
        p
        color={"primary.contrastText"}
        fontWeight={"bolder"}
        align="center"
        variant="h2"
      >
        Book a car by getting in touch with us (123) 456-7869<Typography component="span" color="primary.main">
          24/7
        </Typography>{" "}
      </Typography>
      <Typography color="primary.contrastText" align="center" variant="h5">
        Top Airports. Local Suppliers.{" "}
        
        Support.
      </Typography>
    </Box>
  );
};

export default Banner;
