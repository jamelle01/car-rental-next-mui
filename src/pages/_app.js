import ResponsiveAppBar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}
