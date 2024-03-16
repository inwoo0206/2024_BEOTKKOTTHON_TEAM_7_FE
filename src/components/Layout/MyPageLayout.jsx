import styled from 'styled-components';
import BottomNavBar from './BottomNavBar';
import { Outlet } from 'react-router-dom';

export default function MyPageLayout() {
  return (
    <Wrapper>
      <HeaderWrapper>
        {/* <BackBox>&lt;</BackBox> */}
        <Title>마이 페이지</Title>
      </HeaderWrapper>
      <Outlet />
      <BottomNavBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const HeaderWrapper = styled.div`
  position: relative;
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

const Title = styled.span`
  color: #707070;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// const BackBox = styled.div`
//   cursor: pointer;
//   color: #707070;
//   left: 14px;
//   top: 22px;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 22px;
//   width: 22px;
//   font-size: 20px;
// `;
