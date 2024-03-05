import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

function Section5() {
  return (
    <section>
      <div>
        {/* Header */}
        <div className="flex justify-center items-center">
          <h3 className="text-5xl font-bold text-neutral-800">Keep in touch</h3>
        </div>
        {/* Sentence */}
        <div className="flex justify-center items-center">
          <p className="pt-3 text-2xl text-neutral-800">Lorem ipsum dolor sit amet consectetur</p>
        </div>

        {/* Input with Button inside */}
        <div className="pt-10 flex justify-center items-center">
          <div className="relative w-[1200px] h-[300px] rounded-[50px] overflow-hidden bg-blue-900 drop-shadow-xl">
            {/* <img className="absolute inset-0 w-full h-full object-cover" src="/public/flowers.jpg" alt="" /> */}
            <LazyLoadImage
              className="absolute inset-0 w-full h-full object-cover"
              src={`/public/flowers.jpg`}
              alt={``}
              height={`1200px`}
              width={`300px`}
            />
            <div className="absolute inset-x-0 bottom-28 w-2/3 mx-auto flex justify-center">
              <div className="flex w-full max-w-[100rem] items-center rounded-2xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="flex-grow p-7 text-2xl focus:outline-none pr-8" // Adjusted padding right to create space
                />
                <button
                  className="px-10 text-2xl h-full bg-blue-900 hover:bg-blue-700 text-white font-bold transition-colors"
                >
                  Subscribe
                </button>
              </div>
              L</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;