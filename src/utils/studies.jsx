import { api } from "./customAxios";

export const listStudyPosts = async () => {
  const response = await api.get(`/api/study`);
  return response.data;
};

/*
"title":"자격증공부하실분?",
"contents":"열심히 하실분만!",
"subject":"자격증",
"recruitNum":"5",
"frequency":"두번" 
*/

/*
export const writeStudyPost = async ({
  title,
  contents,
  subject,
  recruitNum,
  frequency,
}) => {
  await api.post("/api//user/study/write", {
    title,
    contents,
    subject,
    recruitNum,
    frequency,
  });
};
*/

// export const writeStudyPostComment = () => {};
