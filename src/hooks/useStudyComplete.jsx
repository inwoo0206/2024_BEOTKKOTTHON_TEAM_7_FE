import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../utils/customAxios';

const getCompletedStudy = async () => {
  const res = await api.get('/study/complete');
  return res;
};

export function useStudyComplete(search) {
  const { data } = useQuery({
    queryKey: ['studyCompleted'],
    queryFn: getCompletedStudy,
    select: (data) => {
      return data.data.map((item) =>
        item.filter((study) => {
          return study.title.includes(search) || study.subject.includes(search);
        }),
      );
    },
  });

  return data;
}

const getCompletedMentoring = async () => {
  const res = await api.get('/');
  console.log(res);
  return res;
};

export function usePrefetchMentoring() {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ['mentoringCompleted'],
    queryFn: getCompletedMentoring,
  });
}
