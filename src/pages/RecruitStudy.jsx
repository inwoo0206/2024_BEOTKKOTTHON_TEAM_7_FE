import styled from "styled-components";
import WriteActionButtons from "../components/Write/WriteActionButtons";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import { useForm } from "react-hook-form";
// import { api } from "../utils/customAxios";

/*
const handleStudyPostSubmit = () => {
  const studyPostData = {{
    title: title,
    contents: contents,
    subject: subject,
    recruitNum: recruitNum,
    frequency: frequency,
  }
}

  api
      .post(`/api/user/study/write`, studyPostData)
      .then((response) => {
        console.log("포스트가 성공적으로 등록되었습니다.", response.data);
        // 성공 후 처리 로직
      })
      .catch((error) => {
        console.error("포스트 등록에 실패했습니다.", error);
        // 실패 시 처리 로직
      });
};
*/
const Editor = () => {
  const { register, setValue } = useForm();
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      placeholder: "내용을 입력하세요.",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    // Quill 내용이 변경될 때마다 폼의 값 업데이트
    quillInstance.current.on("text-change", () => {
      setValue("content", quillInstance.current.root.innerHTML);
    });
  }, [setValue]);

  return (
    <form>
      <TitleInput {...register("title")} placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </form>
  );
};

const dateTagBox = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function RecruitStudy() {
  const [subject, setSubject] = useState();
  const [frequency, setFrequency] = useState();
  const [recruitNum, setRecruitNum] = useState("");

  // setIsSelectedTag(true);
  const subjectTagClick = (subjectName) => {
    setSubject(subjectName);
    console.log("clicked");
  };

  const frequencyTagClick = (frequency) => {
    setFrequency(frequency);
    console.log("clicked");
  };

  return (
    <>
      <Container>
        <Editor />
        <SelectContainer>
          <UploadPicButton>
            <UploadPicIcon />
            이미지 업로드 하기
          </UploadPicButton>
          <StyledText>모집 분야를 선택하세요.</StyledText>
          <TagsBox>
            <SubjectTag
              onClick={() => subjectTagClick("어학")}
              isSelected={subject === "어학"}
            >
              어학
            </SubjectTag>
            <SubjectTag
              onClick={() => subjectTagClick("자격증")}
              isSelected={subject === "자격증"}
            >
              자격증
            </SubjectTag>
            <SubjectTag
              onClick={() => subjectTagClick("전공")}
              isSelected={subject === "전공"}
            >
              전공
            </SubjectTag>
          </TagsBox>
          <StyledText>희망 인원수</StyledText>
          <InputContainer>
            <TextInput
              value={recruitNum}
              onChange={(e) => setRecruitNum(e.target.value)}
            />
            <Label>명</Label>
          </InputContainer>
          <StyledText>희망하는 스터디 일 수</StyledText>
          <TagsBox>
            {dateTagBox.map((tagBox) => (
              <ChooseDateTag
                key={tagBox.id}
                onClick={() => frequencyTagClick(tagBox.id)}
                isSelectedFrequency={frequency === tagBox.id}
              >
                {tagBox.id !== 4
                  ? `1주일 ${tagBox.id}번`
                  : `1주일 ${tagBox.id}번 이상`}
              </ChooseDateTag>
            ))}
          </TagsBox>
          <WriteActionButtons />
        </SelectContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center; /* 상단 정렬 */
  height: 100vh; /* 전체 높이 */
  padding-top: 20px; /* 상단 여백 */
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 30px;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: flex-start; /* 상단 정렬 */
  padding-top: 20px; /* 상단 여백 */
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
  min-width: 40px;
  border-radius: 8px;
  background: ${(props) =>
    props.isSelected ? "#A4D258" : "#a7a7a7"}; // 선택 여부에 따라 배경색 변경
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ChooseDateTag = styled.div`
  min-width: 69px;
  border-radius: 8px;
  background: ${(props) =>
    props.isSelectedFrequency
      ? "#A4D258"
      : "#a7a7a7"}; // 선택 여부에 따라 배경색 변경
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const TextInput = styled.input`
  position: relative;
  width: 100px; /* 길이 조정 */
  height: 30px; /* 높이 조정 */
  padding: 9px 16px; /* 패딩 조정 */
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  font-size: 16px; /* font-size 조정 */
`;

const Label = styled.span`
  margin-left: 8px;
  font-size: 16px; /* TextInput의 font-size와 일치 */
  color: #858899;
  line-height: 1; /* line-height 조정 */
  position: relative;
`;

const InputContainer = styled.div`
  display: flex; /* flex로 설정하여 내부 요소들을 한 줄에 나란히 배치 */
  align-items: center; /* 세로축 가운데 정렬 */
  margin-top: 10px;
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

const TitleInput = styled.input`
  display: block;
  width: 350px;
  height: 40px;
  padding: 9px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  margin-bottom: 14px;
`;

const QuillWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 350px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #e1e1e8;
  background: #fff;
  margin-top: 20px;

  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
