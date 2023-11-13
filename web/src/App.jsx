

import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import BasePage from "./pages/BasePage";
import { ThemeProvider } from "styled-components";
import {DarkTheme,LightTheme} from './utils/GlobalTheme'

function App() {
  const [loggedIn,setLoggedIn]=useState(false)
  const [darkMode,setDarkMode]=useState(false)
  return (
    <>
      <ThemeProvider theme={darkMode?DarkTheme:LightTheme}>
        {loggedIn ? (
          <BasePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} setDarkMode={setDarkMode}/>
        ) : (
          <LandingPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}  setDarkMode={setDarkMode}/>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
