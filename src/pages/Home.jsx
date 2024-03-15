import MainCarousel from '../components/Home/MainCarousel';
import Welcome from '../components/Home/Welcome';
import BestStudy from '../components/Home/BestStudy';
import RecentMentoring from '../components/Home/RecentMentoring';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <MainCarousel />
      <div style={{ height: '10px' }}></div>
      <Welcome />
      <BestStudy />
      <RecentMentoring />
    </div>
  );
}
