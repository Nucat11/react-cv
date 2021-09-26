import * as React from "react";
import LandingPage from "./LandingPage";
import { StyledEngineProvider } from '@mui/material/styles';

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <LandingPage />
    </StyledEngineProvider>)}