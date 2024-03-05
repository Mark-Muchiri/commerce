import { lazy, Suspense } from 'react';
const Section1 = lazy(() => import("./Section1"));
const Section2 = lazy(() => import("./Section2"));
const Section3 = lazy(() => import("./Section3"));
const Section4 = lazy(() => import("./Section4"));
const Section5 = lazy(() => import("./Section5"));
const Loader = lazy(() => import('../../components/Loader.tsx'));


function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="pb-40 pt-16 md:px-36 lg:px-36">
          <Section1 />
        </div>
        <div className="pb-[5rem] md:px-36 lg:px-36">
          <Section2 />
        </div>
        <div className="pb-40 md:px-36 lg:px-36">
          <Section3 />
        </div>
        <div className="pb-40 md:px-36 lg:px-36">
          <Section4 />
        </div>
        <div className="pb-40 md:px-36 lg:px-36">
          <Section5 />
        </div>
      </Suspense>
    </>
  );
}

export default Home;