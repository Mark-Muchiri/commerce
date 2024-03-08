import { lazy, Suspense } from 'react';
const Section1 = lazy(() => import("./Section1.tsx"));
const Section2 = lazy(() => import("./Section2.tsx"));
const Section3 = lazy(() => import("./Section3.tsx"))
const Loader = lazy(() => import('../../components/Loader.tsx'));


function Shop() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="mt-10">
        <Section1 />
      </div>
      <div className="my-24 md:px-36 lg:px-36">
        <Section2 />
      </div>
      <div className="my-24 md:px-36 lg:px-36">
        <Section3 />
      </div>
    </Suspense>
  );
}

export default Shop;