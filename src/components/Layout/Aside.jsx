import styled from "styled-components";
import {useState} from "react";
import NoticePopup from '../Atoms/NoticePopup.jsx';

const AsideWrap = styled.div`
  height: 100vh;
  width: 300px;
  position: fixed;
  border-right: 1.5px solid #cccccc;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 330px;
  background-color: white;
  border-top: 1.5px solid #cccccc;
  border-right: 1.5px solid #cccccc;
  border-bottom: 1.5px solid #cccccc;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const NameStyle = styled.div`
  font-size: 18px;
  margin: 16px;
  font-family: "maple", serif;
`;

const FindRole = styled.form`
  font-family: "maple", serif;
  width: 300px;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  
  & > .notification:hover {
    background-color: #cdcdcd;
  }
  
  & > .notification {
    display: flex;
    /* margin: 24px; */
    border-radius: 8px;
    width: 224px;
    justify-content: start;
    align-items: center;
    gap: 50px;
    padding: 6px 10px;
    transition: 0.3s;

    > img {
      width: 20px;
      height: 20px;
    }

    > input {
      background: rgba(255, 255, 255, 0);
      border: none;
      outline: none;
      min-width: 185px;
    }
  }

  & > label > img {
    width: 20px;
    height: 20px;
  }
`;

const Aside = ({username, userprofile}) => {
    const [isPopup, setIsPopup] = useState(false);

  const UserName = () => {
    return (
      <>
        <NameStyle>{username}</NameStyle>
      </>
    );
  };

  const SearchRole = () => {
    return (
        <>
          <FindRole action="#">
            <div className="notification" htmlFor="search" onClick={()=>setIsPopup(true)}>
              <img src="../src/assets/Bell.png" />
              <p>공지사항</p>
            </div>
          </FindRole>
        </>
    );
  };

  return (
    <>
      <AsideWrap>
        <img
          src="../src/assets/CLEANTECH.png"
          alt="로고"
          style={{ width: "224px", height: "34px", margin: "32px auto" }}
        />
        <Profile>
          <img
            src={`${userprofile}`}
            alt="프로필"
            style={{ widows: "40px", height: "40px", marginLeft: "30px", borderRadius: "50%" }}
          />
          <UserName></UserName>
        </Profile>
        <SearchRole />
      </AsideWrap>
        {isPopup && <NoticePopup onClose={()=> setIsPopup(false)}/>}
    </>
  );
};

export default Aside;
