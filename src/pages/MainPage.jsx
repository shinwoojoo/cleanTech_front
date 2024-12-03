import Aside from "../components/Layout/Aside";
import Floor1 from "../components/Atoms/Floor1";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
`;

const MainPage = () => {
  return (
    <>
      <MainBox>
        <Aside />
        <Floor1 />
      </MainBox>
    </>
  );
};

export default MainPage;
