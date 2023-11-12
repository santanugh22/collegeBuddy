
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import CbuddyLogo from '/logo.png'

const Menu = () => {
  return (
    <div style={{ position: "sticky", top: 0, left: 0 }}>
      <Container>
        <MenuHeader>
          <LogoImage src={CbuddyLogo}/>

        </MenuHeader>
        <MenuWrapper>
          <MenuButtons>
            <HomeOutlinedIcon />
            <MenuButtonText>Home</MenuButtonText>
          </MenuButtons>

          <MenuButtons>
            <LibraryBooksOutlinedIcon />
            <MenuButtonText>StudyZone</MenuButtonText>
          </MenuButtons>

          <MenuButtons>
            <SchoolOutlinedIcon/>

            <MenuButtonText>Classroom</MenuButtonText>
          </MenuButtons>

          <MenuButtons>
            <ChecklistOutlinedIcon/>

            <MenuButtonText>TodoList</MenuButtonText>
          </MenuButtons>

          <MenuButtons>
            <HomeOutlinedIcon />
            <MenuButtonText>Home</MenuButtonText>
          </MenuButtons>

          <MenuButtons>
            <LibraryBooksOutlinedIcon />
            <MenuButtonText>StudyZone</MenuButtonText>
          </MenuButtons>
        </MenuWrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
position: -webkit-sticky;
flex: 2;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;





`;

const MenuHeader = styled.div`
display: flex;

height: 6rem;
width: 20rem;
justify-content: center;
align-items: center;



`;

const MenuWrapper = styled.div`

  display: flex;
  flex-direction: column;


  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
const LogoImage=styled.img`
height: 5rem;
width: 9rem;
`

const MenuButtons = styled.div`
  display: flex;
  width: 7rem;

  padding: 16px 69px 16px 32px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #e9ebf8;
  background: #e6e6e6;
  cursor: pointer;
`;

const MenuButtonText=styled.p`
font-size: 1rem;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export default Menu;
