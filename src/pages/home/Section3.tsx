function Section3() {
  // Assume each card might hold different content in the future
  const cards = [
    {
      "name": "Mirror",
      "price": "10",
      "image": "/decor/ambitious-studio-rick-barrett-eX4m4h64cvs-unsplash.jpg"
    },
    {
      "name": "Chair",
      "price": "20",
      "image": "/decor/angela-bailey-8KzgXVPTZn0-unsplash.jpg"
    },
    {
      "name": "Table",
      "price": "30",
      "image": "/decor/beazy-aX1TTOuq83M-unsplash.jpg"
    },
    {
      "name": "Lamp",
      "price": "40",
      "image": "/decor/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg"
    },
    {
      "name": "Sofa",
      "price": "50",
      "image": "/decor/kari-shea-heISypiCno4-unsplash.jpg"
    },
    {
      "name": "Bookshelf",
      "price": "60",
      "image": "/decor/micheile-henderson-MG4G0congO0-unsplash.jpg"
    }
  ]; // Example with 6 cards, fill with actual data as needed

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
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            {/* Card */}
            <div className="relative w-[380px] h-[470px] rounded-[25px] bg-slate-100 border-blue-600 border-0 shadow-[2px_8px_8px_1px_rgba(0,0,0,0.2)] -mx-[330rem]">
              {/* Image */}
              <img
                className="w-full h-[24rem] object-cover rounded-t-[25px] rounded-br-[25px]"
                src={card.image}
                alt={card.name}
              />
              {/* Name and price */}
              <div className="text-center">
                <h2 className='text-4xl font-semibold text-neutral-800 pt-6'>{card.name}</h2>
                <p className="text-[25px] text-blue-700">{card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;
