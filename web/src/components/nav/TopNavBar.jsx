import styled from "styled-components"

const TopNavBar = () => {
  return (
    <Container>
     <SearchBar placeholder="Search Here"></SearchBar>

    </Container>
  )
}



const Container=styled.div`

height: 6rem;
display: flex;
width: 53em;
position: fixed;
top: 0em;


align-self: center;

justify-content: center;
align-items: center;
background-color: white;
box-shadow: 0px 1px 0px 0px black;








`



const SearchBar = styled.input`
  height: 2.1rem;
  width: 35em;
  border: none;

  border-radius: 6em;
  padding: 0em 2em;
  background-color: #d6d6d6;
`;
export default TopNavBar