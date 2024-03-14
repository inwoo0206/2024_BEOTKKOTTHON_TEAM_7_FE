import styled from 'styled-components';
import { useState } from 'react';
import mainLogo from '../../assets/svgs/mainLogo.svg';
import menuBar from '../../assets/svgs/menu.svg';

import { Outlet, useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PersonIcon from '@mui/icons-material/Person';

export default function Layout() {
  const navigate = useNavigate();

  const [active, setActive] = useState('');

  const handleClick = (value) => {
    navigate(`/${value}`);
    setActive(value);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <MainLogoWrapper>
          <MainLogoImg src={mainLogo} onClick={() => navigate('/')} />
          <MainLogoTitle onClick={() => navigate('/')}>
            Study mate
          </MainLogoTitle>
        </MainLogoWrapper>
        <MenuBar>
          <MenuBarIcon src={menuBar} />
        </MenuBar>
      </HeaderWrapper>
      <Outlet />
      <BottomNavBarWrapper>
        <BottomIconBox
          value="find-study"
          onClick={() => handleClick('find-study')}
          active={active === 'find-study'}
        >
          <MenuBookIcon fontSize="medium" />
          <BottomIconTitle>스터디원 찾기</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox
          value="find-mentoti"
          onClick={() => handleClick('find-mentoti')}
          active={active === 'find-mentoti'}
        >
          <PeopleAltIcon fontSize="medium" />
          <BottomIconTitle>멘토/멘티 찾기</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox
          value=""
          onClick={() => handleClick('')}
          active={active === ''}
        >
          <HomeIcon fontSize="medium" />
          <BottomIconTitle>홈</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox
          value="study-lists"
          onClick={() => handleClick('study-lists')}
          active={active === 'study-lists'}
        >
          <FactCheckIcon fontSize="medium" />
          <BottomIconTitle>스터디 리스트</BottomIconTitle>
        </BottomIconBox>
        <BottomIconBox
          value="login"
          onClick={() => handleClick('login')}
          active={active === 'login'}
        >
          <PersonIcon fontSize="medium" />
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
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-left: 1%;
  cursor: pointer;
`;

const MenuBar = styled.div``;
const MenuBarIcon = styled.img`
  height: 21px;
  width: 21px;
`;

const BottomNavBarWrapper = styled.nav`
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 0px -2px 1px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 80px;

  bottom: 0px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomIconBox = styled.button`
  height: 55px;
  width: 62px;

  color: ${({ active }) => (active ? '#39AF37' : '#919191')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BottomIconTitle = styled.span`
  font-size: 10px;
  margin-top: 2px;
`;
