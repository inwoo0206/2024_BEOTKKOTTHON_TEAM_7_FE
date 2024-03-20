import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import FindStudyList from "../components/Find/FindStudyList";
import SearchBar from "../components/Find/SearchBar";

import { Link } from "react-router-dom";

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

const Container = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 844px;
`;

const MoveToRegisterButton = styled.button`
  position: fixed;
  bottom: 110px;
  left: 330px;
  width: 100px;
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
