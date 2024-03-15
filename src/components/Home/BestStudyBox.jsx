import styled from 'styled-components';

export default function BestStudyBox({ title, id }) {
  const gold = '🥇';
  const silver = '🥈';
  const bronze = '🥉';
  return (
    <Wrapper>
      <MedalBox>{id === 1 ? gold : id === 2 ? silver : bronze}</MedalBox>
      <StudyName>{title}</StudyName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 138px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;
const StudyName = styled.span`
  color: #4d4d4d;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const MedalBox = styled.span`
  position: absolute;
  top: 0;
  left: 5px;
  font-size: 35px;
`;
