import * as React from "react";
import './projects.css'
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import itemData from "./itemData";
import BoxFade from "../../BoxFade";
import { Typography } from "@mui/material";

export default function Projects() {
  return (
    <Box className="projects-background">
      <BoxFade className="projects">
        <Grid
          container
          sx={{ width: "90%", height: "100%", position: "relative" }}
          spacing={2}
        >
          {itemData.map((item, index) => (
            <Grid className="img-hover" item xs={12} md={6} lg={4} key={index}>
              <Box sx={{ width: "100%", height: " 100%" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="grid-imgs"
                  loading="lazy"
                />
              </Box>
              <div className="blue-div">
                <Typography className="project-title">{item.title}</Typography>
                <Typography className="project-text">
                  {item.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </BoxFade>
    </Box>
  );
}
