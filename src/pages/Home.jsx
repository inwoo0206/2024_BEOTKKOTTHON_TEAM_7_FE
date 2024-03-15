import MainCarousel from '../components/Home/MainCarousel';
import Welcome from '../components/Home/Welcome';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F9F9F9' }}>
      <MainCarousel />
      <div style={{ height: '10px' }}></div>
      <Welcome />
    </div>
  );
}
