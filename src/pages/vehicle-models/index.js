import HeroPages from "@/components/HeroPages";
import Banner from "@/components/about/Banner";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Head from "next/head";

const VehicleModels = () => {
  return (
    <Container>
      <Head>
        <title>Car Rental | Vehicle Models</title>
      </Head>
      <HeroPages name="Vehicle Models" />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="280"
              image="/images/cars-big/audi-box.png"
            />
            <CardContent>
              <Grid container sx={{background: 'red'}}>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="h4"
                    fontWeight={"bold"}
                    component="div"
                  >
                    Lizard
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    // gutterBottom
                    variant="h4"
                    fontWeight={"bold"}
                    // component="div"
                    sx={{ textAlign: "right" }}
                  >
                    $45
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Banner />
    </Container>
  );
};

export default VehicleModels;
