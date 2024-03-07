import { lazy, Suspense } from 'react';
const Section2 = lazy(() => import("./Section2"));
const Loader = lazy(() => import('../../components/Loader.tsx'));

const Section1 = lazy(() => import("./Section1"));

function Shop() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="my-32">
        <Section1 />
      </div>
      <div className="my-32 md:px-36 lg:px-36">
        <Section2 />
      </div>
    </Suspense>
  );
}

export default Shop;