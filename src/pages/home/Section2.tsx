function Section2() {
  return (
    <>
      <section className="">

        <div className="px-36 flex justify-between">
          {/* Text */}
          <div className="">
            {/* header */}
            <div className="">
              <p className="text-center text-6xl font-semibold text-neutral-800">
                About Us
              </p>
            </div>

            {/* details */}
            <div className="">
              <p className="relative pt-7 text-2xl text-neutral-800 w-[1170px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?

              </p>
              <p className="relative pt-7 text-2xl text-neutral-800 w-[1170px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?

              </p>
            </div>
          </div>

          {/* image */}
          <div className="relative w-[250px] h-[360px] rounded-[90px] bg-slate-600 drop-shadow-xl">
            <img src="" alt="" />
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