import { Global, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import globalStyles from '~styles/globalStyles';

import router from './router';

import 'swiper/css';
import '~styles/swiper.css';

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <RouterProvider router={router} />
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
