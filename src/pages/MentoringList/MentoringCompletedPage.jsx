import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CreateIcon from '@mui/icons-material/Create';

export default function MentoringCompletedPage() {
  const { mentoringId } = useParams();
  console.log(mentoringId);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TitleWrapper>
        <StudyTitle>멘토링팀</StudyTitle>
      </TitleWrapper>
      <ContentWrapper>
        <PostBox onClick={() => navigate(`/mento-lists/${mentoringId}/post`)}>
          <CreateIcon />
        </PostBox>
        <ImgWrapper>
          <Img />
          <Img />
          <Img />
          <Img />
        </ImgWrapper>
        <StudyBoxWrapper>
          <Accordion sx={{ marginBottom: '15px', borderRadius: '4px' }}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon fontSize="small" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '14px', margin: '8px 0' }}
              >
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '12px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.sadfaasdfsd Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginBottom: '15px', borderRadius: '4px' }}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon fontSize="small" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '14px', margin: '8px 0' }}
              >
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '12px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.sadfaasdfsd Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ marginBottom: '15px', borderRadius: '4px' }}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon fontSize="small" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{ color: '#6D6D6D', fontSize: '14px', margin: '8px 0' }}
              >
                Accordion 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: '12px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.sadfaasdfsd Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
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
