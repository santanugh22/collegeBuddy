import axios from 'axios'
import { useState } from "react";
import styled from "styled-components";




const RegisterPage = (props) => {
    document.title='CollegeBuddy | Register'


    // lets make the register system
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function RegisterUser(){
    
      try {
          const url = "https://cbuddy.onrender.com/api/auth/register";
          const payload = {
            first_name:firstName,
            last_name:lastName,
            email,
            password,
          };
          console.log(firstName,lastName,email,password)
          const res = await axios.post(url, payload);
          if(res.data){
            localStorage.setItem("token",res.data)
              props.setLoggedIn(true);
          }else{
            return
          }
        
      } catch (error) {
        console.log(error)
        
      }

    }
  return (
    <Container>
      <LoginHeaderText>Enter the Matrix !</LoginHeaderText>
      <LoginSecondaryHeader>
        Create an account to enjoy all the services free!
      </LoginSecondaryHeader>
      <NameFieldContainer>
        <NameInput
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <NameInput
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </NameFieldContainer>

      <InputField
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField placeholder="Verify Password" type="password" />
      <LoginButton onClick={()=>RegisterUser()}>Sign up</LoginButton>
      <ButtomText>
        Have an account ?{" "}
        <SignupText onClick={() => {props.setSelectedPage(1) }}>
          Sign in
        </SignupText>
      </ButtomText>
    </Container>
  );
};

export default RegisterPage;

const Container = styled.div`
  width: 30em;
  height: 32em;
  flex-shrink: 0;
  border-radius: 32px;
  background: var(--Form-Bg, #f6fbf9);
  margin: 6em 32em;
  padding: 0px;
`;

const LoginHeaderText = styled.p`
  color: var(--Heading, #212b27);
  text-align: center;
  font-family: Segoe UI;
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  line-height: 2em; /* 130% */
  margin: 0.2em 2em 0em 1em;
`;

const LoginSecondaryHeader = styled.p`
  width: 20em;
  color: var(--Paragraph, #32403b);
  text-align: center;
  font-family: Segoe UI;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 19.5px; /* 130% */
  margin: 0em 3em 1em 3em;
`;

const InputField = styled.input`
  width: 375px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 10px 41px 0px 39px;
  padding: 0px 0px 0px 12px;
  font-size: 1em;
`;

const LoginButton = styled.button`
  width: 255px;
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
  margin: 20px 100px;
  cursor: pointer;
`;

const ButtomText = styled.p`
  color: var(--Paragraph, #32403b);
  text-align: center;
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px; /* 130% */
`;

const SignupText = styled(ButtomText)`
  color: #999fd4;
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18.2px;
  cursor: pointer;
`;


const NameFieldContainer = styled.div`
  display: flex;
  width: 375px;
  gap: 10px;
  justify-content: center;
  align-items: center;

  margin-left: 2.5em;
`;
const NameInput=styled(InputField)`
width:170px ;
margin:0px;
margin-left: 1em;





`

// const PasswordMatchError=styled.