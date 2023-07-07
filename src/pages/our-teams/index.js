import HeroPages from "@/components/HeroPages";
import Banner from "@/components/about/Banner";
import { Container } from "@mui/material";
import Head from "next/head";

const OurTeams = () => {
  return (
    <Container>
      <Head>
        <title>Car Rental | Our Teams</title>
      </Head>
      <HeroPages name="Our Teams" />
      <Banner />
    </Container>
  );
};

export default OurTeams;
