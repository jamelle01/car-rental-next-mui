import { Container, Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery("(max-width: 800px)");

  return (
    <Container
      style={{
        height: "100vh",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobileView ? "center" : "flex-start",
            height: "80vh",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bolder",
                textAlign: isMobileView ? "center" : "left",
              }}
            >
              Plan your trip now
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                textAlign: isMobileView ? "center" : "left",
              }}
            >
              Save <span style={{ color: "#FF5722" }}>big</span> with our car
              rental
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontWeight: "bolder",
                textAlign: isMobileView ? "center" : "left",
              }}
            >
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Button variant="contained">Book Ride</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/images/hero/hero-bg.png"
            style={{
              position: "absolute",
              right: 0,
              width: "50%",
              height: "auto",
              display: isMobileView ? "none" : "block",
              borderRadius: "8px",
              top: "5%",
            }}
          />
          <img
            src="../images/hero/main-car.png"
            style={{
              position: "absolute",
              right: 0,
              width: isMobileView ? "auto" : "55%",
              height: "auto",
              display: isMobileView ? "none" : "block",
              top: "50%",
              transform: "translateY(-30%)",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
