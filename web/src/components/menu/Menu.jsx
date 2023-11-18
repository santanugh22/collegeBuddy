import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CbuddyLogo from "/logo.png";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (

      <Container>
        <MenuHeader>
          <LogoImage src={CbuddyLogo} />
        </MenuHeader>
        <MenuWrapper>
          <LinkElement to={"/"}>
            <MenuButtons>
              <HomeOutlinedIcon />
              <MenuButtonText>Home</MenuButtonText>
            </MenuButtons>
          </LinkElement>

          <LinkElement to={"studyzone"}>
            <MenuButtons>
              <LibraryBooksOutlinedIcon />
              <MenuButtonText>StudyZone</MenuButtonText>
            </MenuButtons>
          </LinkElement>

          <LinkElement to={"classroom"}>
            <MenuButtons>
              <SchoolOutlinedIcon />

              <MenuButtonText>Classroom</MenuButtonText>
            </MenuButtons>
          </LinkElement>

          <LinkElement to={"TodoList"}>
            <MenuButtons>
              <ChecklistOutlinedIcon />

              <MenuButtonText>TodoList</MenuButtonText>
            </MenuButtons>
          </LinkElement>

          <LinkElement to={"post"}>
            <MenuButtons>
              <AddOutlinedIcon/>
              <MenuButtonText>Post</MenuButtonText>
            </MenuButtons>
          </LinkElement>

          <LinkElement to={"Profile"}>
            <MenuButtons>
             <AccountCircleOutlinedIcon/>
              <MenuButtonText>Profile</MenuButtonText>
            </MenuButtons>
          </LinkElement>
        </MenuWrapper>
      </Container>

  );
};

const Container = styled.div`
  position: fixed;
  flex: 2;

  top: 0;
  left: 0;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  
`;

const MenuHeader = styled.div`
  display: flex;

  height: 6rem;
  width: 20rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px black;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  overflow: hidden;
`;
const LogoImage = styled.img`
  height: 3.5em;
  width: 9em;
`;

const MenuButtons = styled.div`
  display: flex;
  width: 7rem;
  text-decoration: none;

  padding: 1em 4.32em 1em 2em;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #e9ebf8;

  cursor: pointer;
  overflow: hidden;


`;

const MenuButtonText = styled.p`
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
  color: ${props=>props.theme.menuButtonFont};
`;

const LinkElement = styled(NavLink)`
  &.active {
  
      background-color: ${(props) => props.theme.buttonBackground};
      border-radius: 12px;


  }
`;
export default Menu;
