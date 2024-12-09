import styled from "styled-components";
import Aside from "../components/Layout/Aside.jsx";
import MapSlide from "../components/Atoms/mapSlide";
import {useEffect, useState} from "react";

const MainPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainPage = () => {
    const [username, setUsername] = useState(null);
    const [userprofile, setUserprofile] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const invokeData = async () => {
            try {
                const response = await fetch('http://localhost:3125/user/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('인증 실패');
                }

                const data = await response.json();
                console.log('서버 응답:', data);
                setUsername(data.name);  // 상태 변경
                setUserprofile(data.profileUrl);
                setUserRole(data.role);
            } catch (error) {
                console.error('오류 발생:', error);
            }
        };

        invokeData();
    }, []);

  return (
    <>
      <MainPageContainer>
        <Aside username={username} userprofile={userprofile}></Aside>
        <MapSlide username={username} userRole={userRole}></MapSlide>
      </MainPageContainer>
    </>
  );
};

export default MainPage;
