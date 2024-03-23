import styled from 'styled-components';

import BestStudyBox from './BestStudyBox';
import { useHome } from '../../hooks/useHome';
import { useNavigate } from 'react-router-dom';

export default function BestStudy() {
  const { best } = useHome();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>우수 스터디</Title>
      <StudyBox>
        {best &&
          best.data.map((item, i) => (
            <BestStudyBox
              key={item.id}
              title={item.title}
              id={item.id}
              rating={i}
            />
          ))}
      </StudyBox>
    </Wrapper>
  );
}
const StudyBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 15px;
  height: 80px;
  /* width: 100%; */
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #161616;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 14px;
`;
