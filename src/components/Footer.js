import { Typography, Grid, Container, Button, Link } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CallIcon from "@mui/icons-material/Call";
import DraftsIcon from "@mui/icons-material/Drafts";

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" mb={2.5}>
            <strong>CAR </strong>
            Rental
          </Typography>
          <Typography variant="subtitle1" mb color={"gray"}>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="(123) -456-789" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary=" carrental@gmail.com" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>

        {/* second  */}

        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight={"bold"} mb>
            COMPANY
          </Typography>
          <List>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemText sx={{ padding: 0 }}>New York</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemText sx={{ padding: 0 }}>Careers</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemText sx={{ padding: 0 }}>Mobile</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemText sx={{ padding: 0 }}>Blog</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemText sx={{ padding: 0 }}>How we work</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
