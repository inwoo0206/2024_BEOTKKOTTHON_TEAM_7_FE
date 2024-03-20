import styled from "styled-components";
import Editor from "../components/Write/Editor";
import WriteActionButtons from "../components/Write/WriteActionButtons";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";

const dateTagBox = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
export default function RecruitMentor() {
  return (
    <Wrapper>
      <Container>
        <TitleInput placeholder="팀명을 입력하세요." />
        <Editor />
        <SelectContainer>
          <UploadPicButton>
            <UploadPicIcon />
            이미지 업로드 하기
          </UploadPicButton>
          <StyledText>멘토링 분야를 선택하세요.</StyledText>
          <TagsBox>
            <Tag>어학</Tag>
            <Tag>자격증</Tag>
            <Tag>전공</Tag>
          </TagsBox>
          <StyledText>역할을 선택하세요.</StyledText>
          <TagsBox>
            <Tag>멘토</Tag>
            <Tag>멘티</Tag>
          </TagsBox>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const TitleInput = styled.input`
  display: block; /* flex 대신 block 사용 */
  width: 350px; /* 길이 조정 */
  height: 40px;
  padding: 9px 16px;
  box-sizing: border-box; /* 패딩과 테두리 포함 너비 */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  margin-bottom: 14px;
`;

const Container = styled.div`
  display: flex;
  align-items: center; /* 상단 정렬 */

  padding-top: 20px; /* 상단 여백 */
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 50px;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: flex-start; /* 상단 정렬 */
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

const Tag = styled.div`
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

const StyledText = styled.div`
  color: #858899;
  margin-top: 20px;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.1px;
`;
