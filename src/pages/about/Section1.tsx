import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Section1() {
	return (
		<section>
			<div>
				{/* Input with Button inside */}
				<div className='pt-10 flex justify-center items-center'>
					<div className='relative w-[1200px] h-[350px] rounded-[20px] overflow-hidden bg-blue-900 drop-shadow-xl'>
						<LazyLoadImage
							className='absolute inset-0 w-full h-full object-cover brightness-50'
							src={`https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
							alt={``}
							height={`1200px`}
							width={`300px`}
						/>
						<div className='absolute inset-x-0 bottom-28 w-2/3 mx-auto flex justify-center top-14'>
							<div className=''>
								{/* Header */}
								<div className='flex justify-center items-center'>
									<h3 className='text-5xl font-bold text-white'>About us</h3>
								</div>
								{/* Sentence */}
								<div className='flex justify-center items-center'>
									<p className='pt-5 w-12/12 text-[21px] leading-8 text-white'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Corporis aspernatur modi nam possimus sequi, tempore, dicta
										corrupti sed nobis autem iusto. Deleniti esse alias
										recusandae quas, nam ipsum temporibus repellendus! Lorem,
										ipsum dolor sit amet consectetur adipisicing elit. Tempore
										excepturi iure impedit, fuga enim architecto. Ab minima
										atque non! Cum voluptas recusandae eos placeat perspiciatis
										accusamus possimus alias magni odit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Section1;
