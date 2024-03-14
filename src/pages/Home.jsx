import MainCarousel from '../components/Home/MainCarousel';
import Welcome from '../components/Home/Welcome';

export default function Home() {
  return (
    <div>
      <MainCarousel />
      <div style={{ height: '10px' }}></div>
      <Welcome />
    </div>
  );
}
