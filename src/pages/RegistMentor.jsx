import styled from "styled-components";
import WriteActionButtons from "../components/Write/WriteActionButtons";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import test from "../assets/svgs/google.svg";
import { useNavigate } from "react-router-dom";

export default function RegistMentor() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <ProfileContainer>
        <StyledButton onClick={onClick}>
          <GoBackIcon />
        </StyledButton>
        <ProfleImg src={test} />
      </ProfileContainer>
      <HorizontalContainer>
        <SubContainer>
          <StyledText>이름</StyledText>
          <TextInput />
        </SubContainer>
        <SubContainer>
          <StyledText>분야</StyledText>
          <TextInput />
        </SubContainer>
      </HorizontalContainer>
      <Container>
        <StyledText>학점 혹은 점수</StyledText>
        <TextInput />
        <StyledText>증빙자료</StyledText>
        <SourceInput />
        <StyledButton>
          <UploadPicIcon />
          이미지 업로드 하기
        </StyledButton>
        <WriteActionButtons />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start; /* 상단 정렬 */
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 30px;
  flex-direction: column;
`;

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center; /* 상단 정렬 */
  justify-content: space-between;
  padding-top: 20px; /* 상단 여백 */
  margin-left: 28px;
  margin-right: 28px;
`;

const SubContainer = styled.div`
  flex-direction: column;
  width: 180px;
`;

const ProfileContainer = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(180deg, #dff0e0 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 유지 */
  position: relative; /* 절대 위치 사용을 위해 추가 */
  margin-bottom: 20px;
`;
const ProfleImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const StyledText = styled.div`
  color: #303030;
  min-width: 30px;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 200px;
  margin-bottom: 10px;
`;

const TextInput = styled.input`
  display: flex;
  border-radius: 8px;
  margin-bottom: 20px;
  padding-right: 20px;
  font-size: 16px; /* font-size 조정 */
  width: 160px;
  height: 39px;
  flex-shrink: 0;

  border: 1px solid #e1e1e8;

  background: #fff;
`;

const SourceInput = styled.div`
  display: flex;
  border-radius: 8px;
  margin-bottom: 14px;
  padding-right: 20px;
  width: 333px;
  height: 163px;
  flex-shrink: 0;

  border: 1px solid #e1e1e8;

  background: #fff;
`;

const UploadPicIcon = styled(CropOriginalIcon)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #919eb6;
`;

const GoBackIcon = styled(ArrowBackIosNewIcon)`
  position: absolute; /* 절대 위치 설정 */
  top: 10px; /* 상단에서 얼마나 떨어질지 설정 */
  left: 10px; /* 좌측에서 얼마나 떨어질지 설정 */
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #919eb6;
  background: transparent; /* 배경 투명 */
  border: none; /* 테두리 없음 */
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #919eb6;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 13px;
`;
