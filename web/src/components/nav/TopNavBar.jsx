import styled from "styled-components"

const TopNavBar = () => {
  return (
    <Container>
     <SearchBar placeholder="Search Here"></SearchBar>

    </Container>
  )
}



const Container=styled.div`
height: 7rem;
display: flex;
width: 50rem;
position: sticky;
top: 0;

justify-content: center;
align-items: center;

`


const SearchBar=styled.input`
height: 2.5rem;
width: 40rem;
border: 0.1px solid black;
border-radius: 7rem;
padding: 0px 20px ;
`
export default TopNavBar