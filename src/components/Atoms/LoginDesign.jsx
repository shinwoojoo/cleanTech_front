import styled from "styled-components";

const Background = styled.div`
    width: 55%;
    height: 100vh;
    background-image: url('../src/assets/LoginBackground.png');
    background-size: cover;
    display: flex;
    justify-content: center;
`;

const Logo = styled.div`
    position: absolute;
    top: 18%;
    left: 10%;
    width: 720px;
    height: 156px;
`;

const Messages = styled.div`
    position: absolute;
    gap: 16px;
    top: 46%;
    left: 21%;
    color: white;
    font-size: 22px;
    text-align: right;
    line-height: 28px;
`;

const ImgBox = styled.div`
    position: absolute;
    bottom: 16px;
    left: 16px;
`;

const LoginBackground = () => {
    return (
        <>
            <Background>
                <Logo>
                    <img src="../src/assets/login/LoginCLEANTECH.png" alt="로고" style={{width: "720px", height: "156px"}}/>
                </Logo>

                <Messages>
                    수동으로 관리하던 주번 업무를 디지털화하세요.<br/>
                    시간 절약, 데이터 정리, 그리고 깨끗한 학교를 위한<br/>
                    완벽한 솔루션이 기다리고 있습니다.
                </Messages>

                <ImgBox>
                    <img src="../src/assets/login/Cleaner.png" alt="청소기 이미지" style={{width: "491px", height:"446px"}}/>
                </ImgBox>
            </Background>
        </>
    )
}

export default LoginBackground;