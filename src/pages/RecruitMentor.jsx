import styled from "styled-components";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { api } from "../utils/customAxios";
import { useNavigate } from "react-router-dom";

export default function RecruitMentor() {
  const [subject, setSubject] = useState("");
  const [frequency, setFrequency] = useState("");
  const [role, setRole] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitStudyHandler = async (data) => {
    const formData = new FormData();
    formData.append("teamname", data.teamname);
    formData.append("title", data.title);
    formData.append("contents", data.contents);

    /*
    const recruitStudyData = {
      title: data.title,
      contents: data.contents,
      subject: subject, // 상태에서 설정된 subject를 사용
      role: role,
      frequency: frequency,
    };

    
    try {
      const res = await api.post(`/user/study/write`, recruitStudyData);
      console.log(res);
      console.log(recruitStudyData);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  */
  };
  const subjectTagClick = (subject) => {
    setSubject(subject);
    console.log("clicked");
  };

  const frequencyTagClick = (frequency) => {
    console.log(frequency);
    setFrequency(frequency); // 컴포넌트 상태를 업데이트합니다.
    console.log("clicked");
  };

  const roleTagClick = (role) => {
    setRole(role);
    console.log("clicked");
  };

  return (
    <>
      <Container>
        <TitleInput
          type="teamname"
          {...register("teamname")}
          placeholder="팀명을 입력하세요"
        />
        <TitleInput
          type="title"
          {...register("title")}
          placeholder="제목을 입력하세요"
        />
        <TextField
          {...register("contents", { required: true })}
          id="outlined-multiline-static"
          multiline
          rows={10}
          placeholder="내용을 입력하세요"
          sx={{
            width: "100%",
            fontSize: "12px",
          }}
        />
        <UploadPicButton>
          <UploadPicIcon />
          <UploadPicSpan name="photoURL" placeholder="업로드 하기" />
        </UploadPicButton>
        <SelectContainer>
          <StyledText>모집 분야를 선택하세요.</StyledText>
          <TagsBox>
            <SubjectTag
              onClick={() => subjectTagClick("어학")}
              isselected={subject === "어학"}
            >
              어학
            </SubjectTag>
            <SubjectTag
              onClick={() => subjectTagClick("자격증")}
              isselected={subject === "자격증"}
            >
              자격증
            </SubjectTag>
            <SubjectTag
              onClick={() => subjectTagClick("전공")}
              isselected={subject === "전공"}
            >
              전공
            </SubjectTag>
          </TagsBox>
          <StyledText>역할을 선택하세요.</StyledText>
          <TagsBox>
            <RoleTag
              onClick={() => roleTagClick("멘토")}
              isselected={role === "멘토"}
            >
              멘토
            </RoleTag>
            <RoleTag
              onClick={() => roleTagClick("멘티")}
              isselected={role === "멘티"}
            >
              멘티
            </RoleTag>
          </TagsBox>
          <StyledText>희망하는 스터디 일 수</StyledText>
          <TagsBox>
            <ChooseDateTag
              onClick={() => frequencyTagClick("한번")}
              isselected={frequency === "한번"}
            >
              1주일 1번
            </ChooseDateTag>
            <ChooseDateTag
              onClick={() => frequencyTagClick("두번")}
              isselected={frequency === "두번"}
            >
              1주일 2번
            </ChooseDateTag>
            <ChooseDateTag
              onClick={() => frequencyTagClick("세번")}
              isselected={frequency === "세번"}
            >
              1주일 3번
            </ChooseDateTag>
            <ChooseDateTag
              onClick={() => frequencyTagClick("네번 이상")}
              isselected={frequency === "네번 이상"}
            >
              1주일 4번 이상
            </ChooseDateTag>
          </TagsBox>
          <WriteActionButtonsBlock>
            <Button
              style={{ backgroundColor: "#DADADA" }}
              onClick={() => navigate(-1)}
            >
              취소하기
            </Button>
            <Button
              style={{ backgroundColor: "#359c3a" }}
              onClick={handleSubmit(submitStudyHandler)}
            >
              등록하기
            </Button>
          </WriteActionButtonsBlock>
        </SelectContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  align-items: center;
  height: 100vh;
  padding-top: 20px;
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 30px;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 20px;
  flex-direction: column;
`;

const UploadPicIcon = styled(CropOriginalIcon)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #dadada;
`;

const UploadPicButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dadada;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  margin-top: 13px;
`;

const TagsBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  margin-top: 14px;
`;

const SubjectTag = styled.div`
  background-color: ${(props) => (props.isselected ? "#4CAF50" : "#a7a7a7")};
  min-width: 40px;
  border-radius: 8px;
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const RoleTag = styled.div`
  background-color: ${(props) => (props.isselected ? "#4CAF50" : "#a7a7a7")};
  min-width: 40px;
  border-radius: 8px;
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ChooseDateTag = styled.div`
  background-color: ${(props) => (props.isselected ? "#4CAF50" : "#a7a7a7")};
  min-width: 69px;
  border-radius: 8px;
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const TitleInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 9px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  margin-bottom: 14px;
`;

const StyledText = styled.div`
  color: #858899;
  margin-top: 30px;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.1px;
`;

const UploadPicSpan = styled.input`
  font-size: 10px;
  color: #919eb6;
  font-weight: 400;
  margin-left: 4px;
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
  margin-bottom: 30px;
  button + button {
    margin-left: 2rem;
  }
`;
