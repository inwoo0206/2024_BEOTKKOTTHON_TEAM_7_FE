import styled from 'styled-components';
import searchIcon from '../../assets/svgs/searchIcon.svg';
import { useNavigate } from 'react-router-dom';

const studyLists = [
  {
    id: 1,
    title: '이건 멘토 자료방',
    likes: 40,
  },
  {
    id: 2,
    title: '리액트 테스트',
    likes: 46,
  },
  {
    id: 3,
    title: '으샤 테스트',
    likes: 16,
  },
  {
    id: 4,
    title: '한국사 테스트',
    likes: 6,
  },
  {
    id: 5,
    title: '영어 테스트',
    likes: 26,
  },
  {
    id: 6,
    title: 'ㅇㄴㅁㄹㅇㄹㅁ 테스트',
    likes: 96,
  },
];

export default function MentoLists() {
  const navigate = useNavigate();

  return (
    <>
      <ListWrapper>
        <ListBox onClick={() => navigate('/study-lists')}>
          <ListSpan>팀 리스트</ListSpan>
        </ListBox>

        <ListBox style={{ borderBottom: '2px solid black' }}>
          <ListSpan style={{ color: 'black' }}>멘토링 리스트</ListSpan>
        </ListBox>
      </ListWrapper>
      <ContentWrapper>
        <SearchBox>
          <SearchImgBox>
            <img src={searchIcon} />
          </SearchImgBox>

          <SearchInput placeholder="스터디를 검색해보세요.(작성자,태그)" />
        </SearchBox>
        <TeamWrapper>
          {studyLists.map((item) => {
            const studyId = item.id;
            return (
              <StudyBox
                key={item.id}
                onClick={() => navigate(`/study-lists/${studyId}`)}
              >
                <StudyBoxContent>
                  <StudyTitle>{item.title}</StudyTitle>
                  <StudyTags>
                    <Tag>멘토</Tag>
                    <Tag>주3회</Tag>
                    <Tag>어학</Tag>
                  </StudyTags>
                </StudyBoxContent>
              </StudyBox>
            );
          })}
        </TeamWrapper>
      </ContentWrapper>
    </>
  );
}

const ListWrapper = styled.div`
  padding-left: 22px;
  padding-right: 22px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ListBox = styled.div`
  width: 80px;
  height: 20px;
  color: #6d6d6d;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 13px;
`;

const ListSpan = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 22px;
`;
const SearchBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--light-gray-gray-300, #e1e1e8);
  background: var(--light-gray-gray-000, #fff);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
`;
const SearchImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 22px;
  border: none;
`;

const TeamWrapper = styled.div`
  margin-top: 22px;
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StudyBox = styled.div`
  cursor: pointer;
  height: 62px;
  width: 100%;
  border-radius: 4px;
  background: var(--light-white-white-light, #fff);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

const StudyBoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 22px;
`;

const StudyTitle = styled.span`
  color: #6d6d6d;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StudyTags = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Tag = styled.div`
  border-radius: 8px;
  background: #dff0e0;
  display: flex;
  width: 32px;
  height: 20px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 10px;
  margin-right: 6px;
`;
