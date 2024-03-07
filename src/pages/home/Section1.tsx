import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

function Section1() {
  return (
    <section className="flex justify-between">

      {/* left */}
      <div className="relative top-12">
        {/* Head Text */}
        <div className="">
          <p className="text-7xl font-semibold text-amber-800">
            Lorem ipsum dolor
          </p>
        </div>
        {/* paragraph */}
        <div className="relative top-5 text-2xl text-neutral-800 w-11/12">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?</p>
        </div>
        {/* button */}
        <div className="relative mt-16 w-[11rem] h-16 rounded-lg bg-[#0d3d74] flex justify-center items-center drop-shadow-lg cursor-pointer">
          <p className="text-neutral-200 font-semibold text-[18px] text-center">Shop now</p>
        </div>
      </div>

      {/* right */}
      {/* Image */}
      <div className="relative w-[580px] h-[390px] rounded-[90px] drop-shadow-xl">
        <LazyLoadImage
          className="relative w-[580px] h-[390px] rounded-[90px]  object-cover drop-shadow-xl"
          effect='blur'
          src={`https://images.unsplash.com/photo-1616593871468-2a9452218369?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt={`Image of house decor`}
          height={`390px`}
          width={`580px`}
        />
      </div>

    </section>
  );
}

export default Section1;