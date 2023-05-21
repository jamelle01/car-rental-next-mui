import ResponsiveAppBar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  );
}
