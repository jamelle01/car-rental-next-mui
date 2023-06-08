import { Grid } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={3}>
          <Typography variant="h3">CAR Rental</Typography>
          <Typography variant="subtitle2" color={"lightgray"}>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </Typography>
          (123) -456-789 carrental@gmail.com
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
