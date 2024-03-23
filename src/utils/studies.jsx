import { api } from "./customAxios";

/*
const getNikaData = async () => {
  const data = await fetch("https://musma.net/user/nika")
		.then((response) => response.json());
  return data;
};
*/
export const listStudyPosts = async () => {
  const response = await api.get(`/study`);
  return response.data;
};
