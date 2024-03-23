import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import FindStudyList from "../components/Find/FindStudyList";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function FindStudy() {
  return (
    <>
      <Container>
        <SearchBar />
        <FindStudyList />
        <Link to="/find-study/regist-study">
          <MoveToRegisterButton>
            <EditIcon />
          </MoveToRegisterButton>
        </Link>
      </Container>
    </>
  );
}

function SearchBar() {
  return (
    <InputContainer>
      <StyledSearchIcon />
      <TitleInput placeholder="스터디를 검색해보세요. (작성자, 태그)" />
    </InputContainer>
  );
}

const Container = styled.div`
  display: flex; /* 변경됨 */
  flex-direction: column; /* 세로 정렬을 위해 추가 */
  justify-content: center;
  align-items: center;
  align-items: flex-start; /* 상단 정렬을 위해 추가 */
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

const MoveToRegisterButton = styled.button`
  position: fixed;
  bottom: 110px;
  left: 315px;
  z-index: 1000;

  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #39af37;
  border-radius: 100px;
  color: white;
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
