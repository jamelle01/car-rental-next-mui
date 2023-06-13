import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Hero = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container paddingBottom={15}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: isMobileView ? "center" : "flex-start",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            margin: isMobileView ? "35px" : 0,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              paddingTop: isMobileView ? "16px" : "100px",
              fontWeight: "bolder",
              textAlign: isMobileView ? "center" : "left",
            }}
          >
            Plan your trip now
          </Typography>
          <Typography
            variant="h2"
            sx={{
              paddingY: isMobileView ? "8px" : "16px",
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
              paddingY: isMobileView ? "20px" : "10px",
              textAlign: isMobileView ? "center" : "left",
              color: "#777",
            }}
          >
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </Typography>
          <Grid
            sx={{
              paddingY: "8px",
              textAlign: isMobileView ? "center" : "left",
              justifyContent: isMobileView ? "center" : "flex-start",
            }}
            container
            spacing={2}
          >
            <Grid item xs={10} md={6}>
              <Button
                fullWidth
                variant="contained"
                endIcon={<ConfirmationNumberRoundedIcon />}
                sx={{
                  height: "56px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
              >
                <Typography noWrap variant="button">
                  Book Ride
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={10} md={6}>
              <Button
                fullWidth
                endIcon={<ArrowForwardIosRoundedIcon />}
                sx={{
                  height: "56px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
                variant="outlined"
              >
                <Typography noWrap variant="button">
                  Learn More
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} sx={{ zindex: 2 }}>
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
            zIndex: -1,
          }}
          alt="Hero Background"
        />
        <img
          src="../images/hero/main-car.png"
          style={{
            position: "absolute",
            right: 0,
            width: isMobileView ? "auto" : "53%",
            height: "auto",
            display: isMobileView ? "none" : "block",
            top: "30%",
            // transform: "translateY(-30%)",
            borderRadius: "8px",
            zIndex: -1,
          }}
          alt="Main Car"
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
