import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

export default function PostCommit() {
  const handleCommentSubmit = () => {
    console.log("댓글 전송!");
  };

  return (
    <Container>
      <InputContainer>
        <TitleInput placeholder="댓글을 입력해주세요." />
        <CommitButton onClick={handleCommentSubmit}>
          <StyledCommitIcon />
        </CommitButton>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  bottom: 20px;
  z-index: 1000;
`;

const TitleInput = styled.input`
  display: flex;
  width: 100%;
  height: 40px;
  padding-left: 15px; /* 필요에 따라 조정 가능 */
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
`;

const StyledCommitIcon = styled(SendIcon)`
  position: absolute;
  margin-left: 21rem;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  color: #359c3a;
`;

const CommitButton = styled.div`
  display: flex;
  position: absolute;
  width: 21px;
  height: 21px;
  justify-content: space-between;
`;
