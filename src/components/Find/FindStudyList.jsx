import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { useNavigate } from "react-router-dom";

const PostListBlock = styled.div`
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  width: 100%;
  padding-top: 20px; /* 상단 여백 */
  margin-bottom: 20px;
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
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem; // 포스트 제목 위에 약간의 여백을 줍니다.
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

const MembersProfiles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  width: 30px; // 원하는 크기로 조절
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem; // 프로필 이미지 사이의 간격 조절

  &:last-child {
    margin-right: 0;
  }
`;

const MoreMembers = styled(AddIcon)`
  font-size: 16px;
  color: black;
`;

const PostStats = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  font-size: 9px;
  color: #666;
  margin-top: 13px;
`;

const StatsItem = styled.span`
  margin-left: 5px; // 아이템 사이의 간격 조절
  margin-right: 10px; // 아이템 사이의 간격 조절
  display: flex;
  align-items: center;
`;

const LikesIcon = styled(FavoriteBorderIcon)`
  width: 9px;
  height: 9px;
  color: #b3b3b3;
`;
const CommentsIcon = styled(ChatBubbleOutlineRoundedIcon)`
  width: 9px;
  height: 9px;
  color: #b3b3b3;
`;

const PostItem = ({
  title,
  body,
  profilePic,
  userName,
  headCountTags,
  subjectTags,
  chooseDateTags,
  createdAt,
  members,
  likes,
  comments,
  onClick,
}) => {
  const displayMembers = members.slice(0, 5); // 최대 5명까지 프로필 사진을 표시
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
        {headCountTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        {subjectTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
        {chooseDateTags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagList>
      <MembersProfiles>
        {displayMembers.map((member) => (
          <ProfileImage key={member.id} src={member.profilePic} alt="profile" />
        ))}
        {members.length < 5 ? <MoreMembers /> : null}
      </MembersProfiles>
      <PostStats>
        <LikesIcon />
        <StatsItem>좋아요 {likes}개</StatsItem>
        <CommentsIcon />
        <StatsItem>댓글 {comments}개</StatsItem>
      </PostStats>
    </PostItemBlock>
  );
};

const FindStudyList = () => {
  const navigate = useNavigate();

  // 콜백 함수
  const handlePostClick = (post) => {
    navigate(`/find-study/postDetail/${post.id}`, { state: { post } }); // postDetail 페이지로 이동하면서 state에 post 데이터 전달
  };

  const posts = [
    {
      id: 1,
      title: "컴활 1급 한달 목표로 공부하실 분 구해요💕🥰",
      body: "본문1",
      profilePic: "/path/to/profile1.jpg",
      userName: "사용자1",
      headCountTags: ["5명"],
      subjectTags: ["자격증"],
      chooseDateTags: ["주 3일"],
      createdAt: "03/13 18:28",
      members: [
        { id: 2, profilePic: "/path/to/profile2.jpg" },
        { id: 3, profilePic: "/path/to/profile3.jpg" },
      ],
      likes: 8,
      comments: 5,
    },
    {
      id: 2,
      title: "해커스 토익 같이 공부하실 분 구해요!! 초보자 환영~",
      body: "본문2",
      profilePic: "/path/to/profile2.jpg",
      userName: "사용자2",
      headCountTags: ["5명"],
      subjectTags: ["어학"],
      chooseDateTags: ["주 1일"],
      createdAt: "03/13 18:28",
      members: [
        { id: 2, profilePic: "/path/to/profile2.jpg" },
        { id: 3, profilePic: "/path/to/profile3.jpg" },
      ],
      likes: 8,
      comments: 5,
    },
    {
      id: 3,
      title: "블렌더 방학 단기로 스터디 하실 분 연락주세요.",
      body: "본문3",
      profilePic: "/path/to/profile3.jpg",
      userName: "사용자3",
      headCountTags: ["5명"],
      subjectTags: ["자격증"],
      chooseDateTags: ["주 3일"],
      members: [
        { id: 2, profilePic: "/path/to/profile2.jpg" },
        { id: 3, profilePic: "/path/to/profile3.jpg" },
      ],
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
            headCountTags={post.headCountTags}
            subjectTags={post.subjectTags}
            chooseDateTags={post.chooseDateTags}
            createdAt={post.createdAt}
            members={post.members}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </PostListBlock>
    </>
  );
};

export default FindStudyList;
