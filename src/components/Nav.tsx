import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<>
			<div className='bg-white w-full h-20 flex justify-between flex-row items-center md:px-36 lg:px-36'>
				<div className='py-0.5'>
					<p className='text-4xl font-extrabold items-center'>Logo</p>
				</div>
				<div className='flex flex-row'>
					<div>
						<ul className='relative flex justify-end gap-14 pr-10 items-center top-4 text-xl'>
							<NavLink
								className={({ isActive }) =>
									isActive ? `font-semibold text-amber-800` : ``
								}
								to='/'
							>
								Home
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? `font-semibold text-amber-800` : ``
								}
								to='/shop'
							>
								Shop
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? `font-semibold text-amber-800` : ``
								}
								to='/itemDetails'
							>
								Details
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? `font-semibold text-amber-800` : ``
								}
								to='/aboutus'
							>
								About us
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? `font-semibold text-amber-800` : ``
								}
								to='/contacts'
							>
								Contact
							</NavLink>
						</ul>
					</div>
					<div className='relative bottom-0 w-20'>
						<LazyLoadImage
							className='w-12'
							src={`/shopping-cart.png`}
							alt={``}
							width={`40px`}
							height={`36px`}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;
