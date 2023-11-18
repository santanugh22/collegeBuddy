// import { Link } from "react-router-dom";
import styled from "styled-components"

const SideNav = ({setLoggedIn}) => {
  return (
    <Container>

        <button onClick={()=>{setLoggedIn(false);localStorage.clear("token")}}>Logout</button>

    </Container>
  );
}


const Container=styled.div`
flex: 2;

height: 100vh;
position: sticky;
top: 0;
right: 0;
left: 0;
border: 1px solid ;


`
export default SideNav