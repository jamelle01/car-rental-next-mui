import HeroPages from "@/components/HeroPages";
import Banner from "@/components/about/Banner";
import { Container } from "@mui/material";
import Head from "next/head";

const VehicleModels = () => {
  return (
    <Container>
      <Head>
        <title>Car Rental | Vehicle Models</title>
      </Head>
      <HeroPages name="Vehicle Models" />
      <Banner />
    </Container>
  );
};

export default VehicleModels;
