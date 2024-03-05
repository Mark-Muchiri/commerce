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
      [ array[ currentIndex ], array[ randomIndex ] ] = [
        array[ randomIndex ], array[ currentIndex ] ];
    }

    return array;
  }

  // Shuffle the cards for display
  const shuffledCards = shuffleArray([ ...cardsData ]);

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
                  <Card>
                    <CardContent className="">
                      {/* Image */}
                      <div className="relative h-[260px] w-full object-cover rounded-t-[15px] rounded-br-[15px]">
                        {/* <img
                          className="w-full h-full object-cover rounded-t-[15px] rounded-br-[15px]"
                          src={card.image}
                          alt={card.name}
                        /> */}
                        <LazyLoadImage
                          lassName="w-full h-full object-cover rounded-t-[15px] rounded-br-[15px]"
                          effect='blur'
                          src={card.image}
                          alt={card.name}
                          height={`100%`}
                          width={`100%`}
                        />
                      </div>
                      {/* Name and price */}
                      <div className="relative pt-1 md:pt-1 lg:pt-2 text-center">
                        <h2 className='text-4xl font-semibold text-neutral-800'>{card.name}</h2>
                        <p className="text-[25px] text-blue-700">${card.price}</p>
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