import styled from 'styled-components';

export default function RecentMentoringBox() {
  return (
    <Wrapper>
      <TagsBox>
        <Tag>어학</Tag>
        <Tag>임용</Tag>
        <Tag>대학</Tag>
      </TagsBox>
      <TitleBox>C 언어 A+입니다. </TitleBox>
      <NewIconBox>N</NewIconBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* margin-left: 20px; */
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const TagsBox = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const Tag = styled.div`
  border-radius: 8px;
  background: #a7a7a7;
  width: 30px;
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 145px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

const NewIconBox = styled.div`
  border-radius: 2px;
  background: #ff9a3c;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
