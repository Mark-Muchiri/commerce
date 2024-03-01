function Section3() {
  // Assume each card might hold different content in the future
  const cards = Array(6).fill(null); // Example with 6 cards, fill with actual data as needed

  return (
    <section>
      {/* Header */}
      <div className="flex justify-center items-center">
        <p className="text-center text-6xl font-semibold text-neutral-800">
          Categories
        </p>
      </div>
      {/* Sentence */}
      <div className="flex justify-center items-center">
        <p className="text-center trelative pt-3 text-2xl text-neutral-800 w-[1170px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-16 pt-10 lg:mx-20">
        {cards.map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            {/* Card */}
            <div className="relative w-[380px] h-[470px] rounded-[25px] bg-slate-100 border-blue-600 border-0 shadow-[2px_8px_8px_1px_rgba(0,0,0,0.2)] -mx-[330rem]">
              {/* Image */}
              <img
                className="w-full h-[24rem] object-cover rounded-t-[25px] rounded-br-[25px]"
                src="decor/ambitious-studio-rick-barrett-eX4m4h64cvs-unsplash.jpg"
                alt=""
              />
              {/* Name and price */}
              <div className="text-center">
                <h2 className='text-4xl font-semibold text-neutral-800 pt-6'>Mirror</h2>
                <p className="text-[25px] text-blue-700">10</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
