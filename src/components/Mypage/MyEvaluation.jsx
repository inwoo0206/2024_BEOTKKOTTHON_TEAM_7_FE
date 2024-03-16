import styled from 'styled-components';
import star from '../../assets/svgs/star.svg';

export default function MyEvaluation() {
  return (
    <Wrapper>
      <Title>나에 대한 평가</Title>
      <EvaluateBoxs>
        <EvaluateBox>
          <ProfileLine>
            <ProfileImg src={star} />
            <ProfileTitle>홍길동님의 평가</ProfileTitle>
            <Star>
              <img src={star} />
              <span>4.99</span>
            </Star>
          </ProfileLine>
          <Content>
            성실한 부원!! 함께한 1년동안 즐거웠습니다! 다음번에도 꼭 함께해요
            😉😉
          </Content>
        </EvaluateBox>
        <EvaluateBox>
          <ProfileLine>
            <ProfileImg src={star} />
            <ProfileTitle>홍길동님의 평가</ProfileTitle>
            <Star>
              <img src={star} />
              <span>4.99</span>
            </Star>
          </ProfileLine>
          <Content>
            성실한 부원!! 함께한 1년동안 즐거웠습니다! 다음번에도 꼭 함께해요
            😉😉
          </Content>
        </EvaluateBox>
        <EvaluateBox>
          <ProfileLine>
            <ProfileImg src={star} />
            <ProfileTitle>홍길동님의 평가</ProfileTitle>
            <Star>
              <img src={star} />
              <span>4.99</span>
            </Star>
          </ProfileLine>
          <Content>
            성실한 부원!! 함께한 1년동안 즐거웠습니다! 다음번에도 꼭 함께해요
            😉😉
          </Content>
        </EvaluateBox>
      </EvaluateBoxs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 40px;
  margin-left: 27px;
`;
const Title = styled.span`
  color: #303030;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const EvaluateBoxs = styled.div`
  height: 100px;
  margin-top: 15px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EvaluateBox = styled.div`
  padding: 15px;
  width: 200px;
  margin-right: 15px;
  height: 95px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

const ProfileLine = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileImg = styled.img`
  height: 20px;
  width: 20px;
`;

const ProfileTitle = styled.span`
  width: 70px;
  color: #adb5bd;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Content = styled.div`
  width: 160px;
  color: #4e4e4e;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
`;
