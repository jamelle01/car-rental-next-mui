import ResponsiveAppBar from "@/components/Navbar";
import "@/styles/globals.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
