import styled from "styled-components";
import Editor from "../components/Write/Editor";
import WriteActionButtons from "../components/Write/WriteActionButtons";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";

const dateTagBox = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
export default function RecruitStudy() {
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
            <SubjectTag>어학</SubjectTag>
            <SubjectTag>자격증</SubjectTag>
            <SubjectTag>전공</SubjectTag>
          </TagsBox>
          <StyledText>희망 인원수</StyledText>
          <InputContainer>
            <TextInput />
            <Label>명</Label>
          </InputContainer>
          <StyledText>희망하는 스터디 일 수</StyledText>
          <TagsBox>
            {dateTagBox.map((tagBox) => (
              <ChooseDateTag key={tagBox.id}>
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
  background: #a7a7a7;
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
  background: #a7a7a7;
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const TextInput = styled.input`
  display: block;
  width: 100px; /* 길이 조정 */
  height: 20px; /* 높이 조정 */
  padding: 9px 16px; /* 패딩 조정 */
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  margin-bottom: 14px;
  font-size: 16px; /* font-size 조정 */
`;

const Label = styled.span`
  margin-left: 8px;
  font-size: 16px; /* TextInput의 font-size와 일치 */
  color: #858899;
  line-height: 1; /* line-height 조정 */
  display: flex; /* flex로 설정하여 높이 중앙 정렬 */
  align-items: center; /* 세로축 가운데 정렬 */
`;

const InputContainer = styled.div`
  display: flex; /* flex로 설정하여 내부 요소들을 한 줄에 나란히 배치 */
  align-items: center; /* 세로축 가운데 정렬 */
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
