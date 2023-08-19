import { createBrowserRouter } from 'react-router-dom';

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
]);

export default router;
