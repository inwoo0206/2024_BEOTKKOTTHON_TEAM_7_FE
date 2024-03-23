import styled from "styled-components";
import { api } from "../../utils/customAxios";
import { useQuery } from "@tanstack/react-query";

const CommentItem = ({ contents, profilePic, userName }) => {
  return (
    <CommentBlock>
      <UserInfo>
        <ProfilePic src={profilePic} alt="profile" />
        <UserName>{userName}</UserName>
      </UserInfo>
      <StyledText>{contents}</StyledText>
    </CommentBlock>
  );
};

const StudyCommentList = ({ postId, isCommited }) => {
  const getStudyComment = async () => {
    try {
      const data = await api.get(`/study/${postId}/talk`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const useComment = () => {
    const { data: comments } = useQuery({
      queryKey: ["comments", isCommited],
      queryFn: getStudyComment,
    });
    return comments;
  };

  const comments = useComment();

  console.log(comments);
  return (
    <CommentBlock>
      {comments &&
        comments.data.map((comment) => (
          <CommentItem
            key={comment.commentsId}
            contents={comment.contents}
            profilePic="/path/to/profile3.jpg"
            userName="홍길동"
          />
        ))}
    </CommentBlock>
  );
};

const StyledText = styled.div`
  color: #2e2e2e;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 220% */
`;

const CommentBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  padding-left: 20px;
  padding-right: 30px;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px; // 포스트 제목 위에 약간의 여백을 줍니다.
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

export default StudyCommentList;
