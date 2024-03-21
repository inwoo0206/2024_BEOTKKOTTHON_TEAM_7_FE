import styled from "styled-components";
import Dropdown from "../components/Find/DropDown";
import FindMentotiList from "../components/Find/FindMentotiList";
import SearchIcon from "@mui/icons-material/Search";

export default function FindMentoti() {
  return (
    <>
      <Container>
        <SearchBar />
        <FindMentotiList />
      </Container>
      <Dropdown />
    </>
  );
}

function SearchBar() {
  return (
    <InputContainer>
      <StyledSearchIcon />
      <TitleInput placeholder="멘토를 검색해보세요. (작성자, 태그)" />
    </InputContainer>
  );
}

const Container = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 844px;
`;

const InputContainer = styled.div`
  display: inline-block;
  padding: 9px 16px;
  align-self: stretch;
  position: relative; /* 변경된 부분: relative 추가 */
  margin-left: 13px;
`;

const TitleInput = styled.input`
  display: block;
  width: 335px;
  height: 40px;
  padding: 9px 16px;
  padding-left: 40px; /* 필요에 따라 조정 가능 */
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  margin-top: 8px;
  left: 25px; /* 변경된 부분: margin-left에서 left로 변경 */
  color: #757575;
`;
