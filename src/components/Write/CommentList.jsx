import styled from "styled-components";

const CommentItem = ({ title, profilePic, userName }) => {
  return (
    <CommentBlock>
      <UserInfo>
        <ProfilePic src={profilePic} alt="profile" />
        <UserName>{userName}</UserName>
      </UserInfo>
      <StyledText>{title}</StyledText>
    </CommentBlock>
  );
};

const CommentList = () => {
  const comments = [
    {
      id: 1,
      title: "저도 컴활 공부 중입니다... 같이 해요..!",
      profilePic: "/path/to/profile1.jpg",
      userName: "홍길동",
    },
    {
      id: 2,
      title: "저도 하고 싶습니다..!",
      profilePic: "/path/to/profile2.jpg",
      userName: "달려야하니",
    },
    {
      id: 3,
      title: "자리 있나요?",
      profilePic: "/path/to/profile3.jpg",
      userName: "느린법사",
    },
    {
      id: 4,
      title: "저도 컴활 공부 중입니다... 같이 해요..!",
      profilePic: "/path/to/profile1.jpg",
      userName: "홍길동",
    },
    {
      id: 5,
      title: "저도 컴활 공부 중입니다... 같이 해요..!",
      profilePic: "/path/to/profile1.jpg",
      userName: "홍길동",
    },
  ];
  return (
    <CommentBlock>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          title={comment.title}
          profilePic={comment.profilePic}
          userName={comment.userName}
        />
      ))}
    </CommentBlock>
  );
};

const StyledText = styled.div`
  color: #2e2e2e;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 220% */
  letter-spacing: -0.1px;
  padding-bottom: 5px;
  border-bottom: 1px solid #d9d9d9;
`;

const CommentBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px; // 포스트 제목 위에 약간의 여백을 줍니다.
`;

const ProfilePic = styled.img`
  width: 30px; // 프로필 사진의 크기를 지정합니다.
  height: 30px; // 프로필 사진의 크기를 지정합니다.
  border-radius: 50%; // 원형으로 프로필 사진을 표시합니다.
  margin-right: 1rem; // 이름과의 간격을 지정합니다.
`;

const UserName = styled.span`
  color: #2e2e2e;

  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 220% */
  letter-spacing: -0.1px;
`;

export default CommentList;
