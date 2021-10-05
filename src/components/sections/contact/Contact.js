import * as React from "react";
import "./contact.css";
import { Box } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "@mui/material";
import BoxFade from "../../BoxFade";

export default function Contact() {
  return (
    <Box className="contact-background">
      <BoxFade className="contact">
        <Link href="mailto:ppaazz56@icloud.com" aria-label="Mail">
          <AiOutlineMail className="contact-icons email" />
        </Link>
        <Link
          href="https://github.com/Nucat11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <AiFillGithub className="contact-icons github" />
        </Link>
        <Link
          href="https://github.com/Nucat11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <AiFillFacebook className="contact-icons facebook" />
        </Link>
      </BoxFade>
    </Box>
  );
}
