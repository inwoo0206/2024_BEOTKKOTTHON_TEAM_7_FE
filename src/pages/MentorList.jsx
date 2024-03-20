import styled from "styled-components";
import MentorListBox from "../components/Find/MentorListBox";

export default function MentorList() {
  return (
    <>
      <HeaderText>멘토 리스트</HeaderText>
      <Container>
        <MentorListBox />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 844px;
`;

const HeaderText = styled.div`
  color: #191919;
  width: 100%;
  height: 50px;
  padding-top: 15px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
