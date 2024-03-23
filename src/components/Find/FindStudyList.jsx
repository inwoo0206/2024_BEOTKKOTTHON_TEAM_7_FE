import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/customAxios";
import { useQuery } from "@tanstack/react-query";

const PostListBlock = styled.div`
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  width: 100%;
  padding-top: 20px; /* 상단 여백 */
  margin-bottom: 20px;
  font-size: 14px;
  padding: 0;
  flex-direction: column;
`;

const PostItemBlock = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 26px;
  & + & {
    border-top: 1px solid #d9d9d9;
  }
  h2 {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  p {
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; // 포스트 제목 위에 약간의 여백을 줍니다.
`;

const ProfilePic = styled.img`
  width: 32px; // 프로필 사진의 크기를 지정합니다.
  height: 32px; // 프로필 사진의 크기를 지정합니다.
  border-radius: 50%; // 원형으로 프로필 사진을 표시합니다.
  margin-right: 1rem; // 이름과의 간격을 지정합니다.
`;

const UserName = styled.span`
  color: #000;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TagList = styled.div`
  display: flex; // 태그들을 가로로 나열합니다.
  flex-wrap: wrap; // 태그들이 넘치면 다음 줄로 넘어갑니다.
  margin-top: 1rem; // 본문과 태그 사이의 간격을 지정합니다.
`;
const Tag = styled.div`
  min-width: 50px;
  border-radius: 8px;
  height: 19px;
  flex-shrink: 0;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: black;
`;

/*
const DateInfo = styled.span`
  color: #6e6e6e;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 52px;
`;
*/

const MembersProfiles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ProfileImage = styled.img`
  width: 23px; // 원하는 크기로 조절
  height: 23px;
  border-radius: 50%;
  margin-right: 0.5rem; // 프로필 이미지 사이의 간격 조절

  &:last-child {
    margin-right: 0;
  }
`;

const MoreMembers = styled(AddIcon)`
  font-size: 16px;
  width: 16px;
  height: 16px;
  color: black;
`;

const PostStats = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 9px;
  color: #666;
`;

const StatsItem = styled.span`
  margin-left: 5px; // 아이템 사이의 간격 조절
  margin-right: 10px; // 아이템 사이의 간격 조절
  display: flex;
  align-items: center;
`;

const IsCompletedBlock = styled.div`
  position: absolute;
  padding: 9px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 15rem;

  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;

  flex-shrink: 0;
  border-radius: 8px;
  background: #666666;
`;

const PostItem = ({
  title,
  contents,
  writer,
  recruitNum,
  subject,
  frequency,
  nowNum,
  users,
  heartNum,
  commentNum,
  completed,
  onClick,
}) => {
  const displayMembers = users.slice(0, 5); // 최대 5명까지 프로필 사진을 표시
  return (
    <PostItemBlock
      onClick={onClick}
      style={{
        backgroundColor: completed ? "#aaaaaa" : "none",
        color: completed ? "#aaaaaa" : "none",
      }}
    >
      {completed && <IsCompletedBlock>모집완료</IsCompletedBlock>}
      <UserInfo>
        <ProfilePic alt="profile" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <UserName>{writer}</UserName>
        </div>
      </UserInfo>
      <h2>{title}</h2>
      <p>{contents}</p>
      <TagList>
        <Tag
          style={{
            background: completed ? "#CACACA" : "#efefef",
          }}
        >
          {recruitNum} 명
        </Tag>
        <Tag
          style={{
            background: completed ? "#CACACA" : "#efefef",
          }}
        >
          {subject}
        </Tag>
        <Tag
          style={{
            background: completed ? "#CACACA" : "#efefef",
          }}
        >
          {frequency}
        </Tag>
      </TagList>
      <MembersProfiles>
        {displayMembers.map((user) => (
          <ProfileImage key={user.id} src={user.picture} alt="profile" />
        ))}
        {nowNum < 5 ? <MoreMembers /> : null}
      </MembersProfiles>
      <PostStats>
        <FavoriteIcon
          sx={{
            color: "#929292",
            width: "12px",
            height: "12px",
          }}
        />
        <StatsItem>{heartNum}</StatsItem>
        <ChatBubbleOutlineRoundedIcon
          sx={{
            color: "#929292",
            width: "12px",
            height: "12px",
          }}
        />
        <StatsItem>{commentNum}</StatsItem>
      </PostStats>
    </PostItemBlock>
  );
};

const FindStudyList = () => {
  const navigate = useNavigate();

  // 콜백 함수
  const handlePostClick = (postId) => {
    navigate(`/find-study/postDetail/${postId}`);
  };

  const listStudyPosts = async () => {
    try {
      const data = await api.get("/study");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const useStudy = () => {
    const { data: posts } = useQuery({
      queryKey: ["posts"],
      queryFn: listStudyPosts,
    });
    return posts;
  };

  const posts = useStudy();

  return (
    <>
      <PostListBlock>
        {posts &&
          posts.data.map((post) => (
            <PostItem
              key={post.id}
              onClick={() => handlePostClick(post.id)} // onClick 이벤트 추가
              title={post.title}
              contents={post.contents}
              picture={post.picture}
              writer={post.writer}
              recruitNum={post.recruitNum}
              subject={post.subject}
              frequency={post.frequency}
              users={post.users}
              heartNum={post.heartNum}
              commentNum={post.commentNum}
              completed={post.completed}
            />
          ))}
      </PostListBlock>
    </>
  );
};

export default FindStudyList;
