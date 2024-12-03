import styled from "styled-components";

const Container = styled.div`
  width: 82vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .floorBox {
    width: 72%;
    height: 60vh;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }

  & > .infoBox {
    display: flex;
    width: 72%;
    justify-content: space-between;
    border-left: 1px solid;

    & > p {
      font-size: 24px;
      text-shadow: 1px 3px 2px #b6b6b6;
      padding: 10px;
    }
  }

  & > .infoBox::before {
    content: none;
    background-color: #33b2e9;
    width: 16px;
    height: 10px;
    position: relative;
    left: -16px;
  }
`;

const Floor1 = () => {
  return (
    <>
      <Container>
        <div className="infoBox">
          <p>서울디지텍고등학교 지도</p>
          <p>1F</p>
        </div>
        <div className="floorBox">
          <img
            src="../src/assets/Floor1.png"
            alt="1층 그림"
            style={{ width: "900px", height: "450px" }}
          />
        </div>
      </Container>
    </>
  );
};

export default Floor1;
