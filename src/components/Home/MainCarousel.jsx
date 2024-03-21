import styled from 'styled-components';
import MultiCarousel from './MultiCarousel';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';

const CarouselImg = styled.img`
  height: 85px;
  width: 430px;
`;

export default function MainCarousel() {
  return (
    <MultiCarousel>
      {/* {data.map((item) => {
        return <CarouselImg key={item.id} src={item.imgPath} />;
      })} */}
      <CarouselImg src={banner1} />
      <CarouselImg src={banner2} />
    </MultiCarousel>
  );
}
