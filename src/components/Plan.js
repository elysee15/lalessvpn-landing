import checked from "../assets/checked.svg";
import standard from "../assets/Illustration/Standard.svg";
import propTypes from "prop-types";

const Plan = ({ title, options = [], price }) => {
  return (
    <div className="flex flex-col p-16 items-center border-2 rounded-xl border-gray-300">
      <div>
        <img src={standard} alt="checked" />
      </div>
      <h1 className="py-6 text-lg font-bold text-center">{title}</h1>
      <ul className="text-left">
        {options.map((option, i) => (
          <li key={i} className="flex py-2 text-sm items-center">
            <img src={checked} alt="checked"></img> {option}
          </li>
        ))}
      </ul>
      <div className="mt-auto text-center">
        <h2 className="text-2xl pt-10 font-bold text-gray-600">
          {
          !price ? (
            "Free"
          ) : (
            <>
              <span className="font-bold text-black"> ${price} </span> / mo
            </>
          )}
        </h2>
        <button className="border-red-600 border-2 rounded-3xl px-16 mt-5 py-2 ml-4 font-semibold text-red-500 focus:outline-none">
          Select
        </button>
      </div>
    </div>
  );
};

Plan.propTypes = {
  title: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  price: propTypes.number,
};

export default Plan;
