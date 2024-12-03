import styled from "styled-components";
const MainText = styled.h1`
    font-size: 20px; font-weight: 800;
`

const SubText = styled.h2`
    
`;

const Background = styled.div`
    display: flex; justify-content: center; align-items: center;
    width: 100%; height: 100%;
    position: fixed; top: 0; left: 0; z-index: 2;
    background-color: rgba(0, 0, 0, .4);
`;


const PopupBox = styled.div`
    position: relative;
    display: flex; flex-direction: column;
    width: 366px; height: 366px;
    background-color: #fff;
    border-bottom: 10px solid #d9d9d9;
`;

const PopupDecoration = styled.div`
    position: absolute; top: 0; left: 50%;
    translate: -50% 0;
    background-color: #5599FF;
    width: 75%; height: 5px;
    &::before {
        position: absolute;
        top: 0; left: -4.5px;
        width: 5px; height: 5px;
        background-color: #5599FF;
        content: '';
        clip-path: polygon(100% 1%, 0 0, 100% 100%);
    };
    &::after {
        position: absolute;
        top: 0; right: -4.5px;
        width: 5px; height: 5px;
        background-color: #5599FF;
        content: '';
        clip-path: polygon(100% 0, 0 0, 0 100%);;
    };
`;

const Top = styled.div`
    padding: 0 15px 0 30px;
    display: flex; justify-content: space-between; align-items: center;
    width: 100%; height: 66px;
    border-bottom: 2px solid #d9d9d9;
`;

const Util = styled.div`
    display: flex; align-items: center; gap: 11px;
`;

const Svg = styled.img`
    height: ${(props)=>props.height};
`;


const Bottom = styled.div`
    display: flex; flex-direction: column; align-items: center; gap: 20px;
    width: 100%; height: 300px;
`;

const ListBox = styled.ul`
    display: flex; flex-direction: column;
`;

const List = styled.li`
    position: relative;
    display: flex; align-items: center;
    width: 300px; height: 45px;
    border: 2px solid #d9d9d9;
    padding: 0 10px;
    &::after{
        ${(props) => props.success != undefined ? props.success ? `content: '제출함'` : `content: '제출안함'` : ''};
        color: ${(props) => props.success ? "#0f9508" : "#eb2727"};
        font-size: 12px; font-weight: 800;
        position: absolute;
        right: 20px;
    }
`;

const Options = styled.li`
    display: flex;
    height: 40px;
`;

const Option = styled.button`
    font-weight: 800;
    width: 100%;
    background-color: ${(props)=> props.check ? "rgb(217, 217, 217, .2)" : "#fff"};
    border: 1px solid #d9d9d9;
`;

const UplaodButton = styled.div`
    align-self: flex-end;
    margin-right: 30px;
    border: 1px solid black;
    width: 165px; height: 35px;
    font-size: 14px;
    display: flex; justify-content: center; align-items: center; gap: 5px;
`;

const Popup = (props) => {
    const floor = props.floor ?? "102호 주번 확인"; // floor 로 들어 온게 있음 가져오고 없으면 "102호 주번 확인" 으로 기본값 세팅
    return (
        <Background>
            <PopupBox>
                <PopupDecoration />
                <Top>
                    {/* floor 라는 이름으로 props 주면 그 텍스트가 들어옴 만약 없으면 기본값이 들어옴 */}
                    <MainText>{floor}</MainText>
                    <Util>
                        {/* height 에 픽셀넣으면 각각 높이 조정 가능 */}
                        <Svg height={"30px"} src="../src/assets/popup/setting.svg" alt="" />
                        <Svg height={"22px"} src="../src/assets/popup/cancel.svg" alt="" />
                    </Util>
                </Top>
                <Bottom>
                    <ListBox>
                        <Options>
                            {/* check 가 true 면 색깔이 꺼매짐 */}
                            <Option check={true}>
                                <SubText>이번 주 주번</SubText>
                            </Option>
                            <Option>
                                <SubText>다음 주 주번</SubText>
                            </Option>
                        </Options>
                        {/* success 가 true 면 제출함 표시 false 면 제출 안함 표시 없으면 아무것도 표시 하지 않음 */}
                        <List success={true}>
                            <MainText>이선우</MainText>
                        </List>
                        <List success={false}>
                            <MainText>신우주</MainText>
                        </List>
                        <List></List>
                        <List></List>
                    </ListBox>
                    <UplaodButton>
                        청소 사진 업로드
                        <Svg src="../src/assets/popup/img.svg" />
                    </UplaodButton>
                </Bottom>
            </PopupBox>
        </Background>
    )
}
export default Popup;