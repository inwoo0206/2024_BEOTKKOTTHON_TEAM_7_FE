import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../utils/customAxios';

export default function StudyCompletedUpload() {
  const { studyId } = useParams();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append('image', data.photoURL[0]);
    formData.append(
      JSON.stringify({
        title: data.week,
        content: data.content,
      }),
    );
    const config = {
      headers: {
        // Authorization: ...,  // 토큰 넣어주기
        'Content-Type': 'multipart/form-data', // 데이터 형식 지정
      },
    };
    try {
      const res = await api.post(
        `/user/study/${studyId}/afterstudy/write`,
        formData,
        config,
      );
      console.log(res);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <StudyTitle>A팀</StudyTitle>
      </TitleWrapper>
      <ContentWrapper>
        <ContentTitle>업로드 하려는 주 차</ContentTitle>
        <WeekWrapper>
          <WeekInput type="number" {...register('week', { required: true })} />
          <span>주 차</span>
        </WeekWrapper>
        {/* <DetailWrapper>
          <DetailInput />
        </DetailWrapper> */}

        <TextField
          {...register('content', { required: true })}
          id="outlined-multiline-static"
          label="내용을 입력해 주세요"
          multiline
          rows={10}
          sx={{
            width: '100%',
            marginTop: '31px',

            fontSize: '12px',
          }}
        />
        <LinkBox>
          <LinkIcon />
          <LinkSpan
            name="photoURL"
            type="file"
            placeholder="업로드 하기"
            {...register('photoURL')}
          />
        </LinkBox>

        <BoxWrapper>
          <SubmmitButton
            style={{ backgroundColor: '#DADADA' }}
            onClick={() => navigate(-1)}
          >
            취소하기
          </SubmmitButton>
          <SubmmitButton onClick={handleSubmit(submitHandler)}>
            등록하기
          </SubmmitButton>
        </BoxWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

const WeekWrapper = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #858899;
`;

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
const ContentTitle = styled.span`
  color: #858899;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
  letter-spacing: -0.1px;
`;

const WeekInput = styled.input`
  width: 66px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #e1e1e8;
  background: #fff;
  margin-right: 6px;
  margin-top: 10px;
`;

const LinkBox = styled.div`
  height: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
  color: #39af37;

  margin-bottom: 120px;
`;
const LinkSpan = styled.input`
  font-size: 10px;
  color: #919eb6;
  font-weight: 400;
  margin-left: 4px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  font-size: 12px;
`;

const SubmmitButton = styled.button`
  height: 47px;
  width: 159px;
  border-radius: 10px;
  border: 1px solid #fff;

  background: #359c3a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
