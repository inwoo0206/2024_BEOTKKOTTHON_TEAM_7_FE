import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import router from './router/Router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={clientId}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
