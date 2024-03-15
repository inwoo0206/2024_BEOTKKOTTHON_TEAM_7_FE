import styled from 'styled-components';
import RecentMentoringBox from './RecentMentoringBox';
import { useNavigate } from 'react-router-dom';

// const data = [
//   {
//     id: 1,
//     tags: ['어학', '멘토', '한번'],
//     title: 'C 언어 A+ 입니다 들어오세요.',
//   },
//   {
//     id: 2,
//     tags: ['어학', '멘토', '한번'],
//     title: 'C 언어 A+ 입니다 들어오세요.',
//   },
//   {
//     id: 3,
//     tags: ['어학', '멘토', '한번'],
//     title: 'C 언어 A+ 입니다 들어오세요.',
//   },
//   {
//     id: 4,
//     tags: ['어학', '멘토', '한번'],
//     title: 'C 언어 A+ 입니다 들어오세요.',
//   },
//   {
//     id: 5,
//     tags: ['어학', '멘토', '한번'],
//     title: 'C 언어 A+ 입니다 들어오세요.',
//   },
//   {
//     id: 6,
//     tags: ['어학', '멘토', '한번'],
//     title: 'C 언어 A+ 입니다 들어오세요.',
//   },
// ];

export default function RecentMentoring() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TitleBox>
        <TitleContent>최신멘토링</TitleContent>
        <MoreBox onClick={() => navigate('/find-mentoti')}>더보기 &gt;</MoreBox>
      </TitleBox>
      <ContentBox>
        <RecentMentoringBox />
        <RecentMentoringBox />
        <RecentMentoringBox />
        <RecentMentoringBox />
        <RecentMentoringBox />
        <RecentMentoringBox />
      </ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 15px;
  height: 240px;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const TitleContent = styled.span`
  color: #161616;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const MoreBox = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ContentBox = styled.div`
  height: 216px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
