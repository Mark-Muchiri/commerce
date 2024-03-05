import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import cardsData from '../../data/cardData.ts';

function Section3() {
  interface Card {
    name: string;
    price: string;
    image: string;
  }

  // Utility function to shuffle an array
  function shuffleArray(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ]; // ES6 destructuring swap
    }
    return array;
  }

  // Shuffle the cards and limit to 6
  const shuffledAndLimitedCards = shuffleArray([ ...cardsData ]).slice(0, 6);

  return (
    <section>
      {/* Header and Sentence as before */}

      {/* Cards */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-16 pt-10 lg:mx-20">
        {shuffledAndLimitedCards.map((card: Card, index) => (
          <div key={index} className="flex justify-center items-center">
            {/* Card */}
            <div className="relative w-[380px] h-[470px] rounded-[25px] bg-slate-100 border-blue-600 border-0 shadow-[2px_8px_8px_1px_rgba(0,0,0,0.2)]">
              {/* Image */}
              {/* <img
                className="w-full h-[24rem] object-cover rounded-t-[25px] rounded-br-[25px]"
                src={card.image}
                alt={card.name}
              /> */}
              <LazyLoadImage
                className="w-full h-[24rem] object-cover rounded-t-[25px] rounded-br-[25px]"
                effect='blur'
                src={card.image}
                alt={card.name}
                height={`384px`}
                width={`100%`}
              />
              {/* Name and price */}
              <div className="text-center -mt-10">
                <h2 className='text-4xl font-semibold text-neutral-800 pt-0'>{card.name}</h2>
                <p className="text-[25px] text-blue-700">${card.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section3;