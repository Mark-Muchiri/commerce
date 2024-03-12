import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Section2() {
	return (
		<section className=''>
			<div className='flex justify-between items-center gap-24'>
				<div className=''>
					{/* details */}
					<div className='w-12/12'>
						{/* header */}
						<div className='flex justify-start items-center'>
							<div className=''>
								<p className='text-center text-[2.5rem] leading-8 font-semibold text-neutral-950'>
									Lorem ipsum dolor sit amet
								</p>
							</div>
						</div>

						{/* paragraph */}
						<div className='pt-2 '>
							<p className='relative pt-7 text-[1.4rem] leading-8 text-neutral-800'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
								veritatis alias odio similique facere dolores, a consectetur
								perferendis voluptatibus asperiores aut corporis pariatur quis
								nemo earum nulla quisquam voluptas nostrum?Lorem ipsum dolor
								sit, amet consectetur adipisicing elit. Non veritatis alias odio
								similique facere dolores
							</p>
							<p className='relative pt-7 text-[1.4rem] leading-8 text-neutral-800'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
								veritatis alias odio similique facere dolores, a consectetur
								perferendis voluptatibus asperiores aut corporis pariatur quis
								asperiores aut corporis pariatur quis nemo earum nulla quisquam
								voluptas nostrum?
							</p>
						</div>
					</div>
				</div>

				{/* image */}
				<div className=''>
					<LazyLoadImage
						className='relative w-[530px] h-[450px] rounded-[20px] object-cover drop-shadow-xl'
						effect='blur'
						src={`https://images.unsplash.com/photo-1464564531096-f0163633a18a?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
						alt={``}
						height={`450px`}
						width={`530px`}
					/>
				</div>
			</div>
		</section>
	);
}

export default Section2;
