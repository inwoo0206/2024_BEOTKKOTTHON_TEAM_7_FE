import styled from 'styled-components';
import mainLogo from '../../assets/svgs/mainLogo.svg';

import { Outlet, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeaderWrapper>
        <MainLogoWrapper>
          <MainLogoImg src={mainLogo} onClick={() => navigate('/')} />
          <MainLogoTitle onClick={() => navigate('/')}>
            Study mate
          </MainLogoTitle>
        </MainLogoWrapper>
        <MenuBar></MenuBar>
      </HeaderWrapper>
      <Outlet />
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
