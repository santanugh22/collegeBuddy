import styled from "styled-components";
import Logo from "../assets/Logo.png";
import HeroBackground from "../assets/friends.svg";
import { useState } from "react";
// import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const LandingPage = () => {
  const [selectedPage,setSelectedPage]=useState(0)
  return (
    <>
      <Header>
        <Navbar>
          <LogoContainer src={Logo} />

          <GuideBook></GuideBook>
        </Navbar>
      </Header>

      <HeroSection>
       
        {selectedPage == 0 ? (
          <InitialContainer>
            <HeroMainText>Lorem Ipsum Dolors !</HeroMainText>
            <HeroSecondaryText>
              Lorem ipsum dolor sit amet consectetur. Vel phasellus quisque ac
              mi donec arcu. Ultricies ullamcorper mauris tristique mauris ut
              morbi egestas.
            </HeroSecondaryText>

            <LoginRegisterButton onClick={() => setSelectedPage(1)}>
              Login / Register
            </LoginRegisterButton>
          </InitialContainer>
        ) : selectedPage==1?(
          <LoginPage
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />):<RegisterPage setSelectedPage={setSelectedPage}/>
        }
      </HeroSection>
    </>
  );
};

const Header = styled.div`
  display: flex;

  height: 78px;
  width: 100%;
  background-color: #fff;
  border-bottom: 2px solid #000;

  justify-content: center;
  position: fixed;
  top: 0;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #999fd4;
  height: 665px;
  width: 100%;
  background-image: url(${HeroBackground});
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  align-items: center;
`;

const HeroMainText = styled.h1`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Segoe UI;
  font-size: 70px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  padding: 0px 234px;
  text-align: center;
`;

const LoginRegisterButton = styled.button`
  display: flex;
  width: 335px;
  padding: 12.553px 25.105px;
  justify-content: center;
  align-items: center;
  gap: 6.276px;
  border-radius: 78.454px;
  background: #f6fbf9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  margin: 120px 472px 0px 472px;
  cursor: pointer;

`;

const Navbar = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
  max-width: 1024px;
`;
const LogoContainer = styled.img`
  height: 46px;
  width: 149px;
  margin-left: -20px;
`;
const GuideBook = styled.div`
  height: 70px;
  width: 70px;
`;

const InitialContainer=styled.div`
margin-top: 120px;





`

const HeroSecondaryText = styled.p`
  width: 815px;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Segoe UI;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0px 234px;
`;

export default LandingPage;
