import './AppRoutes.css';
import { lazy, Suspense } from 'react';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
// const Vans = lazy(() => import("@pages/Vans/Vans.jsx"));
const Home = lazy(() => import('./pages/home/Home.tsx'));
const Layout = lazy(() => import('./components/Layout.tsx'));

const routes = createBrowserRouter([
  {
    // use Layout component as top-level wrapper
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <p>Error</p>
      }
    ]
  }
]);

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default AppRoutes;