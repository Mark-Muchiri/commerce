function Section4() {
  // Assume each card might hold different content in the future
  const cards = Array(4).fill(null); // Example with 6 cards, fill with actual data as needed

  return (
    <section>
      {/* Heading */}
      <h3 className="text-5xl font-bold text-neutral-800">Trending products</h3>
      <p className="pt-3 text-2xl text-neutral-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      {/* Cards */}
      <div className="grid grid-flow-col gap-x-4 gap-y-16 pt-10 mx-14">
        {cards.map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            {/* Card */}
            <div className="relative w-[250px] h-[330px] rounded-[15px] bg-slate-100 border-blue-600 border-0 shadow-[2px_8px_8px_1px_rgba(0,0,0,0.2)] -mx-[330rem]">
              {/* Image */}
              <img
                className="w-full h-[70%] object-cover rounded-t-[15px] rounded-br-[15px]"
                src="decor/ambitious-studio-rick-barrett-eX4m4h64cvs-unsplash.jpg"
                alt=""
              />
              {/* Name and price */}
              <div className="text-center">
                <h2 className='text-4xl font-semibold text-neutral-800'>Mirror</h2>
                <p className="text-[25px] text-blue-700">10</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section4;