import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Section1() {
	return (
		<section className=''>
			<div className='flex justify-between items-start gap-24'>
				<div className=''>
					{/* details */}
					<div className='w-12/12'>
						{/* header */}
						<div className='flex justify-start items-center'>
							<div className=''>
								<p className='text-5xl font-bold text-neutral-800'>
									Contact us
								</p>
								<p className='relative pt-3 text-[1.4rem] leading-8 text-neutral-800'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</p>
							</div>
						</div>

						{/* paragraph */}
						<div className=' '>
							<p className='relative pt-7 text-[1.4rem] leading-8 text-neutral-800'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
								veritatis alias odio similique facere dolores, a consectetur
								perferendis voluptatibus asperiores aut corporis pariatur quis
								nemo earum nulla quisquam voluptas nostrum?Lorem ipsum dolor
								sit, amet consectetur adipisicing elit. Non veritatis alias odio
								similique facere dolores
							</p>
						</div>
					</div>
				</div>

				{/* image */}
				<div className='px-20'>
					<LazyLoadImage
						className='relative w-[400px] h-[550px] rounded-[20px] object-cover drop-shadow-xl'
						effect='blur'
						src={`https://images.unsplash.com/photo-1599004831521-f9b1f81f5a84?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
						alt={``}
						height={`550px`}
						width={`400px`}
					/>
				</div>
			</div>
		</section>
	);
}

export default Section1;
