import { Route } from '@tanstack/react-location';

import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./Home'));

const routes: Route[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
];

export default routes;
