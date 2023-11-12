

import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import BasePage from "./pages/BasePage";

function App() {
  const [loggedIn,setLoggedIn]=useState(false)
  return (
    <>
    {
      loggedIn? <BasePage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>: <LandingPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

    }


    </>
  );
}

export default App;
