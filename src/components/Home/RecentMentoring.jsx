import styled from 'styled-components';

export default function RecentMentoring() {
  return (
    <Wrapper>
      <TitleBox>
        <TitleContent>최신멘토링</TitleContent>
        <MoreBox>더보기 &gt;</MoreBox>
      </TitleBox>
      <ContentBox></ContentBox>
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
`;
