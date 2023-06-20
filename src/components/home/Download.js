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

const Download = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      mb={10}
      sx={{
        // backgroundImage: `url("/images/banners/bg02.png")`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "right",
        // backgroundImage: 'url("/images/banners/bg02.png")',
        // backgroundColor: "gray",
        // backgroundPosition: "top center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // width: "100%",
        // height: "auto",
        // padding: "10rem 0",
      }}
    >
      <img
        src="/images/banners/bg02.png"
        style={{
          position: "absolute",
          // right: "-90px",
          overflowX: "hidden",
          overflowY: "hidden",
          width: "80%",
          height: "auto",
          // backgroundColor: "gray",
          display: isMobileView ? "none" : "block",
          // top: "5%",
          zIndex: -1,
        }}
        alt="Hero Background"
      />
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
            variant="h3"
            sx={{
              paddingY: isMobileView ? "8px" : "16px",
              fontWeight: "bolder",
              textAlign: isMobileView ? "center" : "left",
            }}
          >
            Download our app to get most out of it
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
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
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
              <img src="/images/download/appstore.svg" />
            </Grid>
            <Grid item xs={10} md={6}>
              <img src="/images/download/googleapp.svg" />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          zIndex: 2,
        }}
      >
        {/* <img
          src="/images/banners/bg02.png"
          style={{
            // position: "absolute",
            // right: 0,
            // width: "0%",
            // height: "auto",
            display: isMobileView ? "none" : "block",
            borderRadius: "8px",
            // top: "5%",
            zIndex: -1,
          }}
          alt="Hero Background"
        /> */}
        {/* <img
          src="../images/hero/main-car.png"
          style={{
            // position: "absolute",
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
        /> */}
      </Grid>
    </Grid>
  );
};

export default Download;
