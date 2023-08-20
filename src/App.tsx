import { Global, ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot, useRecoilState } from 'recoil';

import globalStyles from '~styles/globalStyles';

import router from './router';

import 'swiper/css';
import '~styles/swiper.css';
import 'react-day-picker/dist/style.css';

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <RecoilRoot>
        <RouterProvider router={router} />
        <Global styles={globalStyles} />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
