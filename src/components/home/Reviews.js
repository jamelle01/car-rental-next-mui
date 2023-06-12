import { Box, Button, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Reviews = () => {
  return (
    <Box
      mb={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3}>
        <Grid mb={8} item xs={12} textAlign="center">
          <Typography fontWeight="bold" variant="h5">
            Reviewed by People
          </Typography>
          <Typography fontWeight="bold" variant="h3">
            Client's Testimonials
          </Typography>

          <Typography
            m="auto"
            color="#777"
            pt
            sx={{ maxWidth: "600px" }}
            variant="body1"
          >
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ height: "100%" }} elevation={9}>
            <Grid container p={5} spacing={2}>
              <Grid xs={12} item>
                <Typography variant="h6">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="profile"
                  style={{
                    maxWidth: "70px",
                    borderRadius: "90px",
                    height: "auto",
                  }}
                  src="/images/testimonials/pfp1.jpg"
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                item
                xs={7}
              >
                <div>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Harry Poter
                  </Typography>
                  <Typography variant="subtitle2">Belgrade</Typography>
                </div>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                item
                xs={3}
              >
                <Typography
                  variant="h1"
                  fontWeight={"bold"}
                  color={"primary.main"}
                >
                  "
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ height: "100%" }} elevation={9}>
            <Grid container p={5} spacing={2}>
              <Grid xs={12} item>
                <Typography variant="h6">
                  "The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!"
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  alt="profile"
                  style={{
                    maxWidth: "70px",
                    borderRadius: "90px",
                    height: "auto",
                  }}
                  src="/images/testimonials/pfp2.jpg"
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                item
                xs={7}
              >
                <div>
                  <Typography variant="h5" fontWeight={"bold"}>
                    Ron Rizzly
                  </Typography>
                  <Typography variant="subtitle2">Novi Sad</Typography>
                </div>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                item
                xs={3}
              >
                <Typography
                  variant="h1"
                  fontWeight={"bold"}
                  color={"primary.main"}
                >
                  "
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;
