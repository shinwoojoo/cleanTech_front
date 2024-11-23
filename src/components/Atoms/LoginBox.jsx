import styled from "styled-components";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

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
    // const clientID = "402590164831-eehr26p66n5n0e7v59vk852u7qrvrbo6.apps.googleusercontent.com";

    // const googleSocialLogin = useGoogleLogin({
    //     scope: "email profile",
    //     onSuccess: async ({ code }) => {
    //         axios
    //             .post("http://localhost:3125/auth/google/callback", { code })
    //             .then(({ data }) => {
    //                 console.log(data);
    //             })
    //     },
    //     onError: (errorResponse) => {
    //         console.error(errorResponse)
    //     },
    //     flow: "auth-code"
    // })

    const plusCount = () => {
        console.log(1)
    }
    
    const plusCount2 = () => {
        console.log(2)
    }


    return (
        <>
            <img src="../src/assets/stuLogin.png" alt="학생으로 로그인" onClick={plusCount} style={{width: '240px'}} />
            <img src="../src/assets/teachLogin.png" alt="선생님으로 로그인" onClick={plusCount2} style={{width: '240px'}} />
        </>
    )
}

const LoginBox = () => {
    return (
        <>
            <Container>
                <LoginText>Login</LoginText>
                <ButtonBox>
                    <Login/>
                </ButtonBox>
            </Container>
        </>
    )
}

export default LoginBox;