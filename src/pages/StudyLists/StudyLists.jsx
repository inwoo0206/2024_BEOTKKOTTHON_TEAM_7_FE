import styled from 'styled-components';
import { useEffect, useState } from 'react';
import searchIcon from '../../assets/svgs/searchIcon.svg';
import { useNavigate } from 'react-router-dom';
import { getCompletedStudy } from '../../hooks/useStudyComplete';
import { useQuery } from '@tanstack/react-query';
// import { usePrefetchMentoring } from '../../hooks/useStudyComplete';

export default function StudyLists() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const { data } = useQuery({
    queryKey: ['studyCompleted'],
    queryFn: getCompletedStudy,
  });
  const [realData, setRealData] = useState(data?.data);

  // usePrefetchMentoring();

  useEffect(() => {
    if (!data) return;

    const filteredData = data.data.filter(
      (study) =>
        study.contents.includes(search) ||
        study.subject.includes(search) ||
        study.title.includes(search) ||
        study.frequency.includes(search),
    );
    setRealData(filteredData);
  }, [search, data]);

  return (
    <>
      <ListWrapper>
        <ListBox style={{ borderBottom: '2px solid black' }}>
          <ListSpan style={{ color: 'black' }}>팀 리스트</ListSpan>
        </ListBox>

        <ListBox onClick={() => navigate('/mento-lists')}>
          <ListSpan>멘토링 리스트</ListSpan>
        </ListBox>
      </ListWrapper>
      <ContentWrapper>
        <SearchBox>
          <SearchImgBox>
            <img src={searchIcon} />
          </SearchImgBox>

          <SearchInput
            placeholder="스터디를 검색해보세요.(제목,태그)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBox>
        <TeamWrapper>
          {realData &&
            realData.map((item) => {
              const studyId = item.id;
              return (
                <StudyBox
                  key={item.id}
                  onClick={() => navigate(`/study-lists/${studyId}`)}
                >
                  <StudyBoxContent>
                    <StudyTitle>{item.title}</StudyTitle>
                    <StudyTags>
                      <Tag>{item.subject}</Tag>
                      <Tag>{`주${item.frequency}`}</Tag>
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
