import styled from "styled-components";
import Dropdown from "../components/Find/DropDown";
import FindMentotiList from "../components/Find/FindMentotiList";
import SearchBar from "../components/Find/SearchBar";

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

const Container = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 844px;
`;
