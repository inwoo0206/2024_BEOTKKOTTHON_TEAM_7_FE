import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/customAxios';

const getCompletedStudy = async () => {
  const res = await api.get('/study/complete');
  console.log(res);
  return res;
};

export function useStudyComplete() {
  const { data } = useQuery({
    queryKey: ['studyCompleted'],
    queryFn: getCompletedStudy,
  });

  return data;
}
