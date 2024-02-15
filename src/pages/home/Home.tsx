function Home() {
  return (
    <section className="px-36 mt-20 flex justify-between">

      {/* left */}
      <div className="relative top-12">
        {/* Head Text */}
        <div className="">
          <p className="text-7xl font-semibold text-amber-800">
            Lorem ipsum dolor
          </p>
        </div>
        {/* paragraph */}
        <div className="relative top-5 text-2xl text-gray-800 w-[570px]">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non veritatis alias odio similique facere dolores, a consectetur perferendis voluptatibus asperiores aut corporis pariatur quis nemo earum nulla quisquam voluptas nostrum?</p>
        </div>
        {/* button */}
        <div className="relative mt-16 w-[12rem] h-16 rounded-lg bg-[#0d3d74] flex justify-center items-center drop-shadow-lg">
          <p className="text-gray-200 font-semibold text-[18px] text-center">Shop now</p>
        </div>
      </div>

      {/* right */}
      {/* Image */}
      <div className="relative w-[550px] h-[360px] rounded-[90px] bg-slate-600 drop-shadow-xl">
        <img src="" alt="" />
      </div>
    </section>
  );
}

export default Home;