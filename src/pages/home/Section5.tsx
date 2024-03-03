function Section5() {
  return (
    <section>
      <div className="">

        {/* Header */}
        <div className="flex justify-center items-center">
          <h3 className="text-5xl font-bold text-neutral-800">Keep in touch</h3>
        </div>
        {/* Sentence */}
        <div className="flex justify-center items-center">
          <p className="pt-3 text-2xl text-neutral-800">Lorem ipsum dolor sit amet consectetur</p>
        </div>

        {/* input */}
        <div className="pt-10 flex justify-center items-center">
          <div className="relative w-[1200px] h-[300px] rounded-[50px] bg-blue-900 drop-shadow-xl">
            <img className="relative w-[1200px] h-[300px] rounded-[50px] bg-blue-900 drop-shadow-xl object-cover" src="/public/flowers.jpg" alt="" />
            <input
              type="text"
              placeholder="Your email address"
              className="absolute inset-x-0 bottom-32 w-2/3 h-1/4 mx-auto p-4 text-lg rounded-2xl border-2 border-blue-900 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Section5;