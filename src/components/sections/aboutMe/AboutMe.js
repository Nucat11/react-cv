import * as React from "react";
import { Typography } from "@mui/material";
import "./aboutMe.css";
import { Box } from "@mui/material";
import Circle from "./Circle";
import { Grid } from "@mui/material";
import Triangle from "./Triangle";

export default function AboutMe() {
  return (
    <Box id="about-me">
      <div className="circle-div">
        <Circle />
      </div>
      <div className="triangle-div">
        <Triangle />
      </div>
      <Box className="box-with-avatar">
        <img
          src="https://res.cloudinary.com/nucat/image/upload/c_crop,h_1080,w_1030/v1632995842/bez_tytu%C5%82u_ipac5e.webp"
          alt="MyPicture"
          className="avatar"
        />
      </Box>
      <Grid container className="grid-about">
        <Grid item xs={12} md={10} lg={7} className="about-me-box">
          <Typography className="about-me-title">About Me</Typography>
          <Typography align="center" className="about-me-text">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
            adipisci velit,
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
