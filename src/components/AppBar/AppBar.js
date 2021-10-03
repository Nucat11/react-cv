import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll } from "react-scroll";
import { Box } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
import "./AppBar.css";

export default function HideAppBar(props) {
  const [navbar, setNavbar] = useState(false);
  const trigger = useScrollTrigger({
    threshold: 200,
  });

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={navbar ? "navbar active" : "navbar"}>
          <Toolbar className="toolbar">
            <Box sx={{ flexGrow: 1 }} />
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ marginRight: "2em", height: '100%' }}
              className="app-bar-text"
            >
              <Link to="about-me" spy={true} smooth={true} duration={800}>
                <Typography>About Me</Typography>
              </Link>

              <Link to="projects" spy={true} smooth={true} duration={800}>
                <Typography>Projects</Typography>
              </Link>

              <Link to="contact" spy={true} smooth={true} duration={800}>
                <Typography>Contact Me</Typography>
              </Link>
            </Breadcrumbs>
          </Toolbar>
        </AppBar>
      </Slide>
    </Box>
  );
}
