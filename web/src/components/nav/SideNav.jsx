// import { Link } from "react-router-dom";
import styled from "styled-components"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SideNav = ({setLoggedIn}) => {
  return (
    <Container>
      <SettingsContainer>
        <div onClick={()=>{setLoggedIn(false); localStorage.clear()}}>
          <SettingsOutlinedIcon
            style={{ fontSize: "3em", color: "#36454F", cursor: "pointer" }}
          />
        </div>
      </SettingsContainer>
    </Container>
  );
}


const Container=styled.div`


height: 50em;
position: fixed;
top: 0;
right: 0;
background-color: aliceblue;
width: 19rem;




`

const SettingsContainer=styled.div`
height: 8em;
width: 18.9rem;

display: flex;
gap: 1em;
font-size: 12px;
align-items: center;
justify-content: center;
box-shadow: 0px 1px 0px 0px black;
background-color: white;

`




export default SideNav