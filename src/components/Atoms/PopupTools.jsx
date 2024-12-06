import { useEffect } from "react";
import styled from "styled-components";

const MainText = styled.h1`
  font-size: 20px;
  font-weight: 800;
`;

const SubText = styled.h2``;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PopupBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* width: 366px; */
  width: 450px;
  height: 400px;
  background-color: #fff;
  border-bottom: 10px solid #d9d9d9;
`;

const PopupDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  background-color: #5599ff;
  width: 75%;
  height: 5px;

  &::before {
    position: absolute;
    top: 0;
    left: -4.5px;
    width: 5px;
    height: 5px;
    background-color: #5599ff;
    content: "";
    clip-path: polygon(100% 1%, 0 0, 100% 100%);
  }
  &::after {
    position: absolute;
    top: 0;
    right: -4.5px;
    width: 5px;
    height: 5px;
    background-color: #5599ff;
    content: "";
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }
`;

const Top = styled.div`
  padding: 0 15px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 66px;
  border-bottom: 2px solid #d9d9d9;
`;

const Util = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const Svg = styled.img`
  height: ${(props) => props.height};
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 300px;
`;

const PopupTools = (props) => {
  return (
    <Background>
      <PopupBox>
        <PopupDecoration />
        <Top>
          {/* floor 라는 이름으로 props 주면 그 텍스트가 들어옴 만약 없으면 기본값이 들어옴 */}
          <MainText>제목</MainText>
          <Util>
            {/* height 에 픽셀넣으면 각각 높이 조정 가능 */}
            {/* <Svg height={"30px"} src="../src/assets/popup/setting.svg" alt="" /> */}
            <Svg height={"22px"} src="../src/assets/popup/cancel.svg" alt="" />
          </Util>
        </Top>
        <Bottom></Bottom>
      </PopupBox>
    </Background>
  );
};
export default PopupTools;
