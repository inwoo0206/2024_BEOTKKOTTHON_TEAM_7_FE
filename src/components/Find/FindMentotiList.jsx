import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { useNavigate } from "react-router-dom";

const PostListBlock = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;

  width: 100%;

  padding-top: 20px; /* 상단 여백 */
  margin-bottom: 30px;
  font-size: 12px;
  padding: 0;
  flex-direction: column;
`;

const PostItemBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 3px solid #d9d9d9;
  }
  h2 {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px; // 포스트 제목 위에 약간의 여백을 줍니다.
`;

const ProfilePic = styled.img`
  width: 40px; // 프로필 사진의 크기를 지정합니다.
  height: 40px; // 프로필 사진의 크기를 지정합니다.
  border-radius: 50%; // 원형으로 프로필 사진을 표시합니다.
  margin-right: 1rem; // 이름과의 간격을 지정합니다.
`;

const UserName = styled.span`
  font-weight: bold;
`;

const TagList = styled.div`
  display: flex; // 태그들을 가로로 나열합니다.
  flex-wrap: wrap; // 태그들이 넘치면 다음 줄로 넘어갑니다.
  margin-top: 1rem; // 본문과 태그 사이의 간격을 지정합니다.
`;

const Tag = styled.div`
  min-width: 40px;
  border-radius: 8px;
  background: #dff0e0;
  height: 19px;
  flex-shrink: 0;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: black;
`;

const DateInfo = styled.span`
  color: #6e6e6e;
  font-family: Inter;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 52px;
`;

const PostStats = styled.div`
  display: flex;
  align-items: center;
  font-size: 9px;
  color: #666;
  margin-top: 20px;
`;

const StatsItem = styled.span`
  margin-left: 5px; // 아이템 사이의 간격 조절
  margin-right: 10px; // 아이템 사이의 간격 조절
  display: flex;
  align-items: center;
`;

const LikesIcon = styled(FavoriteBorderIcon)`
  width: 5px;
  height: 5px;
  color: #b3b3b3;
`;
const CommentsIcon = styled(ChatBubbleOutlineRoundedIcon)`
  width: 5px;
  height: 5px;
  color: #b3b3b3;
`;

const PostItem = ({
  title,
  body,
  profilePic,
  userName,
  roleTags,
  subjectTags,
  chooseDateTags,
  createdAt,
  likes,
  comments,
  onClick,
}) => {
  return (
    <PostItemBlock onClick={onClick}>
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
          <UserName>{userName}</UserName>
          <DateInfo>{createdAt}</DateInfo>
        </div>
      </UserInfo>
      <h2>{title}</h2>
      <p>{body}</p>
      <TagList>
        {roleTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        {subjectTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        {chooseDateTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagList>
      <PostStats>
        <LikesIcon />
        <StatsItem>좋아요 {likes}개</StatsItem>
        <CommentsIcon />
        <StatsItem>댓글 {comments}개</StatsItem>
      </PostStats>
    </PostItemBlock>
  );
};

const FindMentotiList = () => {
  const navigate = useNavigate();

  // 콜백 함수
  const handlePostClick = (post) => {
    navigate(`/find-mentoti/postDetail/${post.Id}`, { state: { post } }); // postDetail 페이지로 이동하면서 state에 post 데이터 전달
  };

  const posts = [
    {
      id: 1,
      title: "C언어 A+입니다.",
      body: "멘토로 열심히 가르친 지 3년째 입니다!🔥🔥🔥😼😼 현재 신입생으로 모집하고 있으니 많은 관심 부탁드려요.",
      profilePic: "/path/to/profile1.jpg",
      userName: "홍길동",
      roleTags: ["멘토"],
      subjectTags: ["전공"],
      chooseDateTags: ["주 1회"],
      createdAt: "03/13 18:28",
      likes: 288,
      comments: 387,
    },
    {
      id: 2,
      title: "컴활 1급 생초보 입니다.",
      body: "혼자 준비하려 했는데 도저히 안 될 것 같네요..! 좋은 멘티분 구해요",
      profilePic: "/path/to/profile2.jpg",
      userName: "달려야하니",
      roleTags: ["멘티"],
      subjectTags: ["자격증"],
      chooseDateTags: ["주 3회"],
      createdAt: "03/13 18:28",
      likes: 42,
      comments: 5,
    },
    {
      id: 3,
      title: "C4D로 잘다루시는 분!!",
      body: "졸업전시 전에 단기로 알려주실 분 구합니다",
      profilePic: "/path/to/profile3.jpg",
      userName: "느린법사",
      roleTags: ["멘티"],
      subjectTags: ["자격증"],
      chooseDateTags: ["주 3회"],
      likes: 8,
      comments: 5,
    },
  ];

  return (
    <>
      <PostListBlock>
        {posts.map((post) => (
          <PostItem
            key={post.id}
            {...post} // 간결하게 데이터 전달
            onClick={() => handlePostClick(post)} // onClick 이벤트 추가
            title={post.title}
            body={post.body}
            profilePic={post.profilePic}
            userName={post.userName}
            roleTags={post.roleTags}
            subjectTags={post.subjectTags}
            chooseDateTags={post.chooseDateTags}
            createdAt={post.createdAt}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </PostListBlock>
    </>
  );
};

export default FindMentotiList;
