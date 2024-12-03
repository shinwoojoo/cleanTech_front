import styled from "styled-components";
// import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const REDIRECT_URI = "http://localhost:3124/main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
`;

const LoginText = styled.p`
  font-size: 3.6rem;
  padding: 0px 40px 32px;
  border-bottom: 1.6px solid black;
`;

const ButtonBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Login = () => {
  const navigate = useNavigate();

  // const fetchUserInfo = async (accessToken) => {
  //   try {
  //     localStorage.setItem("authToken", accessToken);
  //     fetch("http://localhost:3125/auth/google", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ token: response.credential }),
  //     }).catch((err) => console.error(err));
  //     navigate("/main");
  //   } catch (error) {
  //     console.log(`error: `, error);
  //   }
  // };

  // const handleLoginSuccess = useGoogleLogin({
  //   scope: "email profile",
  // });

  const handleLoginSuccess = () => {
    navigate("/main");
  };

  return (
    <>
      <ButtonBox>
        <img
          src="../src/assets/stuLogin.png"
          alt="학생으로 로그인"
          style={{ width: "240px" }}
          onClick={handleLoginSuccess}
        />
        <img
          src="../src/assets/teachLogin.png"
          alt="선생님으로 로그인"
          style={{ width: "240px" }}
          onClick={handleLoginSuccess}
        />
      </ButtonBox>
    </>
  );
};

const LoginBox = () => {
  return (
    <>
      <Container>
        <LoginText>Login</LoginText>
        <Login />
      </Container>
    </>
  );
};

export default LoginBox;
