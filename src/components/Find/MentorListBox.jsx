import styled from "styled-components";
import { useState } from "react";
import ModalPage from "./ModalPage";

const MentorListBlock = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  width: 100%;
  padding-top: 20px; /* 상단 여백 */
  margin-bottom: 30px;
  font-size: 12px;
  padding: 0;
  flex-direction: column;
  justify-content: flex-start;
`;

const ItemBlock = styled.div`
  display: flex;
  width: 334px;
  height: 115px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--light-white-white-light, #fff);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
  flex-direction: column;
  & + & {
    border-top: 3px solid #d9d9d9;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePic = styled.img`
  width: 40px; // 프로필 사진의 크기를 지정합니다.
  height: 40px; // 프로필 사진의 크기를 지정합니다.
  border-radius: 50%; // 원형으로 프로필 사진을 표시합니다.
  margin-right: 1rem; // 이름과의 간격을 지정합니다.
`;

const StyledText = styled.div`
  color: #000;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
`;

const TextBlock = styled.div`
  margin-left: 50px;
`;

const SubContainer = styled.div`
  display: flex; /* flex로 설정하여 내부 요소들을 한 줄에 나란히 배치 */
  align-items: center; /* 세로축 가운데 정렬 */
  gap: 10px;
`;

const ListItem = ({ subject, score, profilePic, userName }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    console.log("사진");
    setModalOpen(true);
  };
  return (
    <ItemBlock onClick={handleClick}>
      <UserInfo>
        <ProfilePic src={profilePic} alt="profile" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <StyledText>{userName}</StyledText>
        </div>
      </UserInfo>
      <TextBlock>
        <SubContainer>
          <StyledText>분야:</StyledText>
          <StyledText>{subject}</StyledText>
        </SubContainer>
        <SubContainer>
          <StyledText>점수:</StyledText>
          <StyledText>{score}</StyledText>
        </SubContainer>
      </TextBlock>
      {modalOpen && <ModalPage setModalOpen={setModalOpen} />}
    </ItemBlock>
  );
};

const MentorListBox = () => {
  const abouts = [
    {
      id: 1,
      subject: "어학",
      score: "토익 900점",
      profilePic: "/path/to/profile1.jpg",
      userName: "홍길동",
    },
    {
      id: 2,
      subject: "어학",
      score: "토익 900점",
      profilePic: "/path/to/profile2.jpg",
      userName: "달려야하니",
    },
    {
      id: 3,
      subject: "어학",
      score: "토익 900점",
      profilePic: "/path/to/profile3.jpg",
      userName: "느린법사",
    },
  ];

  return (
    <>
      <MentorListBlock>
        {abouts.map((about) => (
          <ListItem
            key={about.id}
            subject={about.subject}
            score={about.score}
            profilePic={about.profilePic}
            userName={about.userName}
          />
        ))}
      </MentorListBlock>
    </>
  );
};

export default MentorListBox;
