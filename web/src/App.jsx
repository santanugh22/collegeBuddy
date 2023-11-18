
import axios from "axios";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import BasePage from "./pages/BasePage";
import { ThemeProvider } from "styled-components";
import {DarkTheme,LightTheme} from './utils/GlobalTheme'
import { TesturlVerify } from "./pages/constants";

function App() {
  function checkLogin(){
    if(localStorage.getItem("token")){
      const url =TesturlVerify ;
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


  },[])
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
