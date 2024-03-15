import { lazy, Suspense } from "react";
const Section1 = lazy(() => import("./Section1.tsx"));
const Section2 = lazy(() => import("./Section2.tsx"));
const Loader = lazy(() => import("../../components/Loader.tsx"));

function Contacts() {
	return (
		<Suspense fallback={<Loader />}>
			<div className='my-24 pb-12 md:px-36 lg:px-36'>
				<Section1 />
			</div>
			<div className='my-24 pb-12 md:px-36 lg:px-36'>
				<Section2 />
			</div>
		</Suspense>
	);
}

export default Contacts;
