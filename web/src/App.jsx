
import axios from "axios";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import BasePage from "./pages/BasePage";
import { ThemeProvider } from "styled-components";
import {DarkTheme,LightTheme} from './utils/GlobalTheme'


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
  function checkLogin(){
    if(localStorage.getItem("token")){
      const url = "https://cbuddy.onrender.com/api/auth/auth-verify" ;
      const res=axios.post(url,{
        "token":localStorage.getItem("token")
      })
      if(res && localStorage.getItem("token")){
        setLoggedIn(true)
      }



      

    }else return


  }
  useEffect(()=>{
    checkLogin()


  },[loggedIn])

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
