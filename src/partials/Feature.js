import feature from "../assets/feature.svg";
import check from "../assets/checkbox.svg";

const Feature = () => {
  return (
    <div className=" flex items-center text-left lg:py-20" id="features">
      <div className="w-1/2">
        <img src={feature} alt="feature" />
      </div>
      <div className="w-1/2 ">
        <h1 className="text-2xl font-bold">
          We Provide Many Features You Can Use
        </h1>
        <p className="py-5 text-gray-700">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="">
          <li className="flex items-center pb-4 text-gray-700">
            <img src={check} alt="checkbox" />
            <span className="pl-2 text-sm">Powerfull online protection.</span>
          </li>
          <li className="flex items-center pb-4 text-gray-700">
            <img src={check} alt="checkbox" />
            <span className="pl-2 text-sm">Internet without borders.</span>
          </li>
          <li className="flex items-center pb-4 text-gray-700">
            <img src={check} alt="checkbox" />{" "}
            <span className="pl-2 text-sm">Supercharged VPN</span>
          </li>
          <li className="flex items-center pb-4 text-gray-700">
            <img src={check} alt="checkbox" />
            <span className="pl-2 text-sm">No specific time limits.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
