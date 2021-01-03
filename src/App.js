import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import ScrollToTop from "./helpers/ScrollToTop";

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./helpers/GlobalStyles";
import { lightTheme, darkTheme } from "./helpers/Themes";
import  {useDarkMode} from "./helpers/useDarkMode";
import Toggle from "./components/Toggle"

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Router>
          <ScrollToTop />
          <Routes />
        </Router>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </>
    </ThemeProvider>
  );
}

export default App;
