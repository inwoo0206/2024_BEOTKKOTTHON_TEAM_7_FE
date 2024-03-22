import { api } from '../../utils/customAxios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useHome } from '../../hooks/useHome';

export default function PopularStudy() {
  const navigate = useNavigate();

  const { popular } = useHome();
  console.log(popular);

  const test = async () => {
    const res = await api.get('/test');
    console.log(res);
  };

  const studyTest = async () => {
    const res = await api.get('/study');
    console.log(res);
  };
  return (
    <Wrapper>
      <Title>실시간 인기글</Title>
      <PopularBoxs>
        <PopularBox>
          <ProfileContent>
            <Date>03/13 18:28</Date>
            <ProfileImg />
            <ProfileTitle>홍길동</ProfileTitle>
            <ProfileRole>멘토</ProfileRole>
          </ProfileContent>
          <PopularBoxContent>C언어 A+입니다.</PopularBoxContent>
          <TagBox>
            <Tag>어학</Tag>
            <Tag>어학</Tag>
            <Tag>어학</Tag>
          </TagBox>
        </PopularBox>
        <PopularBox>
          <button onClick={() => navigate('/login')}>로그인(테스트용)</button>
          <div>
            <button onClick={test}>test</button>
          </div>
          <div>
            <button onClick={studyTest}>스터디 테스트</button>
          </div>
        </PopularBox>
      </PopularBoxs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 15px;
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
const PopularBoxs = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PopularBox = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 4px;
  background: var(--light-white-white-light, #fff);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 15px;
`;

const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
const Date = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
`;
const ProfileImg = styled.img`
  height: 31px;
  width: 31px;
  margin-right: 10px;
`;
const ProfileTitle = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 10px;
`;
const ProfileRole = styled.span`
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
`;
const PopularBoxContent = styled.span`
  margin-left: 40px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
const TagBox = styled.div`
  width: 100%;
  margin-left: 40px;
  height: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Tag = styled.div`
  border-radius: 8px;
  background: #359c3a;
  width: 31px;
  height: 19px;
  color: white;
  /* padding: 9px 16px; */
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-top: 3px;
`;
