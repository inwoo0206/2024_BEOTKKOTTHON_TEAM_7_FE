import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import router from './router/Router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
