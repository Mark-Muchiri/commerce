import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

function Home() {
  return (
    <>
      <div className="pb-40 pt-16 md:px-36 lg:px-36">
        <Section1 />
      </div>
      <div className="pb-[5rem] md:px-36 lg:px-36">
        <Section2 />
      </div>
      <div className="pb-40 md:px-36 lg:px-36">
        <Section3 />
      </div>
      <div className="pb-96 md:px-36 lg:px-36">
        <Section4 />
      </div>
    </>
  );
}

export default Home;