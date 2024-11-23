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
    top: 20%;
    width: 525px;
    height: 55px;
`;

const Messages = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    gap: 16px;
    top: 44%;
    left: 3%;
`;

const LoginBackground = () => {
    return (
        <>
            <Background>
                <Logo>
                    <img src="../src/assets/LoginCLEANTECH.png" alt="로고" style={{width: "525px", height: "55px"}}/>
                </Logo>

                <Messages>
                    <img src="../src/assets/message1.png" alt="메시지1" style={{width: '466px', height: '85px'}} />
                    <img src="../src/assets/message2.png" alt="메시지2" style={{width: '344px', height: '85px'}}/>
                </Messages>
            </Background>
        </>
    )
}

export default LoginBackground;