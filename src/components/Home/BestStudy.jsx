import styled from 'styled-components';
import MultiCarousel from './MultiCarousel';
import BestStudyBox from './BestStudyBox';

const data = [
  { id: 1, title: '으쌰으쌰' },
  { id: 2, title: '스터디메이드' },
  { id: 3, title: '자바스프링' },
];

export default function BestStudy() {
  return (
    <Wrapper>
      <Title>우수 스터디</Title>
      <MultiCarousel>
        {data.map((item) => (
          <BestStudyBox key={item.id} title={item.title} id={item.id} />
        ))}
      </MultiCarousel>
    </Wrapper>
  );
}

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
