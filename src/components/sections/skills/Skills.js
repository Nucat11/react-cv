import * as React from "react";

import { Box, Typography } from "@mui/material";
import BoxFade from "../../BoxFade";
import { Grid } from "@mui/material";
import { FaWrench, FaWordpressSimple } from "react-icons/fa";
import Arrow from "./Arrow";

export default function Skills() {
  return (
    <Box className="skills-background">
      <BoxFade className="skills" sx={{
            alignItems: {
              xs: 'center',
              md: 'unset'
            }
      }}>
        <Box
          className="arrow-neon-box"
          sx={{
            display: {
              xs: "none",
              md: "inherit",
            },
            marginTop: {
              md: "55vh",
              lg: "32vh",
            },
            marginLeft: {
              md: "30%",
              lg: "25%",
            },
            height: {
              md: "40vh",
              lg: "60vh",
            },
          }}
        >
          <Arrow />
        </Box>
        <Box
          className="wrench-div"
          sx={{
            opacity: {
              xs: "0.3",
              md: "0.9",
            },
            marginLeft: {
              xs: "0%",
              md: "15%",
            },
            marginTop: {
              xs: "10vh",
              md: "20vh",
            },
          }}
        >
          <FaWrench className="wrench" />
        </Box>
        <Grid container className="skills-box">
          <Grid item xs={12}>
            <Typography
              className="skills-title"
              sx={{
                textAlign: {
                  xs: "center",
                  md: "right",
                },
                fontSize: {
                  xs: "3em",
                  md: "3.5em",
                },
              }}
            >
              Skills
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                  md: "right",
                },
                fontSize: {
                  xs: "1.125em",
                  md: "1.375em",
                },
                lineHeight: {
                  xs: "1.2em",
                  md: "1.5em",
                },
              }}
              className="skill-text"
            >
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            </Typography>
          </Grid>
        </Grid>

        <Box className="love">
          <Typography
            className="skills-title"
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Things I love
          </Typography>
          <Box sx={{ paddingTop: "2vh" }}>
            {" "}
            <Box display="flex">
              <FaWordpressSimple className="icons" />
              <FaWordpressSimple className="icons" />
              <FaWordpressSimple className="icons" />
              <Box
                sx={{
                  flexGrow: {
                    xs: "0",
                    md: "7",
                  },
                }}
              />
            </Box>
            <Box display="flex">
              <Box sx={{ flexGrow: "1" }} />
              <FaWordpressSimple className="icons" />
              <FaWordpressSimple className="icons" />
              <Box
                sx={{
                  flexGrow: {
                    xs: "1",
                    md: "7",
                    lg: "8",
                  },
                }}
              />
            </Box>
            <Box display="flex">
              <FaWordpressSimple className="icons" />
              <FaWordpressSimple className="icons" />
              <FaWordpressSimple className="icons" />
              <Box
                sx={{
                  flexGrow: {
                    xs: "0",
                    md: "7",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </BoxFade>
    </Box>
  );
}
