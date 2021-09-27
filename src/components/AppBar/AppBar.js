import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

export default function HideAppBar(props) {
  const [navbar, setNavbar] = useState(false);
  const trigger = useScrollTrigger({
      threshold: 200
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
    <React.Fragment>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={navbar ? "navbar active" : "navbar"}>
          <Toolbar>
            <Typography variant="h6" component="div">
              xD21
            </Typography>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </React.Fragment>
  );
}
