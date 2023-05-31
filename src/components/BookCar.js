import {
  Box,
  InputLabel,
  Button,
  Paper,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";

import Typography from "@mui/material/Typography";

import { useState } from "react";

const BookCar = () => {
  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  return (
    <Paper elevation={3}>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Select Your Car Type"
              variant="outlined"
              fullWidth
              select
            >
              {/* Dropdown options */}
              <MenuItem value="">Select your car type</MenuItem>
              <MenuItem value="Audi A1 S-Line">Audi A1 S-Line</MenuItem>
              <MenuItem value="VW Golf 6">VW Golf 6</MenuItem>
              <MenuItem value="Toyota Camry">Toyota Camry</MenuItem>
              <MenuItem value="BMW 320 ModernLine">BMW 320 ModernLine</MenuItem>
              <MenuItem value="Mercedes-Benz GLK">Mercedes-Benz GLK</MenuItem>
              <MenuItem value="VW Passat CC">VW Passat CC</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Pick-up" variant="outlined" fullWidth select>
              {/* Dropdown options */}
              <MenuItem value="">Select pick up location</MenuItem>
              <MenuItem value="Belgrade">Belgrade</MenuItem>
              <MenuItem value="Novi Sad">Novi Sad</MenuItem>
              <MenuItem value="Nis">Nis</MenuItem>
              <MenuItem value="Kragujevac">Kragujevac</MenuItem>
              <MenuItem value="Subotica">Subotica</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField label="Drop-of" variant="outlined" fullWidth select>
              {/* Dropdown options */}
              <MenuItem value="">Select pick up location</MenuItem>
              <MenuItem value="Belgrade">Belgrade</MenuItem>
              <MenuItem value="Novi Sad">Novi Sad</MenuItem>
              <MenuItem value="Nis">Nis</MenuItem>
              <MenuItem value="Kragujevac">Kragujevac</MenuItem>
              <MenuItem value="Subotica">Subotica</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              label="Check-in Date"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              variant="outlined"
              label="Check-out Date"
              fullWidth
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default BookCar;
