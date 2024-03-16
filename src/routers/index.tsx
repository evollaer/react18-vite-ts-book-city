import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '@/pages/home';

const Router: React.FC = React.memo(() => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return element;
});

export default Router;
