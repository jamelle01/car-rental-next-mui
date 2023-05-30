import { Box, InputLabel, Button, Paper, Grid, TextField } from "@mui/material";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";

const BookCar = () => {
  return (
    <Paper elevation={3}>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="First Name" variant="outlined" fullWidth select>
              {/* Dropdown options */}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Last Name" variant="outlined" fullWidth select>
              {/* Dropdown options */}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
  <InputLabel>Check-in Date</InputLabel>
  <TextField
    variant="outlined"
    fullWidth
    type="date"
  />
</Grid>
<Grid item xs={12} sm={6} md={4}>
  <InputLabel>Check-out Date</InputLabel>
  <TextField
    variant="outlined"
    fullWidth
    type="date"
  />
</Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              fullWidth
              endIcon={<ConfirmationNumberRoundedIcon />}
              sx={{
                height: "100%",
                justifyContent: "center",
              }}
            >
              Book Ride
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default BookCar;
