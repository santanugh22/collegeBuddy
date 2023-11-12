import styled, { ThemeProvider } from "styled-components";
import Menu from "../components/menu/Menu";
import { LightTheme, DarkTheme } from "../utils/GlobalTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Post from "./Post";
import StudyZone from "./StudyZone";
import Classroom from "./Classroom";
import SideNav from "../components/nav/SideNav";
import TopNavBar from "../components/nav/TopNavBar";

const BasePage = ({ loggedIn, setLoggedIn }) => {
  const [darkmode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkmode ? DarkTheme : LightTheme}>
        <Container>
          <Menu setDarkMode={setDarkMode} />

          <Wrapper>
            <TopNavBar />
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
              </Route>
            </Routes>
          </Wrapper>
          <SideNav setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default BasePage;

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 6;

  right: 0;
  left: 0;



`;
