import styled from 'styled-components';
import mainLogo from '../../assets/svgs/mainLogo.svg';
import menuBar from '../../assets/svgs/menu.svg';
import findStudy from '../../assets/svgs/findStudy.svg';
import findMento from '../../assets/svgs/findMento.svg';
import home from '../../assets/svgs/home.svg';
import studyList from '../../assets/svgs/studyList.svg';
import myPage from '../../assets/svgs/myPage.svg';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeaderWrapper>
        <MainLogoWrapper>
          <MainLogoImg src={mainLogo} onClick={() => navigate('/')} />
          <MainLogoTitle>Study mate</MainLogoTitle>
        </MainLogoWrapper>
        <MenuBar>
          <MenuBarIcon src={menuBar} />
        </MenuBar>
      </HeaderWrapper>
      <Outlet />
      <BottomNavBarWrapper>
        <BottomIconBox>
          <BottomIcon src={findStudy} />
          <BottomIconTitle>스터디원 찾기</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox>
          <BottomIcon src={findMento} />
          <BottomIconTitle>멘토/멘티 찾기</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox>
          <BottomIcon src={home} />
          <BottomIconTitle>홈</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox>
          <BottomIcon
            src={studyList}
            style={{ height: '21px', width: '21pxs', marginBottom: '10%' }}
          />
          <BottomIconTitle>스터디 리스트</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox>
          <BottomIcon src={myPage} />
          <BottomIconTitle>마이페이지</BottomIconTitle>
        </BottomIconBox>
      </BottomNavBarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const HeaderWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  /* position: sticky; */
`;
const MainLogoWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MainLogoImg = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

const MainLogoTitle = styled.h2`
  font-weight: 800;
  margin-left: 1%;
  cursor: pointer;
`;

const MenuBar = styled.div``;
const MenuBarIcon = styled.img`
  height: 21px;
  width: 21px;
`;

const BottomNavBarWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px -2px 1px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 60px;

  bottom: 0px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomIconBox = styled.button`
  height: 50px;
  width: 58px;
  color: #919191;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BottomIconTitle = styled.span`
  font-size: 10px;
  margin-top: 2px;
`;
const BottomIcon = styled.img`
  height: 28px;
  width: 28px;
`;
