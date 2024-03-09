import { lazy, Suspense } from 'react';
const Section1 = lazy(() => import("./Section1.tsx"));
const Loader = lazy(() => import('../../components/Loader.tsx'));

function Details() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="my-24">
        <Section1 />
      </div>
    </Suspense>
  );
}

export default Details;