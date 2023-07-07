import HeroPages from "@/components/HeroPages";
import Banner from "@/components/about/Banner";
import { Container } from "@mui/material";
import Head from "next/head";

const Contact = () => {
  return (
    <Container>
      <Head>Car Rental | Contact</Head>
      <HeroPages name="Contact" />
      <Banner/>
    </Container>
  );
};

export default Contact;
