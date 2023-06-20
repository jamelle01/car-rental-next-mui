import HeroPages from "@/components/HeroPages";
import PlanTrip from "@/components/PlanTrip";
import AboutCompany from "@/components/about/AboutCompany";
import Banner from "@/components/about/Banner";
import { Container } from "@mui/material";
import Head from "next/head";

const About = () => {
  return (
    <Container>
      <Head>
        <title>Car Rental | About</title>
      </Head>
      <HeroPages name="About"/>
      <AboutCompany/>
      <PlanTrip/>
      <Banner/>
    </Container>
  );
};

export default About;
