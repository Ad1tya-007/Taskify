/* eslint-disable no-underscore-dangle */
/* eslint-disable no-fallthrough */
/* eslint-disable react/button-has-type */

import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import routes from './pages/routes';
import { Suspense } from 'react';

function App() {
  return (
    <div className="min-h-screen px-4 py-8">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}

const wrappedApp = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });

  const reactLocation = new ReactLocation();
  return (
    <Router location={reactLocation} routes={routes}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </Router>
  );
};

export default wrappedApp;
