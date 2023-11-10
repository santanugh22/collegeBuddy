import styled from "styled-components";

const RegisterPage = (props) => {
    document.title='CollegeBuddy | Register'
  return (
    <Container>
      <LoginHeaderText>Enter the Matrix !</LoginHeaderText>
      <LoginSecondaryHeader>
        Create an account to enjoy all the services free!
      </LoginSecondaryHeader>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <InputField placeholder="Verify Password" />
      <LoginButton>Sign up</LoginButton>
      <ButtomText>
        Have an account ?{" "}
        <SignupText onClick={() => props.setSelectedPage(1)}>Sign in</SignupText>
      </ButtomText>
    </Container>
  );
};

export default RegisterPage;

const Container = styled.div`
  width: 455px;
  height: 463px;
  flex-shrink: 0;
  border-radius: 32px;
  background: var(--Form-Bg, #f6fbf9);
  margin: 96px 412px;
  padding: 0px;
`;

const LoginHeaderText = styled.p`
  color: var(--Heading, #212b27);
  text-align: center;
  font-family: Segoe UI;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.8px; /* 130% */
  margin: 30px 76px 0px 75px;
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
  margin: 0px 74px 0px 73px;
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
