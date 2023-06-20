import { Typography, Box } from "@mui/material";

const HeroPages = ({ name }) => {
  return (
    <Box>
      <Typography variant="h3" fontWeight={'bold'} m={3}>
        {name}
      </Typography>
    </Box>
  );
};

export default HeroPages;
