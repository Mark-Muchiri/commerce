import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

function Section1() {
  return (
    <section className="py-32">

      <div className="inset-x-0 bottom-0 w-2/3 mx-auto flex justify-center">

        {/* Search input */}
        <div className="flex w-full max-w-[100rem] items-center rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden shadow-[10px_10px_10px_4px_rgba(0,0,0,0.2)]">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow p-7 text-2xl focus:outline-none"
          />
          <button
            className="px-10 text-2xl h-full bg-blue-100 hover:bg-blue-200 text-white font-bold transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-14" fill="none" viewBox="0 0 24 24" stroke="#808080" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Filter Button */}
        <div className="">
          <button
            className="ml-4 px-4 h-full w-24 bg-white text-blue-900 font-bold transition-colors flex items-center justify-center shadow-[10px_10px_10px_4px_rgba(0,0,0,0.2)] rounded-2xl hover:bg-blue-200"
          >
            <LazyLoadImage
              className="w-10"
              effect='blur'
              src={`/filter.png`}
              alt={``}
              height={`40px`}
              width={`40px`}
            />
          </button>
        </div>

      </div>

    </section>
  );
}

export default Section1;