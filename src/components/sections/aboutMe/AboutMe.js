import * as React from "react";
import BoxFade from "../../BoxFade";
import { Box } from "@mui/material";
import Circle from "./Circle";
import { Grid } from "@mui/material";
import Triangle from "./Triangle";
import { Typography } from "@mui/material";
export default function AboutMe() {
  return (
    <Box className="about-me-background">
      <div className="circle-div">
        <Circle />
      </div>
      <div className="triangle-div">
        <Triangle />
      </div>
      <BoxFade className="about-me">
        <Box className="box-with-avatar">
          <img
            src="https://res.cloudinary.com/nucat/image/upload/c_crop,h_1080,w_1030/v1632995842/bez_tytu%C5%82u_ipac5e.webp"
            alt="MyPicture"
            className="avatar"
          />
        </Box>
        <Grid container className="grid-about">
          <Grid item xs={12} md={10} lg={7} className="about-me-box">
            <Typography
              className="about-me-title"
              sx={{
                fontSize: {
                  xs: "3em",
                  md: "3.5em",
                },
              }}
            >
              About Me
            </Typography>
            <Typography
              className="about-me-text"
              sx={{
                fontSize: {
                  xs: "1.125em",
                  md: "1.375em",
                },
                lineHeight: {
                  xs: "1.2em",
                  md: "1.5em",
                },
              }}
            >
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            </Typography>
          </Grid>
        </Grid>
      </BoxFade>
    </Box>
  );
}
