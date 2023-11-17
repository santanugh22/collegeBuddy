import styled from "styled-components";
const LoginPage = (props) => {
   document.title = "CollegeBuddy | Login";
  return (
    <Container>
      <LoginHeaderText>Enter the Matrix !</LoginHeaderText>
      <LoginSecondaryHeader>
        Create an account to enjoy all the services free!
      </LoginSecondaryHeader>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <LoginButton onClick={()=>props.setLoggedIn(true)}>Sign in</LoginButton>
      <ButtomText>
        Don`t have an account ? <SignupText onClick={()=>{props.setSelectedPage(2)
       
      }
        
        }>Signup</SignupText>
      </ButtomText>
    </Container>
  );
};
export default LoginPage;

const Container = styled.div`
  width: 33%;
  height: 66%;
  flex-shrink: 0;
  border-radius: 32px;
  background: var(--Form-Bg, #f6fbf9);
  margin: 96px 412px;
  display: flex;
  flex-direction: column;
  @media (max-width: 729px) {
    width: 90%;
    
  }

`;

const LoginHeaderText = styled.p`
  color: var(--Heading, #212b27);
  text-align: center;
  font-family: Segoe UI;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.8px; /* 130% */
  margin: 44px 76px 0px 75px;
`;

const LoginSecondaryHeader = styled.p`
  width: 308px;
  color: var(--Paragraph, #32403b);
  text-align: center;
  font-family: Segoe UI;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px; /* 130% */
  margin: 0% 15%;
  @media(max-width: 729px) {
    font-size: 0.8em;
    width: 20em;
    
  }
`;

const InputField = styled.input`
  width: 70%;
  height: 10%;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 3% 15%;
  padding: 0px 0px 0px 12px;
`;

const LoginButton = styled.button`
  width: 35%;
  height: 59px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #999fd4;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Segoe UI;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.6px; /* 130% */
  margin: 5% 25%;
  cursor: pointer;
  &:hover{
    background-color: #999ff4;
  }
  @media(max-width:729px){
    font-size: 12px;
    width: 35%;
    height: 15%;
    margin: 5% 30%;
  }
`;

const ButtomText = styled.h1`
  color: var(--Paragraph, #32403b);
  text-align: center;
  font-family: Segoe UI;
  font-size: 0.8em;
  font-style: normal;
  font-weight: 400;
  line-height: 1em; /* 130% */
`;

const SignupText = styled.p`
  color: #999fd4;
  font-family: Segoe UI;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 1em;
  cursor: pointer;
`;
