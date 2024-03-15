import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Section1() {
	return (
		<section className=''>
			<div className='flex justify-between items-start'>
				<div className='w-full'>
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

						{/* Form */}
						<form className='pt-3'>
							{/* Name input */}
							<div className='pt-1'>
								<p className="relative pl-2 text-[1.3rem] leading-8 text-neutral-500 pb-1">
									Name
								</p>
								<input
									type='text'
									// placeholder='Jon Doe'
									className='flex-grow px-7 py-3 w-full text-2xl border border-solid border-gray-400 rounded-xl'
								/>
							</div>
							{/* email input */}
							<div className='pt-6'>
								<p className="relative pl-2 text-[1.3rem] leading-8 text-neutral-500 pb-1">
									Email
								</p>
								<input
									type='email'
									// placeholder='Jon Doe'
									className='flex-grow px-7 py-3 w-full text-2xl border border-solid border-gray-400 rounded-xl'
								/>
							</div>
							{/* message input */}
							<div className='pt-6'>
								<p className="relative pl-2 text-[1.3rem] leading-8 text-neutral-500 pb-1">
									Message
								</p>
								<textarea
									placeholder='Type your message here'
									className='flex-grow px-7 py-3 w-full h-40 text-2xl border border-solid border-gray-400 rounded-xl resize-y overflow-auto'
								/>
							</div>
							{/* checkbox input */}
							<div className='pt-6'>
								<label className="inline-flex items-center cursor-pointer">
									<input type="checkbox" name="option1" value="Option 1" className="sr-only peer" />
									<div className="w-6 h-6 bg-white border-2 border-gray-400 peer-checked:border-blue-500 rounded-md peer-focus:ring-4 peer-focus:ring-blue-200 peer-checked:bg-blue-500"></div>
									<span className="ml-2 text-gray-600 text-lg pl-1">I accept the terms</span>
								</label>
							</div>

						</form>
					</div>
				</div>

				{/* image */}
				<div className='pl-20'>
					<LazyLoadImage
						className='relative w-[450px] h-[620px] rounded-[20px] object-cover drop-shadow-xl'
						effect='blur'
						src={`https://images.unsplash.com/photo-1599004831521-f9b1f81f5a84?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
						alt={``}
						height={`620px`}
						width={`450px`}
					/>
				</div>
			</div>
		</section>
	);
}

export default Section1;
