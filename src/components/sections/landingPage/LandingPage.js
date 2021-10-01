import * as React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "@mui/material";
import Animations from "./animation/Animations";
import './animation/lineAnimation.css';
import './landingPage.css';



export default function LandingPage() {
  return (
    <Grid className="landing-page">
      <Animations />
      <Grid item xs={12} sx={{ zIndex: 1 }}>
        <Typography className="title">Przemek Paziewski</Typography>
      </Grid>
      <Grid item xs={12} sx={{ zIndex: 1 }}>
        <Typography className="title-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore aliqua.
        </Typography>
      </Grid>
      <Button
        className="arrow-link"
        aria-label="Scroll to about me!"
        sx={{ zIndex: 1 }}
      >
        <Link
          to="about-me"
          spy={true}
          smooth={true}
          duration={800}
          cursor="pointer"
        >
          <MdKeyboardArrowDown className="arrow" />
        </Link>
      </Button>
    </Grid>
  );
}
