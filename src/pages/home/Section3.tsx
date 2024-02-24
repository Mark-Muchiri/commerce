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
      <div className="grid grid-cols-3 gap-y-16 pt-10">
        {cards.map((_, index) => (
          <div key={index} className="flex justify-center items-center0">
            <div className="relative w-[370px] h-[390px] rounded-[25px] bg-slate-100 border-blue-600 border-0 shadow-[2px_8px_8px_1px_rgba(0,0,0,0.2)]">
              {/* image */}
              <div className="">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
