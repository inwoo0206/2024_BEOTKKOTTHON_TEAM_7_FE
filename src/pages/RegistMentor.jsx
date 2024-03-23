import styled from "styled-components";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import test from "../assets/svgs/google.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

export default function RegistMentor() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitMentorHandler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("subject", data.subject);
    formData.append("score", data.score);
    formData.append("source", data.source);
    formData.append("file", data.photoURL[0]);

    /*
    try {
      const res = await api.post(`/user/study/write`, formData);
      console.log(res);
      console.log(recruitStudyData);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
*/
  };
  return (
    <>
      <ProfileContainer>
        <StyledButton
          onClick={() => {
            navigate(-1);
          }}
        >
          <GoBackIcon />
        </StyledButton>
        <ProfleImg src={test} />
      </ProfileContainer>
      <HorizontalContainer>
        <SubContainer>
          <StyledText>이름</StyledText>
          <TitleInput type="name" {...register("name")} />
        </SubContainer>
        <SubContainer>
          <StyledText>분야</StyledText>
          <TitleInput type="subject" {...register("subject")} />
        </SubContainer>
      </HorizontalContainer>
      <Container>
        <StyledText>학점 혹은 점수</StyledText>
        <TitleInput type="score" {...register("score")} />
        <StyledText>증빙자료</StyledText>
        <TextField
          {...register("contents", { required: true })}
          id="outlined-multiline-static"
          multiline
          rows={8}
          placeholder="내용을 입력하세요"
          sx={{
            width: "100%",
            fontSize: "10px",
          }}
        />
        <UploadPicBox>
          <CropOriginalIcon />
          <UploadPicSpan
            name="photoURL"
            type="file"
            placeholder="업로드 하기"
            {...register("photoURL")}
          />
        </UploadPicBox>
        <WriteActionButtonsBlock>
          <Button
            style={{ backgroundColor: "#DADADA" }}
            onClick={() => navigate(-1)}
          >
            취소하기
          </Button>
          <Button
            style={{ backgroundColor: "#359c3a" }}
            onClick={handleSubmit(submitMentorHandler)}
          >
            등록하기
          </Button>
        </WriteActionButtonsBlock>
      </Container>
    </>
  );
}

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
  width: 150px;
`;

const ProfileContainer = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(180deg, #dff0e0 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 유지 */
  position: relative; /* 절대 위치 사용을 위해 추가 */
  justify-content: center;
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

const UploadPicSpan = styled.input`
  font-size: 10px;
  color: #919eb6;
  font-weight: 400;
  margin-left: 4px;
`;

const UploadPicBox = styled.div`
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
  margin-top: 6px;
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

const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  border-radius: 10px;
  border: 1px solid #fff;
  width: 150px;
  height: 55px;
  flex-shrink: 0;
`;

const WriteActionButtonsBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  button + button {
    margin-left: 2rem;
  }
`;

const TitleInput = styled.input`
  display: block;
  width: 150px;
  height: 40px;
  padding: 9px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  margin-bottom: 14px;
`;
