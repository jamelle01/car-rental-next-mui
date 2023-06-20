import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

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
        color={"primary.contrastText"}
        fontWeight={"bolder"}
        align="center"
        variant="h2"
      >
        Book a car by getting in touch with us{" "}
      </Typography>
      <Typography fontWeight="bold" align="center" variant="h2" color="primary.main">
        <CallIcon fontSize="" /> (123) 456-7869
      </Typography>
    </Box>
  );
};

export default Banner;
