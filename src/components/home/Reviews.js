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
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mx: { xs: "20px", sm: "100px", md: 0 },
            }}
          >
            <Button variant="outlined" size="large">
              Button 1
            </Button>
            <Button variant="outlined" size="large">
              Button 2
            </Button>
            <Button variant="outlined" size="large">
              Button 3
            </Button>
            <Button variant="outlined" size="large">
              Button 4
            </Button>
            <Button variant="outlined" size="large">
              Button 5
            </Button>
            <Button variant="outlined" size="large">
              Button 6
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <img
              alt="hello"
              src="/images/cars-big/audia1.jpg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ mx: { xs: "20px", sm: "100px", md: 0 } }}>
            <TableContainer component={Paper} elevation={6}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      component="th"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "primary.contrastText",
                      }}
                      align="center"
                      colSpan={2}
                    >
                      $45 / rent per day
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Model
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Model
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Mark
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Mark
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Year
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Year
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Doors
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Doors
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      AC
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      AC
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Transmission
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Transmission
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Fuel
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "1px solid lightgray" }}
                    >
                      Fuel
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button fullWidth sx={{ marginTop: 1 }} variant="contained">
              Button 1
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;
