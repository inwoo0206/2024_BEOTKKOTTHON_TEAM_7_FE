import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import FindStudy from "../pages/FindStudy";
import FindMentoti from "../pages/FindMentoti";
import StudyLists from "../pages/StudyLists";
import LoginPage from "../pages/LoginPage";
import MyPageLayout from "../components/Layout/MyPageLayout";
import MyPage from "../pages/MyPage";
import RecruitStudy from "../pages/RecruitStudy";
import RecruitMentor from "../pages/RecruitMentor";
import RegistMentor from "../pages/RegistMentor";
import MentorList from "../pages/MentorList";
import DetailMentotiPost from "../pages/DetailMentotiPost";
import DetailStudyPost from "../pages/DetailStudyPost";
import Header from "../components/Layout/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/find-study",
        element: <FindStudy />,
      },
      {
        path: "/find-mentoti",
        element: <FindMentoti />,
      },
      {
        path: "/find-mentoti/list",
        element: <MentorList />,
      },
      {
        path: "/study-lists",
        element: <StudyLists />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/mypage",
    element: <MyPageLayout />,
    children: [
      {
        path: "",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/find-study/regist-study",
        element: <RecruitStudy />,
      },
      {
        path: "/find-study/postDetail/:postId",
        element: <DetailStudyPost />,
      },
      {
        path: "/find-mentoti/register",
        element: <RegistMentor />,
      },
      {
        path: "/find-mentoti/create",
        element: <RecruitMentor />,
      },
      {
        path: "/find-mentoti/postDetail/:postId",
        element: <DetailMentotiPost />,
      },
    ],
  },
]);

export default router;
