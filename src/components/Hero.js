import { Container, Box, Grid } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery("(max-width: 800px)");

  return (
    <Container
      style={{
        height: "100vh",
      }}
    >
      <div>
        <img
          src="/images/hero/hero-bg.png"
          style={{
            position: "absolute",
            right: 0,
            width: "50%",
            // width: isMobileView ? "auto" : "70%", // Adjust the width based on isMobileView
            height: "auto", // Make the height auto to maintain aspect ratio
            display: isMobileView ? "none" : "block",
          }}
        />
        <img
          src="../images/hero/main-car.png"
          style={{
            position: "absolute",
            right: 0,
            width: isMobileView ? "auto" : "60%",
            height: "auto",
            display: isMobileView ? "none" : "block",
            top: "50%",
            transform: "translateY(-40%)",
          }}
        />
      </div>
    </Container>
  );
};

export default Hero;
