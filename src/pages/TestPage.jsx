/*
import { useEffect, useState } from "react";
import { api } from "../utils/customAxios";
import { useLocation } from "react-router-dom";

const TestPage = () => {
  const location = useLocation();
  const { post } = location.state; // 전달받은 post 데이터

  const detailStudyPosts = async () => {
    const response = await api.get(`/api/study/${post.id}`);
    return response.data;
  };

  const [postData, setPostData] = useState([]); // 스터디 포스트를 저장할 상태

  useEffect(() => {
    const fetchDetailStudy = async () => {
      const postdata = await detailStudyPosts(); // 비동기로 데이터를 불러옵니다.
      setPostData(postdata); // 불러온 데이터를 상태에 저장합니다.
    };

    fetchDetailStudy();
  });

  if (!post) {
    console.log(postData.id);
    return null;
  }
  return <div>{postData.}</div>;
};

export default TestPage;
*/
