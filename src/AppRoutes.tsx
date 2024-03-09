import './AppRoutes.css';
import { lazy, Suspense } from 'react';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
const Shop = lazy(() => import('./pages/shop/Shop.tsx'))
const Details = lazy(() => import('./pages/details/Details.tsx'))
const Loader = lazy(() => import('./components/Loader.tsx'));
const Layout = lazy(() => import('./components/Layout.tsx'));
const Home = lazy(() => import('./pages/home/Home.tsx'));

const routes = createBrowserRouter([
  {
    // use Layout component as top-level wrapper
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <p>Error</p>
      },
      {
        path: "/shop",
        element: <Shop />,
        errorElement: <p>Error</p>
      },
      {
        path: "/itemDetails",
        element: <Details />,
        errorElement: <p>Error</p>
      }
    ]
  }
]);

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default AppRoutes;