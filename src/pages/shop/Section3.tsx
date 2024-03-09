import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card, CardContent } from "@/components/ui/card";
import cardsData from '../../data/cardData.ts';

function Section3() {
  interface Card {
    name: string;
    price: string;
    image: string;
    rating: number;
  }

  // Utility function to shuffle an array
  function shuffleArray(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ array[ i ], array[ j ] ] = [ array[ j ], array[ i ] ]; // ES6 destructuring swap
    }
    return array;
  }

  // Shuffle the cards and limit to 8
  const shuffledAndLimitedCards = shuffleArray([ ...cardsData ]).slice(0, 8);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return [ ...Array(rating) ].map(
      (_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      )
    );
  };

  return (
    <section>
      <p className="text-neutral-800 font-bold text-4xl mb-12 pl-3">
        New arrivals
      </p>

      {/* Adjust the layout to display cards in a 4x3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {
          shuffledAndLimitedCards.map(
            (card: Card, index) => (
              <div key={index} className="p-1">
                <Card className=''>
                  <CardContent className="">
                    {/* Image */}
                    <div className="relative h-[260px] w-full object-cover rounded-t-[15px] rounded-br-[15px]">
                      <LazyLoadImage
                        className="relative w-full h-full object-cover rounded-t-[15px] rounded-br-[15px]"
                        effect='blur'
                        src={card.image}
                        alt={card.name}
                        height={`100%`}
                        width={`100%`}
                      />
                    </div>
                    {/* Name and price */}
                    <div className="relative pt-1 md:pt-1 lg:pt-2 px-4">
                      <h2 className='text-[21px] font-bold text-neutral-900'>{card.name}</h2>
                      <div className="flex justify-between items-center">
                        <div className="flex my-2">
                          {renderStars(card.rating)}
                        </div>
                        <span>
                          <LazyLoadImage
                            className="w-10 h-9"
                            src={`/shopping-cart.png`}
                            alt={``}
                            width={`40px`}
                            height={`36px`}
                          />
                        </span>
                      </div>
                      <p className="text-[20px] font-bold text-blue-800">$ {card.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          )
        }
      </div>
    </section>
  );
}

export default Section3;