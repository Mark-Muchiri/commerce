import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

function Section2() {
  return (
    <>
      <section className="">

        {/* header */}
        <div className="flex justify-center items-center">
          <div className="">
            <p className="text-center text-6xl font-semibold text-neutral-800">
              About Us
            </p>
          </div>
        </div>

        <div className="flex justify-between">

          <div className="">
            {/* details */}
            <div className="w-11/12">
              <p className="relative pt-7 text-2xl text-neutral-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?

              </p>
              <p className="relative pt-7 text-2xl text-neutral-800">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?

              </p>
            </div>
          </div>

          {/* image */}
          <div className="relative w-[300px] h-[400px] rounded-[50px]  drop-shadow-xl">
            <LazyLoadImage
              className="relative w-[300px] h-[400px] rounded-[50px] object-cover drop-shadow-xl"
              effect='blur'
              src={`https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt={``}
              height={`400px`}
              width={`300px`}
            />
          </div>

        </div>

        {/* Button */}
        <div className="px-36 mb-20 flex justify-center items-center">
          <div className="relative w-[14rem] h-16 rounded-lg bg-[#0d3d74] flex justify-center items-center drop-shadow-lg cursor-pointer">
            <p className="text-neutral-200 font-semibold text-[18px] text-center">Read more</p>
          </div>
        </div>

      </section>
    </>
  );
}

export default Section2;