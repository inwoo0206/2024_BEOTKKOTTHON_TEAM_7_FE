import { useQuery } from '@tanstack/react-query';
import { api } from '../../utils/customAxios';

const getStudy = async (study_id) => {
  const res = await api.get(`/study/${study_id}`);
  console.log(res);
  return res;
};

export const useStudy = (studyId) => {
  const { data } = useQuery({
    queryKey: ['study', studyId],
    queryFn: () => getStudy(studyId),
  });
  return data;
};
