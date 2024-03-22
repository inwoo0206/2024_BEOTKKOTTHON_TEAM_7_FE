import styled from 'styled-components';

export default function BestStudyBox({ title, rating }) {
  const gold = '🥇';
  const silver = '🥈';
  const bronze = '🥉';
  return (
    <Wrapper>
      <MedalBox>
        {rating === 0 ? gold : rating === 1 ? silver : bronze}
      </MedalBox>

      <StudyName title={title}>{title}</StudyName>
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
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 5px;
`;
const StudyName = styled.span`
  color: #4d4d4d;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: ${(props) => (props.title.length > 9 ? '9px' : '11px')};
`;

const MedalBox = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 35px;
`;
