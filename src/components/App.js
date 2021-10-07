/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import LandingPage from "./sections/landingPage/LandingPage.js";
import { StyledEngineProvider } from "@mui/material/styles";
import AboutMe from "./sections/aboutMe/AboutMe";
import HideAppBar from "./appbar/AppBar.js";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import { useEffect } from "react";





export default function App({hideLoader}) {
    useEffect(hideLoader, []);

  return (
    <StyledEngineProvider injectFirst>
      <HideAppBar />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </StyledEngineProvider>
  );
}
