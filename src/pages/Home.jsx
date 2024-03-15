import MainCarousel from '../components/Home/MainCarousel';
import Welcome from '../components/Home/Welcome';
import BestStudy from '../components/Home/BestStudy';
import RecentMentoring from '../components/Home/RecentMentoring';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <MainCarousel />
      <div style={{ height: '10px' }}></div>
      <Welcome />
      <BestStudy />
      <RecentMentoring />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100dvh;
  background-color: #f9f9f9;
`;
