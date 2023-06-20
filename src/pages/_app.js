import ResponsiveAppBar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Head>
      <link rel="icon" href="/rent-icon2.png" style={{height:"50%"}}/>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}
