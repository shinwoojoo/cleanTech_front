import LoginDesign from "../components/Atoms/LoginDesign";
import LoginBox from "../components/Atoms/LoginBox";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  background: url("../src/assets/LoginBackground.png");
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const LoginPage = () => {
  return (
    <>
      <LoginPageContainer>
        <LoginDesign />
        <LoginBox />
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;
