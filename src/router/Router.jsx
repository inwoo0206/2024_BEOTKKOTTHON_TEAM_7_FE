<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import FindStudy from "../pages/FindStudy";
import FindMentoti from "../pages/FindMentoti";
import StudyLists from "../pages/StudyLists/StudyLists";
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
import StudyCompletedPage from "../pages/StudyCompletedPage";
import StudyCompletedUpload from "../pages/StudyCompletedUpload";
import MentoLists from "../pages/StudyLists/MentoLists";
import TeamEvalutation from "../pages/StudyLists/TeamEvaluation";
// import TestPage from "../pages/TestPage";
=======
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import FindStudy from '../pages/FindStudy';
import FindMentoti from '../pages/FindMentoti';
import StudyLists from '../pages/StudyLists/StudyLists';
import LoginPage from '../pages/LoginPage';
import MyPageLayout from '../components/Layout/MyPageLayout';
import MyPage from '../pages/MyPage';
import RecruitStudy from '../pages/RecruitStudy';
import RecruitMentor from '../pages/RecruitMentor';
import RegistMentor from '../pages/RegistMentor';
import MentorList from '../pages/MentorList';
import DetailMentotiPost from '../pages/DetailMentotiPost';
import DetailStudyPost from '../pages/DetailStudyPost';
import Header from '../components/Layout/Header';
import StudyCompletedPage from '../pages/StudyLists/StudyCompletedPage';
import StudyCompletedUpload from '../pages/StudyLists/StudyCompletedUpload';
import MentoLists from '../pages/MentoringList/MentoLists';
import TeamEvalutation from '../pages/StudyLists/TeamEvaluation';
import MentoringCompletedPage from '../pages/MentoringList/MentoringCompletedPage';
import MentoringCompletedUpload from '../pages/MentoringList/MentoringCompletedUpload';
>>>>>>> ad70333571a6c4e940a4541f686ffc2867399cec

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
        path: "/mento-lists",
        element: <MentoLists />,
      },
      {
<<<<<<< HEAD
        path: "/study-lists/:studyId",
=======
        path: '/mento-lists/:mentoringId',
        element: <MentoringCompletedPage />,
      },
      {
        path: '/mento-lists/:mentoringId/post',
        element: <MentoringCompletedUpload />,
      },
      {
        path: '/study-lists/:studyId',
>>>>>>> ad70333571a6c4e940a4541f686ffc2867399cec
        element: <StudyCompletedPage />,
      },
      {
        path: "/study-lists/:studyId/post",
        element: <StudyCompletedUpload />,
      },
      {
        path: "/study-lists/:studyId/:memberId/evaluate",
        element: <TeamEvalutation />,
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
    path: "/api/login/oauth2/code/google",
    element: <div>1</div>,
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
