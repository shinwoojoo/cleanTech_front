import styled from "styled-components";
import Aside from "../components/Atoms/Aside";
import MapSlide from "../components/Atoms/mapSlide";

const MainPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <Aside></Aside>
        <MapSlide></MapSlide>
      </MainPageContainer>
    </>
  );
};

export default MainPage;
