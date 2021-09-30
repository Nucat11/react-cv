import * as React from "react";
import { Typography } from "@mui/material";
import "./AboutMe.css";
import { Box } from "@mui/material";

export default function AboutMe() {
  return (
    <Box id="aboutMe">
      <Box>
        <img
          src="https://res.cloudinary.com/nucat/image/upload/v1632995842/bez_tytu%C5%82u_ipac5e.webp"
          alt="MyPicture"
          className="avatar"
        />
      </Box>
      <Box className="aboutMeBox">
        <Typography className='aboutMeTitle'>About Me</Typography>
        <Typography align='center' className='aboutMeText'>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
          qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt, ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
          consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
          pariatur? [33] At vero eos et accusamus et iusto odio dignissimos
          ducimus, qui blanditiis praesentium voluptatum deleniti atque
          corrupti, quos dolores et quas molestias excepturi sint, obcaecati
          cupiditate non provident, similique sunt in culpa, qui officia
          deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
          quidem rerum facilis est et expedita distinctio. Nam libero tempore,
          cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus
          id, quod maxime placeat, facere possimus, omnis voluptas assumenda
          est,
        </Typography>
      </Box>
    </Box>
  );
}
