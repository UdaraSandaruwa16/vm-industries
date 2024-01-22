import heroimg from "../assets/hero.jpg";

const Hero = () => (
  <div className="relative text-white">
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover opacity-100"
      style={{ backgroundImage: `url(${heroimg})` }}
    ></div>

    <div className="relative z-30 flex items-center p-6 col-2 md:p-12 lg:p-20 xl:px-40">
      <div className="flex-1">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Premium Oil Products
        </h1>
        <p className="m-2 my-6 text-gray-200 text-md md:text-lg lg:text-2xl md:my-8">
          Experience the pinnacle of quality with VM Industry's premium oil
          products.
        </p>
      </div>
    </div>
  </div>
);

export default Hero;
