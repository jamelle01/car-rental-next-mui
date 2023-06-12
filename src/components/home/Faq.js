import { Box, Button, Grid, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { useState } from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid container mb={10} spacing={3}>
      <Grid mb={8} item xs={12} textAlign="center">
        <Typography fontWeight="bold" variant="h5">
          FAQ
        </Typography>
        <Typography fontWeight="bold" variant="h3">
          Frequently Asked Questions
        </Typography>

        <Typography
          m="auto"
          color="#777"
          pt
          sx={{ maxWidth: "600px" }}
          variant="body1"
        >
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </Typography>
      </Grid>
      <Grid item xs={12} mx={30}>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                1. What is special about comparing rental car deals?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" color="#777">
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>2. How do I find the car rental deals?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" color="#777">
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                3. How do I find such low rental car prices?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" color="#777">
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    </Grid>
  );
};

export default Faq;
