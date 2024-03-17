import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useIsFetching } from '@tanstack/react-query';

export default function LoadingScreen() {
  const isFetching = useIsFetching();

  const display = isFetching ? 'flex' : 'none';
  return (
    <Box
      sx={{
        display: display,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        position: 'absolute',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
