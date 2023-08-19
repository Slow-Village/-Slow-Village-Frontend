import { Global, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import globalStyles from '~styles/globalStyles';

import router from './router';

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <RouterProvider router={router} />
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
