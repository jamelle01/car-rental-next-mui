import HeroPages from "@/components/HeroPages";
import Banner from "@/components/about/Banner";
import { Container } from "@mui/material";
import Head from "next/head";

const Testimonials = () => {
  return (
    <Container>
      <Head>
        <title>Car Rental | Testimonials</title>
      </Head>
      <HeroPages name="Testimonials" />
      <Banner />
    </Container>
  );
};

export default Testimonials;
