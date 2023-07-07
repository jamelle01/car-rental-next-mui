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
        color="primary.contrastText"
        fontWeight="bolder"
        align="center"
        variant="h1"
        sx={{
          fontSize: {
            xs: "1rem",
            md: "2rem",
            lg: "3rem",
          },
          // additional styling if needed
        }}
      >
        Book a car by getting in touch with us{" "}
      </Typography>
      <Typography
        fontWeight="bold"
        align="center"
        variant="h1"
        sx={{
          fontSize: {
            xs: "1rem",
            md: "2rem",
            lg: "3rem",
          },
          // additional styling if needed
        }}
        color="primary.main"
      >
        <CallIcon fontSize="" /> (123) 456-7869
      </Typography>
    </Box>
  );
};

export default Banner;
