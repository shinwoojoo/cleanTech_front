import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper 컴포넌트 가져오기
import "./swiper.css";
import "swiper/css"; // 기본 스타일 가져오기
import "swiper/css/navigation"; // 네비게이션 스타일
import "swiper/css/pagination"; // 페이지네이션 스타일
import "swiper/css/autoplay"; // 자동 재생 기능 스타일

// 필요한 모듈 개별 import
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Popup from "./Popup";

const MainCon = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: calc(100vw - 300px);
  position: fixed;
  border-right: 1.5px solid #cccccc;
  display: flex;
  flex-direction: column;
  border: 8px solid #67a0f9;
  border-left: none;
  border-right: none;
  justify-content: center;
  align-items: center;
  margin-left: 300px;
`;

const SlideCon = styled.div`
  width: 1000px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.h1`
  width: 1000px;
  height: 50px;
  position: relative;
  top: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 5px solid #33b2e9;
  border-radius: 2px;
  background-color: #ffffff;
  padding: 0 100px 0 10px;
  font-size: 25px;
  font-weight: bold;
`;

const MapSlide = () => {
  const [float, setFloat] = useState("4F");
  const [popupOpen, setPopup] = useState(true); // popup 변수 초기값 false

  useEffect(() => {
    console.log("123");
    let btns = document.querySelector(".swiper-pagination");
    btns.addEventListener("click", (e) => {
      e.preventDefault;
      if (!(e.target == e.currentTarget)) {
        let afterContent = window
          .getComputedStyle(e.target, "::after")
          .getPropertyValue("content");
        console.log(afterContent);
        setFloat(afterContent.replaceAll('"', ""));
      }
    });
  }, []);

  return (
    <>
      <MainCon>
        {/* popupOpen 이 true 면 팝업이 나오고 false 면 사라짐 */}
        {/* {popupOpen ? <Popup floor={"청소 이미지 등록하기"}></Popup> : <></>} */}
        <img className="pt" src="../src/assets/pt.png" alt="pt" />
        <img
          className="intersect"
          src="../src/assets/Intersect.png"
          alt="intersect"
        />
        <MainText>
          서울 디지텍고등학교 지도 <p>{float}</p>
        </MainText>
        <SlideCon className="slideCon">
          <Swiper
            style={{ width: "950px", height: "530px", margin: "0 auto" }}
            modules={[Navigation, Pagination, Autoplay]} // 모듈 등록
            spaceBetween={50} // 슬라이드 간 간격
            slidesPerView={1} // 한 번에 보여줄 슬라이드 수
            //   navigation // 네비게이션 버튼 활성화
            pagination={{ clickable: true }} // 페이지네이션 활성화 및 클릭 가능 설정
            //   autoplay={{ delay: 3000 }} // 자동 슬라이드 전환
            loop={true} // 무한 루프
            direction="vertical" // 방향을 세로로 변경
          >
            <SwiperSlide>
              <img
                className="mapImg"
                src="../src/assets/mapImg6.png"
                alt="map4F"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mapImg"
                src="../src/assets/mapImg5.png"
                alt="map3F"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mapImg"
                src="../src/assets/mapImg4.png"
                alt="map2F"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mapImg"
                src="../src/assets/mapImg3.png"
                alt="map1F"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mapImg"
                src="../src/assets/mapImg2.png"
                alt="mapB1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="mapImg"
                src="../src/assets/mapImg1.png"
                alt="mapB2"
              />
            </SwiperSlide>
          </Swiper>
        </SlideCon>
      </MainCon>
    </>
  );
};

export default MapSlide;
