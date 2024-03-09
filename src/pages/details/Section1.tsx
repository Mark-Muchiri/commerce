import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Section1() {
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

					{/* Rating and reviews section */}
					<div className='pt-6 flex justify-start items-center gap-5'>
						<div className=''>
							<p className='text-xl font-normal text-neutral-800 whitespace-nowrap'>
								Rating Stars
							</p>
						</div>
						<div className=''>
							<p className='text-xl font-normal text-neutral-800'>0</p>
						</div>
						<div className=''>
							<p className='text-xl font-normal text-neutral-800 whitespace-nowrap'>
								Reviews
							</p>
						</div>
						<div className=''>
							<p className='text-xl font-normal text-neutral-800'>0</p>
						</div>
						<div className=''>
							<p className='text-xl font-normal text-neutral-800 whitespace-nowrap'>
								Sold
							</p>
						</div>
					</div>

					{/* In-stock and cart button*/}
					<div className='pt-6 flex justify-between items-center'>
						<div className=''>
							<div className=''>
								<p className='text-xl font-normal text-neutral-800 whitespace-nowrap'>
									In-stock
								</p>
							</div>
						</div>
						<div className=''>
							<div className=''>
								<p className='text-xl font-normal text-neutral-800'>Cart</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Section1;
