import * as React from "react";
import LandingPage from "./sections/landingPage/LandingPage.js";
import { StyledEngineProvider } from "@mui/material/styles";
import AboutMe from "./sections/aboutMe/AboutMe";
import HideAppBar from "./appBar/AppBar";
import Skills from './sections/skills/Skills'
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <HideAppBar />
      <LandingPage />
      <AboutMe />
      <Skills/>
      <Projects/>
      <Contact/>
    </StyledEngineProvider>
  );
}
