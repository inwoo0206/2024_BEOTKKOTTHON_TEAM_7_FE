import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import router from './router/Router';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
