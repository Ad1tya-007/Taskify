import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import routes from './pages/routes';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="min-h-screen overflow-hidden w-full fixed">
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
        <Provider store={store}>
          <App />
          <ReactQueryDevtools position="bottom-right" />
        </Provider>
      </QueryClientProvider>
    </Router>
  );
};

export default wrappedApp;
