import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import FindStudy from '../pages/FindStudy';
import FindMentoti from '../pages/FindMentoti';
import StudyLists from '../pages/StudyLists';
import LoginPage from '../pages/LoginPage';
import MyPageLayout from '../components/Layout/MyPageLayout';
import MyPage from '../pages/MyPage';
import StudyCompletedPage from '../pages/StudyCompletedPage';
import StudyCompletedUpload from '../pages/StudyCompletedUpload';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/find-study',
        element: <FindStudy />,
      },
      {
        path: '/find-mentoti',
        element: <FindMentoti />,
      },
      {
        path: '/study-lists',
        element: <StudyLists />,
      },
      {
        path: '/study-lists/:studyId',
        element: <StudyCompletedPage />,
      },
      {
        path: '/study-lists/:studyId/post',
        element: <StudyCompletedUpload />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/mypage',
    element: <MyPageLayout />,
    children: [
      {
        path: '',
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
