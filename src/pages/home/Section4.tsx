import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cardsData from '../../data/cardData.ts';

function Section4() {
  interface Card {
    name: string;
    price: string;
    image: string;
    rating: number;
  }

  // Utility function to shuffle an array
  function shuffleArray(array: Card[]) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [ array[ currentIndex ], array[ randomIndex ] ] = [ array[ randomIndex ], array[ currentIndex ] ];
    }
    return array;
  }

  // Shuffle the cards for display
  const shuffledCards = shuffleArray([ ...cardsData ]);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      );
    }
    return stars;
  };

  return (
    <section>
      {/* Heading */}
      <h3 className="text-5xl font-bold text-neutral-800">Trending products</h3>
      <p className="pt-3 text-2xl text-neutral-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      {/* Shadcn-ui carousel */}
      <div className="lg:px-0 pt-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {shuffledCards.map((card: Card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Section4;