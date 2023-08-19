import { createBrowserRouter } from 'react-router-dom';

import ConfirmOrderPage from '~pages/ConfirmOrderPage';
import DetailPage from '~pages/DetailPage';
import MainPage from '~pages/MainPage';
import ProfilePage from '~pages/ProfilePage';
import ReviewPage from '~pages/ReviewPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/details/:id',
      element: <DetailPage />,
    },
    {
      path: '/reviews/:id',
      element: <ReviewPage />,
    },
    {
      path: '/confirm-order/:id',
      element: <ConfirmOrderPage />,
    },
    {
      path: '/profile',
      element: <ProfilePage />,
    },
  ],
  {
    basename: '/Slow-Village-Frontend',
  }
);

export default router;
