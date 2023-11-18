import styled, { ThemeProvider } from "styled-components";
import Menu from "../components/menu/Menu";
import { LightTheme, DarkTheme } from "../utils/GlobalTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Post from "./PostCard";
import StudyZone from "./StudyZone";
import Classroom from "./Classroom";
import SideNav from "../components/nav/SideNav";
import TopNavBar from "../components/nav/TopNavBar";
import Profile from "./Profile";







const BasePage = ({ loggedIn, setLoggedIn }) => {
  const [darkmode, setDarkMode] = useState(false);


  return (
    <BrowserRouter>
      <ThemeProvider theme={darkmode ? DarkTheme : LightTheme}>
        <Container>
          <MenuContainer>
            <Menu setDarkMode={setDarkMode} />
          </MenuContainer>

          <Wrapper>
            <TopNavBar />
            <PageArea>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />}></Route>
                  <Route path=":id" element={<Post />}></Route>
                  <Route path="/studyzone">
                    <Route index element={<StudyZone />}></Route>
                  </Route>
                  <Route path="/classroom">
                    <Route index element={<Classroom />}></Route>
                  </Route>
                  <Route path="/profile">
                    <Route index element={<Profile />}></Route>
                  </Route>
                </Route>
              </Routes>
            </PageArea>
          </Wrapper>
          <SideMenuContainer>
               <SideNav setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          </SideMenuContainer>
       
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default BasePage;

const Container = styled.div`
  display: flex;
`;

const MenuContainer=styled.div`
width: 18rem;

`

const SideMenuContainer = styled.div`
  width: 18rem;
`;

const Wrapper = styled.div`


  right: 0;
  left: 0;
  width: 52.2em;

  flex-direction: column;
  margin-top:6em ;



`;

const PageArea=styled.div`
margin-top: 1rem;
background-color: azure;




`
