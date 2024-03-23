import styled from 'styled-components';
import { api } from '../utils/customAxios';
import { useGoogleLogin } from '@react-oauth/google';
import googlImg from '../assets/svgs/google.svg';

export default function Login() {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (googleRes) => {
      const backResponse = await api.post('/login/oauth2/code/google', {
        idToken: googleRes.access_token,
      });
      // const backResponse = await api.post('/login/oauth2/code/google', {
      //   idToken: googleRes,
      // });
      console.log(backResponse);
    },
    onError: (error) => {
      console.log(error);
    },
    // flow: 'auth-code',
  });

  return (
    <LoginWrapper>
      <SpanWrapper>
        <LoginTitle>내 손안의</LoginTitle>
        <LoginTitle>
          공부메이트, <span>STUDY MATE</span>
        </LoginTitle>
      </SpanWrapper>
      <GoogleButtonWrapper onClick={handleGoogleLogin}>
        <GoogleButton src={googlImg} />
        <GoogleSpan>구글로 3초만에 시작하기</GoogleSpan>
      </GoogleButtonWrapper>
    </LoginWrapper>
  );
}

const SpanWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 144px;
  left: 32px;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
  background: linear-gradient(
    156deg,
    #eef7ee 6.34%,
    #fafafa 42.49%,
    #eef8ef 78.26%
  );
`;

const LoginTitle = styled.span`
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  &:last-child {
    span {
      color: #39af37;
      font-family: Inter;
      font-size: 23px;
      font-style: normal;
      font-weight: 900;
    }
  }
  font-size: 20px;
`;

const GoogleButtonWrapper = styled.button`
  position: absolute;
  bottom: 15%;
  padding: 10px 80px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background: var(--light-white-white-light, #fff);
  /* Light/Box-shadow/$box-shadow-sm */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;
const GoogleButton = styled.img``;
const GoogleSpan = styled.span``;
