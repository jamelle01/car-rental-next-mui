import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import ResponsiveAppBar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import { Container } from "@mui/material";
import BookCar from "@/components/home/BookCar";
import PlanTrip from "@/components/PlanTrip";
import CarModels from "@/components/home/CarModels";
import Banner from "@/components/home/Banner";
import ChooseUs from "@/components/home/ChooseUs";
import Reviews from "@/components/home/Reviews";
import Faq from "@/components/home/Faq";
import Download from "@/components/home/Download";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Car Rental | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <Hero />
      <BookCar />
      <PlanTrip />
      <CarModels />
      <Banner />
      <ChooseUs />
      <Reviews />
      <Faq />
      <Download />
    </Container>
  );
}
