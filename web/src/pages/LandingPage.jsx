import styled from "styled-components";
import Logo from "/logo.png";
import HeroBackground from "/friends.svg";
import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import TeamWork from "/Invite_friends.svg";
import Invite_Friends from '/Team_work.svg'

const LandingPage = ({setLoggedIn}) => {
  const [selectedPage, setSelectedPage] = useState(0);
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
        ) : selectedPage == 1 ? (
          <LoginPage
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setLoggedIn={setLoggedIn}
          />
        ) : (
          <RegisterPage setSelectedPage={setSelectedPage} />
        )}
      </HeroSection>
      <MiddleSection>
        <MiddleSectionImage src={TeamWork} />

        <MiddleSectionTextContainer>
          <MiddleSectionMainText>
            Create an invite place where you belong
          </MiddleSectionMainText>
          <MiddleSectionSubText>
            Lorem ipsum dolor sit amet consectetur. Aliquet pretium eget a elit
            ut cum. Tellus nisi quisque dignissim egestas. Amet lacus{" "}
          </MiddleSectionSubText>
        </MiddleSectionTextContainer>
      </MiddleSection>
      <BottomSection>
        <MiddleSectionTextContainer>
          <MiddleSectionMainText>
            Create an invite place where you belong
          </MiddleSectionMainText>
          <MiddleSectionSubText>
            Lorem ipsum dolor sit amet consectetur. Aliquet pretium eget a elit
            ut cum. Tellus nisi quisque dignissim egestas. Amet lacus{" "}
          </MiddleSectionSubText>
        </MiddleSectionTextContainer>
        <MiddleSectionImage src={Invite_Friends} />
      </BottomSection>
    </>
  );
};

const Header = styled.div`
  display: flex;

  height: 4.1em;
  width: 100%;
  background-color: #fff;
  border-bottom:0.1em solid #000;

  justify-content: center;
  position: fixed;
  top: 0;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #999fd4;
  height: 40em;
  width: 100%;
  background-image: url(${HeroBackground});
  background-size: 100% 100%;

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
  font-size: 4em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.01em;
  line-height: 1em;

  text-align: center;
  @media  (max-width: 729px){
    font-size: 2em;

    
  }
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

const InitialContainer = styled.div`
  margin-top: 120px;
`;

const HeroSecondaryText = styled.p`
  width: 40em;
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Segoe UI;
  font-size: 1.2em;
  font-style: normal;
  font-weight: 400;

  text-align: center;
  padding: 1em 10em;

  @media (max-width: 729px) {
    font-size: 1.5em;
    width: 20em;
    text-align: center;
    visibility: hidden;
  }
`;
const MiddleSection = styled.div`
  width: 100%;
  height: 665px;
  background: #fff;
  display: flex;
  align-items: center;

  @media (max-width: 729px) {
    display: flex;
    flex-direction:column ;


    
  }
`;

const MiddleSectionImage = styled.img`
  height: 20em;

  margin: 2em 4em;
`;

const MiddleSectionMainText = styled.p`
  color: #23272a;
  width: 10em;
  font-family: Segoe UI;
  font-size: 3em;

  font-weight: 700;
  margin: 2em 4em;



  @media(max-width: 729px) {
    font-size: 1em;


    
  }

  
`;

const MiddleSectionSubText = styled.p`
  color: #23272a;
  font-family: Segoe UI;
  font-size: 25.182px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 30em;
  margin: 2em 3em;

  @media (max-width: 729px) {
    font-size: 0.5em;
  }
`;

const MiddleSectionTextContainer = styled.div`
  margin: 1em 1.2em 0em 2em;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 665px;
  background: #f6f6f6;
  display: flex;
  @media (max-width: 729px) {
    display: flex;
    flex-direction: column;
  }
`;

export default LandingPage;
