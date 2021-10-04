import * as React from "react";
import "./projects.css";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import itemData from './itemData'

export default function Projects() {
  return (
    <Box className="projects">
      <Grid
        container
        sx={{ width: "90%", height: "90%", position: "relative" }}
        spacing={2}
      >
        {itemData.map((item) => ( <Grid className="img-hover" item xs={12} md={6} lg={4}>
<Box sx={{ width: '100%',
    height:' 100%'}}>
  <img
    src={item.img}
    alt={item.title}
    className="grid-imgs"
    loading="lazy"
  />
</Box>
<div className="blue-div">
    <Typography className='project-title'>Title</Typography>
    <Typography className='project-text'>Short description</Typography>
</div>
</Grid> ))}
      </Grid>
    </Box>
  );
}
