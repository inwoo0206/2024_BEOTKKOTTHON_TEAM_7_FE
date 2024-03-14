import styled from 'styled-components';
import MultiCarousel from './MultiCarousel';

const CarouselImg = styled.img`
  height: 85px;
  width: 430px;
`;

export default function MainCarousel() {
  return (
    <MultiCarousel>
      {data.map((item) => {
        return <CarouselImg key={item.id} src={item.imgPath} />;
      })}
    </MultiCarousel>
  );
}
const data = [
  {
    id: 1,
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    id: 2,
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    id: 3,
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    id: 4,
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
