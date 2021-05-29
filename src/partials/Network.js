import ReactSlider from "../components/Slider";
import hugeGlobal from "../assets/HugeGlobal.svg";

const Network = () => {
  return (
    <section className="container py-16 text-center">
      <h1 className="text-4xl leading-normal tracking-wider font-semibold w-1/2 mx-auto">
        Huge Global Network of Fast VPN
      </h1>
      <p className="mt-10">
        See <span>LaslesVPN</span> everywhere to make it easier for you when you
        move locations.
      </p>
      <div className="h-screen my-auto flex  justify-center items-center">
        <img src={hugeGlobal} alt="Tagged Map" />
      </div>
      <ReactSlider />
    </section>
  );
};

export default Network;
