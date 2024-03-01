import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Section4() {

  // Assume each card might hold different content in the future
  // const cards = Array(4).fill(null);

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
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="">

                      {/* Image */}
                      <div className="relative h-[260px] w-full object-cover rounded-t-[15px] rounded-br-[15px]">
                        <img
                          className="w-full h-full  object-cover rounded-t-[15px] rounded-br-[15px]"
                          src="decor/ambitious-studio-rick-barrett-eX4m4h64cvs-unsplash.jpg"
                          alt=""
                        />
                      </div>
                      {/* Name and price */}
                      <div className="relative pt-2 text-center">
                        <h2 className='text-4xl font-semibold text-neutral-800'>Mirror</h2>
                        <p className="text-[25px] text-blue-700">10</p>
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