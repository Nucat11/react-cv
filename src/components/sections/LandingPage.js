import * as React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "@mui/material";

export default function LandingPage() {
  return (
    <Grid className="landingPage">
      <Grid item xs={12}>
        <Typography className="title">Przemysław Paziewski</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="titleP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore aliqua.
        </Typography>
      </Grid>
      <Button className="arrowLink" aria-label="Scroll to about me!">
        <Link
          to="aboutMe"
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
