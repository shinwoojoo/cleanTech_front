import styled from "styled-components";

const MainText = styled.h1`
    font-size: 20px;
    font-weight: 800;
    margin-top: 8px;
`;

const Background = styled.div`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    font-family: "maple", serif;
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

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: fit-content;
    margin-left: 24px;
    height: fit-content;
`;

const Content = styled.div`
    margin: 24px 0 0 0;
    line-height: 28px;
    font-size: 20px;
    
`;

const NoticePopup = ({ onClose }) => {

    return (
        <Background>
            <PopupBox>
                <PopupDecoration/>
                <Top>
                    {/* floor 라는 이름으로 props 주면 그 텍스트가 들어옴 만약 없으면 기본값이 들어옴 */}
                    <MainText>공지사항</MainText>
                    <Util>
                        {/* height 에 픽셀넣으면 각각 높이 조정 가능 */}
                        {/* <Svg height={"30px"} src="../src/assets/popup/setting.svg" alt="" /> */}
                        <Svg onClick={onClose} height={"22px"} src="../src/assets/popup/cancel.svg" alt=""/>
                    </Util>
                </Top>
                <ContentBox>
                    <Content>
                        <ol>
                            1. 주번 역할
                            <li>- 오전 &gt; 쓸기</li>
                            <li>- 오후 &gt; 닦기</li>
                        </ol>
                    </Content>

                    <Content>
                        <ol>
                            2. 물걸레 금지 구역
                            <li>- 본관 엘리베이터</li>
                            <li>- 본관 1층 복도 전체(이사장실~끝)</li>
                            <li>- 본관 2층 복도 전체</li>
                            <li>- 본관 3층 복도 전체</li>
                        </ol>
                    </Content>
                </ContentBox>
            </PopupBox>
        </Background>
    );
};
export default NoticePopup;
