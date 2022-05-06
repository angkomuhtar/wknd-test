import Header from "components/content/main/Header";
import HelpTips from "components/content/main/HelpTips";
import Pov from "components/content/main/Pov";
import Quotes from "components/content/main/Quotes";
import Resource from "components/content/main/Resource";
import Testimonials from "components/content/main/Testimonials";
import robot3 from "image/robot3.png";

function App() {
  return (
    <>
      <Header />
      <section className="bg-black relative">
        <div className="-translate-y-28">
          <Testimonials />
          <Pov />
          <Resource />
          <HelpTips />
          <Quotes />
        </div>
        <img src={robot3} alt="" className="w-60 md:absolute bottom-0" />
      </section>
      <div className="bg-[#0B24FB]">
        <div className="container p-6 flex justify-between items-center">
          <p className="text-white">
            <span className="font-bold">wknd</span>@2020
          </p>
          <div className="border border-white px-[10px] py-0.5 rounded-full flex items-center justify-center">
            <p className="text-sm font-light text-white">alpha version 0.1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
