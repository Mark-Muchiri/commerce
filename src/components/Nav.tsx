import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <div
        className="bg-white w-full h-20 flex justify-between flex-row items-center md:px-36 lg:px-36"
      >
        <div className="py-0.5">
          <p className="text-4xl font-extrabold items-center">
            Logo
          </p>
        </div>
        <div className="flex flex-row">
          <div>
            <ul className="relative flex justify-end gap-14 pr-10 items-center top-4 text-xl">
              <li className="font-semibold text-amber-800">
                <Link className='font-semibold' to="/">Home</Link>
              </li>
              <li><Link to="/shop">Shop</Link></li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="relative bottom-0 w-20">
            {/* <img className="w-full -h-full" src="/nav/Cart.svg" /> */}
            <LazyLoadImage
              className="w-full -h-full"
              src={`/nav/Cart.svg`}
              alt={``}
              height={`100%`}
              width={`100%`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;