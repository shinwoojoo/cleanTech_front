import styled from "styled-components";

// const gradientStyle = {
//   background: "linear-gradient(to right, #2672E8, #fff)",
// };

const Background = styled.div`
  width: 55%;
  height: 100vh;
  /* background-image: url("../src/assets/LoginBackground.png"); */
  background-size: cover;
  display: flex;
  justify-content: center;
  user-select: none;
`;

const MainText = styled.div`
  position: absolute;
  top: 18%;
  left: 6%;
  width: 720px;
  height: 96px;
`;

const Messages = styled.div`
  position: absolute;
  gap: 16px;
  top: 34%;
  left: 12%;
  color: white;
  font-size: 22px;
  text-align: center;
  line-height: 36px;
`;

const ImgBox = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
`;

const LoginBackground = () => {
  return (
    <>
      <Background>
        <MainText>
          <img
            src="../src/assets/login/LoginCLEANTECH.png"
            alt="로고"
            style={{ width: "720px", height: "96px" }}
          />
        </MainText>

        <Messages>
          수동으로 관리하던 주번 업무를 디지털화하세요.
          <br />
          시간 절약, 데이터 정리, 그리고 깨끗한 학교를 위한
          <br />
          완벽한 솔루션이 기다리고 있습니다.
        </Messages>

        <ImgBox>
          <img
            src="../src/assets/login/Cleaner.png"
            alt="청소기 이미지"
            style={{ width: "491px", height: "446px" }}
          />
        </ImgBox>
      </Background>
    </>
  );
};

export default LoginBackground;
