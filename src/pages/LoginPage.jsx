import styled from 'styled-components';
import googlImg from '../assets/svgs/google.svg';
import { api } from '../utils/customAxios';
import { useGoogleLogin } from '@react-oauth/google';

export default function Login() {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      // const token = res.access_token;
      console.log(res);
      const response = api.get('/oauth2/authorization/google');
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <LoginWrapper>
      <LoginTitle>
        <span>로그인</span> 후에
      </LoginTitle>
      <LoginTitle>이용가능한 서비스입니다!</LoginTitle>
      <GoogleButtonWrapper onClick={handleGoogleLogin}>
        <GoogleButton src={googlImg} />
        <GoogleSpan>구글로 시작하기</GoogleSpan>
      </GoogleButtonWrapper>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70dvh;
`;

const LoginTitle = styled.span`
  &:first-child {
    span {
      color: #01b99f;
      font-weight: 700;
    }
  }
  font-size: 20px;
`;

const GoogleButtonWrapper = styled.button`
  position: absolute;
  bottom: 15%;
  padding: 10px 100px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const GoogleButton = styled.img``;
const GoogleSpan = styled.span``;
