import styled from 'styled-components';
import test from '../assets/svgs/google.svg';
import MyStudy from '../components/Mypage/MyStudy';
import MyEvaluation from '../components/Mypage/MyEvaluation';

export default function MyPage() {
  return (
    <Wrapper>
      <ProfileBox>
        <ProfleImg src={test} />
        <Nickname>닉네임</Nickname>
        <Email>sdkkrtk123@gmail.com</Email>
      </ProfileBox>
      <MainContentWrapper>
        <MyStudy title="내가 모집한 스터디" />
        <MyStudy title="내가 참여한 멘토링" />
        <MyEvaluation />
      </MainContentWrapper>
      <BottomWrapper>
        <DeleteBox>
          <OutSpan>로그아웃</OutSpan>
          <span style={{ fontSize: '10px' }}>ㅣ</span>
          <OutSpan>회원탈퇴</OutSpan>
        </DeleteBox>
      </BottomWrapper>
    </Wrapper>
  );
}

const BottomWrapper = styled.div`
  background-color: #f0f0f0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContentWrapper = styled.div`
  width: 100%;
  height: 420px;
  background-color: white;
`;

const Wrapper = styled.div`
  /* background-color: #f0f0f0; */
  overflow: hidden;
`;

const ProfileBox = styled.div`
  height: 187px;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;
const ProfleImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;
const Nickname = styled.span`
  color: #000;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Email = styled.span`
  color: #a7a7a7;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.4px;
`;

const DeleteBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7d7d7d;
`;
const OutSpan = styled.span`
  cursor: pointer;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
