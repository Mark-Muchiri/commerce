import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function Home() {
  return (
    <>
      <div className="pb-40 pt-16">
        <Section1 />
      </div>
      <div className="pb-[6rem]">
        <Section2 />
      </div>
      <div className="pb-40">
        <Section3 />
      </div>
    </>
  );
}

export default Home;