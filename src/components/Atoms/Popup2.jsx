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

const Select = styled.select`
  margin-top: 10px;
  width: 300px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const Option = styled.option``;

const ButtonCon = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  padding: 0 20px 10px 0;
`;

const Button = styled.button`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border-radius: 10px;
`;

const Popup2 = ({ onClose }) => {
  const floor = "102호 주번 확인"; // floor 로 들어 온게 있음 가져오고 없으면 "102호 주번 확인" 으로 기본값 세팅
  useEffect(() => {
    let selectMapImg = document.querySelector(".selectMapImg");
    document.querySelector(".select").addEventListener("change", (e) => {
      const selectedValue = e.target.value;
      console.log("Selected option value:", selectedValue);
      selectMapImg.setAttribute(
        "src",
        `../src/assets/popup/${selectedValue}.png`
      );
    });
    const uploadBtn = document.querySelector(".uploadBtn");
    const fileInput = document.querySelector(".fileInput");
    const previewImage = document.querySelector(".uploadImg");

    uploadBtn.addEventListener("click", () => {
      fileInput.click(); // 숨겨진 파일 입력 요소를 클릭
    });
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0]; // 사용자가 선택한 파일
      if (file) {
        const reader = new FileReader();

        // 파일을 읽은 후 이미지 미리보기
        reader.onload = (e) => {
          previewImage.src = e.target.result; // 이미지 미리보기 URL 설정
          previewImage.style.display = "block"; // 이미지 표시
        };

        reader.readAsDataURL(file); // 파일 내용을 읽음 (base64 URL 생성)
      }
    });
  }, []);

  return (
    <Background>
      <PopupBox>
        <PopupDecoration />
        <Top>
          {/* floor 라는 이름으로 props 주면 그 텍스트가 들어옴 만약 없으면 기본값이 들어옴 */}
          <MainText>청소완료 사진 업로드</MainText>
          <Util>
            {/* height 에 픽셀넣으면 각각 높이 조정 가능 */}
            {/* <Svg height={"30px"} src="../src/assets/popup/setting.svg" alt="" /> */}
            <Svg onClick={onClose} height={"22px"} src="../src/assets/popup/cancel.svg" alt="" />
          </Util>
        </Top>
        <Bottom>
          <Select className="select">
            <Option className="option" value="main_1f_hallway">
              1 : 본관 1층 복도 전체(이사장실~ 끝) + 본관 엘리베이터
            </Option>
            <Option className="option" value="main_2f_hallway">
              2 : 본관 2층 복도 전체
            </Option>
            <Option className="option" value="main_3f_hallway">
              3 : 본관 3층 복도 전체
            </Option>
            <Option className="option" value="main_4f_hallway_401">
              4 : 본관 4층 복도 전체 + 401호
            </Option>
            <Option className="option" value="main_b1_hallway">
              5 : 본관 지하 1층 전체
            </Option>
            <Option className="option" value="new_1f_hallway">
              6 : 신관 1층 복도 전체(루트 앞 복도) + 신관 엘리베이터
            </Option>
            <Option className="option" value="new_2f_hallway">
              7 : 신관 2층 복도 전체(209호와 211호 앞부터 전체)
            </Option>
            <Option className="option" value="new_3f_hallway">
              8 : 신관 3층 복도 전체(309호와 310호 앞부터 전체)
            </Option>
            <Option className="option" value="new_4f_hallway_406">
              9 : 신관 4층 복도 + 406호
            </Option>

            <Option className="option" value="main_1f_2f_stairs">
              10 : 본관 1층 계단 + 2층 계단
            </Option>
            <Option className="option" value="main_3f_4f_stairs">
              11 : 본관 3층 계단 + 4층 계단
            </Option>
            <Option className="option" value="new_1f_4f_stairs">
              12 : 신관 1~4층 계단 전체
            </Option>
            <Option className="option" value="basement_stairs">
              13 : 지하 1층 계단 + 지하 2층
            </Option>

            <Option className="option" value="main_1f_office">
              14 : 1층 교무실
            </Option>
            <Option className="option" value="main_2f_office_trash">
              15 : 2층 교무실 + 2층 교무실 앞 쓰레기통
            </Option>
            <Option className="option" value="main_3f_offices">
              16 : 303호 교무실 + 304호 교무실
            </Option>
            <Option className="option" value="main_restrooms">
              17 : 1층 남자 화장실 + 3층 남자 화장실
            </Option>

            <Option className="option" value="new_trash_bins">
              18 : 신관 1층 복도 + 1층 남자 화장실 앞 + 2층 여자 화장실 앞 + 3층
              남자 화장실 앞 + 행정실 + 보건실
            </Option>

            <Option className="option" value="ai_science_classrooms">
              19 : 인공지능실(월, 수) + 203호, 204호(화, 목) + 과학실(금)
            </Option>
            <Option className="option" value="auditorium_402">
              20 : 강당 + 402호
            </Option>
            <Option className="option" value="yard_other_spaces">
              21 : 마당, 기업반실 앞(마루), 지하 2층 계단
            </Option>
            <Option className="option" value="back_gate_stairs">
              22 : 후문 밖 계단
            </Option>
          </Select>
          <img
            className="selectMapImg"
            src="../src/assets/popup/main_1f_hallway.png"
            alt="map"
          />
        </Bottom>

        <ButtonCon>
          <img className="uploadImg" src="" alt="이미지를 업로드 해주세요" />
          <Button className="uploadBtn">
            청소완료 사진 업로드{" "}
            <img
              className="icon"
              src="../src/assets/popup/Image_02.png"
              alt="icon"
            />
            <input className="fileInput" type="file" accept="image/*" />
          </Button>
          <Button>제출</Button>
        </ButtonCon>
      </PopupBox>
    </Background>
  );
};
export default Popup2;
