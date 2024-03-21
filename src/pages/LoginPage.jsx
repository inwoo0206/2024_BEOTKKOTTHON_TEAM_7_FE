import styled from 'styled-components';
import googlImg from '../assets/svgs/google.svg';

export default function Login() {
  const handleGoogleLogin = async () => {
    window.location.href =
      'http://ec2-13-124-244-129.ap-northeast-2.compute.amazonaws.com:8080/api/oauth2/authorization/google';

    // const res = await api.get('/oauth2/authorization/google');
    // console.log(res);
  };

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
