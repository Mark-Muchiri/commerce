import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

function Footer() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-10 px-5 md:px-20 pt-10">
      {/* Logo */}
      <div>
        <div className="py-2">
          <p className="text-4xl font-extrabold items-center">
            Logo
          </p>
        </div>
      </div>

      {/* Col-2 */}
      <div className="">
        <div className="">
          <p className="text-2xl font-bold text-black">Navigation</p>
          <ul>
            <li className="text-lg text-neutral-900 mt-5">
              <p>Home</p>
            </li>
            <li className="text-lg text-neutral-900 mt-5">
              <p>About</p>
            </li>
            <li className="text-lg text-neutral-900 mt-5">
              <p>Categories</p>
            </li>
            <li className="text-lg text-neutral-900 mt-5">
              <p>Testimonial</p>
            </li>
            <li className="text-lg text-neutral-900 mt-5">
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Col-3 */}
      <div className="grid grid-rows-2">
        {/* text */}
        <div className="">
          <p className="text-2xl font-bold text-black">Contact us</p>
          <ul>
            <li className="text-lg text-neutral-900 mt-5">
              <p>For all enquiries contact @womenfashiontrend.net or head over to our Contact page and send us a message.</p>
            </li>
          </ul>
        </div>
        {/* icons */}
        <div className="flex items-center -mt-16 gap-2 -ml-4">
          <div className="relative bottom-0 px-1">
            <LazyLoadImage
              className="w-14"
              src={`/public/footerLogos/twitter.png`}
              alt={``}
              width={`56px`}
            />
          </div>
          <div className="relative bottom-0 px-1">
            <LazyLoadImage
              className="w-14"
              src={`/public/footerLogos/instagram.png`}
              alt={``}
              width={`56px`}
            />
          </div>
          <div className="relative bottom-0 px-1">
            <LazyLoadImage
              className="w-14"
              src={`/public/footerLogos/whatsapp.png`}
              alt={``}
              width={`56px`}
            />
          </div>
          <div className="relative bottom-0 px-1">
            <LazyLoadImage
              className="w-14"
              src={`/public/footerLogos/youtube.png`}
              alt={``}
              width={`56px`}
            />
          </div>
        </div>
      </div>

      {/* Col-4 */}
      <div className="">
        {/* text */}
        <div className="">
          <p className="text-2xl font-bold text-black">Install the app</p>
          <ul>
            <li className="text-lg text-neutral-900 mt-5">
              <p>Lorem ipsum dolor sit amet consectetu</p>
            </li>
          </ul>

          {/* icons */}
          <div className="flex items-center gap-7 py-6">
            <div className="relative bottom-0 px-0">
              <div className="border-2 border-blue-700 w-56 h-[4.4rem] rounded-[6px] flex justify-center items-center px-5">
                <LazyLoadImage
                  className="w-9 mr-3"
                  src={`/public/footerLogos/google-play.png`}
                  alt={``}
                  width={`36px`}
                />
                <div className="">
                  <p className='text-xs text-neutral-800'>Get it on</p>
                  <p className='font-semibold text-[15px]'>Google Play</p>
                </div>
              </div>
            </div>
            <div className="relative bottom-0 px-1">
              <div className="border-2 border-blue-700 w-56 h-[4.4rem] rounded-[6px] flex justify-center items-center px-5">
                <LazyLoadImage
                  className="w-9 mr-3"
                  src={`/public/footerLogos/apple-logo.png`}
                  alt={``}
                  width={`36px`}
                />
                <div className="">
                  <p className='text-xs text-neutral-800'>Download on the</p>
                  <p className='font-semibold text-[15px]'>App Store</p>
                </div>
              </div>
            </div>
          </div>

          <ul>
            <li className="text-lg text-neutral-900 mt-5">
              <p>Lorem ipsum dolor sit amet consectetu</p>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className="flex justify-center items-center pt-10 gap-10">
          <div className="relative bottom-0 px-1">
            <LazyLoadImage
              className="w-14"
              src={`/public/footerLogos/visa.png`}
              alt={``}
              width={`56px`}
            />
          </div>
          <div className="relative bottom-0 px-1">
            <LazyLoadImage
              className="w-14"
              src={`/public/footerLogos/mastercard.svg`}
              alt={``}
              width={`56px`}
            />
          </div>
          <div className="relative bottom-0 px-1">
            <LazyLoadImage
              className="w-14"
              src={`/public/footerLogos/paypal.png`}
              alt={``}
              width={`56px`}
            />
          </div>
        </div>

      </div>


    </section>
  );
}

export default Footer;