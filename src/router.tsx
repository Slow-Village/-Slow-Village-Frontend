import { createBrowserRouter } from 'react-router-dom';

import ConfirmOrderPage from '~pages/ConfirmOrderPage';
import MainPage from '~pages/MainPage';
import ReviewPage from '~pages/ReviewPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/reviews/:id',
    element: <ReviewPage />,
  },
  {
    path: '/confirm-order/:id',
    element: <ConfirmOrderPage />,
  },
]);

export default router;
