import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import routes from './pages/routes';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Toaster } from 'react-hot-toast';

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
  const reactLocation = new ReactLocation();
  return (
    <Router location={reactLocation} routes={routes}>
      <Toaster />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
};

export default wrappedApp;
