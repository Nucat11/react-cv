import * as React from "react";
import LandingPage from "./sections/LandingPage";
import { StyledEngineProvider } from "@mui/material/styles";
import AboutMe from "./sections/AboutMe";
import HideAppBar from "./AppBar/AppBar";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <HideAppBar />
      <LandingPage />
      <AboutMe />
    </StyledEngineProvider>
  );
}
