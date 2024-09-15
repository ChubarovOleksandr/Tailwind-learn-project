import Header from "./Header";
import "./Counter.scss";

function App() {
  return (
    <>
      <div className="top-content bg-[url('../src/assets/header_background.png')] bg-cover min-h-[1100px]">
        <Header />
        <h1 className="font-['Dancing_Script'] text-8xl max-w-[75%] m-auto text-center pt-[100px] mb-[-50px] text-white">
          2,500 tours in over 100 destinations and 36 years of experience!
        </h1>
        <img className="m-auto" src="../src/assets/topic-moto.png" alt="motorcicle" />
      </div>
      <div className="main-content">
        <div className="services max-w-[65%] m-auto flex justify-between pb-4">
          <div className="item flex-[30%] max-w-[30%]">
            <div className="image-block relative">
              <img src="../src/assets/services-img1.png" alt="services-image-1" />
              <div
                className="price-block absolute left-[-25px] bottom-[-25px] z-10 bg-cover h-[215px] 
                              w-[215px] text-white flex flex-col bg-[url('../src/assets/Rectangle.png')]
                              justify-end p-7"
              >
                <span className="text-6xl font-bold first-letter:text-4xl">$100</span>
                <span className="uppercase">per person</span>
              </div>
            </div>
            <span className="mt-12 block font-bold text-[24px] font-mono">
              Motorcycle Expeditions
            </span>
            <p className="pt-2 text-lg font-bold text-black/50 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-8 tracking-tighter px-4 py-2 rounded-3xl font-bold text-white text-base bg-red-600 uppercase">
              Book now
            </button>
          </div>
          <div className="item flex-[30%] max-w-[30%]">
            <div className="image-block relative">
              <img src="../src/assets/services-img2.png" alt="services-image-2" />
              <div
                className="price-block absolute left-[-25px] bottom-[-25px] z-10 bg-cover h-[215px] 
                              w-[215px] text-white flex flex-col bg-[url('../src/assets/Rectangle.png')]
                              justify-end p-7"
              >
                <span className="text-6xl font-bold first-letter:text-4xl">$100</span>
                <span className="uppercase">per person</span>
              </div>
            </div>
            <span className="mt-12 block font-bold text-[24px] font-mono">
              Mountains Motorcycle Tours
            </span>
            <p className="pt-2 text-lg font-bold text-black/50 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-8 tracking-tighter px-4 py-2 rounded-3xl font-bold text-white text-base bg-red-600 uppercase">
              Book now
            </button>
          </div>
          <div className="item flex-[30%] max-w-[30%]">
            <div className="image-block relative">
              <img src="../src/assets/services-img.png" alt="services-image-3" />
              <div
                className="price-block absolute left-[-25px] bottom-[-25px] z-10 bg-cover h-[215px] 
                              w-[215px] text-white flex flex-col bg-[url('../src/assets/Rectangle.png')]
                              justify-end p-7"
              >
                <span className="text-6xl font-bold first-letter:text-4xl">$100</span>
                <span className="uppercase">per person</span>
              </div>
            </div>
            <span className="mt-12 block font-bold text-[24px] font-mono">
              Motorcycle Expeditions
            </span>
            <p className="pt-2 text-lg font-bold text-black/50 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="mt-8 tracking-tighter px-4 py-2 rounded-3xl font-bold text-white text-base bg-red-600 uppercase">
              Book now
            </button>
          </div>
        </div>
        <div className="riders flex mt-20 relative h-[700px]">
          <div className="left self-center flex-[50%] bg-red-600 text-center py-12 h-[605px]">
            <div className="container max-w-[700px] m-auto text-left">
              <div className="h2 font-bold text-6xl text-white uppercase tracking-tighter mb-10">
                We are world wide
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">10 reasons why USA.</h3>
              <p className="font-base  text-white/50 max-w-[80%] text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">10 reasons why USA.</h3>
              <p className="font-base  text-white/50 max-w-[80%] text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">10 reasons why USA.</h3>
              <p className="font-base  text-white/50 max-w-[80%] text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <img
            className="absolute top-0 left-[40%]"
            src="../src/assets/bike-from-top.png"
            alt="bike"
          />
          <div className="right flex-[50%] flex justify-center items-center h-[585px] self-end bg-black/10"></div>
        </div>
      </div>
    </>
  );
}

export default App;
