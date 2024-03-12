import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Section1() {
	const rating = 4; // Example rating
	const reviewsCount = 20; // Example reviews count
	const soldCount = 150; // Example sold count
	const inStock = true; // Example in-stock status
	const [quantity, setQuantity] = useState(0);

	// Function to render star ratings
	const renderStars = (rating: number) => {
		return [...Array(5)].map((_, i) => (
			<svg
				key={i}
				className={`h-6 w-6 ${
					i < rating ? "text-yellow-500" : "text-gray-300"
				}`}
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				{i < rating ? (
					// Filled star for rating
					<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
				) : (
					// Outlined star for the rest
					<path
						d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
					/>
				)}
			</svg>
		));
	};

	const handleIncrement = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
	};

	return (
		<section className='flex justify-center items-center'>
			<div className='flex justify-between items-center gap-24'>
				{/* image */}
				<div className='relative flex justify-center items-center px-12 w-[580px] h-[350px] rounded-[20px] drop-shadow-xl'>
					<LazyLoadImage
						className='relative w-[490px] h-[350px] rounded-[20px]  object-cover drop-shadow-xl'
						effect='blur'
						src={`https://images.unsplash.com/photo-1616593871468-2a9452218369?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
						alt={`Image of house decor`}
						height={`390px`}
						width={`580px`}
					/>
				</div>

				{/* Product details */}
				<div className=''>
					{/* Heading */}
					<p className='text-5xl font-bold text-neutral-800'>Product details</p>
					{/* Product details */}
					<p className='pt-6 text-2xl font-normal text-neutral-800'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
						debitis adipisci asperiores eveniet iste. Rem, itaque officia dolor
						ullam voluptates enim cumque voluptatem debitis et nemo recusandae
						delectus, nulla nihil? Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Accusamus voluptatem eos esse recusandae aut. Qui
						itaque tenetur quis dolore! Ad, perspiciatis? Molestias dolor earum
						alias similique mollitia odio animi repellat!
					</p>

					{/* Rating, reviews, and sold section */}
					<div className='pt-6 flex justify-start items-center gap-10'>
						<div className='flex items-center gap-1'>{renderStars(rating)}</div>
						<div className='flex items-center gap-1'>
							{/* Reviews Icon */}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-blue-900'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M7 8h10M7 12h4m1-10h-6a2 2 0 00-2 2v12l4-2 4 2V4a2 2 0 00-2-2z'
								/>
							</svg>
							<p className='text-xl font-normal text-neutral-800'>
								{reviewsCount}
							</p>
						</div>
						<div className='flex items-center gap-1'>
							{/* Sold Icon (Shopping Cart) */}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-blue-900'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 3h2l.4 2m4.6 2h10l1.34-2.68a1 1 0 00-.2-1.15l-2.12-2.12a1 1 0 00-1.41 0L10.8 4.26a1 1 0 01-.8.4H6.24L5.16 2H3m16.22 6H6.89l-.8 4H17m-.38 4H7l-2 2m13-2a2 2 0 100 4 2 2 0 000-4zm-12 0a2 2 0 100 4 2 2 0 000-4z'
								/>
							</svg>
							<p className='text-xl font-normal text-neutral-800'>
								{soldCount}
							</p>
						</div>
					</div>

					{/* In-stock and cart button*/}
					<div className='pt-6 flex justify-between items-center'>
						<div className='flex items-start flex-col'>
							{/* In-stock / Out of stock */}
							<div className='flex items-center gap-2'>
								{inStock ? (
									<>
										{/* Green tick for in-stock */}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 text-green-500'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth='2'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M5 13l4 4L19 7'
											/>
										</svg>
										<p className='text-xl font-normal text-green-500 whitespace-nowrap'>
											In-stock
										</p>
									</>
								) : (
									<p className='text-xl font-normal text-red-500 whitespace-nowrap'>
										Out of stock
									</p>
								)}
							</div>

							{/* Numeric input with "+" and "-" buttons */}
							<div className='pt-6 flex items-center gap-2'>
								<button
									onClick={handleDecrement}
									className='p-3 w-16 bg-white border-2 border-blue-700 text-black font-bold rounded-xl'
								>
									<p className='text-black text-2xl'>-</p>
								</button>
								<input
									type='number'
									value={quantity}
									readOnly
									className='p-[10px] w-20 bg-white border-2 border-blue-700 text-black text-2xl text-center font-bold rounded-xl'
									onChange={() => {}}
								/>
								<button
									onClick={handleIncrement}
									className='p-3 w-16 bg-white border-2 border-blue-700 text-black font-bold rounded-xl'
								>
									<p className='text-black text-2xl'>+</p>
								</button>
							</div>
						</div>
						<div className=''>
							<div className=''>
								<span>
									<LazyLoadImage
										className='w-14'
										src={`/shopping-cart.png`}
										alt={``}
										width={`40px`}
										height={`36px`}
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Section1;
