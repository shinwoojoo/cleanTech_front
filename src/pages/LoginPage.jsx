import LoginDesign from '../components/Atoms/LoginDesign';
import LoginBox from '../components/Atoms/LoginBox';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
    display: flex;
`;

const LoginPage = () => {
    return (
        <>
            <LoginPageContainer>
                <LoginDesign/>
                <LoginBox/>
            </LoginPageContainer>
        </>
    )
}

export default LoginPage