import { api } from "./customAxios";

export const listStudyPosts = async () => {
  const response = await api.get(`/api/study`);
  return response.data;
};
