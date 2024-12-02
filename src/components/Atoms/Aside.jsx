import styled from "styled-components";

const AsideWrap = styled.div`
  height: 100vh;
  width: 300px;
  position: fixed;
  border-right: 1.5px solid #cccccc;
  display: flex;
  flex-direction: column;
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
  font-size: 14px;
  margin: 16px;
`;

const FindRole = styled.form`
  width: 300px;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;

  & > label {
    display: flex;
    /* margin: 24px; */
    border-radius: 8px;
    width: 224px;
    justify-content: start;
    align-items: center;
    gap: 12px;
    padding: 6px 10px;
    background-color: #cdcdcd;

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

const Aside = () => {
  const UserName = () => {
    return (
      <>
        <NameStyle>sdh230418@sdh.hs.kr</NameStyle>
      </>
    );
  };

  const SearchRole = () => {
    return (
      <>
        <FindRole action="#">
          <label htmlFor="search">
            <img src="../src/assets/search.png" />
            <input id="search" type="text" />
          </label>
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
            src="../src/assets/PROFILE.png"
            alt="프로필"
            style={{ widows: "40px", height: "40px", marginLeft: "30px" }}
          />
          <UserName></UserName>
        </Profile>
        <SearchRole />
      </AsideWrap>
    </>
  );
};

export default Aside;
