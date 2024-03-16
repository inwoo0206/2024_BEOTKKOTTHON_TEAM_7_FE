import styled from 'styled-components';

export default function MyStudy({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <StudyBoxs>
        <StudyBox>으쌰으쌰</StudyBox>
        <StudyBox>날개토익</StudyBox>
        <StudyBox>A팀</StudyBox>
        <StudyBox>A팀</StudyBox>
        <StudyBox>A팀</StudyBox>
      </StudyBoxs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 40px;
  margin-left: 27px;
`;

const Title = styled.span`
  color: #303030;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StudyBoxs = styled.div`
  margin-top: 15px;
  height: 45px;
  display: flex;

  overflow-x: auto;

  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StudyBox = styled.div`
  margin-right: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99px;
  height: 40.556px;
  flex-shrink: 0;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`;
