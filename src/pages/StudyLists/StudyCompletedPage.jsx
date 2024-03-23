import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CreateIcon from '@mui/icons-material/Create';
import { useStudy } from '../../hooks/useStudy1';

export default function StudyCompletedPage() {
  const { studyId } = useParams();
  console.log(studyId);
  const navigate = useNavigate();
  const data = useStudy(studyId);
  console.log(data);
  return (
    <Wrapper>
      <TitleWrapper>
        <StudyTitle>{data && data.data.teamName}</StudyTitle>
      </TitleWrapper>
      <ContentWrapper>
        <PostBox onClick={() => navigate(`/study-lists/${studyId}/post`)}>
          <CreateIcon />
        </PostBox>
        <ImgWrapper>
          {data &&
            data.data.users.map((item) => {
              return (
                <Img
                  key={item.id}
                  src={item.picture}
                  onClick={() =>
                    navigate(`/study-lists/${studyId}/${item.id}/evaluate`, {
                      state: { name: item.name },
                    })
                  }
                />
              );
            })}
        </ImgWrapper>
        <StudyBoxWrapper>
          {data &&
            data.data.dones
              .slice()
              .sort((a, b) => a.week - b.week)
              .map((item) => {
                return (
                  <Accordion
                    sx={{
                      marginBottom: '15px',
                      borderRadius: '4px',
                      width: '100%',
                    }}
                    key={item.id}
                  >
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon fontSize="small" />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography
                        sx={{
                          color: '#6D6D6D',
                          fontSize: '14px',
                          margin: '8px 0',
                        }}
                      >
                        {`${item.week}주차 스터디`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ fontSize: '12px' }}>
                        {item.contents}
                      </Typography>
                      {item.imageUrls.length > 0 && (
                        <img
                          src={item.imageUrls[0]}
                          style={{ width: '100%' }}
                        />
                      )}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
        </StudyBoxWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  margin: 12px 27px;
  height: 46px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StudyTitle = styled.span`
  color: #191919;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid var(--light-gray-gray-300, #e1e1e8);
  padding: 22px 28px;
`;

const ImgWrapper = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 22px;
`;
const Img = styled.img`
  margin-right: 17px;
  height: 42px;
  width: 42px;
  border-radius: 50%;
`;
const StudyBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

const PostBox = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #39af37;
  color: white;
  position: absolute;
  bottom: 41px;
  right: 20px;
  z-index: 2;
`;
